"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { client } from "../../sanity/lib/client";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

type Post = {
  title: string;
  slug: string;
  smallDescription: string;
  imageUrl?: string;
  authorName: string;
  publishedDate: string;
};

export default function Blog() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    // Define the GROQ query
    const query = `*[_type == "blogPost"]{
      title,
      "slug": slug.current,
      smallDescription,
      "imageUrl": titleImage.asset->url,
      authorName,
      publishedDate
    }`;

    // Fetch data and set the state
    client
      .fetch(query)
      .then((data) => setPosts(data))
      .catch(console.error);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <section className="bg-gray-900 dark:bg-gray-900 border-b border-gray-800">
        <div className="py-16 px-4 mx-auto max-w-screen-xl lg:py-28 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
            <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-white">
              Our Blog
            </h2>
            <p className="font-light text-gray-400 sm:text-xl">
              Stay informed with our latest insights, trends, and tips, crafted
              to support your growth and inspire your journey.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="p-6 bg-gray-800 rounded-lg border border-gray-700 shadow-md"
              >
                <div className="flex justify-between items-center mb-5 text-blue-500">
                  <span className="bg-blue-200 text-primary-100 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                    <svg
                      className="mr-1 w-3 h-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
                        clipRule="evenodd"
                      ></path>
                      <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path>
                    </svg>
                    Article
                  </span>
                  <span className="text-sm text-gray-400">
                    {post.publishedDate}
                  </span>
                </div>
                <h2 className="mb-2 text-2xl font-bold tracking-tight text-white">
                  <Link href={`/blog/${post.slug}`} className="hover:underline">
                    {post.title}
                  </Link>
                </h2>
                <p className="mb-5 font-light text-gray-400">
                  {post.smallDescription}
                </p>
                <div className="flex justify-between items-center">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center font-medium text-blue-500 hover:underline"
                  >
                    Read more
                    <svg
                      className="ml-2 w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
