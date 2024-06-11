import { Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import { useState, useEffect } from "react";
import img from '../asset/img/img.png';


export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Web Developer", "Web Design", "FullStack Developer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
    let ticker = setInterval(() =>{
        tick();
    }, delta)
    return () => {clearInterval(ticker)};
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length -1): fullText.substring(0, text.length + 1);
        setText(updatedText);

        if(isDeleting) {
            setDelta(prevDelta => prevDelta /2)
        }

        if(!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        }else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="text-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome My Portofolio</span>
                        <h2>{`Hi i'm Septiyan Abdurrohman`}</h2>
                        <h1><span className="wrap">{text}</span></h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus deleniti ipsam, vel eaque pariatur tenetur perferendis at repellendus necessitatibus eos praesentium minima animi ratione dignissimos doloribus similique, sapiente adipisci voluptas id sint asperiores quaerat facilis non aspernatur! Incidunt aut enim officiis corrupti autem fuga quibusdam quisquam! Id corporis maxime nesciunt.</p>
                        <button onClick={() => console.log('connect')} className="btn btn-dark">Let’s Connect <ArrowRightCircle size={25} /></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={img} alt="" />
                    </Col>
                </Row>
            </Container>
        </section>
    ) 
}