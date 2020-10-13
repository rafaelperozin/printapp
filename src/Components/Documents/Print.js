import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { jsPDF } from 'jspdf';

import { TemplatesContext } from '../../Context/TemplatesContext';
import { ModalContext, initialModal } from '../../Context/ModalContext';
import { formatString } from '../../Services/formatString';

import '../../Styles/components/document-print.scss';

const PrintDocument = () => {

    const [templates] = useContext(TemplatesContext);
    const [modal, setModal] = useContext(ModalContext);
    const { register, handleSubmit, errors } = useForm();

    const formatBody = data => {
        
        const formLabels = Object.keys(data);
        const customLabels = formLabels.splice(1, formLabels.length);
        const templateFields = templates.filter(template => template.id === modal.template_id)[0].fields;

        const valuesAndVariables = customLabels.map(key => {
            const templateMatches = templateFields.filter(field => formatString(field.label) === key);
            return { label: data[key], variable: templateMatches[0].variable };
        });

        let newBody = modal.body;

        valuesAndVariables.map(item => {
            if (modal.body.includes(item.variable)) {
                newBody = newBody.replace(item.variable, item.label);
            }
        });

        return newBody;
    }

    const submitForm = (data) => {

        const fileName = formatString(data.title);
        const bodyToPrint = formatBody(data);

        const pdf = new jsPDF();

        pdf.text(bodyToPrint, 10, 10);
        pdf.save(`${fileName}.pdf`);

        setModal(initialModal);
    }

    const generateFieldElement = field => {

        const labelName = formatString(field.label);

        const inputElement = (field.required)
            ? (
                <input
                    type={field.type}
                    name={labelName}
                    className={`form__input ${(errors[labelName]) ? 'required' : ''}`}
                    ref={register({ required: true })} />
            )
            : (
                <input
                    type={field.type}
                    name={labelName}
                    className="form__input"
                    ref={register} />
            );

        return (
            <fieldset key={field.id} className="form__field">
                
                <label className={`form__label ${(errors[labelName]) ? 'required' : ''}`}>{field.label}: </label>
                {inputElement}
                {(errors[labelName] && field.required) &&
                    <p className="form__error">{'This field is required.'}</p>}
                
            </fieldset>
        );
    }

    const printCustomFields = () => {
        const hasCustomField = () => {
            return modal.fields.length > 0;
        }

        if (hasCustomField) return modal.fields.map(field => generateFieldElement(field));
        return;
    }

    return (
        <form className="form" onSubmit={handleSubmit(submitForm)}>
            
            <fieldset className="form__field">
                <label className={`form__label ${(errors.title) ? 'required' : ''}`}>Title: </label>
                <input
                    type="text"
                    className={`form__input ${(errors.title) ? 'required' : ''}`}
                    name="title"
                    ref={register({ required: true })} />
                { errors.title && <p className="form__error">{'This field is required.'}</p> }
            </fieldset>
            
            {printCustomFields()} 
            
            <input
                type="submit"
                className="form__submit button__primary button__primary--green"
                value="Download Document" />
            
        </form>
    );
}

export default PrintDocument;