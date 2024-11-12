import React from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import Appointment from "@/components/appointment"; // Import the Appointment component

export default function AboutUs() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <Navigation />
      <main className="container mx-auto px-4 pt-24 pb-16">
        <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>

        <section className="text-lg leading-relaxed space-y-6">
          <p>
            <strong>
              Welcome to Gord&apos;s Auto, Your Trusted Partner in Auto Care
            </strong>
          </p>
          <p>
            At Gord&apos;s Auto, we believe that quality, honesty, and customer
            satisfaction are the keys to lasting relationships. With years of
            experience in the automotive industry, We&apos;ve built our
            reputation on providing reliable and thorough service, making sure
            every vehicle that leaves our shop is safe, efficient, and
            road-ready.
          </p>
          <p>
            Our team is dedicated to offering a full range of services, from
            routine maintenance like oil changes and tire rotations to advanced
            diagnostics and repairs. We use the latest technology and tools to
            ensure accurate assessments and effective solutions, all while
            delivering a transparent and honest approach. We&apos;ll always take
            the time to explain what&apos;s going on with your vehicle and
            discuss the options that make the most sense for your needs and
            budget.
          </p>

          <h2 className="text-2xl font-semibold mt-8">
            Why Choose Gord&apos;s Auto?
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Experienced Technicians:</strong> Our certified team has
              the skills and knowledge to tackle any issue, big or small.
            </li>
            <li>
              <strong>Quality Service:</strong> We use high-quality parts and
              materials, ensuring your vehicle performs at its best.
            </li>
            <li>
              <strong>Customer-Centered Approach:</strong> We prioritize clear
              communication and your satisfaction, treating each vehicle as if
              it were our own.
            </li>
            <li>
              <strong>Community Focus:</strong> As a local business, we&apos;re
              committed to supporting our community and earning your trust with
              every visit.
            </li>
          </ul>

          <p>
            Whether you need a quick inspection, scheduled maintenance, or
            complex repairs, Gord&apos;s Auto is here to help. Our goal is to
            keep you on the road safely and confidently. Thank you for trusting
            us with your vehicle—we look forward to serving you for years to
            come!
          </p>
        </section>
      </main>
      <div className="mx-auto container px-4 border-b border-gray-800 "></div>

      <Appointment />
      <div className="mx-auto container px-4 border-b border-gray-800 "></div>

      <Footer />
    </div>
  );
}
