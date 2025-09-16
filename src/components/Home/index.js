import './index.scss';
import thumbnail1 from '../../assets/images/thumbnail1.jpg';
import thumbnail2 from '../../assets/images/thumbnail2.jpg';
import thumbnail3 from '../../assets/images/thumbnail3.jpg';
import thumbnail4 from '../../assets/images/thumbnail4.jpg';
import thumbnail5 from '../../assets/images/thumbnail5.jpg';
import thumbnail6 from '../../assets/images/thumbnail6.jpg';

const Home = () => {

    const images = [
        { src: thumbnail1, link: 'https://www.youtube.com/watch?v=5AtvXdmPe3A&list=RD5AtvXdmPe3A&start_radio=1&ab_channel=JohnnyCash-Topic'},
        { src: thumbnail2, link: 'https://www.youtube.com/watch?v=5AtvXdmPe3A&list=RD5AtvXdmPe3A&start_radio=1&ab_channel=JohnnyCash-Topic'},
        { src: thumbnail3, link: 'https://www.youtube.com/watch?v=5AtvXdmPe3A&list=RD5AtvXdmPe3A&start_radio=1&ab_channel=JohnnyCash-Topic'},
        { src: thumbnail4, link: 'https://www.youtube.com/watch?v=5AtvXdmPe3A&list=RD5AtvXdmPe3A&start_radio=1&ab_channel=JohnnyCash-Topic'},
        { src: thumbnail5, link: 'https://www.youtube.com/watch?v=5AtvXdmPe3A&list=RD5AtvXdmPe3A&start_radio=1&ab_channel=JohnnyCash-Topic'},
        { src: thumbnail6, link: 'https://www.youtube.com/watch?v=5AtvXdmPe3A&list=RD5AtvXdmPe3A&start_radio=1&ab_channel=JohnnyCash-Topic'},
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
                    <a key={index} href={image.link} target="_blank" rel="noopener noreferrer">
                        <img src={image.src} alt={`Image ${index + 1}`} />
                    </a>
                ))}
            </div>

            <div className="bottom-zone">
                <h1>Ivana Čalić</h1>
                <h1>ivana.calic01@gmail.com</h1>
                <h1><a href="https://www.linkedin.com/in/ivana-calic/">LinkedIn</a></h1>
            </div>

            <footer>
                <p>© 2024 Ivana Čalić. All rights reserved.</p>
            </footer>
        </div>
    )
}


export default Home