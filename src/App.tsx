
import './styles.css';
// import 'react-live-clock';
import { useState, useEffect } from 'react';

const TitleComponent = () => {
  return (
    <div className={'splash-container'} >
      <video muted loop autoPlay playsInline preload='false'>
        <source src="../assets/shine-title-video.mp4" />
      </video>
    </div>
  );
};

const ClockSection = () => {
  const [date, setDate] = useState(new Date());

  function refreshClock() {
    setDate(new Date());
  }
  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);

  const localTime = date.toLocaleTimeString();
  const rawISO = date.toISOString();
  const rawDate = rawISO.split('T')[0]; //2023-02-27
  const formatDate = rawDate.substring(4).replace(/\-/g, ".");

  return (
    <div className={'clock-container'}>
      20XX{formatDate}  {localTime}
    </div>
  );
};

const AlbumComponent = () => {
  return (

    <div className={'albums-container'}>
      <div className={'album'}>

        <img src={"../assets/cover-bleeding-CD.gif"} alt={'atxt'} className={'album-gif'} />
        <div className={'album-title'}>Shine, Rodriguez (bleeding)</div>
        <div className={'album-price'}>$$ 22.00 • ¥¥ 2200</div>
        <div className={'button-container'}>
          <button className="bn kunaki" onClick={() => { window.location.href = "https://kunaki.com/sales.asp?PID=PX00ZD9WZI&pp=1" }}>
            <img src={"../assets/button-kunaki.png"} alt="atxt" />
          </button>
          <button className="bn bandcamp" onClick={() => { }}>
            <img src={"../assets/button-bandcamp.png"} alt="atxt" />
          </button>
        </div>
      </div>

      <div className={'album'}>

        <img src={"../assets/cover-demotape.png"} alt={'atxt'} className={'album-img'} />
        <div className={'album-title'}>Shine, Rodriguez (demotape)</div>
        <div className={'button-container'}>
          <button className="bn spoti" onClick={() => { }}>
            <img src={"../assets/button-spotify.png"} alt="atxt" />
          </button>
          <button className="bn apple" onClick={() => { }}>
            <img src={"../assets/button-apple.png"} alt="atxt" />
          </button>
          <button className="bn youtube" onClick={() => { }}>
            <img src={"../assets/button-youtube.png"} alt="atxt" />
          </button>
        </div>
      </div>

    </div>
  );
};

const Copyright = () => {
  return (
    <div className={'copyright'}>
      <a></a><img src={"../assets/overwave-newlogo.png"} alt="atxt" />
      <div>℗ © 20XX OVERWAVE LIMITED. all rights reserved.</div>
    </div>
  );
};

const BookComponent = () => {
  return (
    <div className={'book-container'} >
      <img src={"../pages/0-title-full.png"} alt={'atxt'} className={'page'} />
      <img src={"../pages/1-wwumA-v2.png"} alt={'atxt'} className={'page'} />
      <img src={"../pages/1-wwumB-v2.png"} alt={'atxt'} className={'page'} />
      <img src={"../pages/2-SanctuaryA.png"} alt={'atxt'} className={'page'} />
      <img src={"../pages/2-SanctuaryB-ghoul2.png"} alt={'atxt'} className={'page'} />
      <img src={"../pages/3-ghost-og.png"} alt={'atxt'} className={'page'} />
      <img src={"../pages/3-ghost-alt.png"} alt={'atxt'} className={'page'} />
      <img src={"../pages/3-ghost-ext.png"} alt={'atxt'} className={'page'} />
      <img src={"../pages/4-mirror.png"} alt={'atxt'} className={'page'} />
      <img src={"../pages/4-reflection.png"} alt={'atxt'} className={'page'} />
      <img src={"../pages/5-track5.png"} alt={'atxt'} className={'page'} />
      <img src={"../pages/5-attraction.png"} alt={'atxt'} className={'page'} />
      <img src={"../pages/6-Dark.png"} alt={'atxt'} className={'page'} />
      <img src={"../pages/7-tomiwnxdoa-draft.png"} alt={'atxt'} className={'page'} />
      <img src={"../pages/8-sweethunny.png"} alt={'atxt'} className={'page'} />
      <img src={"../pages/9-Shine.png"} alt={'atxt'} className={'page'} />
      <img src={"../pages/10-somenewday.png"} alt={'atxt'} className={'page'} />
      <img src={"../pages/11-ascent.png"} alt={'atxt'} className={'page'} />
      <img src={"../pages/12-final.png"} alt={'atxt'} className={'page'} />


    </div>
  );
};

const App = () => {
  return (
    <>
      <TitleComponent />
      <ClockSection />
      <AlbumComponent />
      <Copyright />
      <BookComponent />
    </>
  )
};

export default App;