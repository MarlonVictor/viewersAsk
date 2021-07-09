import toast from 'react-hot-toast';

import copyImg from '../../assets/copy.svg';

import { RoomCodeButton } from './styles';


interface RoomCodeProps {
    code: string,
    page?: string
}

export function RoomCode(props: RoomCodeProps) {
    function copyRoomCodeToClipboard() {
        navigator.clipboard.writeText(props.code)
        toast.success('Código copiado!')
    }

    return (
        <RoomCodeButton 
            onClick={copyRoomCodeToClipboard}
            className={props.page ? 'rooms-page' : 'default'}
        >
            <div>
                <img src={copyImg} alt="Copy room code" />
            </div>

            <span className="wide-screen">Sala {props.code}</span>
            <span className="small-screen">Copiar código</span>
        </RoomCodeButton>
    )
}