import { Link, Route, Routes } from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import "../src/index.css";
import Contact from './components/Contact';

type Props = {}

const App = (props: Props) => {
  return (    
    <div className='container'>
      <nav>
        <ul>
          <li>
            <Link to={"/"} >Home</Link>
          </li>
          <li>
            <Link to={"/about"} >About</Link>
          </li>
          <li>
            <Link to={"/contact"} >Contact</Link>
          </li>
        </ul>
        <ul>
          <li>
            <button>Sign Up</button>
          </li>
          <li>
            <button>Login</button>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App