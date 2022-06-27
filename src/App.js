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
        intersectionHandler={{
          onIntersect: () => {
            setNavScrolled(false);
          },
          onNotIntersect: () => {
            setNavScrolled(true);
          },
        }}
      />
    </>
  );
}

export default App;
