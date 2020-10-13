import React, { useContext } from 'react';

import { ModalContext, DEFAULT, PRINT_DOCUMENT } from '../../Context/ModalContext';

const TemplateItem = ({ data }) => {

    const [modal, setModal] = useContext(ModalContext);

    const formatModified = date => {
        return (date) ? date : 'never'
    }

    const toggleModal = modalObject => {
        setModal(modalObject);
    }

    return (
        <li className="templates__item template">
            <div className="template__info">
                <h2 className="template__title">{data.title}</h2>
                <p className="template__author"><strong>Author</strong>: {data.author.name}</p>
                <p className="template__created"><strong>Created</strong>: {data.created}</p>
                <p className="template__modified"><strong>Modified</strong>: {formatModified(data.modified)}</p>
            </div>
            <div className="template__actions">
                <button
                    className="template__print button__secondary button__secondary--green"
                    onClick={() => toggleModal({
                        display: true,
                        type: PRINT_DOCUMENT,
                        title: 'Generate New Document',
                        body: data.body,
                        template_id: data.id,
                        fields: data.fields
                    })}>Print</button>
                <button
                    className="template__view button__link button__link--green"
                    onClick={() => toggleModal({
                        display: true,
                        type: DEFAULT,
                        title: 'Preview Template',
                        body: data.body
                    })}>View</button>
            </div>
        </li>
    );
}

export default TemplateItem;