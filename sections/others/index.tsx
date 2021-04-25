import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import styles from '../../styles/sections/others/others_styles.module.scss'

export default function Others() {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <section id="others">
      <Carousel fade activeIndex={index} onSelect={handleSelect}>

        <Carousel.Item>
          <iframe src="https://chalange-nata-house-2020-jf.netlify.app/"></iframe>
          <Carousel.Caption>
            <h4>nata.house chalenge 2020</h4>
            <p>
              Challenge proposed by <a href="https://natahouse.com/" target="_blank">nata.house</a> company.<br />
              <a href="https://chalange-nata-house-2020-jf.netlify.app/" target="_blank">Front-end </a>|
                <a href="https://challenge-20201030-master-1.juliano988.repl.co/" target="_blank">Back-end </a>|
                <a href="https://github.com/juliano988/challenge-20201030-master/blob/main/README.md"
                target="_blank">README.md</a>
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <iframe className={styles.climaAppJfIframe} src="https://appetize.io/embed/e7k1gd5vaj9g8enu4ta23417v0?device=iphone8"
            width="378px" height="800px" frameBorder="0" scrolling="no"></iframe>
          <Carousel.Caption>
            <h4>Clima APP</h4>
            <p>App developed using <a href="https://expo.io/" target="_blank">Expo</a> framework</p>
            <p>
              <a href="https://appetize.io/app/e7k1gd5vaj9g8enu4ta23417v0" target="_blank">Click here to access the
                  project</a> |
                <a href="/api/apks/clima-jf-APK">Download the APK</a>
            </p>
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>
    </section>
  )
}