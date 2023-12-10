import React, { useState } from "react";
import { Carousel } from "react-bootstrap";

export default function DevChallSec1() {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <section id="dev_chall_sec_1">
      <Carousel fade activeIndex={index} onSelect={handleSelect}>

        <Carousel.Item>
          <iframe src="https://chalange-nata-house-2020-jf.netlify.app/"></iframe>
          <Carousel.Caption>
            <h4>nata.house Full Stack challenge</h4>
            <p>
              Challenge proposed by <a href="https://natahouse.com/" target="_blank">nata.house</a> company.<br />
              <a href="https://chalange-nata-house-2020-jf.netlify.app/" target="_blank">Click here to access the project</a><br/>
                <a href="https://challenge-20201030-master-1.juliano988.repl.co/" target="_blank">Back-end </a>|
                <a href="https://github.com/juliano988/challenge-20201030-master/blob/main/README.md" target="_blank"> Documentation</a>
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <iframe src="https://teste-react-junior.netlify.app/"></iframe>
          <Carousel.Caption>
            <h4>Thorson Tecnologia Front-end challenge</h4>
            <p>
              Challenge proposed by Thorson Tecnologia company.<br />
              <a href="https://teste-react-junior.netlify.app/" target="_blank">Click here to access the project</a><br/>
              <a href="https://github.com/juliano988/teste-react-junior/blob/master/README.md" target="_blank"> Documentation</a>
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <iframe src="https://challenge-20201209.netlify.app/"></iframe>
          <Carousel.Caption>
            <h4>Coodesh Full Stack challenge</h4>
            <p>
              Challenge proposed by <a href="https://coodesh.com/" target="_blank">Coodesh</a> company.<br />
              <a href="https://challenge-20201209.netlify.app/" target="_blank">Click here to access the project</a><br/>
              <a href="https://github.com/juliano988/challenge-20201209/blob/master/README.md" target="_blank"> Documentation</a>
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <iframe src="https://sim-inteligencia-dev-challenge.netlify.app/login"></iframe>
          <Carousel.Caption>
            <h4>SimInteligencia Full Stack challenge</h4>
            <p>
              Challenge proposed by <a href="https://siminteligencia.com.br/" target="_blank">SimInteligencia</a> company.<br />
              <a href="https://sim-inteligencia-dev-challenge.netlify.app/login" target="_blank">Click here to access the project</a><br/>
              <a href="https://github.com/juliano988/sim-inteligencia-dev-challenge/blob/main/README.md" target="_blank"> Documentation</a>
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <iframe src="https://desafio-frontend-jr.netlify.app/login"></iframe>
          <Carousel.Caption>
            <h4>Mestres da Web Front-end challenge</h4>
            <p>
              Challenge proposed by <a href="https://mestresdaweb.com.br/" target="_blank">Mestres da Web</a> company.<br />
              <a href="https://desafio-frontend-jr.netlify.app/login" target="_blank">Click here to access the project</a><br/>
              <a href="https://github.com/juliano988/desafio-frontend-jr/blob/main/README.md" target="_blank"> Documentation</a>
            </p>
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>
    </section>
  )
}