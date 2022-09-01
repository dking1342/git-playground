import { Link } from 'react-router-dom';
import "../styles/Navbar.css";

type Props = {}

const Navbar = (props: Props) => {
  return (
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
  )
}

export default Navbar