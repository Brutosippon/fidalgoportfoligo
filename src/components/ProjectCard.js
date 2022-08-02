import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <a href="https://www.youtube.com/channel/UCGY6E9EkENikqjguKGNMD6Q"><img alt="" /></a>
          <h4>{title}</h4>
          <span>{description}</span>
          
        </div>
      </div>
    </Col>
  )
}
