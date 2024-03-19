import { WorkTile } from "@/components/WorkTile";
import { getAllWorkPosts } from "@/content/work";

const Work: React.FC = () => {
  const workPosts = getAllWorkPosts();

  return (
    <>
      {workPosts.map((post) => (
        <WorkTile key={post.slug} {...post} />
      ))}
    </>
  );
};

export default Work;
