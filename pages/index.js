import ProjectCard from "@/components/ProjectCard";
import Tab from "@/components/Tab";
import prisma from "@/lib/prisma";

export default function Home({ feed }) {
  return (
    <>
      <div className="max-w-5xl mx-auto grid grid-cols-1  gap-8  md:grid-cols-2 lg:grid-cols-3 ">
        <div className="col-span-full flex gap-x-2">
          <Tab />
          <Tab />
          <Tab />
          <Tab />
          <Tab />
        </div>

        {feed?.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
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
