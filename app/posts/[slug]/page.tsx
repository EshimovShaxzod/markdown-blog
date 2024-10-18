import { allPosts } from "@/.contentlayer/generated";
import MDX from "@/components/mdx.components";
import { format, parseISO } from "date-fns";
import { getMDXComponent } from "next-contentlayer2/hooks";
import Link from "next/link";

interface PostPageProps {
  params: {
    slug: string;
  };
}

const PostPage = ({ params }: PostPageProps) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);

  if (!post?.body.code) {
    return <div>No post Here !</div>;
  }

  return (
    <article className="py-8 mx-auto max-w-xl">
      <div className="mb-8 text-center">
        <time dateTime={post.date}>
          {format(parseISO(post.date), "LLL, d, yyyy")}
        </time>
        <h1>{post.title}</h1>
      </div>
      <MDX code={post.body.code} />

      <Link
        href={"/"}
        className="w-full flex items-center justify-center max-w-24 bg-black text-white px-4 py-1 mt-4 rounded-[2px]"
      >
        back
      </Link>
    </article>
  );
};

export default PostPage;
