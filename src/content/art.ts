import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

import { ArtPost } from "./types";

const artDirectory = join(process.cwd(), "data", "art");

export function getArtPostSlugs(): string[] {
  const files = fs.readdirSync(artDirectory);
  return files.map((file) => file.replace(/\.md$/, ""));
}

export function getArtPostBySlug(slug: string): ArtPost {
  const fullPath = join(artDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { ...data, slug, content } as ArtPost;
}

export function getAllArtPosts(): ArtPost[] {
  const slugs = getArtPostSlugs();
  const art = slugs
    .map((slug) => getArtPostBySlug(slug))
    // sort art by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return art;
}
