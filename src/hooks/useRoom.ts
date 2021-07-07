import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import toast from 'react-hot-toast';

import { database } from '../services/firebase';
import { useAuth } from './useAuth';


type FirebaseQuestions = Record<string, {
    author: {
        name: string;
        avatar: string;
    };
    content: string;
    isHighlighted: boolean;
    isAnswered: boolean;
    likes: Record<string, {
        authorId: string;
    }>;
}>

type QuestionType = {
    id: string;
    author: {
        name: string;
        avatar: string;
    };
    content: string;
    isHighlighted: boolean;
    isAnswered: boolean;
    likeCount: number;
    likeId: string | undefined;
}

export function useRoom(roomId: string) {
    const { user } = useAuth()
    const history = useHistory()

    const [title, setTitle] = useState('')
    const [questions, setQuestions] = useState<QuestionType[]>([])

    useEffect(() => {
        const roomRef = database.ref(`rooms/${roomId}`)

        roomRef.get().then(room => {
            if (!room.exists()) {
                toast.error('Essa sala não existe ou foi excluída')
                return history.push('/')
            }
        })

        roomRef.on('value', room => {
            const databaseRoom = room.val()
            const firebaseQuestions: FirebaseQuestions = databaseRoom.questions ?? {}

            if (databaseRoom?.closedAt ) {
                toast.error('Essa sala foi encerrada')
                return history.push('/')
            }

            const parsedQuestions = Object.entries(firebaseQuestions).map(([ key, value ]) => {
                return {
                    id: key,
                    content: value.content,
                    author: value.author,
                    isHighlighted: value.isHighlighted,
                    isAnswered: value.isAnswered,
                    likeCount: Object.values(value.likes ?? {}).length,
                    likeId: Object.entries(value.likes ?? {}).find(([ key, like ]) => like.authorId === user?.id)?.[0]
                }
            })

            setTitle(databaseRoom.title)
            setQuestions(parsedQuestions)
        })

        return () => roomRef.off('value')
    }, [roomId, user?.id, history])

    return { title, questions }
}