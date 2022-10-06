import { Container, Row, Col } from "react-bootstrap";
import chocolate from "../img/chocolate2.png";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    return (
        <Container className="text-center">
            <Row>
                <Col>
                    <h1 className="pt-5">
                        Bienvenido a <span className="fw-bold">Happy Cake</span>
                    </h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h6> El lugar de los pasteles felices </h6>
            </Col>
            </Row>
            <Row>
                <Col>
                    <img src={chocolate} alt="" width={400} className="m-2" />
                </Col>
            </Row>
            
        </Container>
    );
};