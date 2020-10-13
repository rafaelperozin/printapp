import React, { useState, createContext } from 'react';

const initialTheme = {
    // set the default theme based on the current theme of user browser
    mode: (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light'
};

export const ThemeContext = createContext(initialTheme);

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(initialTheme);

    return (
        <ThemeContext.Provider value={[theme, setTheme] }>
            { children}
        </ThemeContext.Provider>
    );
};