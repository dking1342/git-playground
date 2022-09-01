import { Route, Routes } from 'react-router-dom';
import "../src/index.css";
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar';

type Props = {}

const App = (props: Props) => {
  return (    
    <div className='container'>
      <Navbar />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App