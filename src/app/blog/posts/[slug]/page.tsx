import { getPostBySlug, getPostSlugs } from "@/util/post";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import rehypePrettyCode from "rehype-pretty-code";
import { transformerNotationDiff } from "@shikijs/transformers";

export default async function Page({ params }: { params: { slug: string } }) {
  let post = await getPostBySlug(params.slug);
  //@imageUrlという文字列を画像のURLに置換する
  post = post.replace(/@imageUrl/g, `/posts/${params.slug}/`);

  const mdx = await compileMDX({
    source: post,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkGfm, remarkFrontmatter, remarkMdxFrontmatter],
        rehypePlugins: [
          [
            rehypePrettyCode,
            {
              theme: "dracula",
              transformers: [transformerNotationDiff()],
            },
          ],
        ],
      },
    },
  });
  const content = mdx.content;
  // frontmatter -> front-matter部分
  const frontmatter = mdx.frontmatter as { title: string; date: string };

  return (
    <div>
      <header
        style={
          {
            /*略*/
          }
        }
      >
        <h1>{frontmatter.title}</h1>
        <div>{frontmatter.date}</div>
      </header>
      <article className="prose prose-xl">{content}</article>;
    </div>
  );
}

export async function generateStaticParams() {
  const slugs = await getPostSlugs();
  return slugs.map((slug) => ({
    params: { slug },
  }));
}
