import React, { useState } from "react";
import { Carousel } from "react-bootstrap";

export default function FccCurSect3() {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <section id="fcc_cur_sec_3">
      <Carousel fade activeIndex={index} onSelect={handleSelect}>

        <Carousel.Item>
          <iframe src="https://boilerplate-project-timestamp.juliano988.repl.co"></iframe>
          <Carousel.Caption>
            <h4>Timestamp Microservice</h4>
            <p>
              First project of the <b>APIs and Microservices Certification </b> of the <a
                href="https://www.freecodecamp.org/news/about/" target="_blank">Free Code Camp</a> community.
                <br /><a href="https://boilerplate-project-timestamp.juliano988.repl.co" target="_blank">Click here to
              access the project</a>
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <iframe src="https://boilerplate-project-headerparser-1.juliano988.repl.co"></iframe>
          <Carousel.Caption>
            <h4>Request Header Parser Microservice</h4>
            <p>
              Second project of the <b>APIs and Microservices Certification </b> of the <a
                href="https://www.freecodecamp.org/news/about/" target="_blank">Free Code Camp</a> community.
              <br /><a href="https://boilerplate-project-headerparser-1.juliano988.repl.co" target="_blank">Click here
              to access the project</a>
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <iframe src="https://boilerplate-project-urlshortener-10.juliano988.repl.co"></iframe>
          <Carousel.Caption>
            <h4>URL Shortener Microservice</h4>
            <p>
              Third project of the <b>APIs and Microservices Certification </b> of the <a
                href="https://www.freecodecamp.org/news/about/" target="_blank">Free Code Camp</a> community.
              <br /><a href="https://boilerplate-project-urlshortener-10.juliano988.repl.co" target="_blank">Click here
                to access the project</a>
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <iframe src="https://boilerplate-project-exercisetracker-2.juliano988.repl.co/"></iframe>
          <Carousel.Caption>
            <h4>Exercise Tracker</h4>
            <p>
              Fourth project of the <b>APIs and Microservices Certification </b> of the <a
                href="https://www.freecodecamp.org/news/about/" target="_blank">Free Code Camp</a> community.
              <br /><a href="https://boilerplate-project-exercisetracker-2.juliano988.repl.co" target="_blank">Click
                here to access the project</a>
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <iframe src="https://boilerplate-project-filemetadata.juliano988.repl.co"></iframe>
          <Carousel.Caption>
            <h4>File Metadata Microservice</h4>
            <p>
              Final project of the <b>APIs and Microservices Certification </b> of the <a
                href="https://www.freecodecamp.org/news/about/" target="_blank">Free Code Camp</a> community.
              <br /><a href="https://boilerplate-project-filemetadata.juliano988.repl.co" target="_blank">Click here to
                access the project</a>
            </p>
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>
    </section>
  )
}