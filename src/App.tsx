import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { useTranslation, Trans } from 'react-i18next';

function App() {
  const { t , i18n} = useTranslation();
  const [language, setLanguage] = useState('english')

  useEffect(()=>{
    const lng = navigator.language;
    i18n.changeLanguage(lng);
      },[])
  const handleChange = (event: any) => {
    setLanguage(event.target.value)
    i18n.changeLanguage(event.target.value)
  }
  const lng = navigator.language;
  console.log(language)
  return (
    <div className="App">
      <header className="App-header">
      <div>
        <p>{t('Browser')} {t('language')} - {language}</p>
        <label>
          {t('Choose language')} - 
          <select value={language} onChange={handleChange}>
            <option value="en">English</option>
            <option value="hi">Hindi</option>
          </select>
        </label>
      </div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("Learn-React")}
        </a>
      </header>
    </div>
  );
}

export default App;
