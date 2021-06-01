import { Badge, Button, Media, Modal } from 'react-bootstrap';
import React, { Children, useEffect } from 'react';
import styles from '../../styles/sections/main_section/profile_modal_styles.module.scss'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { followCursor } from 'tippy.js';
import 'tippy.js/animations/shift-toward.css';
import { Scrollbars } from 'react-custom-scrollbars';


export default function ProfileModal(props: { state: boolean, setState: React.Dispatch<React.SetStateAction<boolean>> }) {

  return (
    <Modal size="lg" scrollable={true} show={props.state} onHide={() => props.setState(false)}>
      <Modal.Header closeButton>
        <Modal.Title>About Júlio Faria</Modal.Title>
      </Modal.Header>
      <Scrollbars style={{ width: 'auto', height: '100vh' }}>
        <Modal.Body>
          <h5>Professional Profile</h5>
          <p>I graduated as a <b>Computer Technician</b> from <a href="https://www.cotemig.com.br/">COTEMIG </a>
           in 2013 and in <b>Electronic and Telecommunications Engineering</b> from <a href="https://www.pucminas.br/">PUC Minas </a>
           in 2020. I am currently specializing in Full Stack web development on <a href="https://www.freecodecamp.org/news/about/" target="_blank">freeCodeCamp </a>
           community.<br />
           I can easily deal with new technologies and I am always willing to learn new things in different areas. I am also proactive and try to relate well with people, despite being a little shy.
           </p>
          <h5>Professional Experiences</h5>
          <Media >
            <img src="./imgs/company/kornerz.png" width={75} height={75} className="mr-3" alt="Free Code Camp" />
            <Media.Body>
              <h6>Kornerz</h6>
              <p>Front-end web developer<br />January/2021 - April/2021<br />
                  I was responsible for the front-end web development of the company's projects, using React as the base technology.</p>
            </Media.Body>
          </Media>
          <h5>Academic education</h5>
          <div>
            <Media >
              <img src="./imgs/academics/fcc.jpg" width={75} height={75} className="mr-3" alt="Free Code Camp" />
              <Media.Body>
                <h6>freeCodeCamp</h6>
                <p>Full Stack web developer<br />2020 - Currently</p>
              </Media.Body>
            </Media>
            <Media >
              <img src="imgs/academics/PUC.png" width={75} height={75} className="mr-3" alt="PUC Minas" />
              <Media.Body>
                <h6>PUC Minas</h6>
                <p>Electronics and Telecommunications Engineer<br />2014 - 2020</p>
              </Media.Body>
            </Media>
            <Media >
              <img src="./imgs/academics/cotemig.jpg" width={75} height={75} className="mr-3" alt="COTEMIG" />
              <Media.Body>
                <h6>COTEMIG</h6>
                <p>Computer technician<br />2011 - 2013</p>
              </Media.Body>
            </Media>
          </div>
          <h5>Certificates</h5>
          <ul>
            <li>
              <h6>Data Visualization <Badge variant="secondary">2021</Badge></h6>
              <a href="https://freecodecamp.org/certification/julio_faria/data-visualization"
                target="_blank">See the certification</a>
            </li>
            <li>
              <h6>APIs and Microservices <Badge variant="secondary">2020</Badge></h6>
              <a href="https://www.freecodecamp.org/certification/julio_faria/apis-and-microservices"
                target="_blank">See the certification</a>
            </li>
            <li>
              <h6>Front End Libraries <Badge variant="secondary">2020</Badge></h6>
              <a href="https://freecodecamp.org/certification/julio_faria/front-end-libraries"
                target="_blank">See the certification</a>
            </li>
            <li>
              <h6>JavaScript Algorithms and Data Structures <Badge variant="secondary">2020</Badge></h6>
              <a href="https://freecodecamp.org/certification/julio_faria/javascript-algorithms-and-data-structures"
                target="_blank">See the certification</a>
            </li>
            <li>
              <h6>Responsive Web Design <Badge variant="secondary">2020</Badge></h6>
              <a href="https://www.freecodecamp.org/certification/julio_faria/responsive-web-design"
                target="_blank">See the certification</a>
            </li>
          </ul>
          <h5>Development tools learned</h5>
          <div className={styles.web_tools}>
            <ToolsTippy content="HTML5"><img src="imgs/tools/html5.jpg" alt="HTML5" /></ToolsTippy>
            <ToolsTippy content="CSS3"><img src="imgs/tools/css3.png" alt="CSS3" /></ToolsTippy>
            <ToolsTippy content="JavaScript" ><img src="imgs/tools/js.png" alt="JavaScript" /></ToolsTippy>
            <ToolsTippy content="Bootstrap" ><img src="imgs/tools/bootstrap.png" alt="Bootstrap" /></ToolsTippy>
            <ToolsTippy content="jQuery" ><img src="imgs/tools/jquery.png" alt="jQuery" /></ToolsTippy>
            <ToolsTippy content="Sass" ><img src="imgs/tools/sass.png" alt="Sass" /></ToolsTippy>
            <ToolsTippy content="React" ><img src="imgs/tools/react.png" alt="React" /></ToolsTippy>
            <ToolsTippy content="Redux" ><img src="imgs/tools/redux.png" alt="Redux" /></ToolsTippy>
            <ToolsTippy content="Node.js" ><img src="imgs/tools/nodejs.png" alt="Node.js" /></ToolsTippy>
            <ToolsTippy content="MongoDB" ><img src="imgs/tools/mongodb.png" alt="MongoDB" /></ToolsTippy>
            <ToolsTippy content="Typescript" ><img src="imgs/tools/typescript.png" alt="Typescript" /></ToolsTippy>
            <ToolsTippy content="Git" ><img src="imgs/tools/git.png" alt="Git" /></ToolsTippy>
            <ToolsTippy content="Expo" ><img src="imgs/tools/expo.png" alt="Expo" /></ToolsTippy>
            <ToolsTippy content="Next.js" ><img src="imgs/tools/next.png" alt="Next.js" /></ToolsTippy>
          </div>
          <h5>Not satisfied?</h5>
          <p>Check out my complete profile on
          <a href="https://br.linkedin.com/in/j%C3%BAlio-faria-144832145?trk=profile-badge"
              target="_blank"> Linkedin!</a><br />
            And all my projects on <a href="https://github.com/juliano988" target="_blank"> GitHub!</a>
          </p>
          <h5>Contact me!</h5>
          <p>If you enjoyed my work and want to get in touch, feel free to do so!</p>
          <p>📧 Email:</p>
          <ul>
            <li><a href="mailto:juliofariaa@gmail.com">juliofariaa@gmail.com</a></li>
            <li><a href="mailto:julio-pinheiroo@hotmail.com">julio-pinheiroo@hotmail.com</a></li>
          </ul>
        </Modal.Body>
      </Scrollbars>
      <Modal.Footer>
        <h6>Last update: June, 2021</h6>
        <Button variant="secondary" onClick={() => props.setState(false)}> Close </Button>
      </Modal.Footer>
    </Modal>
  )
}

function ToolsTippy(props: { children: any, content: string }) {
  return (
    <Tippy
      content={props.content}
      followCursor={true}
      arrow={false}
      animation={'shift-toward'}
      plugins={[followCursor]}>
      {props.children}
    </Tippy>
  )
}

