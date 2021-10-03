import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "../UI/Button";
import SectionWithBgImage from "../UI/SectionWithBgImage";

import classes from "./MainPage.module.scss";

import logo from "../img/logo.png";
import bgImage from "../img/cover.jpg";
import { HashLink } from "react-router-hash-link";

const MainPage = () => {
  return (
    <SectionWithBgImage bgImage={bgImage} className={classes.mainPage} height="100vh">
      <Container>
        <Row>
          <Col className="d-flex justify-content-center">
            <img src={logo} className="img-fluid" alt="finance logo" />
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center">
            <h1 className={`${classes.headline} display-2`}>
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
              <Button
                as="div"
                variant="primary"
                href="#projects"
                type="button"
                size="lg"
              >
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
