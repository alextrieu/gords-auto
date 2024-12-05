import React from "react";
import Link from "next/link";
import { servicesData } from "@/app/data/servicesData";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-white font-bold mb-4">
              Gord&apos;s Auto Repair
            </h3>
            <p className="text-sm">
              Your trusted local auto repair shop, dedicated to providing
              dependable and high-quality car maintenance and repair services.
              From routine checkups to complex repairs, our skilled team is here
              to keep your vehicle running smoothly, safely, and efficiently on
              the road.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Company Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about-us" className="hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/our-services" className="hover:text-white">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              {servicesData.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/our-services/${service.slug}`}
                    className="hover:text-white"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li>1520 Clark Dr, Vancouver, BC V5L 3L3</li>
              <li>Monday—Friday: 7:30AM–5:00PM</li>
              <li>Saturday & Sunday: Closed</li>
              <li>
                Phone: <a href="tel:604-875-1525">604-875-1525</a>
              </li>
              <li>
                Email: <a href="mailto:john@gordsauto.ca">john@gordsauto.ca</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Gord&apos;s Auto Repair. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
