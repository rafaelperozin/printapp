import React, { useState, createContext } from 'react';

export const DEFAULT = 'DEFAULT';
export const ADD_TEMPLATE = 'ADD_TEMPLATE';
export const PRINT_DOCUMENT = 'PRINT_DOCUMENT';

export const initialModal = {
    display: false,
    type: DEFAULT,
    title: '',
    body: ''
};

export const ModalContext = createContext(initialModal);

export const ModalProvider = ({ children }) => {
    const [modal, setModal] = useState(initialModal);

    return (
        <ModalContext.Provider value={[modal, setModal] }>
            { children }
        </ModalContext.Provider>
    );
};