import { Container, Row, Col } from "react-bootstrap";
import  linked  from '../asset/img/linkedin.svg';
import instagram from '../asset/img/instagram.svg';
import git from '../asset/img/github.svg';
import nama from '../asset/img/nama.png';


export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center mt-4">
          <Col size={12} sm={6}>
            <img src={nama} alt="Logo"/>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/septiyan-abdurrohman-720b6b146/" target="_blank"><img src={linked} alt="Icon" /></a>
              <a href="https://www.instagram.com/gendaanmu_/" target="_blank"><img src={instagram} alt="Icon" /></a>
              <a href="https://github.com/aansd" target="_blank"><img src={git} alt="Icon" /></a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}