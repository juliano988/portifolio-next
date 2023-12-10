import React, { useState } from "react";
import { Carousel } from "react-bootstrap";

export default function FccCurSect4() {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <section id="fcc_cur_sec_4">
      <Carousel fade activeIndex={index} onSelect={handleSelect}>

        <Carousel.Item>
          <iframe src="https://d3-bar-chart-jf.netlify.app/"></iframe>
          <Carousel.Caption>
            <h4>Visualize Data with a Bar Chart</h4>
            <p>
              First project of the <b>Data Visualization</b> of the <a
                href="https://www.freecodecamp.org/news/about/" target="_blank">freeCodeCamp</a> community.
                <br /><a href="https://d3-bar-chart-jf.netlify.app/" target="_blank">Click here to
              access the project</a>
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <iframe src="https://fcc-scatter-plot-1.juliano988.repl.co/"></iframe>
          <Carousel.Caption>
            <h4>Visualize Data with a Scatterplot Graph</h4>
            <p>
              Second project of the <b>Data Visualization</b> of the <a
                href="https://www.freecodecamp.org/news/about/" target="_blank">freeCodeCamp</a> community.
              <br /><a href="https://fcc-scatter-plot-1.juliano988.repl.co/" target="_blank">Click here
              to access the project</a>
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <iframe src="https://fcc-heat-map-jf.netlify.app/"></iframe>
          <Carousel.Caption>
            <h4>Visualize Data with a Heat Map</h4>
            <p>
              Third project of the <b>Data Visualization</b> of the <a
                href="https://www.freecodecamp.org/news/about/" target="_blank">freeCodeCamp</a> community.
              <br /><a href="https://fcc-heat-map-jf.netlify.app/" target="_blank">Click here
                to access the project</a>
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <iframe src="https://fcc-choropleth-map-jf.netlify.app/"></iframe>
          <Carousel.Caption>
            <h4>Visualize Data with a Choropleth Map</h4>
            <p>
              Fourth project of the <b>Data Visualization</b> of the <a
                href="https://www.freecodecamp.org/news/about/" target="_blank">freeCodeCamp</a> community.
              <br /><a href="https://fcc-choropleth-map-jf.netlify.app/" target="_blank">Click
                here to access the project</a>
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <iframe src="https://treemap-diagram-jf.netlify.app/"></iframe>
          <Carousel.Caption>
            <h4>Visualize Data with a Treemap Diagram</h4>
            <p>
              Final project of the <b>Data Visualization</b> of the <a
                href="https://www.freecodecamp.org/news/about/" target="_blank">freeCodeCamp</a> community.
              <br /><a href="https://treemap-diagram-jf.netlify.app/" target="_blank">Click here to
                access the project</a>
            </p>
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>
    </section>
  )
}