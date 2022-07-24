import ProjectCard from "@/components/ProjectCard";
import Tab from "@/components/Tab";
import prisma from "@/lib/prisma";
import { AiOutlineSearch } from "react-icons/ai";

export default function Home({ feed }) {
  return (
    <>
      <div className="max-w-5xl mx-auto grid grid-cols-1  gap-8  md:grid-cols-2 lg:grid-cols-3 ">
        <div className="col-span-full mx-auto w-64 grid grid-cols-2 gap-y-2 md:flex md:w-full md:m-0 gap-x-2 ">
          <div className="col-span-2 md:hidden">
            <div className="bg-white px-4 h-10 flex items-center gap-x-4 w-full">
              <AiOutlineSearch />
              <input
                type="search"
                className="bg-transparent outline-none text-center placeholder:text-slate-500 leading-10 text-sm"
                placeholder="Search Projects"
              />
            </div>
          </div>
          <Tab />
          <Tab />
          <Tab />
          <Tab />
          <div className="col-span-2">
            <Tab />
          </div>
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
