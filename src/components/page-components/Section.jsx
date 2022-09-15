// Import CSS
import "./Section.css";

// Import Bootstrap1
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Import custom components
import Header from "../Header";

const Section = ({
  children,
  title,
}) => {
  return (
    <Container className="my-5 my-lg-7 px-5">
      <Row>
        <Header type='h1'>{title}</Header>
      </Row>
      <Row className="py-4">
          {children}       
      </Row>
    </Container>
  );
}
 
export default Section;