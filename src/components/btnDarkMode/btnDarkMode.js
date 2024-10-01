import { useEffect, useRef } from 'react';
import { useLocalStorage } from '../../utils/useLocalStorage';

import './style.css';
import sun from './../../img/icons/sun.svg';
import moon from './../../img/icons/moon.svg';
import detectDarkMode from '../../utils/detectDarkMode';


const BtnDarkMode = () => {

  const [darkMode, setDarkMode] = useLocalStorage('darkMode', detectDarkMode());


  const btnRef = useRef(null) 
  const btnLightMode = useRef(null)
  
  useEffect (() => {

    if (darkMode === 'dark') {
      document.body.classList.add('dark')
      btnRef.current.classList.add('dark-mode-btn--active')
    }else{
      document.body.classList.remove('dark')
      btnRef.current.classList.remove('dark-mode-btn--active')
    }

  }, [darkMode]);

  useEffect(() => {
    window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (event) => {
        const newColorScheme = event.matches ? "dark" : "light";
        setDarkMode(newColorScheme);
    });

  }, []);

  const toggleDarkMode = () => {
    setDarkMode((currenValue) => {
      return currenValue === 'light' ? 'dark' : 'light';
    });
  };

  return ( 
      <button ref={btnRef} className="dark-mode-btn" onClick={toggleDarkMode}>
          <img ref={btnLightMode} src={sun} alt="Light mode" className="dark-mode-btn__icon dark-mode-btn__icon-light" />
          <img src={moon} alt="Dark mode" className="dark-mode-btn__icon dark-mode-btn__icon-dark" />
      </button>
  );
}
 
export default BtnDarkMode;