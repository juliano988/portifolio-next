import React, { useState } from "react";
import { Carousel } from "react-bootstrap";

export default function FccCurSect1() {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <section id="fcc_cur_sec_1">
      <Carousel fade activeIndex={index} onSelect={handleSelect}>

        <Carousel.Item>
            <iframe src="https://tribute-page-jf.netlify.app/"></iframe>
          <Carousel.Caption>
            <h4>Tribute Page</h4>
            <p>
              First project of the <b>Responsive Web Design Certification</b> of the <a
                href="https://www.freecodecamp.org/news/about/" target="_blank">freeCodeCamp</a> community.
                <br /><a href="https://tribute-page-jf.netlify.app/" target="_blank">Click here to access the
                  project</a>
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <iframe src="https://survey-form-jf.netlify.app/"></iframe>
          <Carousel.Caption>
            <h4>Survey Form</h4>
            <p>
              Second project of the <b>Responsive Web Design Certification</b> of the <a
                href="https://www.freecodecamp.org/news/about/" target="_blank">freeCodeCamp</a> community.
                <br /><a href="https://survey-form-jf.netlify.app/" target="_blank">Click here to access the project</a>
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <iframe src="https://product-landing-page-jf.netlify.app/"></iframe>
          <Carousel.Caption>
            <h4>Product Landing Page</h4>
            <p>
              Third project of the <b>Responsive Web Design Certification</b> of the <a
                href="https://www.freecodecamp.org/news/about/" target="_blank">freeCodeCamp</a> community.
                <br /><a href="https://product-landing-page-jf.netlify.app/" target="_blank">Click here to access the
                  project</a>
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <iframe src="https://technical-documentation-page-jf.netlify.app/"></iframe>
          <Carousel.Caption>
            <h4>Technical Documentation Page</h4>
            <p>
              Fourth project of the <b>Responsive Web Design Certification</b> of the <a
                href="https://www.freecodecamp.org/news/about/" target="_blank">freeCodeCamp</a> community.
                <br /><a href="https://technical-documentation-page-jf.netlify.app/" target="_blank">Click here to
                  access the project</a>
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <iframe src="https://personal-portfolio-webpage-jf.netlify.app/"></iframe>
          <Carousel.Caption>
            <h4>Personal Portfolio Webpage</h4>
            <p>
              Final project of the <b>Responsive Web Design Certification</b> of the <a
                href="https://www.freecodecamp.org/news/about/" target="_blank">freeCodeCamp</a> community.
                <br /><a href="https://personal-portfolio-webpage-jf.netlify.app/" target="_blank">Click here to access
                  the project</a>
            </p>
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>
    </section>
  )
}