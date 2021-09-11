import { Row, Col, Button } from "antd";
import "./bid-style.css";

export default function Bid() {
  return (
    <>
      <Row>
        <Col
          xs={{ span: 23, offset: 0 }}
          sm={{ span: 11, offset: 0 }}
          md={{ span: 11, offset: 0 }}
          lg={{ span: 10, offset: 0 }}
        >
          <p className="part3">Current bid</p>
          <div className="ETH">
            <h2 className="bid-text">3.50 ETH</h2>
            <span>$12.782</span>
          </div>
          <Button className="about-button">Bid with ETH</Button>
        </Col>

        <Col
          xs={{ span: 23, offset: 0 }}
          sm={{ span: 12, offset: 1 }}
          md={{ span: 12, offset: 1 }}
          lg={{ span: 10, offset: 1 }}
        >
          <p className="part3">Auction ending in</p>
          <div className="countdown-container">
            <div className="countdown-el ">
              <h2 className="big-text">19</h2>
              <span>hrs</span>
            </div>
            <div className="countdown-el ">
              <h2 className="big-text">23</h2>
              <span>mins</span>
            </div>
            <div className="countdown-el ">
              <h2 className="big-text">54</h2>
              <span>secs</span>
            </div>
          </div>
          <Button className="about-button">Bid with card</Button>
        </Col>
      </Row>
    </>
  );
}
