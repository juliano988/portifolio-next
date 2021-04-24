import { Button, Modal } from 'react-bootstrap';
import React, { useContext } from 'react';
import styles from '../../styles/sections/section1/curriculum_projects_modal_styles.module.scss'
import { SelectedSectionContext } from '../../pages';
import FccCurSect1 from '../fcc_cur_sec_1';
import FccCurSect2 from '../fcc_cur_sec_2';
import FccCurSect3 from '../fcc_cur_sec_3';
import FccCurSect4 from '../fcc_cur_sec_4';

export default function CurriculumProjectsModal(props: { state: boolean, setState: React.Dispatch<React.SetStateAction<boolean>> }) {

  const setselectedSection = useContext(SelectedSectionContext)

  function handleClickButtons(secId: string) {
    switch (secId) {
      case '#fcc_cur_sec_1': setselectedSection(<FccCurSect1 />); break;
      case '#fcc_cur_sec_2': setselectedSection(<FccCurSect2 />); break;
      case '#fcc_cur_sec_3': setselectedSection(<FccCurSect3 />); break;
      case '#fcc_cur_sec_4': setselectedSection(<FccCurSect4 />); break;
      default: break;
    }
    props.setState(false);
    setTimeout(() => window.location.href = secId, 500);
  }

  return (
    <Modal show={props.state} onHide={() => props.setState(false)}>
      <Modal.Header closeButton>
        <Modal.Title>freeCodeCamp Curriculum Projects</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className={styles.modal_buttons_div}>
          <Button onClick={() => handleClickButtons("#fcc_cur_sec_1")} variant="primary">Responsive Web Design</Button>
          <Button onClick={() => handleClickButtons("#fcc_cur_sec_2")} variant="secondary">Front End Libraries</Button>
          <Button onClick={() => handleClickButtons("#fcc_cur_sec_3")} variant="success">APIs and Microservices</Button>
          <Button onClick={() => handleClickButtons("#fcc_cur_sec_4")} variant="warning">Data Visualization</Button>
        </div>
      </Modal.Body>
    </Modal>
  )
}
