import './index.scss';
import CoverPhoto from '../../../assets/project-images/CraftMapped/Cover.png';
import HorizontalLogo from '../../../assets/project-images/CraftMapped/LogoHorizontal.png';
import ColourPalette from '../../../assets/project-images/CraftMapped/Colours.png';
import PrimaryTypeface from '../../../assets/project-images/CraftMapped/CraftMappedPrimary .png';
import SymbolTypeface from '../../../assets/project-images/CraftMapped/CraftMappedSecondary.png';
import Phone1 from '../../../assets/project-images/CraftMapped/Phone1.png';
import Phone2 from '../../../assets/project-images/CraftMapped/Phone2.png';
import Phone3 from '../../../assets/project-images/CraftMapped/Phone3.png';
import VideoFile from '../../../assets/project-images/CraftMapped/Video1.mp4';
import Mockup1 from '../../../assets/project-images/CraftMapped/1.png';
import Mockup2 from '../../../assets/project-images/CraftMapped/2.png';
import Mockup3 from '../../../assets/project-images/CraftMapped/3.png';
import Mockup4 from '../../../assets/project-images/CraftMapped/4.png';
import Mockup5 from '../../../assets/project-images/CraftMapped/5.png';
import Mockup6 from '../../../assets/project-images/CraftMapped/6.png';

const CraftMapped = () => {

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
      <h1><a href="https://CraftMapped.com/" target="_blank" rel="noreferrer">CraftMapped</a></h1>
      <img className="cover-photo" src={CoverPhoto} alt='CraftMapped Cover' />
      <div className="project-description">
        <p>
           Kod CraftMapped brenda koji se fokusira na 3D mapiranje i skeniranje prostora cilj je bio stvoriti vizualni identitet koji odražava tehnologiju, preciznost i inovativnost. 
           Žuta boja, inspirirana gradilišnim tonovima, simbolizira energiju, dinamiku i industrijski duh, dok moderan sans serif font naglašava čistoću, preciznost i suvremenost brenda.
        </p>
        <p>
            Logotip je jednostavan, prepoznatljiv i primjenjiv u digitalnim i tiskanim materijalima, što omogućuje dosljednu prezentaciju brenda u različitim kontekstima. 
            Cjelokupni vizual odražava profesionalnost, tehničku stručnost i inovativan pristup, ističući brend kao pouzdanog partnera u području 3D tehnologija i mapiranja prostora.
        </p>
      </div>
      <div className="craft-mapped-logo">
        <img src={HorizontalLogo} alt='Horizontal Logo' />
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
          Za tehnološki brend koji se bavi 3D mapiranjem i skeniranjem prostora vizualna komunikacija je ključ za privlačenje pažnje i isticanje stručnosti. 
          Na društvenim mrežama jasni i atraktivni vizuali pomažu brendu da komunicira inovativnost, privuče potencijalne klijente i gradi povjerenje u svoja rješenja.
        </p>
      </div>
      <div className='craft-mapped-video'>
        <video autoPlay loop muted>
          <source src={VideoFile} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="project-description">
        <p> 
          Video prikaz procesa skeniranja dodatno ističe stručnost i tehnološku inovativnost brenda. Vizualno demonstrira kako se prostori analiziraju i mapiraju, 
          čime se prenosi jasnoća, preciznost i pouzdanost brenda. Takvi sadržaji ne samo da educiraju publiku, već i jačaju prepoznatljivost i profesionalni ugled brenda u industriji.
        </p>
        <p>
            Korištenje mockupa omogućuje realističan prikaz logotipa i vizualnog identiteta brenda u različitim kontekstima, od web stranica i društvenih mreža do prezentacija i promotivnih materijala. 
            Na taj način potencijalni klijenti odmah mogu vizualizirati kako brend i njegova rješenja funkcioniraju u stvarnom svijetu, što gradi povjerenje i profesionalni dojam.
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

export default CraftMapped;
