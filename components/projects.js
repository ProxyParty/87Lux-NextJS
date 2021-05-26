import React, { Component, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Icon from "@fortawesome/fontawesome-free-solid";
import { projectsData } from "./projectsData";

const Projects = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  function slideOrder() {
    var slideNum = 1;
    while (slideNum < slides.length) {
      slideNum++;
    }
    return slideNum;
  }
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  return (
    <div className="container-fluid projects">
      <div className="row">
        <div className="projects__slider-wrap">
          <span className="title">Latest Projects</span>
          <div className="slider">
            <div className="slide-section">
              {/* projectsData.map is being used in a way that lays out an entire array belonging to a JSON file, in this case an array of images */}
              {projectsData.map((slide, index) => {
                return (
                  <div
                    className={
                      index === current
                        ? `col-5 carousel_slide slide first`
                        : `col-5 carousel_slide slide`
                    }
                    key={index}
                  >
                    <Image
                      src={slide.image}
                      className="image-item"
                      layout="fill"
                      priority={true}
                      quality={100}
                    />
                    )
                  </div>
                );
              })}
            </div>
          </div>
          <FontAwesomeIcon
            className="chevleft"
            icon={Icon.faChevronLeft}
            onClick={prevSlide}
          />

          <FontAwesomeIcon
            className="chevright"
            icon={Icon.faChevronRight}
            onClick={nextSlide}
          />
        </div>
      </div>
      <div className="row projects__buttons justify-content-center">
        <div className="btn viewthemes">View Themes</div>
        <div className="btn viewapps">View Apps</div>
      </div>
    </div>
  );
};

export default Projects;
