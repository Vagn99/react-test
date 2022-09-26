import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Stack } from "react-bootstrap";

import "./Home.css";

import drippingCock from "../img/dripping-cock.jpg";

const Home = () => {
  return (
    <Container>
      <Row>
        <Stack>
          <div></div>
        </Stack>
      </Row>
      <Row className="mt-4">
        <Col>
        <div className="d-flex">
          <h2 className="mx-auto">Gruppe 6 er bedre end gruppe 1</h2>
        </div>
        </Col>
      </Row>
      <Row className="pb-5">
        <Col xs="12" md="6">
          <div className="d-flex pt-5">
            <img src={drippingCock} className="mx-auto" width="100%" alt="dripping cock" />
          </div>
        </Col>
        <Col xs="12" md="6">
          <div className="d-flex pt-5">
            <p className="mx-auto">
              Forskere har i mange år forsøgt at finde ud af, hvad der gør gruppe 6 til den bedste gruppe. De har fundet ud af, at det er de bare.
              <br/>
              <br/>
              Ingen andre formår at nå deres niveau.
              <br/>
              <br/>
              Og sådan er det.
              <br/>
              <br/>
              Dryppende hane.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
 
export default Home;