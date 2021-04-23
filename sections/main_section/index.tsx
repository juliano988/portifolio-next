import index_styles from '../../styles/sections/section1/index_styles.module.scss';
import { Button } from 'react-bootstrap';
import React, { useContext, useState } from 'react';
import ProfileModal from './ProfileModal';
import CurriculumProjectsModal from './CurriculumProjectsModal';
import { SelectedSectionContext } from '../../pages';
import Others from '../others';

export default function MainSection() {

  const [showProfileModal, setshowProfileModal] = useState(false);
  const [showCurriculumProjectsModal, setshowCurriculumProjectsModal] = useState(false);

  const setselectedSection = useContext(SelectedSectionContext)

  function handleClickButtons(secId: string) {
    switch (secId) {
      case '#others': setselectedSection(<Others />); break;
      default: break;
    }
    setTimeout(() => window.location.href = secId, 500);
  }

  return (
    <section id="main_sec" className={index_styles.container}>
      <div className={index_styles.intro_div}>
        <p className={index_styles.synthetic_tippy}>Want to know me better?<br /> <b>So click on my name!</b></p>
        <div className={index_styles.title}>
          <h1 onClick={() => setshowProfileModal(true)}>Júlio Faria</h1>
          <ProfileModal state={showProfileModal} setState={setshowProfileModal} />
          <h5>Engineer and Full Stack Web Developer</h5>
        </div>
        <div className={index_styles.projects}>
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