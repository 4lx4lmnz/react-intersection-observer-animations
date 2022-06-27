import React from 'react';
import AboutUsPage from './AboutUsPage';
import MoreInfoPage from './MoreInfoPage';
import SplashPage from './SplashPage';

function HomePage({ intersectionHandler }) {
  return (
    <main>
      <SplashPage intersectionHandler={intersectionHandler} />

      <AboutUsPage />

      <MoreInfoPage />
    </main>
  );
}

export default HomePage;
