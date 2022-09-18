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
          <p>Output, 을 보고 재미를 느끼는 웹 개발자</p>
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
            <h2> Code</h2>
            <span>[ HTML, CSS, Javascript, Python ]</span>
          </li>
          <li className="item">
            <h2>Tools</h2>
            <span>
              [ React, Redux, BootStrap, MaterialUI, StyledComponents ]
            </span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
