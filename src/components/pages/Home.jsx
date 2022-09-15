import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/black-and-white.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import SiteHeader from "../page-components/SiteHeader";
import Section from "../page-components/Section";
import Footer from "../page-components/Footer";
import FranklyTeam from "../../img/FranklyTeam.jpg";
import FranklyTeamLow from "../../img/FranklyTeamLow.jpg";
import Header from '../Header';
import SectionMiddle from "../page-components/SectionMiddle";
import Paragraph from '../Paragraph';
import SocialButton from '../SocialButton';

const Home = () => {
  return (
    <>
      <Container>
        <SiteHeader />
        <Section>
          <Row>
            <Col sm="12" lg="6" className=''>
              <Header type="h1">Section 1</Header>
              <Paragraph type="paragraph-hero" className="py-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Laoreet id donec ultrices tincidunt arcu non sodales neque sodales. Natoque penatibus et magnis dis parturient montes. Eros donec ac odio tempor orci dapibus ultrices in. Neque ornare aenean euismod elementum. Viverra vitae congue eu consequat.
              </Paragraph>
            </Col>
            <Col sm="12" lg="6" className='d-none d-md-flex p-0 justify-content-lg-right justify-content-sm-center'> 
              <LazyLoadImage
                width="500"
                alt="BILLEDE"
                src={FranklyTeam}
                effect="black-and-white"
                placeholderSrc={FranklyTeamLow}
                className="rounded-5"
              />
            </Col>
          </Row>
        </Section>
        <SectionMiddle title="SectionMiddle">
          <Paragraph type="paragraph-section">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Laoreet id donec ultrices tincidunt arcu non sodales neque sodales. Natoque penatibus et magnis dis parturient montes. Eros donec ac odio tempor orci dapibus ultrices in. Neque ornare aenean euismod elementum. Viverra vitae congue eu consequat.
          </Paragraph>
        </SectionMiddle>
        <SectionMiddle title="Følg os frem mod launch">
          <Container> 
            <Row>
              <Paragraph>
                Du kan følge vores vej frem mod launch, hvor vi løbende vil dele nyheder og indsigt i vores arbejde undervejs. Hver dag kommer vi et skridt tættere på at kunne realisere vores drøm og tilbyde jer et unikt produkt.
              </Paragraph>
            </Row>
            <Row className='my-2 my-md-5 g-5 justify-content-center'>
              <Col lg={3} className="">
                <SocialButton
                  type="facebook"
                  />
              </Col>
              <Col lg={3}>
                <SocialButton
                  type="instagram"
                  />
              </Col>
              <Col lg={3}>
                <SocialButton
                  type="linkedin"
                  />
              </Col>
            </Row>
          </Container>
        </SectionMiddle>
        <Footer />
      </Container>
    </>
  );
}
 
export default Home;