import './App.scss';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />

      <main>
        <section className='home-intro'>
          <h1>Intersection Observer is pretty useful</h1>
        </section>

        <div className='home-about'>
          <h2>About us</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          <div className='columns'>
            <div className='col fade-in'>
              <h3>Lorem, ipsum.</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae
                maiores fuga eos provident voluptas perferendis.
              </p>
            </div>
            <div className='col fade-in'>
              <h3>A, illo!</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus minima quo beatae eius blanditiis officiis.
              </p>
            </div>
            <div className='col fade-in'>
              <h3>Repudiandae, error?</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Laborum quasi quis doloribus quia illum laudantium.
              </p>
            </div>
          </div>
        </div>

        <div className='home-more-stuff'>
          <div className='more-stuff-grid'>
            <img
              src='https://unsplash.it/400'
              alt=''
              className='slide-in from-left'
            />
            <p className='slide-in from-right'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              fugit, quae beatae vero sit magni quaerat id ratione. Dolor optio
              unde amet omnis sapiente neque cumque consequuntur reiciendis
              deserunt. Dolorem vero exercitationem consequuntur, eligendi
              cupiditate debitis facilis quibusdam magni. Eveniet.
            </p>
          </div>
          <div className='more-stuff-grid'>
            <p className='slide-in from-left'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              fugit, quae beatae vero sit magni quaerat id ratione. Dolor optio
              unde amet omnis sapiente neque cumque consequuntur reiciendis
              deserunt. Dolorem vero exercitationem consequuntur, eligendi
              cupiditate debitis facilis quibusdam magni. Eveniet.
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              fugit, quae beatae vero sit magni quaerat id ratione. Dolor optio
              unde amet omnis sapiente neque cumque consequuntur reiciendis
              deserunt. Dolorem vero exercitationem consequuntur, eligendi
              cupiditate debitis facilis quibusdam magni. Eveniet.
            </p>
          </div>
          <div className='more-stuff-grid'>
            <p className='slide-in from-left'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              fugit, quae beatae vero sit magni quaerat id ratione. Dolor optio
              unde amet omnis sapiente neque cumque consequuntur reiciendis
              deserunt. Dolorem vero exercitationem consequuntur, eligendi
              cupiditate debitis facilis quibusdam magni. Eveniet.
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              fugit, quae beatae vero sit magni quaerat id ratione. Dolor optio
              unde amet omnis sapiente neque cumque consequuntur reiciendis
              deserunt. Dolorem vero exercitationem consequuntur, eligendi
              cupiditate debitis facilis quibusdam magni. Eveniet.
            </p>
          </div>
          <div className='more-stuff-grid'>
            <p className='slide-in from-left'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              fugit, quae beatae vero sit magni quaerat id ratione. Dolor optio
              unde amet omnis sapiente neque cumque consequuntur reiciendis
              deserunt. Dolorem vero exercitationem consequuntur, eligendi
              cupiditate debitis facilis quibusdam magni. Eveniet.
            </p>
            <img
              src='https://unsplash.it/401'
              alt=''
              className='slide-in from-right'
            />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
