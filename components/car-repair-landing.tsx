"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import Image from "next/image";
import BlogPosts from "./blog-posts";
import Navigation from "./navigation";
import Footer from "./footer";
import Appointment from "./appointment";
import { servicesData } from "@/app/data/servicesData";
import Link from "next/link";

export function CarRepairLanding() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation Bar */}

      <Navigation />

      {/* Hero Section */}
      <section
        id="home"
        className="relative flex items-center justify-center h-[70vh] md:h-[85vh] lg:h-[90vh] bg-cover bg-center text-center"
      >
        <Image
          src="/car.png"
          alt="Auto repair garage"
          fill
          objectFit="cover"
          objectPosition="center"
          quality={100}
          className="absolute inset-0 z-0"
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
        {/* Hero Section - Content */}
        <div className="relative z-10 max-w-2xl px-4 text-white">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold mb-2 md:mb-4">
            Expert Car Care, Right When You Need It
          </h1>
          <p className="text-base md:text-lg lg:text-xl mb-4 md:mb-8">
            At Gord&apos;s Auto Repair, we provide comprehensive car maintenance
            and repair services to keep your vehicle running smoothly and
            safely. Whether you need routine oil changes, brake service, or
            complex engine repairs, our certified mechanics are here to help.
          </p>
          <div className="flex space-x-4 justify-center">
            <a
              href="#contact"
              className="px-4 py-2 md:px-6 md:py-3 bg-yellow-400 text-black rounded-lg hover:bg-yellow-500 text-sm md:text-base"
            >
              Schedule an Appointment
            </a>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="about" className="py-16 container mx-auto px-4 pt-20 pb-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Image
              src="/mechanic.png"
              alt="Car service"
              width={300}
              height={400}
              className="rounded-lg w-full"
            />
            <Image
              src="/hero image.png"
              alt="Car repair"
              width={300}
              height={400}
              className="rounded-lg hidden md:block"
            />
          </div>
          <div className="space-y-4 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold">
              Precision Repairs and Quality Care
            </h2>
            <p className="text-neutral-500 dark:text-neutral-400">
              With years of experience and a commitment to excellence,
              Gord&apos;s Auto Repair is your go-to choice for reliable and
              high-quality car care. Our skilled mechanics are trained to handle
              everything from routine maintenance to complex repairs, ensuring
              your vehicle is in safe hands. We use the latest tools and
              technology to diagnose and fix issues accurately and efficiently,
              helping you get back on the road with confidence.
            </p>
            <Link href="/about-us" passHref>
              <Button className="bg-yellow-400 text-black hover:bg-yellow-500 mt-4 mx-auto md:mx-0">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-50 pt-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
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
      {/* Team Section */}
      <section id="team" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-xl md:text-3xl font-bold text-center mb-12">
            Your Trusted Technician Experts{" "}
          </h2>
          <div className="grid grid-cols-3 gap-6">
            {[
              { id: 1, name: "Harvey", title: "Senior Mechanic" },
              { id: 2, name: "John", title: "Senior Mechanic" },
            ].map((member) => (
              <Card key={member.id}>
                <CardContent className="p-4 text-center">
                  <Image
                    src={`/${member.id}.jpeg`}
                    alt={`Team member ${member.name}`}
                    width={200}
                    height={200}
                    className="rounded-full mx-auto mb-4"
                  />
                  <h3 className="font-semibold">{member.name}</h3>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">
                    {member.title}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-xl md:text-3xl font-bold text-center mb-12">
            What Our Clients Are Saying
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Alice T.",
                review:
                  "Gords Auto Repair saved me in a pinch! They were fast, professional, and my car runs better than ever. Highly recommend!",
                rating: 5,
                image: "/selfie.png",
              },
              {
                name: "Mark J.",
                review:
                  "Excellent service from start to finish. The team explained every step of the repair process and gave a fair price. Will definitely return!",
                rating: 5,
                image: "/selfie1.png",
              },
              {
                name: "David J.",
                review:
                  "The best auto repair shop in Vancouver. I trust them with all my car needs. Their customer service and attention to detail are outstanding!",
                rating: 5,
                image: "/port.png",
              },
            ].map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-4">
                    <Image
                      src={testimonial.image}
                      alt={`Client ${testimonial.name}`}
                      width={50}
                      height={50}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-semibold">{testimonial.name}</h3>
                      <div className="flex text-yellow-400">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-neutral-500 dark:text-neutral-400">
                    &quot;{testimonial.review}&quot;
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* Appointment Form */}
      <Appointment />

      {/* News */}
      <BlogPosts />

      {/* Footer */}
      <Footer />
    </div>
  );
}
