import Feed from "@/components/Feed";
import Layout from "@/components/Layout";

export default function Home({ feed }) {
  return (
      <Feed feed={feed} />
  );
}
import prisma from "@/lib/prisma";
export const getStaticProps = async () => {
  const feed = await prisma.project.findMany({
    where: { published: true },
    include: {
      author: {
        select: { user: true },
      },
    },
  });
  return { props: { feed } };
};
