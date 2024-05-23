import { PostCard } from "@/components/PostCard";
import { getPostSlugs, getPostMetaBySlug } from "@/util/post";

export default async function BlogPage() {
  //postTitlesから拡張子のついたファイルを除外

  const postSlugs = await getPostSlugs();
  const postMetaPromises = postSlugs.map((slug) => getPostMetaBySlug(slug));
  const postMetas = await Promise.all(postMetaPromises);
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
