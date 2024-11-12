import React from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import {
  Shield,
  Droplet,
  Wrench,
  Settings,
  BatteryFull,
  Thermometer,
  Car,
  CopyCheck,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

export default function page() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <section className="bg-gray-900 dark:bg-gray-900 border-b border-gray-800">
        <div className="py-16 px-4 mx-auto max-w-screen-xl lg:py-28 lg:px-6 container">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            Our Services
          </h2>
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
      <Footer />
    </div>
  );
}
