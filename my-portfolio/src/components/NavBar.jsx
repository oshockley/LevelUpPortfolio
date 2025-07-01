import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="game-navbar">
      <div className="game-logo">O'Neal // Shockwave v1.0</div>
      <ul className="game-nav-links">
        <li><Link to="/">Start Game</Link></li>
        <li><Link to="/about">Character Bio</Link></li>
        <li><Link to="/projects">Missions</Link></li>
        <li><Link to="/contact">Comms</Link></li>
      </ul>
    </nav>
  );
}
