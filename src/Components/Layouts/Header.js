import React from 'react';
import Switcher from '../Helpers/Switcher';

import '../../Styles/components/header.scss';

const Header = () => {

    return (
        <header className="app__header header">
            <div className="app__container header__container">
                <h3 className="header__logo">PrintApp</h3>
                <Switcher />
            </div>
        </header>
    );
}

export default Header;