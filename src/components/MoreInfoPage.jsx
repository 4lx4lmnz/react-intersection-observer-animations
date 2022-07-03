import React from 'react';
import DualSlideIn from './animations/DualSlideIn';

function MoreInfoPage() {
  const options = { triggerOnce: true };
  return (
    <div>
      <DualSlideIn
        options={options}
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
        options={options}
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
        options={options}
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
        options={options}
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
        options={options}
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
