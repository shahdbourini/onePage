import { Row, Col } from "antd";
import "antd/dist/antd.css";

import AboutImg from "../../images/aboutImg.svg";
import Bid from "../bid/Bid";
import "./about-style.css";

export default function About() {
  return (
    <>
      <Row className="about-dist">
        <Col
          xs={{ span: 18, offset: 5 }}
          sm={{ span: 18, offset: 4 }}
          md={{ span: 18, offset: 4 }}
          lg={{ span: 11, offset: 2 }}
        >
            <div>
          <div className="aboutImg">
            <img src={AboutImg} alt="aboutImg" />
          </div>

            </div>
        </Col>

        <Col
          xs={{ span: 18, offset: 5 }}
          sm={{ span: 18, offset: 4 }}
          md={{ span: 18, offset: 4 }}
          lg={{ span: 8, offset: 1 }}
        >
          <div className="about-title">
            <h1>RESTING REFUGE</h1>
            <span>Edition 1 of 1</span>
          </div>
          <br />
          <div className="part2">
            <p>
              <b>About the Artwork</b> <br /> Resting refuge translates the
              symbiotic relationship between colors and nature.
            </p>
            <br />
            <p>
              <b>About the Artist </b> <br />
              Jumaker is a contemporary digital Artist with a unique signature
              and very authentic genre.
            </p>
          </div>
          <Bid />
        </Col>
      </Row>
    </>
  );
}
