import React, { useContext } from 'react';
import { ThemeContext } from '../../Context/ThemeContext';


const MainContainer = ({ children }) => {
  const [theme] = useContext(ThemeContext);

  return (
      <div className={`app app--${theme.mode}`}>
          { children }
      </div>
  );
}

export default MainContainer;
