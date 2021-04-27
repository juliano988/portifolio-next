import styles from '../../styles/sections/main_section/index_styles.module.scss';
import { Button } from 'react-bootstrap';
import React, { useContext, useEffect, useState } from 'react';
import ProfileModal from './ProfileModal';
import CurriculumProjectsModal from './CurriculumProjectsModal';
import { SelectedSectionContext } from '../../pages';
import Others from '../others';

export default function MainSection() {

  const [showBgVideo, setshowBgVideo] = useState<boolean>(false)
  const [showProfileModal, setshowProfileModal] = useState(false);
  const [showCurriculumProjectsModal, setshowCurriculumProjectsModal] = useState(false);

  const setselectedSection = useContext(SelectedSectionContext)

  useEffect(function () {
    if (window.innerWidth <= 575.98) {
      setshowBgVideo(false)
    } else {
      setshowBgVideo(true)
    }
  }, [])

  useEffect(function () {
    window.addEventListener('resize', function () {
      if (window.innerWidth <= 575.98) {
        setshowBgVideo(false)
      } else {
        setshowBgVideo(true)
      }
    })
  }, [])

  function handleClickButtons(secId: string) {
    switch (secId) {
      case '#others': setselectedSection(<Others />); break;
      default: break;
    }
    setTimeout(() => window.location.href = secId, 500);
  }

  return (
    <section id="main_sec" className={styles.container}>
      {showBgVideo &&
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

            <Button onClick={() => handleClickButtons("#others")} variant="danger"> Others</Button>
          </div>
        </div>
      </div>
    </section>
  )
}