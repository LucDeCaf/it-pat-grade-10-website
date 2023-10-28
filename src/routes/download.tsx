import Container from "react-bootstrap/Container";
import useLatestAppVersion from "../hooks/useLatestAppVersion";

export default function Download() {
  const [latestVersion, versionNumber] = useLatestAppVersion();

  return (
    <Container>
      <h1 className="mt-5">Download Flashcard City</h1>
      <p>Install the application for free today!</p>
      <br />
      <h3>Download Latest Version for <strong>Windows</strong></h3>
      <ul>
        <li><strong>V {versionNumber}:</strong> <a href={`/${latestVersion}.zip`} download>{latestVersion}</a></li>
      </ul>
      <br />
      <h5>Download Any Version</h5>
      <ul>
      <li><strong>V 1.0.1:</strong> <a href="/flashcard-city-v1.0.1.zip" download>flashcard-city-v1.0</a></li>
        <li><strong>V 1.0:</strong> <a href="/flashcard-city-v1.0.zip" download>flashcard-city-v1.0</a></li>
      </ul>
    </Container>
  );
}
