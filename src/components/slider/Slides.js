import React from "react";
import { Row, Col } from "antd";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./slides-style.css";

import First from "../../images/first.svg";
import Second from "../../images/second.svg";
import Third from "../../images/third.svg";
import Fourth from "../../images/fourth.svg";
import Fifth from "../../images/fifth.svg";
import Sixth from "../../images/sixth.svg";

const responsive = {
  0: { items: 2 },
  568: { items: 2 },
  767: { items: 3 },
  992: { items: 3 },
  1024: { items: 4 },
  1111: { items: 5 },
  1440: { items: 6 },
};

export default function Slides() {
  const items = [
    <div>
      <img src={First} alt="fisrt-img" />
      <div className=" slide-disc">
        <p>Candy wheels</p>
      </div>
    </div>,
    <div>
      <img src={Second} alt="second-img" />
      <div className=" slide-disc">
        <p>Breathe of life</p>
      </div>
    </div>,
    <div>
      <img src={Third} alt="third-img" />
      <div className=" slide-disc">
        <p>Disks at sundown</p>
      </div>
    </div>,
    <div>
      <img src={Fourth} alt="fourth-img" />
      <div className=" slide-disc">
        <p>Blowing bubbles</p>
      </div>
    </div>,
    <div>
      <img src={Fifth} alt="fifth-img" />
      <div className=" slide-disc">
        <p>Perfect balance</p>
      </div>
    </div>,
    <div>
      <img src={Sixth} alt="sixth-img" />
      <div className=" slide-disc">
        <p>Helmet of the Tiger</p>
      </div>
    </div>,
  ];
  return (
    <>
      <Row style={{ paddingTop: `5%` }}>
        <Col
          xs={{ span: 20, offset: 3 }}
          sm={{ span: 20, offset: 3 }}
          md={{ span: 15, offset: 3 }}
          lg={{ span: 12, offset: 2 }}
        >
          <h1 className="slider-title">More works by Jumaker</h1>
        </Col>
      </Row>
      <div className="carousel-wrapper HomeSliders-sec">
        <AliceCarousel
          mouseTracking
          items={items}
          responsive={responsive}
          controlsStrategy="alternate"
          disableButtonsControls="true"
          dotsDisabled={true}
     git
          infinite={true}
        />
      </div>

      <h5 className="more-sliders">More works by Jumaker</h5>
    </>
  );
}
