import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SectionWithBgImage from "../UI/SectionWithBgImage";
import Button from "../UI/Button";

import classes from "./Forecast.module.scss";

import bgImage from "../../img/cover-forecast.jpg";

const Forecast = (props) => {
  let content = "";

  if (props.forecast) {
    content = (
      <Row>
        <Col className="d-flex justify-content-center">
          <table>
            <thead>
              <tr>
                <th>Pair</th>
                <th>Forecast</th>
                <th>Strength</th>
              </tr>
            </thead>
            <tbody>
              {props.forecast.map((item) => (
                <tr key={item.pair}>
                  <td>{item.pair}</td>
                  <td>{item.forecast}</td>
                  <td>{item.strength}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Col>
      </Row>
    );
  }

  if (props.error) {
    content = (
      <>
        <h4 style={{ color: "red" }}>
          Sorry. Loading of forecast data for table failed.
        </h4>
        <Button type="button" onClick={props.getData}>
          Try to download data again
        </Button>
      </>
    );
  }

  if (props.isLoading) {
    content = "Loading data...";
  }

  return (
    <SectionWithBgImage bgImage={bgImage} className={classes.forecast}>
      <Container>
        <Row>
          <Col className="d-flex justify-content-center">
            <h1 className="heading display-4" style={{ marginTop: "10rem" }}>
              THIS IS CURRENT CRYPTOCURRENCY FORECAST ON POLONIEX FOR NEXT 4H
            </h1>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center">
            <hr />
          </Col>
        </Row>
        {content}
      </Container>
    </SectionWithBgImage>
  );
};
export default Forecast;
