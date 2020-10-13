import React, { useContext } from 'react';

import { ModalContext, initialModal, ADD_TEMPLATE, PRINT_DOCUMENT } from '../../Context/ModalContext';

import PrintDocument from '../Documents/Print';
import NewTemplate from '../Templates/New';

import '../../Styles/components/modal.scss';

const Modal = () => {

    const [modal, setModal] = useContext(ModalContext);

    const handleModalClass = status => {
        return `modal ${(status) ? 'modal-show' : ''}`;
    }

    const closeModal = () => {
        setModal(initialModal)
    }

    const handleBody = () => {
        if (modal.type === ADD_TEMPLATE) return (<NewTemplate />);
        if (modal.type === PRINT_DOCUMENT) return (<PrintDocument />);
        return modal.body;
    }

    return (
        <div className={ handleModalClass(modal.display) }>
            <div
                className="modal__background"
                onClick={ () => closeModal() }></div>
            <div className="modal__box">
                <div className="modal__header">
                    <h1 className="modal__title">{ modal.title }</h1>
                    <button
                        className="modal__close button__secondary"
                        onClick={ () => closeModal()} >
                        X</button>
                </div>
                <div className="modal__body">{ handleBody() }</div>
            </div>
        </div>
    );
};

export default Modal;