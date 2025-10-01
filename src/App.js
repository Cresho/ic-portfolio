import './App.scss';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

import PolicyHounds from './components/projects/PolicyHounds';
import SusanYap from './components/projects/SusanYap';
import CharlieHealthcare from './components/projects/CharlieHealthcare';
import CraftMapped from './components/projects/CraftMapped';
import GlideMedicare from './components/projects/GlideMedicare';
import Trustiva from './components/projects/Trustiva';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="policyhounds" element={<PolicyHounds />} />
            <Route path="susanyap" element={<SusanYap />} />
            <Route path="charliehealthcare" element={<CharlieHealthcare />} />
            <Route path="craftmapped" element={<CraftMapped />} />
            <Route path="glidemedicare" element={<GlideMedicare />} />
            <Route path="trustiva" element={<Trustiva />} />
          </Route>
        </Routes>
      </Router>
      
    </>
  )
}

export default App;
