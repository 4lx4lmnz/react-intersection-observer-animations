import React from 'react';
import AboutUsPage from './AboutUsPage';
import SplashPage from './SplashPage';

function Main() {
  return (
    <main>
      <SplashPage />

      <AboutUsPage />

      <div className='home-more-stuff'>
        <div className='more-stuff-grid'>
          <img
            src='https://unsplash.it/400'
            alt=''
            className='slide-in from-left'
          />
          <p className='slide-in from-right'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis fugit,
            quae beatae vero sit magni quaerat id ratione. Dolor optio unde amet
            omnis sapiente neque cumque consequuntur reiciendis deserunt.
            Dolorem vero exercitationem consequuntur, eligendi cupiditate
            debitis facilis quibusdam magni. Eveniet.
          </p>
        </div>
        <div className='more-stuff-grid'>
          <p className='slide-in from-left'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis fugit,
            quae beatae vero sit magni quaerat id ratione. Dolor optio unde amet
            omnis sapiente neque cumque consequuntur reiciendis deserunt.
            Dolorem vero exercitationem consequuntur, eligendi cupiditate
            debitis facilis quibusdam magni. Eveniet.
          </p>
          <img
            src='https://unsplash.it/401'
            alt=''
            className='slide-in from-right'
          />
        </div>
        <div className='more-stuff-grid'>
          <img
            src='https://unsplash.it/400'
            alt=''
            className='slide-in from-left'
          />
          <p className='slide-in from-right'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis fugit,
            quae beatae vero sit magni quaerat id ratione. Dolor optio unde amet
            omnis sapiente neque cumque consequuntur reiciendis deserunt.
            Dolorem vero exercitationem consequuntur, eligendi cupiditate
            debitis facilis quibusdam magni. Eveniet.
          </p>
        </div>
        <div className='more-stuff-grid'>
          <p className='slide-in from-left'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis fugit,
            quae beatae vero sit magni quaerat id ratione. Dolor optio unde amet
            omnis sapiente neque cumque consequuntur reiciendis deserunt.
            Dolorem vero exercitationem consequuntur, eligendi cupiditate
            debitis facilis quibusdam magni. Eveniet.
          </p>
          <img
            src='https://unsplash.it/401'
            alt=''
            className='slide-in from-right'
          />
        </div>
        <div className='more-stuff-grid'>
          <img
            src='https://unsplash.it/400'
            alt=''
            className='slide-in from-left'
          />
          <p className='slide-in from-right'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis fugit,
            quae beatae vero sit magni quaerat id ratione. Dolor optio unde amet
            omnis sapiente neque cumque consequuntur reiciendis deserunt.
            Dolorem vero exercitationem consequuntur, eligendi cupiditate
            debitis facilis quibusdam magni. Eveniet.
          </p>
        </div>
        <div className='more-stuff-grid'>
          <p className='slide-in from-left'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis fugit,
            quae beatae vero sit magni quaerat id ratione. Dolor optio unde amet
            omnis sapiente neque cumque consequuntur reiciendis deserunt.
            Dolorem vero exercitationem consequuntur, eligendi cupiditate
            debitis facilis quibusdam magni. Eveniet.
          </p>
          <img
            src='https://unsplash.it/401'
            alt=''
            className='slide-in from-right'
          />
        </div>
      </div>
    </main>
  );
}

export default Main;
