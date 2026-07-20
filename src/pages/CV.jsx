import { PROFILE, CV as CV_DATA } from '../data.js';
import { Eyebrow, TagList } from '../components/ui.jsx';

// CV page ("/cv") — inline, styled, print-friendly resume.
// All entries come from the CV object in data.js.

export default function CV() {
  return ( 
    <section className="section">
      <div className="container">
        <div className="cv-header">
          <div>
            <h1>CV</h1>
          </div>
          <a href={PROFILE.cvPdf} className="btn btn-primary" download>
            Download CV (PDF)
          </a>
        </div>

        <section className="cv-section">
          <h2>Education</h2>
          {CV_DATA.education.map((entry) => (
            <div className="cv-entry" key={entry.title}>
              <div className="cv-entry-head">
                <h3>{entry.title}</h3>
                <span className="cv-date">{entry.date}</span>
              </div>
              <p className="org">{entry.org}</p>
              <p>{entry.details}</p>
            </div>
          ))}
        </section>
        
        <section className="cv-section">
          <h2>Skills</h2>
          <TagList tags={CV_DATA.skills} />
        </section>
        
      </div>
    </section>
  );
}
/*
Use this when i get them
 <section className="cv-section">
          <h2>Experience</h2>
          {CV_DATA.experience.map((entry) => (
            <div className="cv-entry" key={entry.title}>
              <div className="cv-entry-head">
                <h3>{entry.title}</h3>
                <span className="cv-date">{entry.date}</span>
              </div>
              <p className="org">{entry.org}</p>
              <ul>
                {entry.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>


<section className="cv-section">
          <h2>Certifications</h2>
          {CV_DATA.certifications.map((entry) => (
            <div className="cv-entry" key={entry.title}>
              <div className="cv-entry-head">
                <h3>{entry.title}</h3>
                <span className="cv-date">{entry.date}</span>
              </div>
              <p className="org">{entry.org}</p>
            </div>
          ))}
        </section>

        <section className="cv-section">
          <h2>Awards</h2>
          {CV_DATA.awards.map((entry) => (
            <div className="cv-entry" key={entry.title}>
              <div className="cv-entry-head">
                <h3>{entry.title}</h3>
                <span className="cv-date">{entry.date}</span>
              </div>
              <p>{entry.details}</p>
            </div>
          ))}
        </section>
*/