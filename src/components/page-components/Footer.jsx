// Import react
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';

// Import custom components
import Paragraph from '../Paragraph';
import Header from '../Header';
import SocialIcon from '../SocialIcon';

import "./Footer.css";

const Footer = () => {
  return (
    <Container className='px-5'>
      <Row className='gx-5 mb-5 mb-md-0'>
        <Col sm={{span: 6, offset: 1}} className="d-flex flex-column justify-content-center">
          <Header type="h2">FranklyInsure</Header>
          <Paragraph type="paragraph-contact">
            Istedgade 91
            <br/>
            1650 København V
            <br/>
            Contact@franklyinsure.com 
            <br/>
            +45 21 25 39 19
            <br/>
            CVR: 42626449
          </Paragraph>
        </Col>
        <Col sm="4">
          <Row>
            <Paragraph type="paragraph-small" className="text-center pt-5 mt-3">
              Følg os på de sociale medier
            </Paragraph>
          </Row>
          <Row>
            <Col xs={{span: 2, offset: 3}}>
              <SocialIcon
                type="facebook"
              />
            </Col>
            <Col xs="2">
              <SocialIcon
                type="instagram"
              />
            </Col>
            <Col xs="2">
              <SocialIcon
                type="linkedin"
              />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className='gx-5 d-flex'>
        <Col sm={{span: 6, offset: 1}} className="d-flex flex-column justify-content-center">
          <Paragraph className="copyright">
            © 2022 Frankly Ins ApS. All Rights Reserved.
          </Paragraph>
        </Col>
      </Row>
    </Container>
  );
}
 
export default Footer;