import Feed from "@/components/Feed";
import Layout from "@/components/Layout";

export default function Home({ feed }) {
  return (
    <Layout>
      <Feed feed={feed} />
    </Layout>
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
