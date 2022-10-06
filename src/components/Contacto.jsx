import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const MyForm = () => {
  return (
    <Form className='d-flex flex-column' >
      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="nombre@email.com" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Descripción</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <div className='d-flex flex-row justify-content-center' >
      <Button className='bg-pink button-form' type="submit" >
        Enviar
      </Button>
      </div>
    </Form>
  );
}

export default MyForm;