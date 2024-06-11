import { Col, TabContent, TabPane, TabContainer } from "react-bootstrap";
import { Tab } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Nav from 'react-bootstrap/Nav';
import { ProjectCard } from "./projectCard";
import  linkedin  from '../asset/img/project-1.png';
import instagram from '../asset/img/project-2.png';
import git from '../asset/img/project-3.png';
export const Project = () => {
    const project = [
        {
            title: "Web Design",
            description: "Design & Development",
            imgUrl: git,
        },
        {
            title: "Web Design",
            description: "Design & Development",
            imgUrl: instagram,
        },
        {
            title: "Web Design",
            description: "Design & Development",
            imgUrl: linkedin,
        },
        {
            title: "Web Design",
            description: "Design & Development",
            imgUrl: git,
        },
        {
            title: "Web Design",
            description: "Design & Development",
            imgUrl: instagram,
        },
        {
            title: "Web Design",
            description: "Design & Development",
            imgUrl: linkedin,
        }
    ];
    return (
       <section className="project" id="project">
        <Container>
            <Row>
                <Col>
                <h2>Project</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate debitis autem culpa ipsam recusandae delectus quo fuga deleniti minus laborum.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Nav variant="pills" className="bav-pills mb-5 justify-content-center align-content-center" id="pills-tab">
                    <Nav.Item>
                        <Nav.Link eventKey="first">Page 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="second">Page 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="third">
                        Page 3
                        </Nav.Link>
                    </Nav.Item>
                    </Nav>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <Row>
                              {
                                project.map((project, index) => {
                                    return(
                                       <ProjectCard
                                       key={index}
                                       {...project}
                                       />
                                    )
                                })
                              }  
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second"></Tab.Pane>
                        <Tab.Pane eventKey="third"></Tab.Pane>
                    </Tab.Content>
                    </Tab.Container>
                </Col>
            </Row>
        </Container>
       </section>
    )
}