import './index.scss';
import CoverPhoto from '../../../assets/project-images/Trustiva/Cover.png';
import HorizontalLogo from '../../../assets/project-images/Trustiva/LogoHorizontal.png';
import ColourPalette from '../../../assets/project-images/Trustiva/Colours.png';
import PrimaryTypeface from '../../../assets/project-images/Trustiva/TrustivaPrimary .png';
import SymbolTypeface from '../../../assets/project-images/Trustiva/TrustivaSecondary.png';
import Phone1 from '../../../assets/project-images/Trustiva/Phone1.png';
import Phone2 from '../../../assets/project-images/Trustiva/Phone2.png';
import Phone3 from '../../../assets/project-images/Trustiva/Phone3.png';
import LogoAnimation from '../../../assets/project-images/Trustiva/LogoAnimation.mp4';
import Video1 from '../../../assets/project-images/Trustiva/Video1.mp4';
import Video2 from '../../../assets/project-images/Trustiva/Video2.mp4';
import Video3 from '../../../assets/project-images/Trustiva/Video3.mp4';
import Video4 from '../../../assets/project-images/Trustiva/Video4.mp4';
import Mockup1 from '../../../assets/project-images/Trustiva/1.png';
import Mockup2 from '../../../assets/project-images/Trustiva/2.png';
import Mockup3 from '../../../assets/project-images/Trustiva/3.png';
import Mockup4 from '../../../assets/project-images/Trustiva/4.png';
import Mockup5 from '../../../assets/project-images/Trustiva/5.png';
import Mockup6 from '../../../assets/project-images/Trustiva/6.png';

const Trustiva = () => {

  const images = [
    { src: Mockup1},
    { src: Mockup2},
    { src: Mockup3},
    { src: Mockup4},
    { src: Mockup5},
    { src: Mockup6}
  ];

  const videos = [
    { src: Video1 },
    { src: Video2 },
    { src: Video3 },
    { src: Video4 }
  ];

  const scrollToTop = () => {
    document.body.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };


  return (
    <div className="container project-page">
      <h1><a href="https://elevaremedicare.com/" target="_blank" rel="noreferrer">Trustiva</a></h1>
      <img className="cover-photo" src={CoverPhoto} alt='Trustiva Cover' />
      <div className="project-description">
        <p>
          Za brend Trustiva cilj je bio stvoriti vizualni identitet koji prenosi povjerenje, profesionalnost i pouzdanost u području zdravstvenog osiguranja. 
          Plava boja simbolizira stabilnost, sigurnost i stručnost, dok moderni sans serif font osigurava čitljivost, jasnoću i suvremen izgled.
        </p>
        <p>
            Logotip je jednostavan, prepoznatljiv i primjenjiv u različitim kanalima komunikacije, od web stranica i društvenih mreža do tiskovina i promotivnih materijala. 
            Cjelokupni vizual odražava stručnost i pouzdanost brenda, naglašavajući brigu o klijentima i pristupačnost u komunikaciji.
        </p>
      </div>
      <div className="trustiva-logos">
        <img className="horizontal-logo" src={HorizontalLogo} alt='Horizontal Logo' />
        <video autoPlay loop muted>
            <source src={LogoAnimation} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
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
          Za brend Trustiva vizualna komunikacija igra ključnu ulogu u izgradnji povjerenja i profesionalnog dojma. Plava boja i moderni sans serif font prenose stabilnost, stručnost i pouzdanost, 
          dok dosljedni vizuali čine brend prepoznatljivim i ozbiljnim. Na društvenim mrežama jasni, profesionalni i privlačni vizuali pomažu u stvaranju emocionalne povezanosti s publikom, povećavaju angažman 
          i jačaju prepoznatljivost brenda.
        </p>
      </div>
      <div className="trustiva-video-container">
        <div className='trustiva-videos'>
            {videos.map((video, index) => (
                <video autoPlay loop muted>
                    <source src={video.src} alt={`Animation ${index + 1}`} />
                </video>
            ))}
        </div>
      </div>
        

      <div className="project-description">
        <p> 
          Set od četiri animacije dodatno naglašava važnost kretanja u vizualnoj komunikaciji. Stilski i vizualno usklađene grafike, pretvorene iz statičkih u animirane, povećavaju privlačnost i angažman publike. 
          Animacije ne samo da zadržavaju pažnju gledatelja, već i čine poruku dinamičnijom i jasnijom, dok dosljedan stil osigurava prepoznatljivost i profesionalnost brenda.
        </p>
        <p>
            Korištenje mockupa omogućuje realističan prikaz logotipa i vizualnog identiteta brenda u različitim kontekstima, od web stranica i društvenih mreža do promotivnih materijala i prezentacija. 
            Mockupi pomažu u vizualizaciji brenda u stvarnom svijetu i jačaju profesionalni dojam kod klijenata.
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

export default Trustiva;
