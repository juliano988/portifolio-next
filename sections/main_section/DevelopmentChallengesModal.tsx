import { Button, Modal } from 'react-bootstrap';
import React, { useContext } from 'react';
import styles from '../../styles/sections/main_section/development_challenges_modal_styles.module.scss'
import { SelectedSectionContext } from '../../pages';
import { Scrollbars } from 'react-custom-scrollbars';
import DevChallSec1 from '../dev_chall_sec_1';


export default function DevelopmentChallengesModal(props: { state: boolean, setState: React.Dispatch<React.SetStateAction<boolean>> }) {

  const setselectedSection = useContext(SelectedSectionContext)

  function handleClickButtons(secId: string) {
    switch (secId) {
      case '#dev_chall_sec_1': setselectedSection(<DevChallSec1 />); break;
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
      <Scrollbars style={{ width: 'auto', height: '100vh' }}>
        <Modal.Body>
          <div className={styles.modal_buttons_div}>
            <div className={styles.modal_buttons_description_div}>
              <p>Challenges developed using React.js, Next.js, Node.js and MongoDB.</p>
              <Button onClick={() => handleClickButtons("#dev_chall_sec_1")} variant="primary">Challenges developed on 1º/2021</Button>
              <hr />
            </div>
          </div>
        </Modal.Body>
      </Scrollbars>
    </Modal>
  )
}
