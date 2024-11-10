import React from "react";
import { client } from "../../../sanity/lib/client";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { notFound } from "next/navigation";
import { PortableText } from "next-sanity";

type Post = {
  title: string;
  slug: string;
  smallDescription: string;
  imageUrl?: string;
  authorName: string;
  publishedDate: string;
  content: any;
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
    <div className="flex flex-col min-h-screen bg-gray-900 text-gray-400">
      <Navigation />
      <div className="mx-auto max-w-screen-xl py-16 ">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-extrabold text-white mb-4">
            {post.title}
          </h1>
          {post.publishedDate && (
            <span className="text-sm text-blue-500 mb-4 block">
              {post.publishedDate}
            </span>
          )}
          {post.imageUrl && (
            <img
              src={post.imageUrl}
              alt={post.title}
              className="mb-4 w-full max-w-lg rounded-lg shadow-md border border-gray-700"
            />
          )}
          <div className="content">
            {post.content && (
              <PortableText
                value={post.content}
                components={{
                  block: {
                    h1: ({ children }) => (
                      <h1 className="text-2xl font-bold text-white mb-4">
                        {children}
                      </h1>
                    ),
                    h2: ({ children }) => (
                      <h2 className="text-xl font-semibold text-white mb-3">
                        {children}
                      </h2>
                    ),
                    h3: ({ children }) => (
                      <h3 className="text-lg font-semibold text-white mb-2">
                        {children}
                      </h3>
                    ),
                    h4: ({ children }) => (
                      <h4 className="text-lg font-semibold text-white mt-4">
                        {children}
                      </h4>
                    ),
                    normal: ({ children }) => (
                      <p className="mb-4">{children}</p>
                    ),
                    ul: ({ children }) => (
                      <ul className="list-disc list-inside mb-4">{children}</ul>
                    ),
                    ol: ({ children }) => (
                      <ol className="list-decimal list-inside mb-4">
                        {children}
                      </ol>
                    ),
                    li: ({ children }) => (
                      <li className="ml-4 mb-2 text-red-500">{children}</li>
                    ),
                  },
                  marks: {
                    strong: ({ children }) => (
                      <strong className="font-bold text-white">
                        {children}
                      </strong>
                    ),
                    em: ({ children }) => (
                      <em className="italic text-gray-300">{children}</em>
                    ),
                  },
                }}
              />
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
