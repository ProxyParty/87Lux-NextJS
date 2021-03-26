import React, { Component, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Icon from "@fortawesome/fontawesome-free-solid";
import { projectsData } from "./projectsData";

class Projects extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="container-fluid projects">
        <div className="row">
          <div className="projects__slider-wrap">
            <span className="title">Latest Projects</span>
            <div className="slider">
              <div className="slide-section">
                <div className="col-4 slide1 carousel_slide">
                  {projectsData.map((slide, index) => {
                    return (
                      <Image
                        src={slide.image}
                        className="image-item"
                        layout="fill"
                        priority={true}
                        quality={100}
                      />
                    );
                  })}
                </div>
                <div className="col-4 slide2 carousel_slide">
                  <Image
                    src="/img/Rectangle8.png"
                    className="image-item"
                    layout="fill"
                    priority={true}
                    quality={100}
                  />
                </div>
                <div className="col-4 slide3 carousel_slide">
                  <Image
                    src="/img/Rectangle8.png"
                    className="image-item"
                    layout="fill"
                    priority={true}
                    quality={100}
                  />
                </div>
                {/* <div className="col-4 slide2 carousel-item active">
                  <div className="image-item"></div>
                  <style jsx>{`
                    .image-item {
                      background: url("/img/Rectangle8.png");
                      background-position: center;
                      object-fit: cover;
                    }
                  `}</style>
                </div> */}
                {/* <div className="col-4 slide3 carousel-item active">
                  <div className="image-item"></div>
                  <style jsx>{`
                    .image-item {
                      background: url("/img/Rectangle7.png");
                      background-position: center;
                      object-fit: cover;
                    }
                  `}</style>
                </div> */}
              </div>
            </div>
            <FontAwesomeIcon className="chevleft" icon={Icon.faChevronLeft} />

            <FontAwesomeIcon className="chevright" icon={Icon.faChevronRight} />
          </div>
        </div>
        <div className="row projects__buttons justify-content-center">
          <div className="btn viewthemes">View Themes</div>
          <div className="btn viewapps">View Apps</div>
        </div>
      </div>
    );
  }
}

export default Projects;
