import { Container } from "react-bootstrap";

import Contacto from "../components/Contacto";

const Contact = () => {
  return (
    <Container className="pt-5 d-flex flex-column">
      <h1 className="mb-4 text-center">¿Cuéntanos, ¿en qué te podemos ayudar?</h1>
      <Contacto />
    </Container>
  );
};

export default Contact;