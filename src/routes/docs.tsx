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
      <hr />
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
          loading='lazy'
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
        <p>Okay, so you've got the app running. Great!</p>
        <br />
        <p>So how do we use it?</p>
        <br />
        <p>
          Well, we can't study using flashcards if we don't have any to study
          with, so let's create our first set!
        </p>
        <p>Click the button that says "Add/Edit".</p>
        <img src='/images/add-blank.png' alt='Add page' loading='lazy' />
        <br />
        <br />
        <p>Woah, that's a lot of stuff! Let's break it down.</p>
        <p>
          Every flashcard set has <b>three basic features</b>: A <i>name</i>,{' '}
          <i>terms</i>, and <i>definitions</i>.
        </p>
        <p>
          The <i>name</i> is what your flashcard set will be saved as.{' '}
          <i>Terms</i> are words/phrases, usually short, which are linked to{' '}
          <i>definitions</i>, which define, explain, or elaborate on an
          associated term. Flashcard City is intended to be used to remember a
          list of terms and their associated definitions.
        </p>
        <p>
          Let's start by giving your flashcard set a name. You can use any name
          you want, but for the purposes of this demonstration, we'll be using
          the name <i>"Math Terms"</i> in this example (very creative, I know).
        </p>
        <p>
          To give your set a name, type it into the box labelled{' '}
          <b>"Enter the set name"</b>. Don't worry about the dropdown list for
          now, we'll come back to that later :&#41;
        </p>
        <img
          src='/images/add-title.png'
          alt='Add page with title'
          loading='lazy'
        />
        <p>Next, we'll add our first term.</p>
        <p>
          To add a term, type the term's name into the box labelled{' '}
          <b>"Term"</b>.
        </p>
        <img
          src='/images/add-term.png'
          alt='Add page with term'
          loading='lazy'
        />
        <p>
          Next, type the term's definition into the box labelled{' '}
          <b>"Definition"</b>.
        </p>
        <img
          src='/images/add-def.png'
          alt='Add page with term and definition'
          loading='lazy'
        />
        <p>
          Finally, press the button labelled <b>Add Term</b> to add your first
          term. If done correctly, you should see your term in the list of
          sample terms on the right.
        </p>
        <img
          src='/images/add-term-added.png'
          alt='Add page with term added'
          loading='lazy'
        />
        <p>You've just added your first term. Well done!</p>
        <p>
          However, some astute mathematicians following along with this example
          may have noticed that I made a mistake when writing the definition.
        </p>
        <p>
          Indeed, <i>sin(x)</i> is not equal to <i>x/r</i>, but <i>y/r</i>.
          Oops!
        </p>
        <p>Luckily, we can simply change the term's definition.</p>
        <p>
          To modify a term, type the term's name into the <b>"Modify a term"</b>{' '}
          box at the bottom and select the <b>Modify</b> option. Alternatively,
          you can also click the arrow next to the <b>"Modify a term"</b> box
          and the select the term from there.
        </p>
        <p>
          Upon pressing <b>Modify</b>, a box should appear that looks like the
          image below. Type the new definition into the box and press <b>OK</b>.
        </p>
        <img
          src='/images/add-modify-confirm.png'
          alt='Add page with modify box selected'
          loading='lazy'
        />
        <br />
        <br />
        <p>
          Next, I'll quickly add a few more example terms. Feel free to copy
          them from the following image or make your own.
        </p>
        <img
          src='/images/add-sample-terms.png'
          alt='Add page with a few terms'
          loading='lazy'
        />
        <p>
          If you've looked carefully at the example terms I've added, you may be
          wondering, "What kind of maths class teaches people about cells?
          Isn't that a part of biology?"
        </p>
        <p>And you'd be right. That isn't a mathematical term. My mistake!</p>
        <p>It appears we need to delete the extra term I've added.</p>
        <p>
          Type the extra term into the <b>"Modify a term"</b> box or select it
          from the dropdown.
        </p>
        <img
          src='/images/add-mistake.png'
          alt='Add page with accidental term selected'
          loading='lazy'
        />
        <br />
        <br />
        <p>
          Then, press the <b>Delete</b> button.
        </p>
        <img
          src='/images/add-deleted.png'
          alt='Add page with accidental term deleted'
          loading='lazy'
        />
        <p>
          And just like that, the term <i>Cells</i> is no more. Hooray!
        </p>
        <br />
        <p>
          This is starting to look like a complete flashcard set. All we need to
          do now is save it!
        </p>
        <p>
          Simply press the <b>Save</b> button underneath the list of terms to
          save your set.
        </p>
        <img
          src='/images/add-success.png'
          alt='Add page with success message'
          loading='lazy'
        />
        <br />
        <br />
        <p>
          You've just created your first ever flashcard set in Flashcard City.
          Well done! :D
        </p>
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
