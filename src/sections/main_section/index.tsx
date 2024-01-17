import styles from '../../styles/sections/main_section/index_styles.module.scss';
import { Button } from 'react-bootstrap';
import React, { RefObject, useContext, useEffect, useRef, useState } from 'react';
import ProfileModal from './ProfileModal';
import CurriculumProjectsModal from './CurriculumProjectsModal';
import SelectedSectionContext from '../../app/context/SelectedSectionContext';
import DevelopmentChallengesModal from './DevelopmentChallengesModal';
import TakeHomeProjects from '../fcc_THP';
import { TfiReload } from "react-icons/tfi";
import { FaChevronLeft, FaCircleInfo } from "react-icons/fa6";
import bg0 from './images/background/0.jpeg';
import bg1 from './images/background/1.jpeg';
import bg2 from './images/background/2.jpeg';
import bg3 from './images/background/3.jpeg';
import bg4 from './images/background/4.jpeg';
import { StaticImageData } from 'next/image';
import { BoundingBox, motion } from 'framer-motion';
import { SlowBuffer } from 'buffer';
import ProjectButton from './components/ProjectButton';
import SecretProjectButton from './components/SecretProjectButton';

export default function MainSection() {

  const AnimatedDiv = useRef<HTMLDivElement>(null);
  const ProjectsDiv = useRef<HTMLDivElement>(null);
  const SecretProject = useRef<HTMLButtonElement>(null);
  const CardHandler = useRef<HTMLDivElement>(null);
  const constraintsRef = useRef(null);

  const [isCellPhone, setisCellPhone] = useState<boolean>(false);

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

  const [firstColumnWidth, setfirstColumnWidth] = useState<number>(33);
  const [movingMiddleBar, setmovingMiddleBar] = useState<boolean>(false);

  const [secretProjectOffsetX, setsecretProjectOffsetX] = useState<number>(0);
  const [secretProjectOffsetY, setsecretProjectOffsetY] = useState<number>(0);

  const [projectDivBgHslHColors, setprojectDivBgHslHColors] = useState<Array<number>>([getRandomHslColorH(), getRandomHslColorH(), getRandomHslColorH()]);

  const [showProfileModal, setshowProfileModal] = useState(false);
  const [showCurriculumProjectsModal, setshowCurriculumProjectsModal] = useState(false);
  const [showDevelopmentChallengesModal, setshowDevelopmentChallengesModal] = useState(false);

  const [cardHandlerTitle, setcardHandlerTitle] = useState('Drop a card here!');
  const [cardHandlerSubtitle, setcardHandlerSubtitle] = useState('');
  const [cardHandlerColorHslH, setcardHandlerColorHslH] = useState<number>(getRandomHslColorH());
  const [cardHandlerOpeningColor, setcardHandlerOpeningColor] = useState('');
  const [cardHandlerOpeningTextColor, setcardHandlerOpeningTextColor] = useState('');

  const setselectedSection = useContext(SelectedSectionContext);

  // Verifica a largura da página assim que a mesma carrega.
  useEffect(function () {

    const windowWidth = window.innerWidth;

    // 1024px corresponde a 'lg' no tailwind.
    if (windowWidth <= 1024) {

      setisCellPhone(true);

    } else {

      setisCellPhone(false);

    }

  }, []);

  // Verifica a largura da página toda vez que ela é redimensionada.
  useEffect(function () {

    window.addEventListener('resize', function () {

      const windowWidth = window.innerWidth;

      // 1024px corresponde a 'lg' no tailwind.
      if (windowWidth <= 1024) {

        setisCellPhone(true);

      } else {

        setisCellPhone(false);

      }

    })

  }, []);

  useEffect(function () {

    if (isCellPhone) {

      setfirstColumnWidth(100);

    } else {

      setfirstColumnWidth(33);

    }

    // Caso a resolução altere de celular pra pc ou vice-versa, a página é reiniciada.
    resetPage();

  }, [isCellPhone]);

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

  // Efeito de posicionar os botões do projeto aleatoriamente ao inciar a aplicação.
  useEffect(function () {

    if (ProjectsDiv.current && constraintsRef.current, SecretProject.current) {
      placeProjectButtons();
    }

  }, [ProjectsDiv.current, constraintsRef.current, SecretProject.current]);

  // Insere transição de coluna quando for no celular.
  useEffect(function () {

    if (isCellPhone && playSeeWhyAnimation) {

      setTimeout(function () {

        setfirstColumnWidth(0);

      }, 2500);

    }

  }, [playSeeWhyAnimation]);

  useEffect(function () {

    let updateCardHandlerInterval: NodeJS.Timeout;

    function updateCardHandler() {

      const cardHandler = CardHandler.current as HTMLDivElement;

      const projectButtons = getProjectButtons().filter(function (projectButton) { return !projectButton.isEqualNode(SecretProject.current) });

      projectButtons.forEach(function (projectButton) {

        const projectButtonTranslateYNumber = projectButton.style.transform.match(/(translateY\()([-|\d]\d+.\d+)/) ? Number((projectButton.style.transform.match(/(translateY\()([-|\d]\d+.\d+)/) as RegExpMatchArray)[2]) : 0;
        const buttonBottom = projectButton.offsetTop + projectButtonTranslateYNumber + projectButton.offsetHeight;

        if (buttonBottom >= cardHandler.offsetTop) {

          const projectTitle = projectButton.children[0].textContent;
          const projectSubtitle = projectButton.children[1].textContent;
          const projectColor = projectButton.style.backgroundColor;
          const projectTextColor = (projectButton.children[0] as HTMLElement).style.color;
          const projectCardKey = projectButton.getAttribute('data-project-card-key');

          setcardHandlerTitle(`Opening: ${projectTitle}...`);
          setcardHandlerSubtitle(projectSubtitle || '');
          setcardHandlerOpeningColor(projectColor);
          setcardHandlerOpeningTextColor(projectTextColor);

          // Após 2 segundos o efeito dos botões é disparado.
          setTimeout(function () {

            switch (projectCardKey) {

              case '1':
                setshowCurriculumProjectsModal(true);
                break;

              case '2':
                setshowDevelopmentChallengesModal(true);
                break;

              case '3':
                handleClickButtons('#fcc_THP');
                break;

              case '4':
                window.open('https://lotoproweb.com.br', '_blank')?.focus();
                break;

              default:
                break;

            }

            // O cartão selecionado é movido para fora da barra pra evitar que ele seja selecionado múltiplas vezes seguidas.
            projectButton.style.setProperty('margin-bottom', (Number(projectButton.style.marginBottom.replace('px', '')) + 90 + (Math.random() * (window.innerHeight - 90)) - projectButton.offsetHeight).toString(10) + 'px');

          }, 2000);

          // Se um dos carões encostar na na barra, a leitura é pausada.
          clearInterval(updateCardHandlerInterval);

          // Apos 5 segundos, a barra retorna ao estado original e a leitura da barra é reiniciada.
          setTimeout(function () {

            setcardHandlerTitle('Drop card here!');
            setcardHandlerSubtitle('');
            setcardHandlerOpeningColor('');
            setcardHandlerOpeningTextColor('');

            updateCardHandlerInterval = setInterval(updateCardHandler, 100);

          }, 5000);

        }

      });

    }

    // Não executa a leitura dos cartões se estiver no celular e com a primeira coluna sendo exibida.
    if (!(isCellPhone && firstColumnWidth === 100)) {
      updateCardHandlerInterval = setInterval(updateCardHandler, 100);
    }

    return () => clearInterval(updateCardHandlerInterval);

  }, [isCellPhone, firstColumnWidth]);

  function handleClickButtons(secId: string) {

    switch (secId) {

      case '#fcc_THP': setselectedSection(<TakeHomeProjects />); break;

      default: break;

    }

    setTimeout(() => window.location.href = secId, 500);

  }

  function resetPage() {

    let randomNumber = backgroundIndex;

    setplaySeeWhyAnimation(false);

    while (randomNumber === backgroundIndex) {
      randomNumber = getRandomBackgroundIndex();
    }

    setbackgroundIndex(randomNumber);

    setfirstColumnWidth(isCellPhone ? 100 : 33);

    const projectDivBgHslHColorsDefault = getRandomHslColorH();

    setcardHandlerColorHslH(projectDivBgHslHColorsDefault);

    placeProjectButtons();

  }

  function handleMovingMiddleBar(e: React.MouseEvent<HTMLSpanElement, MouseEvent>) {

    e.preventDefault();

    const firstColumnWidth = (e.clientX / window.innerWidth) * 100;

    if (movingMiddleBar) {

      if (firstColumnWidth >= 30 && firstColumnWidth <= 70) {

        setfirstColumnWidth(firstColumnWidth);

      }

    }

  }

  function placeProjectButtons() {

    const projectButtons = getProjectButtons();

    projectButtons.forEach(function (projectButton, i) {

      const randomMarginBottom = (Math.random() - 0.5) * window.innerHeight;
      const randomMarginLeft = (Math.random() - 0.5) * window.innerHeight;

      // No caso do projeto misterioso, a sua margem é alterada através de estados.
      if (projectButton.isEqualNode(SecretProject.current)) {

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

  function handleSecretProject(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {

    const button = SecretProject.current as HTMLButtonElement;

    const moveSpeed = 150;

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

      button.style.marginBottom = `${secretProjectOffsetY - moveSpeed}px`;
      button.style.marginLeft = `${secretProjectOffsetX - moveSpeed}px`;

      setsecretProjectOffsetY(secretProjectOffsetY - moveSpeed);
      setsecretProjectOffsetX(secretProjectOffsetX - moveSpeed);

    } else if (down && right) {

      button.style.marginBottom = `${secretProjectOffsetY + moveSpeed}px`;
      button.style.marginLeft = `${secretProjectOffsetX - moveSpeed}px`;

      setsecretProjectOffsetY(secretProjectOffsetY + moveSpeed);
      setsecretProjectOffsetX(secretProjectOffsetX - moveSpeed);

    } else if (down && left) {

      button.style.marginBottom = `${secretProjectOffsetY + moveSpeed}px`;
      button.style.marginLeft = `${secretProjectOffsetX + moveSpeed}px`;

      setsecretProjectOffsetY(secretProjectOffsetY + moveSpeed);
      setsecretProjectOffsetX(secretProjectOffsetX + moveSpeed);

    } else if (up && left) {

      button.style.marginBottom = `${secretProjectOffsetY - moveSpeed}px`;
      button.style.marginLeft = `${secretProjectOffsetX + moveSpeed}px`;

      setsecretProjectOffsetY(secretProjectOffsetY - moveSpeed);
      setsecretProjectOffsetX(secretProjectOffsetX + moveSpeed);

    } else if (up) {

      button.style.marginBottom = `${secretProjectOffsetY - moveSpeed}px`;

      setsecretProjectOffsetY(secretProjectOffsetY - moveSpeed);

    } else if (right) {

      button.style.marginLeft = `${secretProjectOffsetX - moveSpeed}px`;

      setsecretProjectOffsetX(secretProjectOffsetX - moveSpeed);

    } else if (down) {

      button.style.marginBottom = `${secretProjectOffsetY + moveSpeed}px`;

      setsecretProjectOffsetY(secretProjectOffsetY + moveSpeed);

    } else if (left) {

      button.style.marginLeft = `${secretProjectOffsetX + moveSpeed}px`;

      setsecretProjectOffsetX(secretProjectOffsetX + moveSpeed);

    }

    // Insere animação de colisão no projeto secreto.
    button.classList.remove(styles.secretProjectScape);

    setTimeout(function () {
      button.classList.add(styles.secretProjectScape);
    }, 1);

  }

  function handleChangeProjectsDivBgColors(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {

    if (constraintsRef.current) {

      if ((constraintsRef.current as HTMLDivElement).isEqualNode(e.target as HTMLElement)) {

        const colorOffsetAngle = 120;
        const baseColor = getRandomHslColorH();

        setprojectDivBgHslHColors([(baseColor + colorOffsetAngle * 0) % 360, (baseColor + colorOffsetAngle * 1) % 360, (baseColor + colorOffsetAngle * 2) % 360]);

      }

    }

  }

  function getRandomBackgroundIndex() {

    return Math.round(Math.random() * (backgroundImages.length - 1));

  }

  function getRandomHslColorH() {

    return Math.round(Math.random() * 360);

  }

  function getProjectButtons() {

    return Array.from((ProjectsDiv.current as HTMLDivElement).children[1].children)
      .filter(function (element) { return element.tagName === 'BUTTON' }) as Array<HTMLButtonElement>;

  }

  return (

    <>

      <section style={{ cursor: movingMiddleBar ? 'col-resize' : 'unset' }} id="main_sec" className='flex overflow-hidden' onMouseUp={(e) => setmovingMiddleBar(false)} onMouseMove={(e) => handleMovingMiddleBar(e)}>

        <div style={{ display: isCellPhone ? firstColumnWidth === 100 ? '' : 'none' : '', width: `${firstColumnWidth}%` }} className='flex justify-center items-center flex-col h-dvh bg-stone-100'>

          <span className='absolute top-2 left-2 z-20 text-white text-xl cursor-pointer hover:rotate-180 transition duration-500 [text-shadow:_3px_3px_20px_#575757]' onClick={() => resetPage()}><TfiReload /></span>

          <div className='flex gap-4 absolute top-10 left-2 z-20'>

            <FaCircleInfo className='text-white text-xl cursor-help peer [text-shadow:_3px_3px_20px_#575757]' />

            <div className='bg-white p-2 rounded-sm max-w-[25vw] scale-0 opacity-0 transition-opacity duration-500 peer-hover:scale-100 peer-hover:opacity-100'>
              {backgroundDescriptions[backgroundIndex]}
            </div>

          </div>

          <h1
            className={(playSeeWhyAnimation ? styles.changeColorToWhite : '') + ' relative max-lg:bottom-[12.5dvh] z-10 text-9xl font-bold cursor-pointer hover:underline'}
            onClick={() => setshowProfileModal(true)}>
            Júlio<br />Faria
          </h1>

          <h4
            className={(playSeeWhyAnimation ? styles.changeColorToWhite : '') + ' relative max-lg:bottom-[12.5dvh] z-10 text-2xl'}>
            A <span className='font-bold'>master</span> of JavaScript
          </h4>

          <div
            ref={AnimatedDiv}
            style={{ backgroundImage: `url(${backgroundImages[backgroundIndex].src})`, backgroundPosition: `${seeWhyBgCounter}% 50%`, maxWidth: `${firstColumnWidth}%` }}
            className={`${playSeeWhyAnimation ? styles.seeWhyAnimation : ''} absolute bottom-[25dvh] max-lg:bottom-[12.5dvh] w-[150px] h-[60px] rounded-[80px] bg-top`} />

          <button
            onClick={() => setplaySeeWhyAnimation(true)}
            className={playSeeWhyAnimation ? styles.hideSeeWhy : '' + ' ' + styles.seeWhyText + ' fixed bottom-[25dvh] max-lg:bottom-[12.5dvh] text-xl text-white pt-3 pb-3 pr-4 pl-4 rounded-full [text-shadow:_3px_3px_20px_#575757]'}>
            See why ⮞
          </button>

        </div>

        <span style={{ display: isCellPhone ? 'none' : '' }} className='h-dvh cursor-col-resize w-1' onMouseDown={(e) => setmovingMiddleBar(true)}></span>

        <div
          ref={ProjectsDiv}
          style={{ display: isCellPhone ? firstColumnWidth === 100 ? 'none' : '' : '', width: `${100 - firstColumnWidth}%`, backgroundImage: `linear-gradient(${seeWhyBgCounter * 3.6}deg, hsl(${projectDivBgHslHColors[0]},100%,50%) 0%, hsl(${projectDivBgHslHColors[1]},100%,50%) 50%, hsl(${projectDivBgHslHColors[2]},100%,50%) 100%)` }}
          className={styles.moveProjectsBg + ' flex justify-center items-center h-dvh bg-[length:200%_200%]'}
          onMouseDown={(e) => handleChangeProjectsDivBgColors(e)}>

          <FaChevronLeft
            style={{ display: isCellPhone ? '' : 'none', left: `calc(${firstColumnWidth}% + 15px)` }}
            className='absolute top-3 text-white text-xl cursor-pointer hover:-translate-x-1 transition duration-500 [text-shadow:_3px_3px_20px_#575757]'
            onClick={() => resetPage()} />

          <motion.div ref={constraintsRef} className='flex justify-center items-center w-full h-dvh transition-all duration-1000'>

            <div
              ref={CardHandler}
              style={{ width: `calc(${100 - firstColumnWidth}% - 4px)`, backgroundColor: cardHandlerOpeningColor ? cardHandlerOpeningColor : `hsl(${cardHandlerColorHslH},100%,75%)`, color: cardHandlerOpeningTextColor ? cardHandlerOpeningTextColor : '' }}
              className='absolute bottom-0 flex flex-col justify-center items-center h-16 transition-colors duration-1000'>
              <span className='font-bold text-lg'>{cardHandlerTitle}</span>
              <span className='font-light text-sm'>{cardHandlerSubtitle}</span>
            </div>

            <SecretProjectButton
              ref={SecretProject}
              onMouseEnter={(e) => handleSecretProject(e)}
              onMouseOver={(e) => handleSecretProject(e)}
              onMouseLeave={(e) => handleSecretProject(e)}
              onMouseOut={(e) => handleSecretProject(e)} />

            {/* @ts-ignore */}
            <ProjectButton
              dragConstraints={constraintsRef}
              cardKey='1'
              textColor='black'
              backgroundColorAngle={28}
              title='Curriculum Projects'
              subtitle='freeCodeCamp'
              date='2020-2021' />

            {/* @ts-ignore */}
            <ProjectButton
              dragConstraints={constraintsRef}
              cardKey='2'
              textColor='whitesmoke'
              backgroundColorAngle={247}
              title='Challenges'
              subtitle='Job applications'
              date='2021' />

            {/* @ts-ignore */}
            <ProjectButton
              dragConstraints={constraintsRef}
              cardKey='3'
              textColor='black'
              backgroundColorAngle={130}
              title='Take a Home Projects'
              subtitle='freeCodeCamp'
              date='2021' />

            {/* @ts-ignore */}
            <ProjectButton
              dragConstraints={constraintsRef}
              cardKey='4'
              textColor='black'
              backgroundColorAngle={300}
              title='LotoPro Web 🤑'
              subtitle='micro SaaS Product'
              date='2023 - ♾️' />

          </motion.div>

          <div style={{ width: `calc(${100 - firstColumnWidth}% + 10px)` }} className={`${playSeeWhyAnimation ? styles.projectsDivCover : ''} absolute z-20 h-dvh w-full bg-stone-100`}></div>

        </div>

        <ProfileModal state={showProfileModal} setState={setshowProfileModal} />

        <CurriculumProjectsModal state={showCurriculumProjectsModal} setState={setshowCurriculumProjectsModal} />
        <DevelopmentChallengesModal state={showDevelopmentChallengesModal} setState={setshowDevelopmentChallengesModal} />

      </section >

    </>

  )

}