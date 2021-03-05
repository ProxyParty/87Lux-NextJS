import React, { Component } from "react";
import Image from "next/image";
import Link from "next/link";

class Navbar extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="container-fluid navbar__content">
        <div className="row">
          <div className="col-8 navbar__logo">
            <span>87Lux</span>
          </div>
          <div className="col-4 navbar__links">
            <Link href="/">
              <a className="link">Themes</a>
            </Link>
            <Link href="#">
              <a className="link">Apps</a>
            </Link>
            <Link href="#">
              <a className="link">Assets</a>
            </Link>
            <Link href="#">
              <a className="link">Contact Us</a>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
