import './index.scss';
import CoverPhoto from '../../../assets/project-images/PolicyHounds/Cover.png';
import VerticalLogo from '../../../assets/project-images/PolicyHounds/LogoVertical.png';
import HorizontalLogo from '../../../assets/project-images/PolicyHounds/LogoHorizontal.png';
import ColourPalette from '../../../assets/project-images/PolicyHounds/Colours.png';
import PrimaryTypeface from '../../../assets/project-images/PolicyHounds/PolicyHoundsPrimary .png';
import SymbolTypeface from '../../../assets/project-images/PolicyHounds/PolicyHoundsSecondary.png';
import Phone1 from '../../../assets/project-images/PolicyHounds/Phone1.png';
import Phone2 from '../../../assets/project-images/PolicyHounds/Phone2.png';
import Phone3 from '../../../assets/project-images/PolicyHounds/Phone3.png';
import VideoFile from '../../../assets/project-images/PolicyHounds/Video2.mp4';
import Mockup1 from '../../../assets/project-images/PolicyHounds/1.png';
import Mockup2 from '../../../assets/project-images/PolicyHounds/2.png';
import Mockup3 from '../../../assets/project-images/PolicyHounds/3.png';
import Mockup4 from '../../../assets/project-images/PolicyHounds/4.png';
import Mockup5 from '../../../assets/project-images/PolicyHounds/5.png';
import Mockup6 from '../../../assets/project-images/PolicyHounds/6.png';

const PolicyHounds = () => {

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
      <h1><a href="https://policyhounds.com/home/" target="_blank" rel="noreferrer">Policy Hounds</a></h1>
      <img className="cover-photo" src={CoverPhoto} alt='Policy Hounds Cover' />
      <div className="project-description">
        <p> 
          Za brend auto osiguranja Policy Hounds cilj je bio stvoriti vizualni identitet koji prenosi pouzdanost, profesionalnost i sigurnost. 
          Plava boja simbolizira povjerenje i stabilnost, dok moderni sans serif font unosi jasnoću, čitljivost i suvremen izgled.
        </p>
        <p>
            Logotip je jednostavan, prepoznatljiv i prilagodljiv različitim kanalima komunikacije, od digitalnih platformi i društvenih mreža do tiskovina i promotivnih materijala. 
            Cjelokupni vizual naglašava ozbiljnost i stručnost brenda, istovremeno ostajući pristupačan klijentima koji traže pouzdano auto osiguranje.
        </p>
      </div>
      <div className="policy-hounds-logos">
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
          Za brend auto osiguranja vizualna komunikacija je ključ za izgradnju povjerenja i profesionalnog dojma. Plava boja i moderni sans serif font prenose stabilnost, pouzdanost i jasnoću. 
          Na društvenim mrežama jasni i profesionalni vizuali pomažu u jačanju angažmana, prepoznatljivosti i povjerenja klijenata, što je ključno u sektoru auto osiguranja.
        </p>
      </div>
      <div className='policy-hounds-video'>
        <video autoPlay loop muted >
          <source src={VideoFile} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="project-description">
        <p> 
          Video animacija auta koja prolazi ulicom na web stranici brenda stvara vizualno privlačan i dinamičan dojam. Iako nema posebno simbolično značenje, animacija je dizajnirana da zadrži pažnju 
          gledatelja i učini iskustvo pregledavanja stranice zanimljivijim i ugodnijim za oko, naglašavajući moderni i pristupačni karakter brenda.
        </p>
        <p>
            Korištenje mockupa omogućuje realističan prikaz logotipa i vizualnog identiteta brenda u različitim kontekstima, od web stranica i društvenih mreža do promotivnih materijala i prezentacija. 
            Time se potencijalnim klijentima omogućuje da odmah vide kako brend izgleda u stvarnom svijetu, što gradi profesionalni dojam i povjerenje.
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

export default PolicyHounds;
