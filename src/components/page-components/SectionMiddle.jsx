// Import CSS


// Import Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Import custom components
import Header from '../Header';

const SectionMiddle = ({
  children,
  title,
}) => {
  return (
    <Container className="my-5 my-lg-7 px-5 text-center">
      <Row>
        <Header type="h1">{title}</Header>
      </Row>
      <Row className="py-4">
        <Col lg={{span: 8, offset: 2}}>
          {children}       
        </Col>
      </Row>
    </Container>
  );
}
 
export default SectionMiddle;