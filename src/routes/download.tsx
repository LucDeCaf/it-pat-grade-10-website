import Container from "react-bootstrap/Container";

export default function Download() {
  return (
    <Container>
      <h1 className="mt-5">Download Flashcard City</h1>
      <p>Install the application for free today!</p>
      <br />
      <h3>Download Latest Version for <strong>Windows</strong></h3>
      <ul>
        <li><strong>V 1.0.1:</strong> <a href="/flashcard-city-v1.0.1.zip" download>flashcard-city-v1.0.1.zip</a></li>
      </ul>
      <br />
      <h5>Download Any Version</h5>
      <ul>
      <li><strong>V 1.0.1:</strong> <a href="/flashcard-city-v1.0.1.zip" download>flashcard-city-v1.0.zip</a></li>
        <li><strong>V 1.0:</strong> <a href="/flashcard-city-v1.0.zip" download>flashcard-city-v1.0.zip</a></li>
      </ul>
    </Container>
  );
}
