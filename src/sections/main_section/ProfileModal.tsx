import { Badge, Button, Media, Modal } from 'react-bootstrap';
import React, { Children, useEffect } from 'react';
import Tippy from '@tippyjs/react';
import imXr from './images/companies/imxr.jpeg';
import kornerz from './images/companies/kernerz.jpeg';
import freeCodeCamp from './images/academics/fcc.jpg';
import puc from './images/academics/PUC.jpeg';
import cotemig from './images/academics/cotemig.jpg';
import html from './images/tools/html5.jpg';
import css from './images/tools/css3.png';
import bootstrap from './images/tools/bootstrap.png';
import chai from './images/tools/chai.png';
import expo from './images/tools/expo.png';
import git from './images/tools/git.png';
import jquery from './images/tools/jquery.png';
import javaScript from './images/tools/js.png';
import mongoDb from './images/tools/mongodb.png';
import next from './images/tools/next.png';
import nodeJs from './images/tools/nodejs.png';
import react from './images/tools/react.png';
import redux from './images/tools/redux.png';
import sass from './images/tools/sass.png';
import typeScript from './images/tools/typescript.png';
import playcanvas from './images/tools/playcanvas.png';
import jenkins from './images/tools/jenkins.png';
import elektron from './images/tools/elektron.webp';
import 'tippy.js/dist/tippy.css';
import { followCursor } from 'tippy.js';
import 'tippy.js/animations/shift-toward.css';
import Image from 'next/image';
import { motion } from 'framer-motion';



