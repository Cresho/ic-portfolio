import './index.scss';
import thumbnail1 from '../../assets/images/thumbnail1.jpg';
import thumbnail2 from '../../assets/images/thumbnail2.jpg';
import thumbnail3 from '../../assets/images/thumbnail3.jpg';
import thumbnail4 from '../../assets/images/thumbnail4.jpg';
import thumbnail5 from '../../assets/images/thumbnail5.jpg';
import thumbnail6 from '../../assets/images/thumbnail6.jpg';

import { Link, NavLink } from 'react-router-dom';

const Home = () => {

    const images = [
        { src: thumbnail1, link: '/policyhounds' },
        { src: thumbnail2, link: 'https://www.youtube.com/watch?v=5AtvXdmPe3A&list=RD5AtvXdmPe3A&start_radio=1&ab_channel=JohnnyCash-Topic'},
        { src: thumbnail3, link: 'https://www.youtube.com/watch?v=5AtvXdmPe3A&list=RD5AtvXdmPe3A&start_radio=1&ab_channel=JohnnyCash-Topic'},
        { src: thumbnail4, link: 'https://www.youtube.com/watch?v=5AtvXdmPe3A&list=RD5AtvXdmPe3A&start_radio=1&ab_channel=JohnnyCash-Topic'},
        { src: thumbnail5, link: 'https://www.youtube.com/watch?v=5AtvXdmPe3A&list=RD5AtvXdmPe3A&start_radio=1&ab_channel=JohnnyCash-Topic'},
        { src: thumbnail6, link: '/susanyap'},
    ];


    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hello, I'm Ivana Čalić, a Graphic Designer from Croatia.
                    I use concept development, visual communication and user-centered design in Adobe Creative Suite to create awesome digital experiences.
                </h1>
            </div>
            <div className="image-zone">
                {images.map((image, index) => (
                    <NavLink key={index} to={image.link}>
                        <img src={image.src} alt={`Image ${index + 1}`} />
                    </NavLink>
                ))}
            </div>
        </div>
    )
}


export default Home