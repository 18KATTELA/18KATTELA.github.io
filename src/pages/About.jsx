import { PROFILE, INTERESTS } from '../data.js';
import { Eyebrow, TagList } from '../components/ui.jsx';

// About Me page (homepage, "/") — content comes from data.js
export default function About() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div>
            <h1>{PROFILE.name}</h1>
            <p className="headline">{PROFILE.headline}</p>
            <p className="bio">{PROFILE.bio}</p>
          </div>
          {PROFILE.photoUrl ? (
            <img className="photo" src={PROFILE.photoUrl} alt={PROFILE.name} />
          ) : (
            <div className="photo-placeholder">Your Photo Here</div>
          )}
        </div>
      </section>

      <hr className="rule" />

      <section className="section">
        <div className="container">
        
          <h2>Key Interests</h2>
          <TagList tags={INTERESTS} />
        </div>
      </section>

      <hr className="rule" />

      <section className="section" id="contact">
        <div className="container">
          <h2>Get in Touch</h2>
          <p className="muted">{PROFILE.contactIntro}</p>
          <div className="contact-links">
            <a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a>
            <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
            <a href={PROFILE.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
          </div>
        </div>
      </section>
    </>
  );
}
