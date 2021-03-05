import React, { Component } from "react";
import Image from "next/image";
import Link from "next/link";

class Team extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="team">
        <div className="row">
          <div className="team__title">Meet The Team</div>
          <div className="grncirc">
            <Image
              className="circ-img1"
              src="/img/person1.jpg"
              layout="fill"
              priority={true}
              quality={100}
            />
          </div>
          <div className="blucirc">
            <Image
              className="circ-img2"
              src="/img/person2.jpg"
              layout="fill"
              priority={true}
              quality={100}
            />
          </div>
          <div className="prplcirc">
            <Image
              className="circ-img3"
              src="/img/person3.jpg"
              layout="fill"
              priority={true}
              quality={100}
            />
          </div>
          <div className="limecirc">
            <Image
              className="circ-img4"
              src="/img/person4.jpg"
              layout="fill"
              priority={true}
              quality={100}
            />
          </div>
          <div className="pinkcirc">
            <Image
              className="circ-img5"
              src="/img/person5.jpg"
              layout="fill"
              priority={true}
              quality={100}
            />
          </div>
          <div className="orngcirc">
            <Image
              className="circ-img6"
              src="/img/person6.jpg"
              layout="fill"
              priority={true}
              quality={100}
            />
          </div>
          <div className="redorgcirc">
            <Image
              className="circ-img7"
              src="/img/person7.jpg"
              layout="fill"
              priority={true}
              quality={100}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Team;
