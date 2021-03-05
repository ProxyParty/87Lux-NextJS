import React, { Component } from "react";
import Image from "next/image";
import Link from "next/link";

class Jumbo extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="jumbo">
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
                    class="enter-email"
                    id="enter-email"
                    placeholder="Enter your email address"
                  />
                </div>
                <button type="submit" class="btn jumbo__btn">
                  Get Started
                </button>
              </form>
            </div>
          </div>
          <div className="col-6 jumbo__col2">
            <div className="jumbo__video">
              <span className="screen">
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
      </div>
    );
  }
}

export default Jumbo;
