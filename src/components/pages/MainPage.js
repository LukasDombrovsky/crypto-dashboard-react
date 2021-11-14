import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { HashLink } from "react-router-hash-link";

import Button from "../UI/Button";
import SectionWithBgImage from "../UI/SectionWithBgImage";
import classes from "./MainPage.module.scss";

import logo from "../../img/logo.png";
import bgImage from "../../img/cover.jpg";

const MainPage = () => {
  return (
    <SectionWithBgImage bgImage={bgImage} className={classes.mainPage}>
      <Container>
        <Row>
          <Col className="d-flex justify-content-center">
            <img src={logo} className="img-fluid" alt="finance logo" />
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center">
            <h1 className="heading display-2" style={{ marginTop: "0.7rem" }}>
              Crypto Dashboard
            </h1>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center">
            <hr />
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center">
            <p className={`${classes.headline} h3`}>
              CRYPTOCURRENCY FORECASTING
              {/* Force next columns to break to new line at sm breakpoint and down */}
              {/* <div className="w-100 d-block d-sm-none"></div> */}
              WITH CRYPTO DASHBOARD
            </p>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center">
            <HashLink to="/forecast">
              <Button type="button">
                <span>Forecast</span>
              </Button>
            </HashLink>
          </Col>
        </Row>
      </Container>
    </SectionWithBgImage>
  );
};

export default MainPage;
