import { Link } from 'react-router-dom';

import { RoomCode } from '../RoomCode';

import { RoomCardContent, ClosedRoomCard } from './styles';


type QuestionProps = {
    title: string,
    closedAt: string | undefined,
    code: string
}  

export function RoomCard({ title, closedAt, code }: QuestionProps) {
    return (
        <RoomCardContent>
            {closedAt
                ? <h3>{title}</h3>
                : (
                    <Link to={`/rooms/${code}`}>
                        <h3>{title}</h3>
                    </Link>
                )
            }

            <footer>
                <div>
                    {!closedAt 
                        ? <RoomCode code={code} page="rooms" /> 
                        : <ClosedRoomCard>Finalizada</ClosedRoomCard> 
                    }
                </div>
            </footer>
        </RoomCardContent>
    )
}