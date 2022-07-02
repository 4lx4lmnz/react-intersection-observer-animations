import React from 'react';
import AboutUsPage from './AboutUsPage';
import HomeIntro from './HomeIntro';
import MoreInfoPage from './MoreInfoPage';

function HomePage({ onChange }) {
  return (
    <main>
      <HomeIntro onChange={onChange} />

      <AboutUsPage />

      <MoreInfoPage />
    </main>
  );
}

export default HomePage;
