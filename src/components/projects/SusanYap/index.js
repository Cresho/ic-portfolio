import './index.scss';
import CoverPhoto from '../../../assets/project-images/SusanYap/SusanYapCoverPhoto.png';
import VerticalLogo from '../../../assets/project-images/SusanYap/SusanYapLogoVertical.png';
import HorizontalLogo from '../../../assets/project-images/SusanYap/SusanYapLogoHorizontal.png';
import ColourPalette from '../../../assets/project-images/SusanYap/ColourPalette.png';

const SusanYap = () => {
  return (
    <div className="project-page">
      <h1>Susan Yap Insurance Agency</h1>
      <img className="cover-photo" src={CoverPhoto} alt='Susan Yap Insurance Agency Cover Photo' />
      <div className="project-description">
        <p> Overview of the project. If project is fictional, use “concept for” in the
            overview. State the client name, industry, audience, and initial challenge/goal
            of the project based on the brief. Make each project a story. 
        </p>
        <p>
            Do not center-align this text. Do not span the full page width. Adjust the 
            column width and text size to get 50-75 characters per line, then center all 
            text columns on the page.
        </p>
      </div>
      <div className="project-logos">
        <img className="vertical-logo" src={VerticalLogo} alt='Vertical Logo' />
        <img className="horizontal-logo" src={HorizontalLogo} alt='Horizontal Logo' />
      </div>
      <div className="colour-palette">
        <img src={ColourPalette} alt='Colour Palette' />
      </div>
      
    </div>
  );
};

export default SusanYap;
