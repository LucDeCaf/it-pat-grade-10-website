import Container from "react-bootstrap/Container";

export default function Download() {
  return (
    <Container>
      <h1 className="mt-5">Download Flashcard City</h1>
      <p>Install the application for free today!</p>
      <br />
      <h4>Download Latest Version for <strong>Windows</strong></h4>
      <ul>
        <li>Compressed folder: <a href="/flashcard-city-v1.0.zip" download>flashcard-city-v1.0.zip</a></li>
      </ul>
    </Container>
  );
}
