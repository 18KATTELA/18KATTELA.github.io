import { PROFILE, REPOS } from '../data.js';
import { Eyebrow, RepoCard } from '../components/ui.jsx';

// Repositories page ("/repositories") — cards render from REPOS in data.js.
// Update that array manually when you publish new repos, or later replace
// it with a fetch() to https://api.github.com/users/YOUR-USERNAME/repos
export default function Repositories() {
  return (
    <section className="section">
      <div className="container">
        <h1>GitHub Repositories</h1>
        <p className="muted" style={{ maxWidth: '62ch', marginTop: '1rem' }}>
          This page links to my open-source and coursework code — simulation
          scripts, analysis tools, and project software. Everything lives on my
          GitHub profile.
        </p>

        <p style={{ marginTop: '1.5rem' }}>
          <a
            href={PROFILE.github}
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            View My GitHub Profile ↗
          </a>
        </p>

        <div className="card-grid">
          {REPOS.map((repo) => (
            <RepoCard repo={repo} key={repo.name} />
          ))}
        </div>
      </div>
    </section>
  );
}
