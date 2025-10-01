import './index.scss';
import CoverPhoto from '../../../assets/project-images/CharlieHealthcare/Cover.png';
import VerticalLogo from '../../../assets/project-images/CharlieHealthcare/LogoVertical.png';
import HorizontalLogo from '../../../assets/project-images/CharlieHealthcare/LogoHorizontal.png';
import ColourPalette from '../../../assets/project-images/CharlieHealthcare/Colours.png';
import PrimaryTypeface from '../../../assets/project-images/CharlieHealthcare/CharliePrimary .png';
import SymbolTypeface from '../../../assets/project-images/CharlieHealthcare/CharlieSecondary.png';
import Phone1 from '../../../assets/project-images/CharlieHealthcare/Phone1.png';
import Phone2 from '../../../assets/project-images/CharlieHealthcare/Phone2.png';
import Phone3 from '../../../assets/project-images/CharlieHealthcare/Phone3.png';
import VideoFile from '../../../assets/project-images/CharlieHealthcare/Video.mp4';
import Mockup1 from '../../../assets/project-images/CharlieHealthcare/1.png';
import Mockup2 from '../../../assets/project-images/CharlieHealthcare/2.png';
import Mockup3 from '../../../assets/project-images/CharlieHealthcare/3.png';
import Mockup4 from '../../../assets/project-images/CharlieHealthcare/4.png';
import Mockup5 from '../../../assets/project-images/CharlieHealthcare/5.png';
import Mockup6 from '../../../assets/project-images/CharlieHealthcare/6.png';

const CharlieHealthcare = () => {

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
      <h1><a href="https://charliehealthcare.com/" target="_blank" rel="noreferrer">Charlie Healthcare</a></h1>
      <img className="cover-photo" src={CoverPhoto} alt='Charlie Healthcare Cover' />
      <div className="project-description">
        <p> 
          Kod Charlie Healthcare-a fokus je stavljen na mlade obitelji, stvarajući vizualni identitet koji je topao, 
          prijateljski i moderan. Ljubičasta boja simbolizira kreativnost, empatiju i pouzdanost, dok sans serifni font unosi jednostavnost, čitkost i suvremen osjećaj. 
        </p>
        <p>
            Logotip je dizajniran tako da bude jasan, prepoznatljiv i primjenjiv u svim kanalima komunikacije, od digitalnih platformi do tiskovina. 
            Cjelokupni vizual odražava brend koji je pristupačan, profesionalan i usmjeren na brigu o obiteljima, naglašavajući sigurnost i povjerenje.
        </p>
      </div>
      <div className="charlie-logos">
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
          Za brend koji se fokusira na mlade obitelji vizualna komunikacija je ključ za privlačenje pažnje i izgradnju povjerenja. Ljubičasta boja i moderni sans 
          serif font prenose toplinu, pristupačnost i pouzdanost, dok dosljedni vizuali čine brend prepoznatljivim i profesionalnim. Na društvenim mrežama to 
          rezultira većim angažmanom pratitelja i stvaranjem osjećaja sigurnosti i brige koji su ključni za mlade obitelji.
        </p>
      </div>
      <div className='charlie-video'>
        <video controls>
          <source src={VideoFile} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="project-description">
        <p> 
          Video sadržaj dodatno ističe ključne beneficije agencije, jasno komunicira prednosti medicinskog osiguranja i gradi emocionalnu povezanost s publikom. 
          Kombinacija privlačnih vizuala i informativnog video materijala čini brend prepoznatljivim, modernim i pristupačnim, naglašavajući sigurnost i brigu za obitelji.
        </p>
        <p>
            Korištenje mockupa omogućuje realističan prikaz logotipa i vizualnog identiteta brenda u različitim kontekstima, na društvenim mrežama i promotivnim materijalima. 
            Na taj način mlade obitelji mogu odmah vizualizirati kako brend funkcionira u stvarnom svijetu, što gradi povjerenje i profesionalni dojam.
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

export default CharlieHealthcare;
