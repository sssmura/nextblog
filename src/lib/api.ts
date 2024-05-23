import { Post } from "@/interfaces/post";

import fs from "fs";
import matter from "gray-matter";
import { join } from "path";




const postsDirectory = join(process.cwd(), "_posts");
console.log(postsDirectory);
export function getPostSlugs() {
  const postTitles = fs.readdirSync(postsDirectory);
  console.log(postTitles);
  return postTitles;
}

//すべての記事のディレクトリを取得
function getAllPostDir() {
  const postTitles = fs.readdirSync(postsDirectory);
  return postTitles;
}
function a(postDirs: string[]) {


}

export function getPostByTitle(_title: string) {
  const title = _title.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${title}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  return { ...data, title, content } as Post;
}
export function getAllPosts(): Post[] {
  const titles = getPostSlugs();
  const posts = titles
    .map((slug) => getPostByTitle(slug))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}
