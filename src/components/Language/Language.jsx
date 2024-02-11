import React, { useState } from 'react';
import { FaCaretDown } from "react-icons/fa";
import { useTranslation } from 'react-i18next';


function Language() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('UA');
  const languages = [
    {code:'uk', label:'UA'},
    {code:'en', label: 'EN'},
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLanguageClick = (language) => {
    setSelectedLanguage(language.label);
    i18n.changeLanguage(language.code);
    setIsOpen(false);
  };

  const dropdownStyle = {
    position: 'relative',
  };

  const menuStyle = {
    display: isOpen ? 'block' : 'none',
    position: 'absolute',
    top: '100%',
    left: -5,
    zIndex: 1000,
    backgroundColor:'#333333',
    width:50,
    paddingLeft:5,
    color:'#956D84',

    
  };

  return (
    <div className="dropdown mx-2" style={dropdownStyle}>
      <button className="dropdown-toggle flex text-[#956D84]" onClick={toggleDropdown}>
        {selectedLanguage || 'UK'} <div className='mx-2 my-auto text-white'><FaCaretDown /></div>
      </button>
      <ul className="dropdown-menu" style={menuStyle} >
      {languages.map((language) => (
                    <li key={language.code} onClick={() => handleLanguageClick(language)}>
                      {language.label}
                    </li>
        ))}
      </ul>
    </div>
  );
}

export default Language;
