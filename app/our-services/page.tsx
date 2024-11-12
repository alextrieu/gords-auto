import React from "react";
import Link from "next/link";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { servicesData } from "../data/servicesData";
import { Card, CardContent } from "@/components/ui/card";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <section className="bg-gray-900 dark:bg-gray-900 border-b border-gray-800">
        <div className="py-16 px-4 mx-auto max-w-screen-xl lg:py-28 lg:px-6 container">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            Our Services
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {servicesData.map((service, index) => (
              <Link href={`/our-services/${service.slug}`} key={index} passHref>
                <Card className="group hover:shadow-lg transition-shadow cursor-pointer h-full">
                  <CardContent className="p-6 flex flex-col items-center space-y-4 text-center h-full">
                    <service.icon className="w-12 h-12 text-yellow-400" />
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                    <p className="text-neutral-500 dark:text-neutral-400">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
