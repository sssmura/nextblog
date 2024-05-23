import { PostCard } from "@/components/PostCard";
import { getPostSlugs, getPostMetaBySlug } from "@/util/post";
import fs from "fs";
import path from "path";
export default async function BlogPage() {
  //postTitlesから拡張子のついたファイルを除外

  const postSlugs = await getPostSlugs();
  const postMetaPromises = postSlugs.map((slug) => getPostMetaBySlug(slug));
  const postMetas = await Promise.all(postMetaPromises);
  const allTags = postMetas.flatMap((meta) => meta.tags ?? []);
  // process.cwd()/posts/tag.jsonにtagsを読み込む

  const cuurent_tags = JSON.parse(
    await fs.promises.readFile(
      path.join(process.cwd(), "posts/tag.json"),
      "utf-8"
    )
  ) as {
    tags: string[];
  };
  //cuurent_tagsに新しいタグを追加
  cuurent_tags.tags = Array.from(new Set([...cuurent_tags.tags, ...allTags]));

  // process.cwd()/posts/tag.jsonにtagsを書き込む
  await fs.promises.writeFile(
    path.join(process.cwd(), "posts/tag.json"),
    JSON.stringify(allTags)
  );

  return (
    <div>
      <h1>Blog</h1>
      <section>
        <h2>More Posts</h2>
        <ul>
          {postMetas.map((meta) => (
            <PostCard key={meta.title} postMeta={meta} slug={meta.slug} />
          ))}
        </ul>
      </section>
    </div>
  );
}
