import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./Home.css";

import drippingCock from "../img/dripping-cock.jpg";

const Home = () => {
  return (
    <Container>
      <Row>
        <Col>
        <div className="d-flex">
          <h1 className="mx-auto">Gruppe 6 er bedre end gruppe 1</h1>
        </div>
        </Col>
      </Row>
      <Row>
        <Col>
        <div className="d-flex pt-5">
          <img src={drippingCock} className="mx-auto" width="50%" alt="dripping cock" />
        </div>
        </Col>
      </Row>
    </Container>
  );
}
 
export default Home;