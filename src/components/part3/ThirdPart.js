import { Row, Col } from "antd";
import "./thirdPart-style.css";

import Artists from "../../images/artists.svg";
export default function ThirdPart() {
  return (
    <>
      <Row className="about-dist">
        <Col
          xs={{ span: 18, offset: 5 }}
          sm={{ span: 9, offset: 5 }}
          md={{ span: 9, offset: 4 }}
          lg={{ span: 9, offset: 2 }}
        >
          <div className="history-part firstOne">
            <h2>History</h2>
            <p>
              @Felicia bought from @Jumaker for 0.5 ETH ($76)
              <br />
              <span>One minute ago [<span className="underline-word">view tx</span>]</span>
            </p>
          </div>

          <div className="history-part second">
            <p>
              Created by @Jumaker
              <br />
              <span>One hour ago [<span className="underline-word">view tx</span>]</span>
            </p>
          </div>
        </Col>

        <Col
          xs={{ span: 18, offset: 5 }}
          sm={{ span: 9, offset: 5 }}
          md={{ span: 9, offset: 2 }}
          lg={{ span: 9, offset: 3 }}
        >
          <div className="history-part artists-part">
            <h2>Artist</h2>
            <div className="display-artists">
              <img src={Artists} alt="artists-img" />
              <p>
                @Jumaker
                <br />
                <span>United Arab Emirates</span>
              </p>
            </div>
          </div>

          <div className="secondOne">
            <p>
              <i class="fa fa-instagram" aria-hidden="true"></i> @Jumaker
              <br />
              <i class="fa fa-twitter" aria-hidden="true"></i>@Jumaker
            </p>
          </div>
        </Col>
      </Row>
    </>
  );
}
