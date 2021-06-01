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
          <iframe src="https://d3-bar-chart-jf.netlify.app/"></iframe>
          <Carousel.Caption>
            <h4>Visualize Data with a Bar Chart</h4>
            <p>
              First project of the <b>Data Visualization</b> of the <a
                href="https://www.freecodecamp.org/news/about/" target="_blank">Free Code Camp</a> community.
                <br /><a href="https://d3-bar-chart-jf.netlify.app/" target="_blank">Click here to
              access the project</a>
            </p>
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>
    </section>
  )
}