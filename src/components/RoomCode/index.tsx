import copyImg from '../../assets/copy.svg';

import { RoomCodeButton } from './styles';


interface RoomCodeProps {
    code: string
}

export function RoomCode(props: RoomCodeProps) {
    function copyRoomCodeToClipboard() {
        navigator.clipboard.writeText(props.code)
    }

    return (
        <RoomCodeButton onClick={copyRoomCodeToClipboard}>
            <div>
                <img src={copyImg} alt="Copy room code" />
            </div>

            <span className="wide-screen">Sala #{props.code}</span>
            <span className="small-screen">Copiar código</span>
        </RoomCodeButton>
    )
}