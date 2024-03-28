import { Metadata } from "next";
import { notFound } from "next/navigation";

import { WorkTile } from "@/components/WorkTile";
import { getWorkPostBySlug, getWorkPostSlugs } from "@/content/work";

type Params = {
  params: {
    slug: string;
  };
};

const WorkPostPage: React.FC<React.PropsWithChildren<Params>> = ({
  params,
}: Params) => {
  const post = getWorkPostBySlug(params.slug);

  return <WorkTile key={post.slug} {...post} />;
};

export const generateMetadata = ({ params }: Params): Metadata => {
  const post = getWorkPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const title = `${post.title} | OneTree Space`;

  return {
    title,
    openGraph: {
      title,
      images: [post.thumbnail],
    },
  };
};

export const generateStaticParams = async (): Promise<
  Array<Params["params"]>
> => {
  const slugs = getWorkPostSlugs();

  return slugs.map((slug) => ({
    slug: slug,
  }));
};

export default WorkPostPage;
