import './index.scss';
import CoverPhoto from '../../../assets/project-images/GlideMedicare/Cover.png';
import HorizontalLogo from '../../../assets/project-images/GlideMedicare/LogoHorizontal.png';
import ColourPalette from '../../../assets/project-images/GlideMedicare/Colours.png';
import PrimaryTypeface from '../../../assets/project-images/GlideMedicare/GlidePrimary .png';
import SymbolTypeface from '../../../assets/project-images/GlideMedicare/GlideSecondary.png';
import Phone1 from '../../../assets/project-images/GlideMedicare/Phone1.png';
import Phone2 from '../../../assets/project-images/GlideMedicare/Phone2.png';
import Phone3 from '../../../assets/project-images/GlideMedicare/Phone3.png';
import VideoFile from '../../../assets/project-images/GlideMedicare/Video.mp4';
import Mockup1 from '../../../assets/project-images/GlideMedicare/1.png';
import Mockup2 from '../../../assets/project-images/GlideMedicare/2.png';
import Mockup3 from '../../../assets/project-images/GlideMedicare/3.png';
import Mockup4 from '../../../assets/project-images/GlideMedicare/4.png';
import Mockup5 from '../../../assets/project-images/GlideMedicare/5.png';
import Mockup6 from '../../../assets/project-images/GlideMedicare/6.png';

const GlideMedicare = () => {

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
      <h1><a href="https://glidemedicare.com/" target="_blank" rel="noreferrer">Glide Medicare</a></h1>
      <img className="cover-photo" src={CoverPhoto} alt='Glide Medicare Cover' />
      <div className="project-description">
        <p> 
          Za brend Glide Medicare koji se bavi medicinskim osiguranjem cilj je bio stvoriti vizualni identitet koji prenosi povjerenje, pristupačnost i profesionalnost, 
          s naglaskom na stariju populaciju. Odabrana tirkizna boja simbolizira smirenost, zdravlje i pouzdanost, dok kaligrafski serifni font unosi osjećaj elegancije, 
          iskustva i tradicije.
        </p>
        <p>
           Logotip je jednostavan i prepoznatljiv, dizajniran tako da bude lako čitljiv i primjenjiv u svim kanalima komunikacije, od digitalnih platformi do tiskovina. 
           Cjelokupni vizual odražava brend koji je topao, prijateljski, ali i stručan, naglašavajući sigurnost i brigu o klijentima.
        </p>
      </div>
      <div className="glide-logo">
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
          Za brend medicinskog osiguranja vizualna komunikacija igra ključnu ulogu u izgradnji povjerenja i osjećaja sigurnosti, posebno kod starije publike. Kvalitetni 
          i jasno osmišljeni vizuali ne samo da privlače pažnju, već i olakšavaju razumijevanje ponude osiguranja te jačaju emocionalnu povezanost s publikom.
        </p>
      </div>
      <div className='glide-video'>
        <video controls>
          <source src={VideoFile} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="project-description">
        <p> 
          Video reklama dodatno ističe ključne beneficije agencije, komunicira jasnoću i pristupačnost ponude te gradi emocionalnu povezanost s gledateljima. 
          Kombinacija vizualnog identiteta i video sadržaja omogućuje da brend bude prepoznatljiv, pouzdan i atraktivan za ciljanu publiku.
        </p>
        <p>
           Korištenje mockupa omogućuje realističan prikaz logotipa i vizualnog identiteta brenda u različitim kontekstima, na web stranicama, društvenim mrežama 
           i promotivnim materijalima. Time se pokazuje kako brend izgleda u stvarnom svijetu, što povećava profesionalni dojam i povjerenje kod starije publike.
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

export default GlideMedicare;
