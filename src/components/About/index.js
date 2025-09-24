import './index.scss';
import profile from '../../assets/images/profile.jpg';
import resume from '../../assets/documents/resume.pdf';

const About = () => {
  return (
    <div className="container about">
        <div className="photo-text-section">
            <div className="photo-section">
                <img src={profile} alt="Profile" className="profile-photo" />
            </div>
            <div className="text-section">
                <h1>Hello, I'm Ivana Čalić, a recent graduate of Faculty of Graphic Arts Zagreb with a degree
                    in Graphic Design currently living in Osijek, Croatia.
                </h1>
            </div>
        </div>
        <div className="detailed-info">
            <h1>
                While working at "internship", I was able to learn "some skills". I've studdied "some things"
                and was able to apply these skills to projects for "some clients".
                <br />
                <br />
                When I'm not designing, I like to "some hobbies".
                <br />
                <br />
                I'm currently looking for my first full time design role and would appreciate learning about
                any available oportunities.
            </h1>
        </div>
        <div className="button-section">
            <a href={resume} download="Ivana_Calic_Resume.pdf" className="resume-button">
                Resume
            </a>
            <button className="linkedin-button" onClick={() => window.open('https://www.linkedin.com/in/ivana-%C4%8Dali%C4%87-0847b0282/', '_blank')}>
                LinkedIn
            </button>
        </div>
    </div>
    );
};
export default About;