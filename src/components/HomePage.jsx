import React from 'react';
import AboutUsPage from './AboutUsPage';
import MoreInfoPage from './MoreInfoPage';
import SplashPage from './SplashPage';

function HomePage({ onChange }) {
  return (
    <main>
      <SplashPage onChange={onChange} />

      <AboutUsPage />

      <MoreInfoPage />
    </main>
  );
}

export default HomePage;
