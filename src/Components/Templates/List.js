import React, { useContext, useEffect } from 'react';
import api from '../../Services/api';

import { TemplatesContext } from '../../Context/TemplatesContext';
import { ModalContext, ADD_TEMPLATE } from '../../Context/ModalContext';

import TemplateItem from './Item';

import '../../Styles/components/template-list.scss';

const TemplatesList = () => {

    const [templates, setTemplates] = useContext(TemplatesContext);
    const [modal, setModal] = useContext(ModalContext);

    const loadTemplates = () => {
        return api.get('/templates')
            .then(response => setTemplates(response.data))
            .catch(error => console.log(error));
    }

    useEffect(() => {
        loadTemplates();
    }, []);

    const toggleModal = modalObject => {
        setModal(modalObject);
    }    

    return (
        <div className="templates">
            <div className="templates__header">
                <h1 className="templates__title">Templates</h1>
                <button
                    className="templates__button button__primary button__primary--green"
                    onClick={() => toggleModal({
                        display: true,
                        type: ADD_TEMPLATE,
                        title: 'New Template',
                        body: ''
                    })}>New</button>
            </div>
            <ul className="templates__list">
                <>
                    {templates.map(template => 
                        <TemplateItem data={template} key={template.id} />
                    )}
                </>
            </ul>
        </div>
    );
}

export default TemplatesList;