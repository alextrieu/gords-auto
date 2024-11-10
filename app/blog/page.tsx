"use client";
import React, { useEffect, useState } from "react";
import { client } from "../../sanity/lib/client";

type Post = {
  title: string;
  slug: string;
  smallDescription: string;
  imageUrl?: string;
};

export default function Blog() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    // Define the GROQ query
    const query = `*[_type == "blogPost"]{
      title,
      "slug": slug.current,
      smallDescription,
      "imageUrl": titleImage.asset->url
    }`;

    // Fetch data and set the state
    client
      .fetch(query)
      .then((data) => setPosts(data))
      .catch(console.error);
  }, []);
  console.log(posts);
  return (
    <div>
      <h1>Blog Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <h2>{post.title}</h2>
            <p>{post.smallDescription}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
