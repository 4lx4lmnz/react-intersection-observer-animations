import React from 'react';
import DualSlideIn from './animations/DualSlideIn';
import SlideIn from './animations/SlideIn';

function MoreInfoPage() {
  return (
    <div className='home-more-stuff'>
      <DualSlideIn
        left={<img src='https://unsplash.it/400' alt='' />}
        right={
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis fugit,
            quae beatae vero sit magni quaerat id ratione. Dolor optio unde amet
            omnis sapiente neque cumque consequuntur reiciendis deserunt.
            Dolorem vero exercitationem consequuntur, eligendi cupiditate
            debitis facilis quibusdam magni. Eveniet.
          </p>
        }
      />
      <DualSlideIn
        left={
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis fugit,
            quae beatae vero sit magni quaerat id ratione. Dolor optio unde amet
            omnis sapiente neque cumque consequuntur reiciendis deserunt.
            Dolorem vero exercitationem consequuntur, eligendi cupiditate
            debitis facilis quibusdam magni. Eveniet.
          </p>
        }
        right={<img src='https://unsplash.it/401' alt='' />}
      />
      <DualSlideIn
        left={<img src='https://unsplash.it/400' alt='' />}
        right={
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis fugit,
            quae beatae vero sit magni quaerat id ratione. Dolor optio unde amet
            omnis sapiente neque cumque consequuntur reiciendis deserunt.
            Dolorem vero exercitationem consequuntur, eligendi cupiditate
            debitis facilis quibusdam magni. Eveniet.
          </p>
        }
      />
      <DualSlideIn
        left={<img src='https://unsplash.it/400' alt='' />}
        right={
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis fugit,
            quae beatae vero sit magni quaerat id ratione. Dolor optio unde amet
            omnis sapiente neque cumque consequuntur reiciendis deserunt.
            Dolorem vero exercitationem consequuntur, eligendi cupiditate
            debitis facilis quibusdam magni. Eveniet.
          </p>
        }
      />
      <DualSlideIn
        left={
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis fugit,
            quae beatae vero sit magni quaerat id ratione. Dolor optio unde amet
            omnis sapiente neque cumque consequuntur reiciendis deserunt.
            Dolorem vero exercitationem consequuntur, eligendi cupiditate
            debitis facilis quibusdam magni. Eveniet.
          </p>
        }
        right={<img src='https://unsplash.it/401' alt='' />}
      />
      <DualSlideIn
        left={<img src='https://unsplash.it/400' alt='' />}
        right={
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis fugit,
            quae beatae vero sit magni quaerat id ratione. Dolor optio unde amet
            omnis sapiente neque cumque consequuntur reiciendis deserunt.
            Dolorem vero exercitationem consequuntur, eligendi cupiditate
            debitis facilis quibusdam magni. Eveniet.
          </p>
        }
      />
    </div>
  );
}

export default MoreInfoPage;
