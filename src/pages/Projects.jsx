import { PROJECTS } from '../data.js';
import { Eyebrow, ProjectCard } from '../components/ui.jsx';

// Projects page ("/projects") — cards render from the PROJECTS array in data.js.
// To add a project, add an object to that array; no changes needed here.
export default function Projects() {
  return (
    <section className="section">
      <div className="container">
        <h1>Engineering Projects</h1>

        <div className="banner">
          Projects will be added as they are completed
        </div>

        <div className="card-grid">
          {PROJECTS.map((project) => (
            <ProjectCard project={project} key={project.title} />
          ))}
        </div>
      </div>
    </section>
  );
}
