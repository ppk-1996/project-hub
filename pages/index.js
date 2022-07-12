import ProjectCard from "@/components/ProjectCard";
import prisma from "@/lib/prisma";

export default function Home({ feed }) {
  return (
    <>
    <h1>All Projects</h1>
      {feed?.map((project) => (
        <ProjectCard project={project} />
      ))}
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
