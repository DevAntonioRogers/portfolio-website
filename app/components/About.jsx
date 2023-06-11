import "./About.css";

const About = () => {
  return (
    <div id="about" className="about">
      <h1>About Me</h1>
      <div className="about-container">
        <div className="about-text">
          <p>
            Welcome to my portfolio! I'm Antonio Rogers, a passionate and dedicated full stack developer. My love for
            coding and creating innovative projects has been a driving force in my career. With a solid foundation in
            both front-end and back-end technologies, I strive to bring ideas to life through clean and efficient code.I
            believe in constantly expanding my knowledge and staying up-to-date with the latest industry trends to
            deliver high-quality solutions.
          </p>
        </div>
        <div className="skills">
          <h2>Skills</h2>
          <div>
            <h3>Javascript</h3>
            <h3>React</h3>
            <h3>HTML</h3>
            <h3>CSS</h3>
            <h3>MongoDB</h3>
            <h3>Express</h3>
            <h3>NodeJS</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
