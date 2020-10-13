import React from 'react';

import { ThemeProvider } from './Context/ThemeContext';
import { TemplatesProvider } from './Context/TemplatesContext';
import { ModalProvider } from './Context/ModalContext';

import Header from './Components/Layouts/Header';
import MainContainer from './Components/Layouts/MainContainer';
import TemplatesList from './Components/Templates/List';
import Modal from './Components/Helpers/Modal';

import './Styles/app.scss';

const App = () => {

    return (
        <ThemeProvider>
            <MainContainer>
                <ModalProvider>
                
                    <Header />

                    <TemplatesProvider>

                        <main className="app__main">
                            <div className="app__container">                            
                                <TemplatesList />
                            </div>
                        </main>

                        <Modal />

                    </TemplatesProvider>
                    
                </ModalProvider>
            </MainContainer>
        </ThemeProvider>
    );
}

export default App;
