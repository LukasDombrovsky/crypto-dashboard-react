import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const paragraphStyle = {
  fontSize: "1.2rem",
  textTransform: "none",
  fontWeight: 100,
};

const Footer = () => {
  return (
    <>
      <Row>
        <Col className="d-flex justify-content-center">
          <h2 className="heading h2 text-white">Lukas Dombrovsky | 2021</h2>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center">
          <hr />
        </Col>
      </Row>
      <Row>
        <Col className="text-white">
          <p>
            <i className="fa fa-phone fa-2x"></i>
          </p>
          <p style={paragraphStyle}>+421-940-063-988</p>
        </Col>
        <Col className="text-white">
          <p>
            <i className="fa fa-envelope fa-2x"></i>
          </p>
          <p style={paragraphStyle}>lukas.dombrovsky@gmail.com</p>
        </Col>
      </Row>
    </>
  );
};

export default Footer;
