import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

import { WorkPost } from "./types";

const workDirectory = join(process.cwd(), "data", "work");

export function getWorkPostSlugs(): string[] {
  return fs.readdirSync(workDirectory);
}

export function getWorkPostBySlug(slug: string): WorkPost {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(workDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug, content } as WorkPost;
}

export function getAllWorkPosts(): WorkPost[] {
  const slugs = getWorkPostSlugs();
  const work = slugs
    .map((slug) => getWorkPostBySlug(slug))
    // sort work by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return work;
}
