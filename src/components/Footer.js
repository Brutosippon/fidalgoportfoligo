import { Container, Row, Col } from "react-bootstrap";
/*import { MailchimpForm } from "./MailchimpForm";*/
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
/*import navIcon2 from "../assets/img/nav-icon2.svg";*/
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/*<MailchimpForm />*/}
          <Col size={24} sm={12}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={24} sm={12} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/joao-fidalgo/"><img src={navIcon1} alt="" /></a>
              {/*<a href="#"><img src={navIcon2} alt="" /></a>*/}
              <a href="https://www.youtube.com/channel/UCGY6E9EkENikqjguKGNMD6Q"><img src={navIcon3} alt="" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved João C. Fidalgo</p>
            <p>Email: fidalgomanagement@gmail.com</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
