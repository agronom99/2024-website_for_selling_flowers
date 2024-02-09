import React, { useState } from 'react';
import { FaCaretDown } from "react-icons/fa";


function Language() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const options = ['UK', 'EN', 'RU'];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
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
        {selectedOption || 'UK'} <div className='mx-2 my-auto text-white'><FaCaretDown /></div>
      </button>
      <ul className="dropdown-menu" style={menuStyle} >
        {options.map((option, index) => (
          <li key={index} onClick={() => handleOptionClick(option)}>
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Language;
