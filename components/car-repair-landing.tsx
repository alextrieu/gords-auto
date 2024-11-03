"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState, useEffect } from "react";
import {
  Calendar,
  Settings,
  Wrench,
  BatteryFull,
  Star,
  Shield,
  Droplet,
  Car,
  CopyCheck,
  Thermometer,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function CarRepairLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // Change to true when scrolled 50px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation Bar */}
      <nav
        className={`fixed w-full z-20 top-0 left-0 transition-colors duration-300 ${
          scrolled || isMenuOpen
            ? "bg-gray-900 text-gray-400"
            : "bg-transparent text-white"
        }`}
      >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center lg:text-2xl font-semibold whitespace-nowrap text-white flex items-center">
              <span className="bg-red-700 text-white font-bold px-2 py-1 rounded-md mr-2">
                GORD'S
              </span>
              AUTO REPAIR
            </span>
          </a>
          <div className="flex md:order-2 items-center gap-x-2 rtl:space-x-reverse">
            <Phone className="w-5 h-5 text-yellow-400" />
            <span className="text-sm font-medium text-yellow-400">
              604-875-1525
            </span>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-400 rounded-lg md:hidden hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>

          <div
            className={`${
              isMenuOpen ? "block bg-gray-900" : "hidden"
            } w-full md:flex md:w-auto md:order-1`}
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium  rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
              <li>
                <Link
                  href="#home"
                  className="block py-2 px-3 text-yellow-400 md:p-0 hover:text-white"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="block py-2 px-3 text-white md:p-0 hover:text-gray-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="block py-2 px-3 text-white md:p-0 hover:text-gray-300"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="block py-2 px-3 text-white md:p-0 hover:text-gray-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative flex items-center justify-center h-[70vh] md:h-[85vh] lg:h-[90vh] bg-cover bg-center text-center"
      >
        <Image
          src="/car.png"
          alt="Auto repair garage"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          quality={100}
          className="absolute inset-0 z-0"
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
        {/* Hero Section - Content */}
        <div className="relative z-10 max-w-2xl px-4 text-white">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
            Expert Car Care, Right When You Need It
          </h1>
          <p className="text-lg mb-8">
            At Gord's Auto Repair, we provide comprehensive car maintenance and
            repair services to keep your vehicle running smoothly and safely.
            Whether you need routine oil changes, brake service, or complex
            engine repairs, our certified mechanics are here to help.
          </p>
          <div className="flex space-x-4 justify-center">
            <a
              href="#contact"
              className="px-6 py-3 bg-yellow-400 text-black rounded-lg hover:bg-yellow-500"
            >
              Schedule an Appointment
            </a>
            {/* <a
              href="#contact"
              className="px-6 py-3 border-2 border-yellow-400 text-white font-semibold rounded-lg hover:bg-yellow-500 hover:text-gray-900"
            >
              Contact Our Team
            </a> */}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="about" className="py-16 container mx-auto px-4 pt-20 pb-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/mechanic.png"
              alt="Car service"
              width={300}
              height={400}
              className="rounded-lg"
            />
            <Image
              src="/hero image.png"
              alt="Car repair"
              width={300}
              height={400}
              className="rounded-lg"
            />
          </div>
          <div className="space-y-4 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold">
              Precision Repairs and Quality Care
            </h2>

            <p className="text-neutral-500 dark:text-neutral-400">
              With years of experience and a commitment to excellence, Gord's
              Auto Repair is your go-to choice for reliable and high-quality car
              care. Our skilled mechanics are trained to handle everything from
              routine maintenance to complex repairs, ensuring your vehicle is
              in safe hands. We use the latest tools and technology to diagnose
              and fix issues accurately and efficiently, helping you get back on
              the road with confidence.
            </p>
            <Button className="bg-yellow-400 text-black hover:bg-yellow-500 mx-auto md:mx-0">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-50 pt-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Shield,
                title: "Inspections & Diagnostics",
                description:
                  "Certified inspection facility offering diagnostics, vehicle inspections, and scheduled maintenance.",
              },
              {
                icon: Droplet,
                title: "Lube, Oil & Filter",
                description:
                  "Routine oil changes, lube, and filter replacements to keep your engine running smoothly.",
              },
              {
                icon: Wrench,
                title: "Tire & Wheel Services",
                description:
                  "Complete tire and wheel services, including alignment, suspension, rotation, and balancing for safe and smooth driving.",
              },
              {
                icon: Settings,
                title: "Engine & Transmission",
                description:
                  "Expert engine repair and transmission service, ensuring optimal performance and longevity of your vehicle.",
              },
              {
                icon: BatteryFull,
                title: "Electrical Systems",
                description:
                  "Full-service electrical diagnostics and repairs for all your vehicle’s electrical needs.",
              },
              {
                icon: Thermometer,
                title: "Air Conditioning Services",
                description:
                  "Air conditioning system diagnostics, repair, and maintenance to keep you cool.",
              },
              {
                icon: Car,
                title: "Brake Services",
                description:
                  "Complete brake services, from pad replacements to full brake system diagnostics and repair.",
              },
              {
                icon: CopyCheck,
                title: "Glass Repair & Replacement",
                description:
                  "Windshield and glass repair or replacement to keep your view clear and safe.",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-6 flex flex-col items-center space-y-4 text-center">
                  <service.icon className="w-12 h-12 text-yellow-400" />
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="text-neutral-500 dark:text-neutral-400">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      {/* <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose Gord's Auto Repair?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Transparent Estimates",
              description:
                "Receive clear, upfront estimates for all repairs with no hidden costs.",
              icon: Shield,
            },
            {
              title: "Certified Technicians",
              description:
                "Trust our team of certified and experienced mechanics for quality service.",
              icon: Shield,
            },
            {
              title: "Customer Satisfaction Guarantee",
              description:
                "We stand by our work with a 100% satisfaction guarantee.",
              icon: Check,
            },
            {
              title: "Reliable Repairs",
              description:
                "Get repairs done right the first time with our thorough diagnostics.",
              icon: Wrench,
            },
            {
              title: "State-of-the-Art Equipment",
              description:
                "We use advanced tools and technology to provide precise repairs.",
              icon: Settings,
            },
            {
              title: "Quick Turnaround",
              description:
                "Efficient service to get you back on the road as soon as possible.",
              icon: Clock,
            },
          ].map((feature, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-6 space-y-4">
                <feature.icon className="w-12 h-12 mx-auto text-yellow-400" />
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-neutral-500 dark:text-neutral-400">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section> */}

      {/* Team Section */}
      <section id="team" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Your Trusted Technician Experts{" "}
          </h2>
          <div className="grid grid-cols-3 gap-6">
            {[
              { id: 1, name: "Harvey", title: "Senior Mechanic" },
              { id: 2, name: "John", title: "Senior Mechanic" },
              { id: 3, name: "Mike", title: "Senior Mechanic" },
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
          <h2 className="text-3xl font-bold text-center mb-12">
            What Our Clients Are Saying
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Alice T.",
                review:
                  "Gord's Auto Repair saved me in a pinch! They were fast, professional, and my car runs better than ever. Highly recommend!",
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
                name: "Emily D.",
                review:
                  "The best auto repair shop in town. I trust them with all my car needs. Their customer service and attention to detail are outstanding!",
                rating: 5,
                image: "/selfie.png",
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
                      className="rounded-full object-cover"
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
                    "{testimonial.review}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Appointment Form */}
      <section id="contact" className="py-16 bg-gray-900 text-white pt-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">
                Schedule an Appointment
              </h2>
              <p className="text-gray-400 mb-8">
                Gord’s Auto Repair is here to serve you with quality and
                reliable automotive services. Visit us or schedule your next
                appointment.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-yellow-400" />
                  <span>1520 Clark Dr, Vancouver, BC V5L 3L3</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-yellow-400" />
                  <span>Monday—Friday: 7:30AM–5:00PM</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-yellow-400" />
                  <span>Saturday & Sunday: Closed</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-yellow-400" />
                  <span>604-875-1525</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-yellow-400" />
                  <span>hello@gordsauto.ca</span>
                </div>
              </div>
            </div>
            <form className="space-y-4">
              <Input
                placeholder="Name"
                className="bg-gray-800 border-gray-700"
              />
              <Input
                placeholder="Email"
                type="email"
                className="bg-gray-800 border-gray-700"
              />
              <Input
                placeholder="Phone"
                type="tel"
                className="bg-gray-800 border-gray-700"
              />
              <Textarea
                placeholder="Message"
                className="bg-gray-800 border-gray-700"
              />
              <Button className="w-full bg-yellow-400 text-black hover:bg-yellow-500">
                Submit
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Latest News & Tips
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Top Maintenance Tips to Extend Your Car’s Life",
                description:
                  "Discover essential car maintenance practices to help you avoid costly repairs and keep your vehicle in top shape.",
                image: "/hero image.png",
              },
              {
                title: "5 Signs It’s Time for a Brake Check",
                description:
                  "Learn how to spot early warning signs of brake wear and avoid safety issues on the road.",
                image: "/hero image.png",
              },
              {
                title: "Preparing Your Car for Winter: A Complete Guide",
                description:
                  "Get your vehicle winter-ready with our comprehensive guide, from tire care to antifreeze checks.",
                image: "/hero image.png",
              },
            ].map((post, index) => (
              <Link key={index} href="#" className="group">
                <Card>
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={400}
                    height={200}
                    className="w-full"
                  />
                  <CardContent className="p-4">
                    <h3 className="font-semibold group-hover:text-yellow-400">
                      {post.title}
                    </h3>
                    <p className="text-sm text-neutral-500 mt-2 dark:text-neutral-400">
                      {post.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {/* About Section */}
            <div>
              <h3 className="text-white font-bold mb-4">Gord's Auto Repair</h3>
              <p className="text-sm">
                Your trusted local auto repair shop, committed to delivering
                reliable and high-quality car maintenance services.
              </p>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="text-white font-bold mb-4">Company Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#about" className="hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="hover:text-white">
                    Our Services
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="hover:text-white">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services Links */}
            <div>
              <h3 className="text-white font-bold mb-4">Our Services</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#services" className="hover:text-white">
                    Engine & Transmission Repair
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="hover:text-white">
                    Tire & Wheel Alignment
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="hover:text-white">
                    Oil Change & Filter
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="hover:text-white">
                    Brake Services
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-white font-bold mb-4">Contact Us</h3>
              <ul className="space-y-2 text-sm">
                <li>1520 Clark Dr, Vancouver, BC V5L 3L3</li>
                <li>Monday—Friday: 7:30AM–5:00PM</li>
                <li>Saturday & Sunday: Closed</li>
                <li>Phone: 604-875-1525</li>
                <li>Email: hello@gordsauto.ca</li>
              </ul>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
            <p>
              &copy; {new Date().getFullYear()} Gord's Auto Repair. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}