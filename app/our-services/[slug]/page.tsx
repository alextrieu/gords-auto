// our-services/[slug]/page.tsx

import React from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { notFound } from "next/navigation";
import { servicesData } from "@/app/data/servicesData";
import { Post } from "@/app/data/servicesData";

// Define fetchServicePost with an explicit return type
function fetchServicePost(slug: string): Post | null {
  return servicesData.find((service) => service.slug === slug) || null;
}

// Define the type for params to include slug
type PageProps = {
  params: {
    slug: string;
  };
};

export default function Page({ params }: PageProps) {
  const post = fetchServicePost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-gray-400">
      <Navigation />
      <div className="mx-auto max-w-screen-xl py-16">
        <div className="container mx-auto px-4 py-8">
          <div className="content">
            {/* Render the header */}
            <h2 className="text-2xl font-bold text-white mb-4">
              {post.header}
            </h2>

            {/* Render each paragraph in the longDescription */}
            {post.longDescription.split("\n\n").map((paragraph, index) => (
              <p key={index} className="mb-4">
                {paragraph.trim()}
              </p>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
