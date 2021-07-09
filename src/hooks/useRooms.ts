import { useEffect, useState } from "react";

import { database } from '../services/firebase';


type FirebaseRooms = Record<string, {
    authorId: string,
    title: string,
    closedAt?: string,
}>

type RoomType = {
    id: string,
    name: string,
    closedAt?: string,
}

export function useRooms() {
    const [rooms, setRooms] = useState<RoomType[]>([])

    useEffect(() => {
        const roomsRef = database.ref(`rooms/`)

        roomsRef.on('value', room => {
            const databaseRooms = room.val()
            const firebaseRooms: FirebaseRooms = databaseRooms ?? {}
            
            const parsedRooms = Object.entries(firebaseRooms).map(([ key, value ]) => {
                return {
                    id: key,
                    name: value.title,
                    closedAt: value.closedAt
                }
            })

            setRooms(parsedRooms)
        })

        return () => roomsRef.off('value')
    }, [])

    return { rooms }
}