export default function ProfileModal(props: { state: boolean, setState: React.Dispatch<React.SetStateAction<boolean>> }) {

  return (

    <Modal size="lg" scrollable={true} show={props.state} onHide={() => props.setState(false)}>

      <Modal.Header className='bg-stone-100' closeButton>
        <Modal.Title>About Júlio Faria</Modal.Title>
      </Modal.Header>

      <Modal.Body className='flex flex-col gap-2 text-left bg-stone-100'>

        <h5 className='text-2xl font-semibold'>Professional Profile</h5>

        <p>
          I graduated as a <b>Computer Technician</b> from <a className='text-blue-600' href="https://www.cotemig.com.br/" target="_blank">COTEMIG</a> in 2013
          and in <b>Electronic and Telecommunications Engineering</b> from <a className='text-blue-600' href="https://www.pucminas.br/" target="_blank">PUC Minas</a> in 2020.
          In the same year, I started my studies in <b>Full Stack Web Development</b> through the <a className='text-blue-600' href="https://www.freecodecamp.org/news/about/" target="_blank">freeCodeCamp</a> community, and in 2022 I specialized in the same area from PUC Minas.
        </p>

        <p>
          I have extensive professional experience in Full Stack web development, focusing on using <b>React</b>, <b>Node.js</b>, and <b>MongoDB</b> technologies as a base.
          I am constantly up to date with the latest trends and emerging technologies in the field of programming, and I find it easy to adapt to new technologies and concepts.
        </p>

        <p>
          I am passionate about continuous learning and am always willing to acquire knowledge in different areas.
          I have a proactive profile and seek to establish good interpersonal relationships, although I am also a little reserved by nature.
        </p>

        <h5 className='text-2xl font-semibold'>Professional Experiences</h5>

        <div className='flex flex-col gap-2'>

          <Media >

            <Image src={imXr.src} width={75} height={75} className="mr-3" alt="Free Code Camp" />

            <Media.Body>

              <h6 className='text-xl font-medium'>IMxr</h6>
              <p>Full Stack Web Developer<br />July/2021 - now</p>
              <p>I am responsible for developing the company's web systems, playing a crucial role in both the <b>front-end</b> and <b>back-end</b>, using mainly <b>React</b>, <b>Node.js</b> and <b>MongoDB</b> to build the systems.</p>
              <p>In addition, I also contribute to the implementation and maintenance of <b>CI/CD</b> policies in projects developed in <b>Unreal Engine</b>.</p>
              <p>I also work on developing XR web applications using the <b>PlayCanvas</b> graphics engine, as well as creating native applications for Windows using the <b>Electron</b> framework.</p>

            </Media.Body>

          </Media>

          <Media >

            <Image src={kornerz.src} width={75} height={75} className="mr-3" alt="Free Code Camp" />

            <Media.Body>

              <h6 className='text-xl font-medium'>Kornerz</h6>
              <p>Front-end web developer<br />January/2021 - April/2021</p>
              <p>I was responsible for the <b>front-end</b> web development of the company's projects, using <b>React</b> as the base technology.</p>

            </Media.Body>

          </Media>

        </div>

        <h5 className='text-2xl font-semibold'>Academic education</h5>

        <div className='flex flex-col gap-2'>

          <Media >

            <Image src={puc.src} width={75} height={75} className="mr-3" alt="PUC Minas" />

            <Media.Body>
              <h6 className='text-xl font-medium'>PUC Minas</h6>
              <p>Postgraduate - Full Stack web developer<br />2021 - 2023</p>
            </Media.Body>

          </Media>

          <Media >

            <Image src={freeCodeCamp.src} width={75} height={75} className="mr-3" alt="Free Code Camp" />

            <Media.Body>
              <h6 className='text-xl font-medium'>freeCodeCamp</h6>
              <p>Full Stack web developer<br />2020 - 2021</p>
            </Media.Body>

          </Media>

          <Media >

            <Image src={puc.src} width={75} height={75} className="mr-3" alt="PUC Minas" />

            <Media.Body>
              <h6 className='text-xl font-medium'>PUC Minas</h6>
              <p>Electronics and Telecommunications Engineer<br />2014 - 2020</p>
            </Media.Body>

          </Media>

          <Media >

            <img src={cotemig.src} width={75} height={75} className="mr-3" alt="COTEMIG" />

            <Media.Body>
              <h6 className='text-xl font-medium'>COTEMIG</h6>
              <p>Computer technician<br />2011 - 2013</p>
            </Media.Body>

          </Media>

        </div>

        <h5 className='text-2xl font-semibold'>Certificates</h5>

        <ul>

          <li>
            <a className='text-blue-600' href="https://www.freecodecamp.org/certification/julio_faria/quality-assurance-v7"
              target="_blank">Quality Assurance <Badge variant="secondary">2021</Badge></a>
          </li>

          <li>
            <a className='text-blue-600' href="https://freecodecamp.org/certification/julio_faria/data-visualization"
              target="_blank">Data Visualization <Badge variant="secondary">2021</Badge></a>
          </li>

          <li>
            <a className='text-blue-600' href="https://www.freecodecamp.org/certification/julio_faria/apis-and-microservices"
              target="_blank">APIs and Microservices <Badge variant="secondary">2020</Badge></a>
          </li>

          <li>
            <a className='text-blue-600' href="https://freecodecamp.org/certification/julio_faria/front-end-libraries"
              target="_blank">Front End Libraries <Badge variant="secondary">2020</Badge></a>
          </li>

          <li>
            <a className='text-blue-600' href="https://freecodecamp.org/certification/julio_faria/javascript-algorithms-and-data-structures"
              target="_blank">JavaScript Algorithms and Data Structures <Badge variant="secondary">2020</Badge></a>
          </li>

          <li>
            <a className='text-blue-600' href="https://www.freecodecamp.org/certification/julio_faria/responsive-web-design"
              target="_blank">Responsive Web Design <Badge variant="secondary">2020</Badge></a>
          </li>

        </ul>

        <h5 className='text-2xl font-semibold'>Development tools learned</h5>

        <div className='flex justify-evenly flex-wrap'>
          <ToolsTippy content="HTML5">  <Image width={80} height={80} className='m-1 rounded-xl' src={html.src} alt="HTML5" /> </ToolsTippy>
          <ToolsTippy content="CSS3"> <Image width={80} height={80} className='m-1 rounded-xl' src={css.src} alt="CSS3" /> </ToolsTippy>
          <ToolsTippy content="JavaScript" > <Image width={80} height={80} className='m-1 rounded-xl' src={javaScript.src} alt="JavaScript" /> </ToolsTippy>
          <ToolsTippy content="Bootstrap" > <Image width={80} height={80} className='m-1 rounded-xl' src={bootstrap.src} alt="Bootstrap" /> </ToolsTippy>
          <ToolsTippy content="jQuery" > <Image width={80} height={80} className='m-1 rounded-xl' src={jquery.src} alt="jQuery" /> </ToolsTippy>
          <ToolsTippy content="Sass" > <Image width={80} height={80} className='m-1 rounded-xl' src={sass.src} alt="Sass" /> </ToolsTippy>
          <ToolsTippy content="React" > <Image width={80} height={80} className='m-1 rounded-xl' src={react.src} alt="React" /> </ToolsTippy>
          <ToolsTippy content="Redux" > <Image width={80} height={80} className='m-1 rounded-xl' src={redux.src} alt="Redux" /> </ToolsTippy>
          <ToolsTippy content="Node.js" > <Image width={80} height={80} className='m-1 rounded-xl' src={nodeJs.src} alt="Node.js" /> </ToolsTippy>
          <ToolsTippy content="MongoDB" > <Image width={80} height={80} className='m-1 rounded-xl' src={mongoDb.src} alt="MongoDB" /> </ToolsTippy>
          <ToolsTippy content="Typescript" > <Image width={80} height={80} className='m-1 rounded-xl' src={typeScript.src} alt="Typescript" /> </ToolsTippy>
          <ToolsTippy content="Git" > <Image width={80} height={80} className='m-1 rounded-xl' src={git.src} alt="Git" /> </ToolsTippy>
          <ToolsTippy content="Expo" > <Image width={80} height={80} className='m-1 rounded-xl' src={expo.src} alt="Expo" /> </ToolsTippy>
          <ToolsTippy content="Next.js" > <Image width={80} height={80} className='m-1 rounded-xl' src={next.src} alt="Next.js" /> </ToolsTippy>
          <ToolsTippy content="Chai" > <Image width={80} height={80} className='m-1 rounded-xl' src={chai.src} alt="Chai" /> </ToolsTippy>
          <ToolsTippy content="PlayCanvas" > <Image width={80} height={80} className='m-1 rounded-xl' src={playcanvas.src} alt="PlayCanvas" /> </ToolsTippy>
          <ToolsTippy content="Jenkins" > <Image width={80} height={80} className='m-1 rounded-xl' src={jenkins.src} alt="Jenkins" /> </ToolsTippy>
          <ToolsTippy content="Elektron" > <Image width={80} height={80} className='m-1 rounded-xl' src={elektron.src} alt="Elektron" /> </ToolsTippy>
        </div>

        <h5 className='text-2xl font-semibold'>Not satisfied?</h5>

        <p>Check out my complete profile on
          <a className='text-blue-600' href="https://br.linkedin.com/in/j%C3%BAlio-faria-144832145?trk=profile-badge"
            target="_blank"> Linkedin!</a><br />
          And all my projects on <a className='text-blue-600' href="https://github.com/juliano988" target="_blank"> GitHub!</a>
        </p>

        <h5 className='text-2xl font-semibold'>Contact me!</h5>

        <p>If you enjoyed my work and want to get in touch, feel free to do so!</p>

        <p>📧 Email:</p>

        <ul>
          <li><a className='text-blue-600' href="mailto:juliofariaa@gmail.com">juliofariaa@gmail.com</a></li>
          <li><a className='text-blue-600' href="mailto:julio-pinheiroo@hotmail.com">julio-pinheiroo@hotmail.com</a></li>
        </ul>

      </Modal.Body>

      <Modal.Footer className='bg-stone-100'>

        <h6 className='m-2'>Last update: February, 2024</h6>

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
      <motion.div whileHover={{ scale: 1.2 }}>
        {props.children}
      </motion.div>
    </Tippy>

  )

}

