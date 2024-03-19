import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

import { BlogPost } from "./types";

const blogDirectory = join(process.cwd(), "data", "blog");

export function getBlogPostSlugs(): string[] {
  return fs.readdirSync(blogDirectory);
}

export function getBlogPostBySlug(slug: string): BlogPost {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(blogDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug, content } as BlogPost;
}

export function getAllBlogPosts(): BlogPost[] {
  const slugs = getBlogPostSlugs();
  const blog = slugs
    .map((slug) => getBlogPostBySlug(slug))
    // sort blog by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return blog;
}
