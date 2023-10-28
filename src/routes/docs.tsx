import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import useLatestAppVersion from '../hooks/useLatestAppVersion';

export default function Docs() {
  const [latestVersion] = useLatestAppVersion();

  return (
    <Container>
      <h2 className='mt-5'>Getting Started</h2>
      <h5 className='fw-normal'>
        Welcome to Flashcard City! We're so happy to have you here. :D
        <br />
        <br />
        In this interactive tutorial, you will:
      </h5>
      <ol className='fw-medium'>
        <li>
          <a
            className='text-decoration-none text-black fw-normal'
            href='#installing'
          >
            Install Flashcard City,
          </a>
        </li>
        <li>
          <a
            className='text-decoration-none text-black fw-normal'
            href='#creating'
          >
            Make your first flashcard set,
          </a>
        </li>
        <li>
          <a
            className='text-decoration-none text-black fw-normal'
            href='#studying'
          >
            Study your first set,
          </a>
        </li>
        <li>
          <a
            className='text-decoration-none text-black fw-normal'
            href='#deleting'
          >
            And delete your first set!
          </a>
        </li>
      </ol>
      <p>
        <i>Pro tip: Click the items above to skip to that section</i> :&#41;
      </p>
      <div id='tutorial-contents' className=''></div>
      <h3 id='installing'>
        Part 1: <span className='fw-normal'>Installing Flashcard City</span>
      </h3>
      <div id='installing-contents'>
        <p>
          The first step in using Flashcard City is installing Flashcard City
          (duh). To do so, either go to the{' '}
          <Link to='/downloads'>downloads page</Link>, or, if you're lazy, click
          the following link to{' '}
          <a href={`/${latestVersion}.zip`}>
            begin installing the latest version.
          </a>
        </p>
        <p>
          Once the file has downloaded, locate the <i>.zip</i> file and extract
          it to a suitable location.
        </p>
        <p>
          Also, if you're not using{' '}
          <span className='text-decoration-underline'>Windows</span>, tough
          luck. &ensp;¯\_(ツ)_/¯
        </p>
        <br />
        <p>The file should look something like this:</p>
        <img
          src='/images/downloads.png'
          alt='Downloaded zip file of version 1.0.1'
        />
        <br />
        <br />
        <p>
          It should be noted that Flashcard City creates additional files upon
          its use which are not originally shipped with the program.
          <br /> It is for this reason that we recommend{' '}
          <span className='fw-medium text-decoration-underline '>
            extracting it into its own folder,
          </span>{' '}
          such as "C:\Users\Username\Desktop\FlashcardCity"
        </p>
        <p>
          Once extracted, double-click on the file <b>"FlashcardCity.exe"</b> to
          run the program and verify that everything has been installed
          correctly.
        </p>
        <p>
          <b>Note:</b> You may run into an issue where your computer tries to
          warn you that the program is from an unverified developer (rude). if
          that is the case, simply click <i>'See more...'</i> and{' '}
          <i>'Run anyway'</i> to continue running the program - I promise it's
          not a virus. ;&#41;
        </p>
        <br />
        <p>
          And congratulations! Flashcard City should now be up and running on
          your machine. :D
        </p>
        <p>Onto the next section!</p>
      </div>
      <br />
      <h3 id='creating'>
        Part 2:{' '}
        <span className='fw-normal'>Creating Your First Flashcard Set</span>
      </h3>
      <div id='creating-contents'>
        <i>Working on it...</i>
      </div>
      <br />
      <h3 id='studying'>
        Part 3: <span className='fw-normal'>Studying Your First Set</span>
      </h3>
      <div id='studying-contents'>
        <i>Working on it...</i>
      </div>
      <br />
      <h3 id='deleting'>
        Part 4: <span className='fw-normal'>Deleting Your First Set</span>
      </h3>
      <div id='deleting-contents'>
        <i>Working on it...</i>
      </div>
    </Container>
  );
}
