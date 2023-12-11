import { Button, Modal } from 'react-bootstrap';
import React, { useContext } from 'react';
import styles from '../../styles/sections/main_section/curriculum_projects_modal_styles.module.scss'
import SelectedSectionContext from '../../app/context/SelectedSectionContext';
import FccCurSect1 from '../fcc_cur_sec_1';
import FccCurSect2 from '../fcc_cur_sec_2';
import FccCurSect3 from '../fcc_cur_sec_3';
import FccCurSect4 from '../fcc_cur_sec_4';
import FccCurSect5 from '../fcc_cur_sec_5';

export default function CurriculumProjectsModal(props: { state: boolean, setState: React.Dispatch<React.SetStateAction<boolean>> }) {

  const setselectedSection = useContext(SelectedSectionContext)

  function handleClickButtons(secId: string) {
    switch (secId) {
      case '#fcc_cur_sec_1': setselectedSection(<FccCurSect1 />); break;
      case '#fcc_cur_sec_2': setselectedSection(<FccCurSect2 />); break;
      case '#fcc_cur_sec_3': setselectedSection(<FccCurSect3 />); break;
      case '#fcc_cur_sec_4': setselectedSection(<FccCurSect4 />); break;
      case '#fcc_cur_sec_5': setselectedSection(<FccCurSect5 />); break;
      default: break;
    }
    props.setState(false);
    setTimeout(() => window.location.href = secId, 500);
  }

  return (
    <Modal scrollable={true} show={props.state} onHide={() => props.setState(false)}>
      <Modal.Header closeButton>
        <Modal.Title>freeCodeCamp Curriculum Projects</Modal.Title>
      </Modal.Header>
      
        <Modal.Body>
          <div className={styles.modal_buttons_div}>
            <div className={styles.modal_buttons_description_div}>
              <p>In this certification, I've learned how to build webpages with <strong>HTML</strong> and <strong>CSS</strong> that respond to different screen sizes.</p>
              <Button onClick={() => handleClickButtons("#fcc_cur_sec_1")} variant="primary">Responsive Web Design</Button>
              <hr />
            </div>
            <div className={styles.modal_buttons_description_div}>
              <p>Having learned <strong>HTML</strong>, <strong>CSS</strong> and <strong>JavaScript</strong>, this certification taught how to build webpages with modern front-end libraries, like:
              <strong> Bootstrap</strong>, <strong>jQuery</strong>, <strong>SASS</strong>, <strong>React</strong>, <strong>Redux</strong>.<br />
              All the certification projects were made using <strong>React</strong>.</p>
              <Button onClick={() => handleClickButtons("#fcc_cur_sec_2")} variant="secondary">Front-end Libraries</Button>
              <hr/>
            </div>
            <div className={styles.modal_buttons_description_div}>
              <p>Working on back-end, this certification taught how to build APIs and microservices using <strong>Node.js</strong> and <strong>npm, </strong>
              and also how to work with <strong>MongoDB</strong> using <strong>Mongoose</strong> library.</p>
              <Button onClick={() => handleClickButtons("#fcc_cur_sec_3")} variant="success">APIs and Microservices</Button>
              <hr/>
            </div>
            <div className={styles.modal_buttons_description_div}>
              <p>In this certification, I've learned how to build charts, graphs, and maps to present different types of data with the <strong>D3.js</strong> library.<br />
              All the certification projects were made using <strong>Next.js</strong> framework.</p>
              <Button onClick={() => handleClickButtons("#fcc_cur_sec_4")} variant="warning">Data Visualization</Button>
              <hr/>
            </div>
            <div className={styles.modal_buttons_description_div}>
              <p>Focousing on software quality, this certification taught how to create unit tests on server side with <strong>Chai</strong>.</p>
              <Button onClick={() => handleClickButtons("#fcc_cur_sec_5")} variant="danger">Quality Assurance</Button>
              <hr/>
            </div>
          </div>
        </Modal.Body>
      
    </Modal>
  )
}
