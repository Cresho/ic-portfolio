import './index.scss';
import placeholderImage from '../../assets/images/placeholder.jpg';

const Home = () => {

    const images = [
        { src: placeholderImage, link: 'https://www.youtube.com/watch?v=5AtvXdmPe3A&list=RD5AtvXdmPe3A&start_radio=1&ab_channel=JohnnyCash-Topic'},
        { src: placeholderImage, link: 'https://www.youtube.com/watch?v=5AtvXdmPe3A&list=RD5AtvXdmPe3A&start_radio=1&ab_channel=JohnnyCash-Topic'},
        { src: placeholderImage, link: 'https://www.youtube.com/watch?v=5AtvXdmPe3A&list=RD5AtvXdmPe3A&start_radio=1&ab_channel=JohnnyCash-Topic'},
        { src: placeholderImage, link: 'https://www.youtube.com/watch?v=5AtvXdmPe3A&list=RD5AtvXdmPe3A&start_radio=1&ab_channel=JohnnyCash-Topic'},
        { src: placeholderImage, link: 'https://www.youtube.com/watch?v=5AtvXdmPe3A&list=RD5AtvXdmPe3A&start_radio=1&ab_channel=JohnnyCash-Topic'},
        { src: placeholderImage, link: 'https://www.youtube.com/watch?v=5AtvXdmPe3A&list=RD5AtvXdmPe3A&start_radio=1&ab_channel=JohnnyCash-Topic'},
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