import Link from "next/link";
import { postmeta } from "@/types/post";
export function PostCard({
  postMeta,
  slug,
}: {
  slug: string;
  postMeta: postmeta;
}) {
  return (
    <div className="bg-white p-4 shadow-md rounded-md">
      <Link href={`/blog/posts/${slug}`}>
        <ul className="">
          {postMeta.tags?.map((tag) => (
            <li
              key={tag}
              className="inline-block bg-gray-200 rounded-md px-2 py-1 text-xs text-gray-500 mr-2"
            >
              {tag}
            </li>
          ))}
        </ul>
        <h2 className="text-xl font-bold">{postMeta.title}</h2>
        <p className="text-sm text-gray-500">{postMeta.date.toDateString()}</p>
      </Link>
    </div>
  );
}
