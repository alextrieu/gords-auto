import React from "react";
import { client } from "../../../sanity/lib/client";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { notFound } from "next/navigation";

type Post = {
  title: string;
  slug: string;
  smallDescription: string;
  imageUrl?: string;
  authorName: string;
  publishedDate: string;
  content: string;
};

async function fetchBlogPost(slug: string): Promise<Post | null> {
  const query = `*[_type == "blogPost" && slug.current == $slug][0]{
      title,
      smallDescription,
      content,
      "imageUrl": titleImage.asset->url
    }`;
  const post = await client.fetch(query, { slug });
  return post || null;
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await fetchBlogPost(params.slug);

  if (!post) {
    notFound(); // Redirect to a 404 page if no post is found
  }
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        {post.imageUrl && (
          <img
            src={post.imageUrl}
            alt={post.title}
            className="mb-4 w-full max-w-lg"
          />
        )}
        <p className="text-lg mb-8">{post.smallDescription}</p>
        {/* <div className="content">
          Render content here, e.g., rich text Example placeholder: Replace with
          a rich text component if needed
          {post.content && <div>{post.content}</div>}
        </div> */}
      </div>
      <Footer />
    </div>
  );
}
