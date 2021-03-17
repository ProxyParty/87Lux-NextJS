import React, { Component, useState } from "react";
import ReactPlayer from "react-player";
import Image from "next/image";
import Link from "next/link";

class Jumbo extends Component {
  constructor() {
    super();
    this.state = {};
  }

  state = { isActive: false };

  handleToggle = () => {
    this.setState({ isActive: !this.state.isActive });
  };

  render() {
    const isActive = this.state.isActive;
    return (
      <div className=" container-fluid jumbo">
        <div className="row">
          <div className="col-6 jumbo__col1">
            <div className="row-fluid">
              <div className="span2 jumbo__heading">
                We Give Your Business an Edge Over Your Competitors!
              </div>
              <div className="span2 jumbo__subtitle">
                Everything you need for your business: Themes, Apps, Assets{" "}
                <br /> and More...
              </div>
              <form>
                <div className="form-group jumbo__email">
                  <input
                    type="email"
                    className="enter-email"
                    id="enter-email"
                    placeholder="Enter your email address"
                  />
                </div>
                <button type="submit" className="btn jumbo__btn">
                  Get Started
                </button>
              </form>
            </div>
          </div>
          <div className="col-6 jumbo__col2">
            <div className="jumbo__video">
              <span className="screen" onClick={this.handleToggle}>
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=7EUVJaKJtBY"
                  light={true}
                  playing={false}
                  width="100%"
                  height="100%"
                  style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                  }}
                />
                <span className="play-circle">
                  <span className="play-triangle"></span>
                </span>
              </span>
            </div>
            <span className="triangle-wrap">
              <span className="triangle"></span>
            </span>
            <div className="jumbo__grn-circ">
              <span></span>
            </div>
            <div className="jumbo__blu-circ">
              <span></span>
            </div>
          </div>
        </div>
        <div className="row justify-content-md-center jumbo__platforms">
          <span className="title">Platforms</span>
          <span className="col-md-3 shopify"></span>
          <span className="col-md-auto wordpress"></span>
          <span className="col-md-auto woo"></span>
          <span className="col-md-3 wix"></span>
        </div>
        <div
          className={`container-fluid modal-wrap ${
            isActive ? "modal-active" : ""
          }`}
        >
          <div
            className="container-fluid close-wrap"
            onClick={this.handleToggle}
          >
            <div className="close-icon">
              <div className="close1"></div>
              <div className="close2"></div>
            </div>
          </div>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=7EUVJaKJtBY"
            className="modal-video"
            width="60%"
            height="60%"
            playing={false}
            style={{
              top: "20%",
              left: "20%",
              zIndex: 10,
            }}
          />
        </div>
      </div>
    );
  }
}

export default Jumbo;
