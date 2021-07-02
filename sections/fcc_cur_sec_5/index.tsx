import React, { useState } from "react";
import { Carousel } from "react-bootstrap";

export default function FccCurSect5() {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <section id="fcc_cur_sec_5">
      <Carousel fade activeIndex={index} onSelect={handleSelect}>

        <Carousel.Item>
          <iframe src="https://boilerplate-project-metricimpconverter-3.juliano988.repl.co/"></iframe>
          <Carousel.Caption>
            <h4>Metric/Imperial Converter</h4>
            <p>
              First project of the <b>Quality Assurance</b> of the <a
                href="https://www.freecodecamp.org/news/about/" target="_blank">freeCodeCamp</a> community.
                <br /><a href="https://boilerplate-project-metricimpconverter-3.juliano988.repl.co/" target="_blank">Click here to
              access the project</a>
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <iframe src="https://boilerplate-project-issuetracker-2.juliano988.repl.co/"></iframe>
          <Carousel.Caption>
            <h4>Issue Tracker</h4>
            <p>
              Second project of the <b>Quality Assurance</b> of the <a
                href="https://www.freecodecamp.org/news/about/" target="_blank">freeCodeCamp</a> community.
              <br /><a href="https://boilerplate-project-issuetracker-2.juliano988.repl.co/" target="_blank">Click here
              to access the project</a>
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <iframe src="https://boilerplate-project-library.juliano988.repl.co/"></iframe>
          <Carousel.Caption>
            <h4>Personal Library</h4>
            <p>
              Third project of the <b>Quality Assurance</b> of the <a
                href="https://www.freecodecamp.org/news/about/" target="_blank">freeCodeCamp</a> community.
              <br /><a href="https://boilerplate-project-library.juliano988.repl.co/" target="_blank">Click here
                to access the project</a>
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <iframe src="https://boilerplate-project-sudoku-solver.juliano988.repl.co/"></iframe>
          <Carousel.Caption>
            <h4>Sudoku Solver</h4>
            <p>
              Fourth project of the <b>Quality Assurance</b> of the <a
                href="https://www.freecodecamp.org/news/about/" target="_blank">freeCodeCamp</a> community.
              <br /><a href="https://boilerplate-project-sudoku-solver.juliano988.repl.co/" target="_blank">Click
                here to access the project</a>
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <iframe src="https://boilerplate-project-american-british-english-translator.juliano988.repl.co/"></iframe>
          <Carousel.Caption>
            <h4>American British Translator</h4>
            <p>
              Final project of the <b>Quality Assurance</b> of the <a
                href="https://www.freecodecamp.org/news/about/" target="_blank">freeCodeCamp</a> community.
              <br /><a href="https://boilerplate-project-american-british-english-translator.juliano988.repl.co/" target="_blank">Click here to
                access the project</a>
            </p>
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>
    </section>
  )
}