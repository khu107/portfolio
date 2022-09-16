import React from 'react';
import EmailIcon from '@mui/icons-material/Email';
import GithubIcon from '@mui/icons-material/GitHub';
import '../styles/Home.css';
import { Typewriter } from 'react-simple-typewriter';

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>
          Hi,
          <Typewriter
            words={[' I am Khusan']}
            loop
            cursor
            cursorStyle="🫶"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h2>
        <div className="prompt">
          <p>A software developer with a passion for learning and creating.</p>
          <EmailIcon />
          <a
            href="https://github.com/metablog"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon />
          </a>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, Redux, HTML, CSS, NPM, BootStrap, MaterialUI, Yarn,
              StyledComponents
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>NodeJS, ExpressJS, MongoDB,</span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Python, TypeScript,</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
