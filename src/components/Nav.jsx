import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { PROFILE } from '../data.js';

// Shared sticky navigation. NavLink automatically adds the
// "active" class to the current page's link (styled in styles.css).
const LINKS = [
  { to: '/', label: 'About Me' },
  { to: '/projects', label: 'Projects' },
  { to: '/cv', label: 'CV' },
  { to: '/repositories', label: 'Repositories' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="nav container" aria-label="Main navigation">
        <Link to="/" className="nav-logo" onClick={() => setOpen(false)}>
          My portfolio
        </Link>

        <button
          className="nav-toggle"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        <ul className={`nav-links${open ? ' open' : ''}`}>
          {LINKS.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} end={link.to === '/'} onClick={() => setOpen(false)}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
