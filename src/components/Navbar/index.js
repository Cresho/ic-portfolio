import './index.scss';
import { Link } from 'react-router-dom';
import LogoSub from '../../assets/images/logo-i-sub.png';

const Navbar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoSub} alt="logo" />
        </Link>
    </div>
);

export default Navbar;