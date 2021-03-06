import Link from "next/link";

export default function ProjectCard({ project }) {
  return (
    <Link href={`/project/${project.id}`}>
      <article
        key={project.id}
        className="z-0 bg-white w-full cursor-pointer border border-rose-500 overflow-hidden"
      >
        <div className="w-full h-64 relative ">
          <div
            className="absolute inset-0 bg-cover bg-center z-0 h-full w-full"
            style={{ backgroundImage: `url(${project?.coverImage})` }}
          ></div>
          <p className="text-white absolute inset-0 z-10 bg-primaryhalf flex justify-center items-center opacity-0 hover:opacity-100">
            {project.pitch}
          </p>
        </div>
        <div className="p-4">
          <div className="text-xl font-bold mb-3">{project.title}</div>
          <p>
            Project tutorial by{" "}
            <span className="font-bold">{project?.author?.profileName} </span>{" "}
          </p>
          <div className="flex"></div>
        </div>
      </article>
    </Link>
  );
}
