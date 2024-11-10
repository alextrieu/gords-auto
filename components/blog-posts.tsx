import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

import Image from "next/image";
import Link from "next/link";
import { client } from "../sanity/lib/client";

// Define the Post type according to the schema
type Post = {
  title: string;
  slug: string;
  smallDescription: string;
  imageUrl?: string;
};

export default function BlogPosts() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    // Define the GROQ query to fetch blog posts
    const query = `*[_type == "blogPost"]{
      title,
      "slug": slug.current,
      smallDescription,
      "imageUrl": titleImage.asset->url
    }`;

    client
      .fetch(query)
      .then((data) => setPosts(data))
      .catch((error) => console.error("Error fetching blog posts:", error));
  }, []);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Latest News & Tips
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <Link key={index} href={`/blog/${post.slug}`} className="group">
              <Card>
                {post.imageUrl && (
                  <Image
                    src={post.imageUrl}
                    alt={post.title}
                    width={400}
                    height={200}
                    className="w-full"
                  />
                )}
                <CardContent className="p-4">
                  <h3 className="font-semibold group-hover:text-yellow-400">
                    {post.title}
                  </h3>
                  <p className="text-sm text-neutral-500 mt-2 dark:text-neutral-400">
                    {post.smallDescription}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <Link
          href="/blog"
          className="w-1/3 bg-yellow-400 text-black hover:bg-yellow-500 text-center py-2 px-4 rounded"
        >
          Read More
        </Link>
      </div>
    </section>
  );
}
