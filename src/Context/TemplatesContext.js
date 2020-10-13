import React, { useState, createContext } from 'react';

const initialTemplates = []

export const TemplatesContext = createContext(initialTemplates);

export const TemplatesProvider = ({ children }) => {
    const [templates, setTemplates] = useState(initialTemplates);

    return (
        <TemplatesContext.Provider value={[templates, setTemplates] }>
            { children}
        </TemplatesContext.Provider>
    );
};