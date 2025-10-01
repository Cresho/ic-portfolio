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
                <h1>
                    Ja sam Ivana Čalić, grafička dizajnerica iz Osijeka sa diplomom Grafičkog fakulteta u Zagrebu i velikom strašću za dizajniranjem.
                    <br />
                    <br />
                    Rad na različitim projektima tijekom studija, kao i nakon diplome, omogućio mi
                    je razvoj vještina u brendiranju, vizualnim identitetima, ilustraciji i dizajnu.
                    Kroz studij sam stekla snažnu podlogu u tipografiji, pripremi za tisak,
                    ambalažnom dizajnu i grafičkoj tehnologiji, a sve to primijenila sam u praksi na projektima za tvrtku Forge47.
                </h1>
            </div>
        </div>
        <div className="detailed-info">
            <h1>
                Kad ne dizajniram, najčešće crtam, slušam glazbu ili vozim role, 
                a inspiraciju pronalazim u svakodnevnim sitnicama i novim kreativnim hobijima.
                <br />
                <br />
                Trenutno sam u potrazi za svojom prvom stalnom dizajnerskom pozicijom i otvorena sam 
                za prilike koje će mi omogućiti daljnji rast i suradnju s kreativnim timovima.
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