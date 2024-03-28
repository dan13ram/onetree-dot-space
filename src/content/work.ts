import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

import { WorkPost } from "./types";

const workDirectory = join(process.cwd(), "data", "work");

export function getWorkPostSlugs(): string[] {
  const files = fs.readdirSync(workDirectory);
  return files.map((file) => file.replace(/\.md$/, ""));
}

export function getWorkPostBySlug(slug: string): WorkPost {
  const fullPath = join(workDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { ...data, slug, content } as WorkPost;
}

export function getAllWorkPosts(): WorkPost[] {
  const slugs = getWorkPostSlugs();
  const work = slugs
    .map((slug) => getWorkPostBySlug(slug))
    // sort work by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return work;
}
