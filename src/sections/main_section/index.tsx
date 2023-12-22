import styles from '../../styles/sections/main_section/index_styles.module.scss';
import { Button } from 'react-bootstrap';
import React, { useContext, useEffect, useRef, useState } from 'react';
import ProfileModal from './ProfileModal';
import CurriculumProjectsModal from './CurriculumProjectsModal';
import SelectedSectionContext from '../../app/context/SelectedSectionContext';
import DevelopmentChallengesModal from './DevelopmentChallengesModal';
import TakeHomeProjects from '../fcc_THP';
import { TfiReload } from "react-icons/tfi";
import { FaCircleInfo } from "react-icons/fa6";
import bg0 from './main_background/0.jpeg';
import bg1 from './main_background/1.jpeg';
import bg2 from './main_background/2.jpeg';
import bg3 from './main_background/3.jpeg';
import bg4 from './main_background/4.jpeg';
import { StaticImageData } from 'next/image';

export default function MainSection() {

  const AnimatedDiv = useRef<HTMLDivElement>(null);

  const [backgroundImages, setbackgroundImages] = useState<Array<StaticImageData>>([bg0, bg1, bg2, bg3, bg4]);
  const [backgroundDescriptions, setbackgroundDescriptions] = useState<Array<string>>([
    "A starry night is really beautiful! Isn't it? 🤩",
    "Coding for me is not just a job, is one of my deepest passions! 🤓",
    "I love to participate on running competitions! One of my objectives is to run a marathon 🏃‍♂️",
    "I always go to the GYM to get in shape! 🏋️",
    "Rock is the best music style, don't you agree? 🤘"
  ]);
  const [backgroundIndex, setbackgroundIndex] = useState<number>(getRandomBackgroundIndex());

  const [seeWhyBgCounter, setseeWhyBgCounter] = useState<number>(0);
  const [seeWhyBgCounterDirection, setseeWhyBgCounterDirection] = useState<number>(0.1);

  const [playSeeWhyAnimation, setplaySeeWhyAnimation] = useState<boolean>(false);

  const [showBgVideo, setshowBgVideo] = useState<boolean>(false)
  const [showProfileModal, setshowProfileModal] = useState(false);
  const [showCurriculumProjectsModal, setshowCurriculumProjectsModal] = useState(false);
  const [showDevelopmentChallengesModal, setshowDevelopmentChallengesModal] = useState(false);

  const setselectedSection = useContext(SelectedSectionContext);

  useEffect(function () {

    const seeWhyBgCounterTimeout = setTimeout(function () {

      if (seeWhyBgCounter > 100) {

        setseeWhyBgCounterDirection(-0.1);

      } else if (seeWhyBgCounter < 0) {

        setseeWhyBgCounterDirection(0.1);

      }

      setseeWhyBgCounter((oldState) => oldState + seeWhyBgCounterDirection)

    }, 100);

    return () => clearTimeout(seeWhyBgCounterTimeout);

  }, [seeWhyBgCounter]);

  useEffect(function () {

    if (window.innerWidth <= 575.98) {

      setshowBgVideo(false);

    } else {

      setshowBgVideo(true);

    }

  }, []);

  useEffect(function () {

    window.addEventListener('resize', function () {

      if (window.innerWidth <= 575.98) {

        setshowBgVideo(false);

      } else {

        setshowBgVideo(true);

      }

    })

  }, []);

  function handleClickButtons(secId: string) {

    switch (secId) {

      case '#fcc_THP': setselectedSection(<TakeHomeProjects />); break;

      default: break;

    }

    setTimeout(() => window.location.href = secId, 500);

  }

  function resetAnimation() {

    let randomNumber = backgroundIndex;

    setplaySeeWhyAnimation(false);

    AnimatedDiv.current?.classList.remove(styles.seeWhyAnimation);

    setTimeout(function () {
      AnimatedDiv.current?.classList.add(styles.seeWhyAnimation);
    }, 1);

    while (randomNumber === backgroundIndex) {
      randomNumber = getRandomBackgroundIndex();
    }

    setbackgroundIndex(randomNumber);

  }

  function getRandomBackgroundIndex() {

    return Math.round(Math.random() * (backgroundImages.length - 1));

  }

  return (

    <section id="main_sec" className='flex'>

      <div className='flex justify-center items-center flex-col h-screen w-1/3'>

        <span className='absolute top-2 left-2 z-20 text-white text-xl cursor-pointer hover:rotate-180 transition duration-500 [text-shadow:_3px_3px_20px_#575757]' onClick={() => resetAnimation()}><TfiReload /></span>

        <div className='flex gap-4 absolute top-10 left-2 z-20'>

          <FaCircleInfo className='text-white text-xl cursor-help peer [text-shadow:_3px_3px_20px_#575757]' />

          <div className='bg-white p-2 rounded-sm max-w-[25vw] scale-0 opacity-0 transition-opacity duration-500 peer-hover:scale-100 peer-hover:opacity-100'>
            {backgroundDescriptions[backgroundIndex]}
          </div>

        </div>

        <h1
          className={(playSeeWhyAnimation ? styles.changeColorToWhite : '') + ' relative z-10 text-9xl font-bold'}>
          Júlio<br />Faria
        </h1>

        <h4
          className={(playSeeWhyAnimation ? styles.changeColorToWhite : '') + ' relative z-10 text-2xl'}>
          A <span className='font-bold'>master</span> of JavaScript
        </h4>

        <div
          ref={AnimatedDiv}
          style={{ backgroundImage: `url(${backgroundImages[backgroundIndex].src})`, backgroundPosition: `${seeWhyBgCounter}% 50%`, animationPlayState: playSeeWhyAnimation ? 'running' : 'paused' }}
          className={styles.seeWhyAnimation + ` bg-top`} />

        <button
          onClick={() => setplaySeeWhyAnimation(true)}
          style={{ position: 'fixed', bottom: '25vh' }}
          className={`text-xl text-white pt-3 pb-3 pr-4 pl-4 rounded-full [text-shadow:_3px_3px_20px_#575757]`}>
          See why ⮞
        </button>

      </div>

      <div className=' flex justify-center bg-blue-500 items-cente h-screen w-2/3 p-3'>

        <button onClick={() => setshowCurriculumProjectsModal(true)}>freeCodeCamp<br />Curriculum Projects</button>

      </div>



      {/* {showBgVideo &&
        <video className={styles.bg_video} autoPlay muted loop>
          <source src="imgs/bgs/bg.mp4" type="video/mp4" />
        </video>}

      <div className={styles.intro_div}>

        <p className={styles.synthetic_tippy}>Want to know me better?<br /> <b>So click on my name!</b></p>

        <div className={styles.title}>

          <h1 onClick={() => setshowProfileModal(true)}>Júlio Faria</h1>
          <ProfileModal state={showProfileModal} setState={setshowProfileModal} />
          <h5>Engineer and Full Stack Web Developer</h5>

        </div>

        <div className={styles.projects}>

          <h5>Projects:</h5>

          <div>

            <Button onClick={() => setshowCurriculumProjectsModal(true)} variant="dark">freeCodeCamp<br /> Curriculum Projects</Button>
            <CurriculumProjectsModal state={showCurriculumProjectsModal} setState={setshowCurriculumProjectsModal} />

            <Button onClick={() => setshowDevelopmentChallengesModal(true)} variant="primary">Company Development Challenges</Button>
            <DevelopmentChallengesModal state={showDevelopmentChallengesModal} setState={setshowDevelopmentChallengesModal} />

            <Button onClick={() => handleClickButtons("#fcc_THP")} variant="success"> freeCodeCamp<br /> Take Home Projects</Button>

          </div>

        </div>

      </div> */}

    </section>

  )

}