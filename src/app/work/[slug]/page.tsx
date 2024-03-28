import { VStack } from "@chakra-ui/react";
import { Metadata } from "next";
import { notFound } from "next/navigation";

import { WorkDisplay } from "@/components/WorkDisplay";
import { getWorkPostBySlug, getWorkPostSlugs } from "@/content/work";

type Params = {
  params: {
    slug: string;
  };
};

const WorkPostPage: React.FC<Params> = ({ params }: Params) => {
  const post = getWorkPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  return (
    <VStack w="100%" maxW="90vw">
      <WorkDisplay {...post} />;
    </VStack>
  );
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
    slug,
  }));
};

export default WorkPostPage;
