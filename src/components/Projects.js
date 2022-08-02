import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Ler & Aprender",
      description: "YouTube",
      imgUrl: projImg1,
    },
    {
      title: "Desenvolva a sua Mente",
      description: "YouTube",
      imgUrl: projImg2,
    },
    {
      title: "10 mil Horas de Dedicação",
      description: "YouTube",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "YouTube",
      imgUrl: projImg4,
    },
    {
      title: "O GESTOR",
      description: "YouTube",
      imgUrl: projImg5,
    },
    {
      title: "Começa Hoje",
      description: "YouTube",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projetos</h2>
                <p>Licenciado em Gestão/Managment, Mestre em Fiscalidade/Tax Managment.</p>
                <p>No ano 2021, conclui com aproveitamento a formação em CS50x (Computer Science) ministrada pela CS50 Havard University, onde pude aprender conceitos fundamentais de programação como C++, SQL, Python, JS, etc.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Hobby</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Destaque 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Destaque 2</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                                
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>De 2019 a 2021, fiz parte do Gabinete de Gestão de Risco do Banco Interatlântico (Grupo Caixa Geral de Depósitos), onde pude apoiar a instituição na definição de políticas e orientações gerais em matéria de riscos e de procedimentos necessários ao exercício do respetivo controlo de risco, fui responsável pela elaboração do quadro de apetência pelo risco (RAS-dashboard), abordando em matérias de gestão de risco de liquidez como Liquidity Coverage Ratio (LCR) e Net Stable Funding Ratio (NSFR), risco cambial, risco de mercado e risco de crédito. Fui também membro do Comité de Ativos e Passivos (CAP) do Banco Interatlântico.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Em 2014 enquanto parte do departamento financeiro da “Crédito Agrícola Mútuo-Algarve” desenvolvi competências na área de gestão, através da integração do projeto de informatização da instituição (workflow de crédito).</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
