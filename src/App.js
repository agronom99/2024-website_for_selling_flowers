import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Language from './components/Language/Language';

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      {windowWidth <= 500 ? <Language /> : <Header />}
    </div>
  );
}

export default App;
