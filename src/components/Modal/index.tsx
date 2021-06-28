import { ReactNode } from 'react';
import ReactModal from 'react-modal';

import './styles.css';


interface ModalProps {
    isOpen: boolean;
    children: ReactNode;
    closeModal(): void;
}

ReactModal.setAppElement('#root');

export function Modal({ isOpen, children, closeModal }: ModalProps) {
    return (
        <ReactModal
            isOpen={isOpen}
            onRequestClose={closeModal}
            overlayClassName="modal-overlay"
            className="modal-body"
        >
            <main>{children}</main>
        </ReactModal>
    )
}