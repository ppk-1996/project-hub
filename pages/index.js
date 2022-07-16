import ProjectCard from "@/components/ProjectCard";
import prisma from "@/lib/prisma";

export default function Home({ feed }) {
  return (
    <>
      <h1 className="my-4 mb-12 text-3xl font-bold">All Projects</h1>
      <div className="grid grid-cols-1 justify-items-center gap-y-8  md:grid-cols-2 lg:grid-cols-3">
        {feed?.map((project) => (
          <ProjectCard project={project} />
        ))}
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  let feed = await prisma.project.findMany({
    where: { published: true },
    include: {
      author: {
        select: { profileName: true },
      },
    },
  });
  feed = JSON.parse(JSON.stringify(feed));
  return { props: { feed } };
};
