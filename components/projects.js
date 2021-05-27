import React, { Component, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Icon from "@fortawesome/fontawesome-free-solid";
/* imported projectsData JSON file as a module */
import { projectsData } from "./projectsData";

const Projects = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
    var i;
    var projSlides = document.querySelectorAll(".slide");
    for (i = 0; i < length; i++) {
      projSlides[i].style.order = i - 1;
    }
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
              {/* ProjectsData.map is being used in a way that lays out an entire array belonging to a JSON file, in this case an array of images */}
              {projectsData.map((slide, index) => {
                return (
                  <div
                    /* Clarifies the current slide's class name and what the other slides' class names will be */
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
            /* onClick attribute used to switch to the previous slide once the left chevron is clicked */
            onClick={prevSlide}
          />

          <FontAwesomeIcon
            className="chevright"
            icon={Icon.faChevronRight}
            /* onClick attribute used to switch to the next slide once the right chevron is clicked */
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
