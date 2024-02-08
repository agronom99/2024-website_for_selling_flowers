import React, { useState } from 'react';
import { FaCaretDown } from "react-icons/fa";

function CatalogList() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const options = [
    { label: 'Option 1', link: '/page1' },
    { label: 'Option 2', link: '/page2' },
    { label: 'Option 3', link: '/page3' },
    { label: 'Option 4', link: '/page4' },
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option.label);
    setIsOpen(false);
    // Виконати перехід на сторінку
    console.log(`Перехід на сторінку: ${option.link}`);
    // Тут можна використовувати React Router для навігації
    // Наприклад, якщо ви використовуєте BrowserRouter:
    // history.push(option.link);
  };

  const dropdownStyle = {
    position: 'relative',
  };

  const menuStyle = {
    display: isOpen ? 'block' : 'none',
    position: 'absolute',
    top: '100%',
    right: 50,
    width: 100,
    zIndex: 1000,
  };

  return (
    <div className="dropdown mx-2 mt-1 w-20" style={dropdownStyle}>
      <button className="dropdown-toggle" onClick={toggleDropdown}>
        {selectedOption || <FaCaretDown />}
      </button>
      <ul className="dropdown-menu" style={menuStyle}>
        {options.map((option, index) => (
          <li key={index} onClick={() => handleOptionClick(option)}>
            <a href={option.link}>{option.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CatalogList;
