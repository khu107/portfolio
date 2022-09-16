import React from 'react';
import EmailIcon from '@mui/icons-material/Email';
import GithubIcon from '@mui/icons-material/GitHub';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Pedro</h2>
        <div className="prompt">
          <p>A software developer with a passion for learning and creating.</p>
          <EmailIcon />
          <GithubIcon />
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, Angular, Redux, HTML, CSS, React Native, Flutter, NPM,
              Ionic, BootStrap, MaterialUI, Yarn, TailwindCSS, StyledComponents
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, Java Spring, .NET, ExpressJS, GraphQL, ApolloServer,
              MySQL, MongoDB, DynamoDB, DigitalOcean, AWS S3, MS SQL
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Java, Python, C#, C, C++, TypeScript, Go</span>
          </li>
        </ol>
      </div>
    </div>
    // <div className="home">
    //   <div className="about">
    //     <h2>Men husanman</h2>
    //     <div className="prompt">
    //       <p>A software developer a passion for learning and creating</p>
    //       <EmailIcon />
    //       <GithubIcon />
    //     </div>
    //     <h2>sdas</h2>
    //   </div>
    //   <h2>sdas</h2>
    // </div>
  );
}

export default Home;
{
  /* <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span>
              HTML, CSS, ReactJs, Redux, BootStrap, MaterialUI, StyledComponents
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span> NodeJs, ExpressJS, MongoDB </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span> JavaScript, Python, TypeScript</span>
          </li>
        </ol>
      </div> */
}
