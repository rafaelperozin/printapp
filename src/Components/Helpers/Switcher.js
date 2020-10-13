import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from '../../Context/ThemeContext';

import '../../Styles/components/switcher.scss';

const Switcher = () => {
    const [theme, setTheme] = useContext(ThemeContext);

    const toggleMode = () => {
        setTheme({ mode: theme.mode === 'light' ? 'dark' : 'light' });
    };

    return (
        <div className="switcher">
            Dark mode:
            <Switch
                className="switcher__toggler"
                onChange={() => toggleMode()}
                checked={theme.mode === 'dark'} />
        </div>
    );
}

export default Switcher;