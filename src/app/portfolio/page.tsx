import { SimpleGrid } from "@chakra-ui/react";

import { WorkTile } from "@/components/WorkTile";
import { getAllWorkPosts } from "@/content/work";

const Work: React.FC = () => {
  const workPosts = getAllWorkPosts();

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 6, lg: 8 }}>
      {workPosts.map((post) => (
        <WorkTile key={post.slug} {...post} />
      ))}
    </SimpleGrid>
  );
};

export default Work;
