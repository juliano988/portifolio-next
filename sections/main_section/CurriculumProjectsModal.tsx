import { Button, Modal } from 'react-bootstrap';
import React from 'react';
import styles from '../../styles/sections/section1/curriculum_projects_modal_styles.module.scss'

export default function CurriculumProjectsModal(props: { state: boolean, setState: React.Dispatch<React.SetStateAction<boolean>> }) {

  function handleClickButtons(secId: string) {
    props.setState(false);
    setTimeout(() => window.location.href = secId, 250);
  }

  return (
    <Modal className={styles.modal} show={props.state} onHide={() => props.setState(false)}>
      <Modal.Header closeButton>
        <Modal.Title>freeCodeCamp Curriculum Projects</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className={styles.modal_buttons_div}>
          <Button onClick={() => handleClickButtons("#fcc_sec_1")} variant="primary">Responsive Web Design</Button>
          <Button onClick={() => handleClickButtons("#fcc_sec_2")} variant="secondary">Front End Libraries</Button>
          <Button onClick={() => handleClickButtons("#fcc_sec_3")} variant="success">APIs and Microservices</Button>
        </div>
      </Modal.Body>
    </Modal>
  )
}