import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import styles from '../../styles/sections/others/others_styles.module.scss'

export default function TakeHomeProjects() {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (

    <section id="fcc_THP">

      <Carousel fade activeIndex={index} onSelect={handleSelect}>

        <Carousel.Item>

          <iframe className="appIframe" src="https://appetize.io/embed/e7k1gd5vaj9g8enu4ta23417v0?device=iphone8"
            ></iframe>

          <Carousel.Caption>
            <h4>Clima APP</h4>
            <p>App developed using <a href="https://expo.io/" target="_blank">Expo</a> framework</p>
            <p>
              <a href="https://appetize.io/app/e7k1gd5vaj9g8enu4ta23417v0" target="_blank">Click here to access the
                project</a><br />
              <a href="apks/clima-jf-APK.apk">Download the APK</a>
            </p>
          </Carousel.Caption>

        </Carousel.Item>

        <Carousel.Item>

          <iframe src="https://7n29l8-3000.csb.app/"></iframe>

          <Carousel.Caption>
            <h4>Tic-Tac-Toe Multiplayer 🎮</h4>
            <p>A multiplayer game developed using <a href="https://socket.io/" target="_blank">Socket.io</a></p>
            <a href="https://7n29l8-3000.csb.app/" target="_blank">Click here to access the project</a><br/>
          </Carousel.Caption>

        </Carousel.Item>

      </Carousel>

    </section>

  )

}