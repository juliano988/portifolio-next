import React, { useState } from "react";
import { Carousel } from "react-bootstrap";

export default function FccCurSect2() {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <section id="fcc_cur_sec_2">
      <Carousel fade activeIndex={index} onSelect={handleSelect}>

        <Carousel.Item>
          <iframe src="https://build-a-random-quote-machine.netlify.app/"></iframe>
          <Carousel.Caption>
            <h4>Random Quote Machine</h4>
            <p>
              First project of the <b>Front End Libraries Certification</b> of the <a
                href="https://www.freecodecamp.org/news/about/" target="_blank">Free Code Camp</a> community.
                <br /><a href="https://build-a-random-quote-machine.netlify.app/" target="_blank">Click here to access
                  the project</a>
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <iframe src="https://markdown-previewer-jf.netlify.app/"></iframe>
          <Carousel.Caption>
            <h4>Markdown Previewer</h4>
            <p>
              Second project of the <b>Front End Libraries Certification</b> of the <a
                href="https://www.freecodecamp.org/news/about/" target="_blank">Free Code Camp</a> community.
              <br /><a href="https://markdown-previewer-jf.netlify.app/" target="_blank">Click here to access the
                project</a>
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <iframe src="https://piano-keyboard.netlify.app/"></iframe>
          <Carousel.Caption>
            <h4>Drum Machine</h4>
            <p>
              Third project of the <b>Front End Libraries Certification</b> of the <a
                href="https://www.freecodecamp.org/news/about/" target="_blank">Free Code Camp</a> community.
              <br /><a href="https://piano-keyboard.netlify.app/" target="_blank">Click here to access the project</a>
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <iframe src="https://calculator-jf.netlify.app/"></iframe>
          <Carousel.Caption>
            <h4>JavaScript Calculator</h4>
            <p>
              Fourth project of the <b>Front End Libraries Certification</b> of the <a
                href="https://www.freecodecamp.org/news/about/" target="_blank">Free Code Camp</a> community.
              <br /><a href="https://calculator-jf.netlify.app/" target="_blank">Click here to access the project</a>
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
        <iframe src="https://25-5-clock-jf.netlify.app/"></iframe>
          <Carousel.Caption>
            <h4>25 + 5 Clock</h4>
            <p>
              Final project of the <b>Front End Libraries Certification</b> of the <a
                href="https://www.freecodecamp.org/news/about/" target="_blank">Free Code Camp</a> community.
              <br /><a href="https://25-5-clock-jf.netlify.app/" target="_blank">Click here to access the project</a>
            </p>
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>
    </section>
  )
}