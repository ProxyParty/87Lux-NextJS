import React, { Component } from "react";
import Image from "next/image";
import Link from "next/link";

class Projects extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="container-fluid projects">
        <div className="row">
          <div className="projects__slider-wrap carousel" data-ride="carousel">
            <div className="slider carousel-inner">
              <span className="slider__title">Latest Projects</span>
              <div className="vid-section">
                <div className="col-4 video1 carousel-item active">
                  <div className="image"></div>
                  <style jsx>{`
                    .image {
                      background: url("/img/Rectangle7.png");
                      background-position: center;
                      object-fit: cover;
                    }
                  `}</style>
                </div>
                <div className="col-4 video2 carousel-item active">
                  <div className="image"></div>
                  <style jsx>{`
                    .image {
                      background: url("/img/Rectangle8.png");
                      background-position: center;
                      object-fit: cover;
                    }
                  `}</style>
                </div>
                <div className="col-4 video3 carousel-item active">
                  <div className="image"></div>
                  <style jsx>{`
                    .image {
                      background: url("/img/Rectangle7.png");
                      background-position: center;
                      object-fit: cover;
                    }
                  `}</style>
                </div>
              </div>
            </div>
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
