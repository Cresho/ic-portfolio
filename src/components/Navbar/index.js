import './index.scss'; 
import { Link, NavLink } from 'react-router-dom';
import LogoSub from '../../assets/images/logo.png';


const Navbar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoSub} alt="logo" />
        </Link>

        <nav>
            <NavLink exact="true" activeclassname="active" to="/">Work</NavLink>
            <NavLink exact="true" activeclassname="active" to="/about">About</NavLink>
            <NavLink exact="true" activeclassname="active" to="/contact">Contact</NavLink>
        </nav>
    </div>
);

export default Navbar;