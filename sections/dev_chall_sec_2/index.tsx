import React, { useState } from "react";
import { Carousel } from "react-bootstrap";

export default function DevChallSec2() {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <section id="dev_chall_sec_2">
      <Carousel fade activeIndex={index} onSelect={handleSelect}>

        <Carousel.Item>
          <iframe src="https://dev-challenge-wa-project-jf.netlify.app/"></iframe>
          <Carousel.Caption>
            <h4>Wa Project Front-end challenge</h4>
            <p>
              Challenge proposed by <a href="https://waproject.com.br/" target="_blank">Wa Project</a> company.<br />
              <a href="https://dev-challenge-wa-project-jf.netlify.app/" target="_blank">Click here to access the project</a><br/>
                <a href="https://github.com/juliano988/dev-challenge-wa-project/blob/main/README.md" target="_blank"> Documentation</a>
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <iframe className="appIframe" src="https://appetize.io/embed/x17n7d054qny154z4nmfahveyr?device=iphone8"
            width="378px" height="800px" frameBorder="0" scrolling="no"></iframe>
          <Carousel.Caption>
            <h4>Book APP</h4>
            <p>App developed using <a href="https://expo.io/" target="_blank">Expo</a> framework</p>
            <p>
              <a href="https://appetize.io/app/x17n7d054qny154z4nmfahveyr" target="_blank">Click here to access the
                  project</a><br/>
                <a href="apks/BookApp.apk">Download the APK</a><br/>
                <a href="https://github.com/juliano988/fullstack-challenge#readme" target="_blank">Documentation</a>
            </p>
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>
    </section>
  )
}