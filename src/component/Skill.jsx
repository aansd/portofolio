import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Container, Row, Col } from 'react-bootstrap';
import sembilan from '../asset/img/90.svg';
import delapan from '../asset/img/80.svg';

export const Skill = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return (
        <section className="skill" id="skill">
            <Container>
                <Row>
                    <Col>
                    <div className="skill-bx">
                        <h2>
                            Skills
                        </h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque labore maxime error quo? Voluptas officia provident quibusdam cupiditate veritatis corporis.</p> 
                    <Carousel responsive={responsive} infinite={true} className="skill-slider">
                      <div className="item text-center">
                        <img src={sembilan} alt="" />
                        <h5>HTML</h5>
                      </div>
                      <div className="item text-center">
                        <img src={sembilan} alt="" />
                        <h5>CSS</h5>
                      </div>
                      <div className="item text-center">
                        <img src={delapan} alt="" />
                        <h5>JavaScript</h5>
                      </div>
                      <div className="item text-center">
                        <img src={delapan} alt="" />
                        <h5>PHP</h5>
                      </div>
                    </Carousel>
                    </div>
                    </Col>
                </Row>
            </Container>
            {/* <img className="background-image-left" src={''} alt="" /> */}
        </section>
    )
}