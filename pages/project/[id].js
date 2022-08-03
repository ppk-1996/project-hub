import React, { useState } from "react";
import prisma from "@/lib/prisma";
import { useRouter } from "next/router";
import AboutProject from "@/components/AboutProject";
import Stats from "@/components/Stats";
import Button from "@/components/Button";
import Image from "next/image";
import { AiOutlineLike } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { BsFillShareFill } from "react-icons/bs";
import { icons } from "react-icons/lib";

export default function Project({ project }) {
  console.log(project);
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className="mt-6">
      <div className="max-w-[1024px] px-2 sm:px-8 lg:px-0 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-x-12 border border-rose-400 ">
        <div className="lg:col-span-2">
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
              <Stats num={232} label="views" />
              <Stats num={0} label="comment" />
              <Stats num={1} label="respect" />
            </div>
          </div>
          <AboutProject content={project ? project.content : ""} />
        </div>
        <div>
          <div className="uppercase text-slate-500 font-semibold mb-1">
            Author
          </div>
          <div className="w-full bg-slate-500 h-px mb-4"></div>
          <div className="bg-white flex gap-2 p-2">
            <div className="bg-mainlight max-w-[30%] p-2 px-4 ">
              <Image
                src="/profiledefault.svg"
                fill="responsive"
                width={90}
                height={150}
              />
            </div>
            <div className="flex flex-col justify-between">
              <div>
                <div className="font-semibold mb-1">
                  {project?.author.profileName}
                </div>
                <div className="flex gap-4 text-slate-400">
                  <Stats num={5} label="projects" />
                  <Stats num={4} label="followers" />
                </div>
              </div>
              <Button label="Follow" back="#BDC7C7" front="#DAE3E3" />
            </div>
          </div>
          <div className="mt-6">
            <div className="uppercase text-slate-500 font-semibold mb-1">
              Published On
            </div>
            <div className="w-full bg-slate-500 h-px mb-3"></div>
            <div>July 8, 2022</div>
          </div>
          <div className="my-6 flex flex-col gap-2">
            <div className="relative group text-white">
              <AiOutlineLike className="absolute z-10 top-[25%] left-[23%] md:left-[41%] group-hover:top-[calc(25%+3px)]" />
              <Button
                label="Respect Project"
                back="#005C5F"
                front="rgb(0,151,156)"
                text="white"
                w="100%"
              />
            </div>
            <div className="relative group ">
              <FiEdit className="absolute z-10 top-[25%] left-[23%] md:left-[40%] group-hover:top-[calc(25%+3px)]" />
              <Button
                label="Write a comment"
                back="#BDC7C7"
                front="#DAE3E3"
                w="100%"
              />
            </div>
            <div className="mt-2  cursor-pointer flex items-center justify-center gap-2 font-semibold text-primary">
              <BsFillShareFill />
              <span className="hover:text-black">Share </span>
            </div>
          </div>
          <div className="mt-6">
            <div className="uppercase text-slate-500 font-semibold mb-1">
              Members who respect the project
            </div>
            <div className="w-full bg-slate-500 h-px mb-3"></div>
            <div className="w-[90%]  flex justify-evenly">
              {[0, 1, 2, 3, 4, 5, 6, 7].map((el) => {
                return (
                  <div key={el}>
                    <Image
                      src="/profiledefault.svg"
                      fill="responsive"
                      width={30}
                      height={30}
                    />
                  </div>
                );
              })}
            </div>
            <div className="mt-2 text-xs">and 13 others</div>
          </div>
        </div>
      </div>
    </div>
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
