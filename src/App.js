import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';
import GlobalStyles from './components/styles/Global';

const MY_THEME = {
  text: { default: '#f4f4f4', inverse: '#333' },
  background: 'transparent',
  spacing: '1em',
};

function App() {
  const [navScrolled, setNavScrolled] = useState(false);

  return (
    <ThemeProvider theme={MY_THEME}>
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
