import Image from "next/image";

const Footer = () => {
  return (
    <div className="footer">
      <span className="footer__title">need a custom solution?</span>
      <div className="footer__half-tone">
        <span>We work with any budget!</span>
        <div className="btn btn-primary">Lets Get Started</div>
      </div>
      <div className="container justify-content-md-center mid-footer">
        <div className="row">
          <div className="col-3 mid-footer__services">
            <div className="span2 service active">
              <span>01</span> Install Theme
            </div>
            <div className="span2 service">
              <span>02</span> Landing Page
            </div>
            <div className="span2 service">
              <span>03</span> Build Online Store
            </div>
            <div className="span2 service">
              <span>04</span> Custom Theme
            </div>
            <div className="span2 service">
              <span>05</span> Custom Web Site
            </div>
            <div className="span2 service">
              <span>06</span> Custom App
            </div>
            <div className="span2 service">
              <span>07</span> Marketing Assets
            </div>
          </div>
          <div className="col-9 solutions">
            <div className="row solutions__firstrow">
              <div className="col-4 title">Install Theme</div>
              <div className="col-8 blankspace"></div>
            </div>
            <div className="row solutions__secondrow">
              <div className="col-4 summary">
                Having trouble with installing any of our themes? Well we can
                help you by installing the theme for you!
              </div>
              <div className="col-8 images">
                <Image
                  className="solutions-img"
                  src="/img/laptopguy.jpg"
                  layout="fill"
                  priority={true}
                  quality={100}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
