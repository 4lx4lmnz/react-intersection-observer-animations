import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';
import GlobalStyles from './components/styles/Global';

function App() {
  const [navScrolled, setNavScrolled] = useState(false);

  const theme = {
    text: navScrolled
      ? { default: '#333', inverse: '#f4f4f4' }
      : { default: '#f4f4f4', inverse: '#333' },
    background: navScrolled ? '#f4f4f4' : 'transparent',
    spacing: '1em',
  };

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />

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
    </ThemeProvider>
  );
}

export default App;
