import { Navbar, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Navigation() {
    return (
        <>
            <Navbar className="bg-pink d-flex">
                <Container className="d-flex">
                    <Row className="d-flex" >
                        <Col>
                            <Link to="/" className="text-white ms-3 text-decoration-none">
                             🏡 Home
                            </Link>
                            <Link to="/planes" className="text-white ms-3 text-decoration-none">
                             ☎️ Contacto
                            </Link>
                        </Col>

                    </Row>
                    <Row>
                        <Col>
                            <Navbar.Brand className="text-white px-6" >HappyCake 🍰</Navbar.Brand>
                        </Col>
                    </Row>

                </Container>
            </Navbar>
        </>
    );
}