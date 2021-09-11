import { Row, Col } from "antd";
import "./footer-style.css";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <h1>Are you an Artist?</h1>
        <h1>Tell us about you</h1>

        <Row className="footer-dist">
          <Col
            xs={{ span: 22, offset: 1 }}
            sm={{ span: 8, offset: 1 }}
            md={{ span: 6, offset: 1 }}
            lg={{ span: 6, offset: 1 }}
          >
            <div className="first-col">
              <p>hello@jumy.co</p>
              <p>
                The Offices 4, One Central <br /> Dubai, United Arab Emirates
              </p>
              <p>All right reserved.</p>
            </div>
          </Col>

          <Col
            xs={{ span: 20, offset: 1 }}
            sm={{ span: 5, offset: 0 }}
            md={{ span: 4, offset: 2 }}
            lg={{ span: 3, offset: 6 }}
          >
            <div className="second-col">
              <p>Instagram</p>
              <p>Terms</p>
            </div>
          </Col>

          <Col
            xs={{ span: 20, offset: 1 }}
            sm={{ span: 5, offset: 0 }}
            md={{ span: 4, offset: 1 }}
            lg={{ span: 3, offset: 0 }}
          >
            <div className="second-col">
              <p>Twitter</p>
              <p>FAQ</p>
            </div>
          </Col>

          <Col
            xs={{ span: 6, offset: 1 }}
            sm={{ span: 5, offset: 0 }}
            md={{ span: 4, offset: 1 }}
            lg={{ span: 3, offset: 0 }}
          >
            <div className="second-col">
              <p>Discord</p>
              <p>Policy</p>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}
