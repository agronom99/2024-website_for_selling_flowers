import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import HeaderM from './components/Header/HeaderM';

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
      {windowWidth <= 576 ? <HeaderM /> : <Header />}
    </div>
  );
}

export default App;
