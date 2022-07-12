import prisma from "@/lib/prisma";
import { useRouter } from "next/router";

export default function Project({ project }) {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <p>Project ID: {id}</p>
      <p>Project Name: {project?.title}</p>
      <img src={project?.coverImage}/>
      <p>Project Content Markdown: {project?.content}</p>
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
