import React, { useState } from 'react';
import './App.scss';
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';

function App() {
  const [navScrolled, setNavScrolled] = useState(false);

  return (
    <>
      <Navbar scrolled={navScrolled} />

      <HomePage
        onChange={(inView) => {
          if (inView) {
            setNavScrolled(false);
          } else {
            setNavScrolled(true);
          }
        }}
      />
    </>
  );
}

export default App;
