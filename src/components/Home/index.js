import './index.scss';
import thumbnail1 from '../../assets/images/thumbnail1.jpg';
import thumbnail2 from '../../assets/images/thumbnail2.jpg';
import thumbnail3 from '../../assets/images/thumbnail3.jpg';
import thumbnail4 from '../../assets/images/thumbnail4.jpg';
import thumbnail5 from '../../assets/images/thumbnail5.jpg';
import thumbnail6 from '../../assets/images/thumbnail6.jpg';

import { NavLink } from 'react-router-dom';

const Home = () => {

    const images = [
        { src: thumbnail1, link: '/policyhounds' },
        { src: thumbnail2, link: '/trustiva'},
        { src: thumbnail3, link: '/charliehealthcare'},
        { src: thumbnail4, link: '/craftmapped'},
        { src: thumbnail5, link: '/glidemedicare'},
        { src: thumbnail6, link: '/susanyap'},
    ];


    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Moje ime je Ivana Čalić, ja sam grafička dizajnerica iz Hrvatske. Specijaliziram se za razvoj koncepata, vizualnu komunikaciju
                     i korisnički usmjeren dizajn unutar Adobe Creative Suitea, stvarajući digitalna iskustva koja spajaju funkcionalnost i estetiku.
                </h1>
            </div>
            <div className="image-zone">
                {images.map((image, index) => (
                    <NavLink key={index} to={image.link}>
                        <img src={image.src} alt={`Project ${index + 1}`} />
                    </NavLink>
                ))}
            </div>
        </div>
    )
}


export default Home