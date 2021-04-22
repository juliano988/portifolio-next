import index_styles from '../../styles/sections/section1/index_styles.module.scss';
import { Button, Modal } from 'react-bootstrap';
import React, { useState } from 'react';
import ProfileModal from './ProfileModal';

export default function Section1() {

  const [showProfileModal, setshowProfileModal] = useState(true);

  return (
    <section className={index_styles.container}>
      <div className={index_styles.intro_div}>
        <p className={index_styles.synthetic_tippy}>Want to know me better?<br /> <b>So click on my name!</b></p>
        <div className={index_styles.title}>
          <h1 onClick={() => setshowProfileModal(true)}>Júlio Faria</h1>
          <ProfileModal state={showProfileModal} setState={setshowProfileModal}/>
          <h5>Full Stack Web Developer and Engineer</h5>
        </div>
        <div className={index_styles.projects}>
          <h5>Projects:</h5>
          <div>
            <Button variant="dark">freeCodeCamp<br /> Curriculum Projects</Button>

            <Button href="#sec-5" variant="danger"> Others</Button>

          </div>
        </div>
      </div>

    </section>
  )
}