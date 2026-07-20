import { PROFILE } from '../data.js';

// Shared footer — year updates automatically.
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <span>© {new Date().getFullYear()} {PROFILE.name}</span>
        <span>Built with React</span>
      </div>
    </footer>
  );
}
