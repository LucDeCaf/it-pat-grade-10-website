import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  function handleClick(path: string) {
    navigate(path);
  }

  return (
    <Container className='pt-5'>
      <h1 className='text-center mt-5 mb-3'>Flashcard City</h1>
      <Row className='mb-5'>
        <Col md={{ span: 8, offset: 2 }} lg={{ span: 6, offset: 3 }}>
          <p className='text-center'>
            A brilliantly designed, brand-new digital flashcard application the
            likes of which the world has never seen before.
          </p>
        </Col>
      </Row>
      <Row className='mt-5'>
        <Col className='d-flex justify-content-end'>
          <Button onClick={() => handleClick('/download')}>Download Now</Button>
        </Col>
        <Col>
          <Button variant='secondary' onClick={() => handleClick('/docs')}>
            Documentation
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
