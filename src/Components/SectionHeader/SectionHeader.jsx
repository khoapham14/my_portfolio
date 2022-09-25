import { Container, Row, Col } from 'react-bootstrap';
import './SectionHeader.css';

const SectionHeader = (props) => {
  return (
    <Container>
      <div className="sectionContainer">

          <Col xs={12} sm={12} md={3}>
            <div className="sectionTitle">
              <div className="bar" />
              {props.sectionTitle}
            </div>
          </Col>
          <Col xs={12} sm={12} md={9}>
            <div className="sectionDescription">{props.sectionDescription}</div>
          </Col>
      


      </div>
    </Container>
  );
}

export default SectionHeader;