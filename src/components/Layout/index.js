import './index.scss';
import Navbar from '../Navbar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div className='App'>
            <Navbar />
            <div className='page'>
                <Outlet />
            </div>
            <div className="bottom-zone">
                <h1>Ivana Čalić</h1>
                <h1><a href="mailto:ivana.calic01@gmail.com?subject=Pozdrav">ivana.calic01@gmail.com</a></h1>
                <h1><a href="https://www.linkedin.com/in/ivana-%C4%8Dali%C4%87-0847b0282/">LinkedIn</a></h1>
            </div>
            <footer>
                <p>© 2025 Ivana Čalić. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default Layout;