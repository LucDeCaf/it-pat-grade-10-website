import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet, Link } from 'react-router-dom';

export default function Root() {
  return (
    <>
      <Navbar expand='lg' className='bg-body-tertiary shadow'>
        <Container>
          <Navbar.Brand as={Link} to='/'>
            Flashcard City
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='navbarNav' />
          <Navbar.Collapse id='navbarNav' className='justify-content-between'>
            <Nav>
              <Nav.Link as={Link} to='/'>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to='/about'>
                About
              </Nav.Link>
              <Nav.Link as={Link} to='/download'>
                Download
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to='/docs'>
                Docs
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        <Outlet />
      </Container>
    </>
  );
}
