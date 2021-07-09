import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useHistory } from 'react-router-dom';

import { RoomCard } from '../../components/RoomCard';
import { Button } from '../../components/Button';
import { Loading } from '../../components/Loading';

import { useRooms } from '../../hooks/useRooms';

import logoImg from '../../assets/logo.svg';

import { RoomsContainer, LeftContent, RightContent, Card } from './styles';


export function Rooms() {
    const history = useHistory()

    const { rooms } = useRooms()
    const openRooms = rooms.filter(room => !room.closedAt)

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (rooms.length > 0) {
            setLoading(false)
        }
    }, [rooms])

    if (loading) {
        return (
            <Loading />
        )
    }

    return (
        <RoomsContainer>
            <Helmet>
                <title>Salas | ViewersAsk</title>
            </Helmet>
            <header>
                <div>
                    <Link to="/">
                        <img src={logoImg} alt="ViewerAsk" />
                    </Link>
                </div>
            </header>

            <main>
                <LeftContent>
                    <div className="title">
                        <h1>Salas: </h1>
                        <Button 
                            className="check-rooms" 
                            onClick={() => history.push('/')}
                        >
                            Crie uma sala
                        </Button>
                    </div>

                    <div className="rooms">
                        {rooms.map(room => {
                            return (
                                <RoomCard 
                                    key={room.id}
                                    title={room.name}
                                    closedAt={room.closedAt}
                                    code={room.id}
                                />
                            )
                        })}
                    </div>
                </LeftContent>

                <RightContent>
                    <div className="cards">
                        <Card className="rooms-length">
                            <h3>{rooms.length}</h3>
                            <h4>Salas</h4>
                        </Card>
                        <Card className="open-rooms">
                            <h3>{openRooms.length}</h3>
                            <h4>Abertas</h4>
                        </Card>
                        <Card className="closed-rooms">
                            <h3>{rooms.length - openRooms.length}</h3>
                            <h4>Fechadas</h4>
                        </Card>
                    </div>
                </RightContent>
            </main>
        </RoomsContainer>
    )
}