import React from 'react';
import AboutUsPage from './AboutUsPage';
import MoreInfoPage from './MoreInfoPage';
import SplashPage from './SplashPage';

function HomePage() {
  return (
    <main>
      <SplashPage />

      <AboutUsPage />

      <MoreInfoPage />
    </main>
  );
}

export default HomePage;
