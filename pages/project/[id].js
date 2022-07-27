import React, { useState } from "react";
import prisma from "@/lib/prisma";
import { useRouter } from "next/router";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

export default function Project({ project }) {
  console.log(project);
  const router = useRouter();
  const { id } = router.query;

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="lg:container px-2 sm:px-8 lg:px-0 mx-auto grid grid-cols-1 lg:grid-cols-2 border border-rose-400 ">
        <div>
          <img src={project?.coverImage} />
          <div className="p-6 bg-[#4e5b61] text-white">
            <div className="text-3xl mb-8 font-bold">{project?.title}</div>
            <div className="mb-8">{project?.pitch}</div>
            <div className="flex gap-2 mb-4">
              <div className="tagging">machine learning</div>
              <div className="tagging">sports</div>
              <div className="tagging">tinyml</div>
            </div>
            <div className="flex gap-4">
              <div className="flex items-end gap-1 font-bold">
                <div className="leading-none text-md">232</div>
                <div
                  className=" leading-none
              text-xs uppercase"
                >
                  views
                </div>
              </div>
              <div className="flex items-end gap-1 font-bold">
                <div className="leading-none text-md">0</div>
                <div
                  className=" leading-none
              text-xs uppercase"
                >
                  comments
                </div>
              </div>
              <div className="flex items-end gap-1 font-bold">
                <div className="leading-none text-md">1</div>
                <div
                  className=" leading-none
              text-xs uppercase"
                >
                  respect
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="min-h-[5rem]   my-8 bg-white p-4">
          <div
            onClick={() => setIsOpen((pre) => !pre)}
            className="flex justify-between items-center "
          >
            <div className="text-2xl font-semibold">About This Project</div>
            {isOpen ? <FiChevronUp /> : <FiChevronDown />}
          </div>

          <p className="mt-4 overflow-hidden ease-in-out duration-300">
            {isOpen ? `Project Content Markdown: ${project?.content}` : ""}
          </p>
        </div>
      </div>
    </>
  );
}
export const getServerSideProps = async ({ params }) => {
  let project = await prisma.project.findUnique({
    where: {
      id: String(params?.id),
    },
    include: {
      author: {
        select: { profileName: true },
      },
    },
  });
  project = JSON.parse(JSON.stringify(project));
  return {
    props: { project },
  };
};
