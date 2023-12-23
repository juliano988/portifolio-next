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
import { motion } from 'framer-motion';
import { SlowBuffer } from 'buffer';

export default function MainSection() {

  const AnimatedDiv = useRef<HTMLDivElement>(null);
  const SecretProject = useRef<HTMLButtonElement>(null);
  const constraintsRef = useRef(null);

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

  const [fisrtColumnWidth, setfisrtColumnWidth] = useState<number>(33);
  const [movingMiddleBar, setmovingMiddleBar] = useState<boolean>(false);

  const [secretProjectOffsetX, setsecretProjectOffsetX] = useState<number>(0);
  const [secretProjectOffsetY, setsecretProjectOffsetY] = useState<number>(0);

  const [projectDivBgHslHColors, setprojectDivBgHslHColors] = useState<Array<number>>([getRandomHslColorH(), getRandomHslColorH(), getRandomHslColorH()]);

  const [showBgVideo, setshowBgVideo] = useState<boolean>(false)
  const [showProfileModal, setshowProfileModal] = useState(false);
  const [showCurriculumProjectsModal, setshowCurriculumProjectsModal] = useState(false);
  const [showDevelopmentChallengesModal, setshowDevelopmentChallengesModal] = useState(false);

  const setselectedSection = useContext(SelectedSectionContext);

  // Efeito de mover a imagem do botão 'See why'
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

  // // Efeito de mover o plano de fundo da div de projetos.
  // useEffect(function () {

  //   const projectsDivBgCounterTimeout = setTimeout(function () {

  //     if (projectsDivBgCounter > 100) {

  //       setprojectsDivBgCounterDirection(-0.1);

  //     } else if (projectsDivBgCounter < 0) {

  //       setprojectsDivBgCounterDirection(0.1);

  //     }

  //     setprojectsDivBgCounter((oldState) => oldState + projectsDivBgCounterDirection)

  //   }, 10);

  //   console.log(projectsDivBgCounter)

  //   return () => clearTimeout(projectsDivBgCounterTimeout);

  // }, [projectsDivBgCounter]);

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

  // Efeito de posicionar os botões do projeto aleatoriamente ao inciar a aplicação.
  useEffect(function () {

    if (constraintsRef.current && SecretProject.current) {

      const projectButtons = Array.from((constraintsRef.current as HTMLDivElement).children);

      projectButtons.forEach(function (projectButton, i) {

        const randomMarginBottom = (Math.random() - 0.5) * window.innerHeight;
        const randomMarginLeft = (Math.random() - 0.5) * window.innerHeight;

        // No caso do projeto misterioso, a sua margem é alterada através de estados.
        if (i == 0) {

          const secretProjectButton = SecretProject.current as HTMLButtonElement;

          secretProjectButton.style.marginBottom = randomMarginBottom + 'px';
          secretProjectButton.style.marginLeft = randomMarginLeft + 'px';

          setsecretProjectOffsetX(randomMarginLeft);
          setsecretProjectOffsetY(randomMarginBottom);

        } else {

          (projectButton as HTMLElement).style.marginBottom = randomMarginBottom + 'px';
          (projectButton as HTMLElement).style.marginLeft = randomMarginLeft + 'px';

        }

      })

    }

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

  function handleMovingMiddleBar(e: React.MouseEvent<HTMLSpanElement, MouseEvent>) {

    e.preventDefault();

    const firstColumnWidth = (e.clientX / window.innerWidth) * 100;

    if (movingMiddleBar) {

      if (firstColumnWidth >= 30 && firstColumnWidth <= 70) {

        setfisrtColumnWidth(firstColumnWidth);

      }

    }

  }

  function handleSecretProject(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {

    if (SecretProject.current) {

      const button = SecretProject.current as HTMLButtonElement;

      const moveSpeed = 100;

      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const buttonLeft = button.offsetLeft;
      const buttonRight = button.offsetLeft + button.offsetWidth;
      const buttonTop = button.offsetTop;
      const buttonBottom = button.offsetTop + button.offsetHeight;

      const up = (buttonTop - button.offsetHeight / 2) <= mouseY && (buttonTop + 20) >= mouseY;
      const right = (buttonRight - button.offsetWidth / 2) <= mouseX && (buttonRight + 20) >= mouseX;
      const down = (buttonBottom - button.offsetHeight / 2) <= mouseY && (buttonBottom + 20) >= mouseY;
      const left = (buttonLeft - button.offsetWidth / 2) <= mouseX && (buttonLeft + 20) >= mouseX;

      if (up && right) {

        console.log('up-right');

        button.style.marginBottom = `${secretProjectOffsetY - moveSpeed}px`;
        button.style.marginLeft = `${secretProjectOffsetX - moveSpeed}px`;

        setsecretProjectOffsetY(secretProjectOffsetY - moveSpeed);
        setsecretProjectOffsetX(secretProjectOffsetX - moveSpeed);

      } else if (down && right) {

        console.log('down-right');

        button.style.marginBottom = `${secretProjectOffsetY + moveSpeed}px`;
        button.style.marginLeft = `${secretProjectOffsetX - moveSpeed}px`;

        setsecretProjectOffsetY(secretProjectOffsetY + moveSpeed);
        setsecretProjectOffsetX(secretProjectOffsetX - moveSpeed);

      } else if (down && left) {

        console.log('down-left');

        button.style.marginBottom = `${secretProjectOffsetY + moveSpeed}px`;
        button.style.marginLeft = `${secretProjectOffsetX + moveSpeed}px`;

        setsecretProjectOffsetY(secretProjectOffsetY + moveSpeed);
        setsecretProjectOffsetX(secretProjectOffsetX + moveSpeed);

      } else if (up && left) {

        console.log('up-left');

        button.style.marginBottom = `${secretProjectOffsetY - moveSpeed}px`;
        button.style.marginLeft = `${secretProjectOffsetX + moveSpeed}px`;

        setsecretProjectOffsetY(secretProjectOffsetY - moveSpeed);
        setsecretProjectOffsetX(secretProjectOffsetX + moveSpeed);

      } else if (up) {

        console.log('up')

        button.style.marginBottom = `${secretProjectOffsetY - moveSpeed}px`;

        setsecretProjectOffsetY(secretProjectOffsetY - moveSpeed);

      } else if (right) {

        console.log('right')

        button.style.marginLeft = `${secretProjectOffsetX - moveSpeed}px`;

        setsecretProjectOffsetX(secretProjectOffsetX - moveSpeed);

      } else if (down) {

        console.log('down')

        button.style.marginBottom = `${secretProjectOffsetY + moveSpeed}px`;

        setsecretProjectOffsetY(secretProjectOffsetY + moveSpeed);

      } else if (left) {

        console.log('left');

        button.style.marginLeft = `${secretProjectOffsetX + moveSpeed}px`;

        setsecretProjectOffsetX(secretProjectOffsetX + moveSpeed);

      }

    }

  }

  function handleChangeProjectsDivBgColors(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {

    if (constraintsRef.current) {

      if ((constraintsRef.current as HTMLDivElement).isEqualNode(e.target as HTMLElement)) {

        setprojectDivBgHslHColors([getRandomHslColorH(), getRandomHslColorH(), getRandomHslColorH()]);

      }

    }

  }

  function getRandomBackgroundIndex() {

    return Math.round(Math.random() * (backgroundImages.length - 1));

  }

  function getRandomHslColorH() {

    return Math.round(Math.random() * 360);

  }

  return (

    <section style={{ cursor: movingMiddleBar ? 'col-resize' : 'unset' }} id="main_sec" className='flex' onMouseUp={(e) => setmovingMiddleBar(false)} onMouseMove={(e) => handleMovingMiddleBar(e)}>

      <div style={{ width: `${fisrtColumnWidth}%` }} className='flex justify-center items-center flex-col h-screen'>

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
          style={{ backgroundImage: `url(${backgroundImages[backgroundIndex].src})`, backgroundPosition: `${seeWhyBgCounter}% 50%`, maxWidth: `${fisrtColumnWidth}%`, animationPlayState: playSeeWhyAnimation ? 'running' : 'paused' }}
          className={styles.seeWhyAnimation + ` bg-top`} />

        <button
          onClick={() => setplaySeeWhyAnimation(true)}
          style={{ position: 'fixed', bottom: '25vh' }}
          className={`text-xl text-white pt-3 pb-3 pr-4 pl-4 rounded-full [text-shadow:_3px_3px_20px_#575757]`}>
          See why ⮞
        </button>

      </div>

      <span className='h-screen cursor-col-resize w-1' onMouseDown={(e) => setmovingMiddleBar(true)}></span>

      <div
        style={{ width: `${100 - fisrtColumnWidth}%`, backgroundImage: `linear-gradient(${seeWhyBgCounter * 3.6}deg, hsl(${projectDivBgHslHColors[0]},100%,50%) 0%, hsl(${projectDivBgHslHColors[1]},100%,50%) 50%, hsl(${projectDivBgHslHColors[2]},100%,50%) 100%)` }}
        className={styles.moveProjectsBg + ' flex justify-center items-center items-cente h-screen bg-[length:200%_200%]'}
        onMouseDown={(e) => handleChangeProjectsDivBgColors(e)}>

        <motion.div ref={constraintsRef} style={{ backgroundColor: playSeeWhyAnimation ? 'transparent' : 'skyblue' }} className='flex justify-center items-center w-full h-full transition-all duration-1000'>

          <motion.button ref={SecretProject} type='button' onMouseEnter={(e) => handleSecretProject(e)} onMouseOver={(e) => handleSecretProject(e)} onMouseLeave={(e) => handleSecretProject(e)} onMouseOut={(e) => handleSecretProject(e)} className='fixed w-40 h-24 bg-black z-50 transition-all ease-out duration-100'></motion.button>

          <motion.div drag dragElastic={0.2} dragConstraints={constraintsRef} whileDrag={{ scale: 1.2 }} className='w-8 h-8 bg-red-500' />

          <motion.div drag dragElastic={0.2} dragConstraints={constraintsRef} whileDrag={{ scale: 1.2 }} className='w-8 h-8 bg-green-500' />

        </motion.div>

        {/* <button onClick={() => setshowCurriculumProjectsModal(true)}>freeCodeCamp<br />Curriculum Projects</button> */}

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