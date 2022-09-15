// Import react
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';

import "./SiteHeader.css";
import Header from '../Header';
import LogoTransparent from "../../img/LogoTransparent.svg";
import { LazyLoadImage } from 'react-lazy-load-image-component';



const SiteHeader = () => {
  return (
    <Container className="pt-5 px-5">
      <Row>
        <Stack direction="horizontal" gap={4}>
          <div>
            <a href="/">
              <LazyLoadImage
                width="40"
                height="40"
                alt="BILLEDE"
                src={LogoTransparent}
                effect="black-and-white"
              />
            </a>
          </div>
          <div>
            <a href="/" className='d-none d-md-block'><Header type="h3">Frankly Insure</Header></a>
          </div>
          <div className='ms-auto'><a href='/'>LINK1</a></div>
          <div><a href="/">LINK2</a></div>
        </Stack>
      </Row>
    </Container>
  );
}
 
export default SiteHeader;