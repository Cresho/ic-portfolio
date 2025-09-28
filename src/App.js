import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

import PolicyHounds from './components/projects/PolicyHounds';
import SusanYap from './components/projects/SusanYap';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="policyhounds" element={<PolicyHounds />} />
          <Route path="susanyap" element={<SusanYap />} />
        </Route>
      </Routes>
    </>
  )
}

export default App;
