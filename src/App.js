import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};

const Header = () => {
  return (
    <header>
      <h1>Beth-Ann Penney-Rideout</h1>
    </header>
  );
};

const Main = () => {
  return (
    <main>
      <Introduction />
      <Projects />
      <Education />
      <Experience />
      <Hobbies />
      <SocialLinks />
    </main>
  );
};

const Introduction = () => {
  return (
    <section>
      <h2>About Me</h2>
      <p>Hello! I'm Beth-Ann, a Software Development student. Welcome to my personal website!</p>
    </section>
  );
};

const Projects = () => {
  return (
    <section>
      <h2>Projects</h2>
      <ul>
        <li><a href="https://github.com/B-Penney/victoria_beth-anna_angelina_finalsprint">Makeup Shop Collaboration</a></li>
        <li><a href="https://github.com/AngelRomanchuk/victoria_angelina_beth-ann_sprint1">Restaurant Website Collaboration</a></li>
        <li><a href="https://github.com/B-Penney/react-dog-api">Dog API</a></li>
      </ul>
    </section>
  );
};

const Education = () => {
  return (
    <section>
      <h2>Education</h2>
      <ul>
        <li>Academy Canada - Hairstyling (Licensed) 2016</li>
        <li>Software Development - In progress</li>
      </ul>
    </section>
  );
};

const Experience = () => {
  return (
    <section>
      <h2>Experience</h2>
    </section>
  );
};

const Hobbies = () => {
  return (
    <section>
      <h2>Hobbies</h2>
      <ul>
        <li>BeeKeeping</li>
      </ul>
    </section>
  );
}

const SocialLinks = () => {
  return (
    <section>
      <h2>Contact</h2>
      <ul>
        <li><a href="https://github.com/B-Penney" target="_blank">GitHub</a></li>
        <li><a href="https://linkedin.com/in/bethann-penney" target="_blank">LinkedIn</a></li>
      </ul>
    </section>
  );
};

const Footer = () => {
  return (
    <footer>
      <p>&copy; 2024 Beth-Ann Penney-Rideout. All rights reserved.</p>
    </footer>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);

export default App;
