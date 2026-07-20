/* Small reusable pieces shared by several pages.
   shouldn't need to edit these to change content —
   all text comes from /src/data.js. */

// Monospace "// Section" label used above headings
export function Eyebrow({ children }) {
  return <span className="eyebrow">// {children}</span>;
}

// Pill tag list, e.g. interests, project types, languages
export function TagList({ tags }) {
  return (
    <ul className="tag-list">
      {tags.map((tag) => (
        <li className="tag" key={tag}>{tag}</li>
      ))}
    </ul>
  );
}

// One project card (Projects page)
export function ProjectCard({ project }) {
  return (
    <article className="card">
      {project.image ? (
        <img className="thumb" src={project.image} alt={project.title} />
      ) : (
        <div className="thumb-placeholder">Project Image</div>
      )}
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <TagList tags={project.tags} />
      <a href={project.link} className="btn btn-outline">View Details</a>
    </article>
  );
}

// One repository card (Repositories page)
export function RepoCard({ repo }) {
  return (
    <article className="card">
      <h3>{repo.name}</h3>
      <p>{repo.description}</p>
      <TagList tags={[repo.language]} />
      <a href={repo.link} className="btn btn-outline" target="_blank" rel="noopener noreferrer">
        View on GitHub ↗
      </a>
    </article>
  );
}
