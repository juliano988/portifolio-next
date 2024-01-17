import { Button, Modal } from 'react-bootstrap';
import React, { useContext } from 'react';
import styles from '../../styles/sections/main_section/development_challenges_modal_styles.module.scss'
import SelectedSectionContext from '../../app/context/SelectedSectionContext';
import DevChallSec1 from '../dev_chall_sec_1';
import DevChallSec2 from '../dev_chall_sec_2';


export default function DevelopmentChallengesModal(props: { state: boolean, setState: React.Dispatch<React.SetStateAction<boolean>> }) {

  const setselectedSection = useContext(SelectedSectionContext)

  function handleClickButtons(secId: string) {
    switch (secId) {
      case '#dev_chall_sec_1': setselectedSection(<DevChallSec1 />); break;
      case '#dev_chall_sec_2': setselectedSection(<DevChallSec2 />); break;
      default: break;
    }
    props.setState(false);
    setTimeout(() => window.location.href = secId, 500);
  }

  return (

    <Modal scrollable={true} show={props.state} onHide={() => props.setState(false)}>

      <Modal.Header closeButton>
        <Modal.Title>Company Development Challenges</Modal.Title>
      </Modal.Header>

      <Modal.Body>

        <div className={styles.modal_buttons_div}>
          <div className={styles.modal_buttons_description_div}>
            <p>Challenges developed using <strong>React.js</strong>, <strong>Next.js</strong>, <strong>Node.js</strong> and <strong>MongoDB</strong>.</p>
            <Button onClick={() => handleClickButtons("#dev_chall_sec_1")} className='bg-blue-700' variant="primary">Challenges developed on 1º/2021</Button>
            <hr />
          </div>

          <div className={styles.modal_buttons_description_div}>
            <p>Challenges developed using <strong>React.js</strong>, <strong>Next.js</strong>, <strong>Node.js</strong>, <strong>MongoDB</strong> and <strong>Expo</strong>.</p>
            <Button onClick={() => handleClickButtons("#dev_chall_sec_2")} className='bg-gray-600' variant="secondary">Challenges developed on 2º/2021</Button>
            <hr />
          </div>
        </div>

      </Modal.Body>

    </Modal>

  )

}
