import Link from "next/link";

export default function ProjectCard({ project }) {
  return (
    <article key={project.id} className="bg-primary w-max">
      <Link href={`/project/${project.id}`}>
        <a className="link">
          <h2>Title: {project.title}</h2>
        </a>
      </Link>
      <img src={project?.coverImage} width={300}/>
          <p>Pitch: {project.pitch}</p>
        <p>Author: {project?.author?.profileName}</p>
    </article>
  );
}
