import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function About() {
  return (
    <Container>
      <Row md={2} xs={1} className='mt-5'>
        <Col>
          <h1>About Us</h1>
          <br />
          <h3>About the Creator</h3>
          <p>
            Luc de Cafmeyer was born on the 18th of April, 2007. Ever since he
            was young, he developed a fascination with logic and mathematics.
            <br />
            Since beginning his programming career on{' '}
            <a
              href='https://scratch.mit.edu'
              target='_blank'
              rel='noopener noreferrer'
            >
              Scratch
            </a>{' '}
            in around 2013, he chooses to split most of his free time between
            his three major hobbies &#40;programming, chess, and gym&#41;.
            <br />
            He is currently a high-school student at Rallim High in Cape Town,
            South Africa.
          </p>
          <br />
          <h3>About Flashcard City</h3>
          <p>
            Flashcard City is not actually a revolutionary new application
            designed to tackle student's toughest problems &#40;shocking, I
            know&#41;. It was actually created for a project in his Grade 10 IT
            class. Still, he hopes it's not the <i>worst</i> flashcard app
            you've ever used.
          </p>
          <p>
            <i>
              PS: If you want an actually{' '}
              <span className='fw-medium'>good</span> flashcard app, just use{' '}
              <a
                href='https://quizlet.com'
                target='_blank'
                rel='noopener noreferrer'
              >
                Quizlet
              </a>
              . :&#41;
            </i>
          </p>
        </Col>
        <Col>
          <figure>
            <img
              className='img-fluid'
              src='/images/luc.jpg'
              alt='Luc sitting at a seaside restaurant in Cape Town, South Africa'
            />
            <figcaption>
              Luc sitting at a local seaside restaurant in Cape Town, South
              Africa
              <br />
              &#40;Captured 14 Oct 2023&#41;
            </figcaption>
          </figure>
        </Col>
      </Row>
    </Container>
  );
}
