import './index.scss';
import CoverPhoto from '../../../assets/project-images/SusanYap/SusanYapCoverPhoto.png';
import VerticalLogo from '../../../assets/project-images/SusanYap/SusanYapLogoVertical.png';
import HorizontalLogo from '../../../assets/project-images/SusanYap/SusanYapLogoHorizontal.png';
import ColourPalette from '../../../assets/project-images/SusanYap/ColourPalette.png';
import PrimaryTypeface from '../../../assets/project-images/SusanYap/SusanYapPrimary.png';
import SymbolTypeface from '../../../assets/project-images/SusanYap/SusanYapSymbol.png';
import Phone1 from '../../../assets/project-images/SusanYap/SusanYapPhonePhoto1.png';
import Phone2 from '../../../assets/project-images/SusanYap/SusanYapPhonePhoto2.png';
import Phone3 from '../../../assets/project-images/SusanYap/SusanYapPhonePhoto3.png';
import VideoFile from '../../../assets/project-images/SusanYap/SusanYapLogoAnimation.mp4';
import Mockup1 from '../../../assets/project-images/SusanYap/SusanYapMockup1.png';
import Mockup2 from '../../../assets/project-images/SusanYap/SusanYapMockup2.png';
import Mockup3 from '../../../assets/project-images/SusanYap/SusanYapMockup3.png';
import Mockup4 from '../../../assets/project-images/SusanYap/SusanYapMockup4.png';
import Mockup5 from '../../../assets/project-images/SusanYap/SusanYapMockup5.png';
import Mockup6 from '../../../assets/project-images/SusanYap/SusanYapMockup6.png';

const SusanYap = () => {

  const images = [
    { src: Mockup1},
    { src: Mockup2},
    { src: Mockup3},
    { src: Mockup4},
    { src: Mockup5},
    { src: Mockup6}
  ];

  const scrollToTop = () => {
    document.body.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };


  return (
    <div className="container project-page">
      <h1><a href="https://susanyapinsuranceagency.com/" target="_blank">Susan Yap Insurance Agency</a></h1>
      <img className="cover-photo" src={CoverPhoto} alt='Susan Yap Insurance Agency Cover' />
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
      <div className="typeface">
        <img src={PrimaryTypeface} alt='Primary Typeface' />
        <img src={SymbolTypeface} alt='Symbol Typeface' />
      </div>
      <div className="phone-mockups">
        <img src={Phone1} alt='Phone Mockup' />
        <img src={Phone2} alt='Phone Mockup' />
        <img src={Phone3} alt='Phone Mockup' />
      </div>
      <div className="video-description">
        <p>
          Text relating to the next image or group of images. Mention any additional 
          skills, tools, or requirements for each application shown.
        </p>
      </div>
      <div className='video-container'>
        <video autoPlay loop muted >
          <source src={VideoFile} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
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
      <div className="mockup-container">
        <div className="mockups">
          {images.map((image, index) => (
            <img src={image.src} alt={`Mockup ${index + 1}`} />
          ))}
        </div>
      </div>
      <button onClick={scrollToTop}>
          Back to top
      </button>
    </div>
  );
};

export default SusanYap;
