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

import { LucideProps } from "lucide-react";

export type IconType = React.ForwardRefExoticComponent<
  React.PropsWithoutRef<LucideProps> & React.RefAttributes<SVGSVGElement>
>;
export type Post = {
  icon: IconType;
  title: string;
  slug: string;
  header: string;
  description: string;
  longDescription: string;
  image: string;
};

// Define the services data
export const servicesData: Post[] = [
  {
    icon: Shield,
    title: "Inspections & Diagnostics",
    slug: "inspections-diagnostics",
    header: "Comprehensive Inspections & Diagnostics for Your Peace of Mind",
    description:
      "Certified inspection facility offering diagnostics, vehicle inspections, and scheduled maintenance.",
    longDescription: `Our certified inspection facility provides a complete range of diagnostic services and detailed vehicle inspections to ensure your car is in optimal condition. Our experienced technicians utilize state-of-the-art tools and technology to thoroughly assess key systems such as engine, transmission, brakes, suspension, and exhaust.

    We offer specialized services like pre-purchase inspections for used vehicles, annual safety checks to meet regulatory standards, and multi-point inspections tailored to your vehicle's needs. With our diagnostics, we identify underlying issues before they become costly repairs, saving you time and money in the long run.

    Whether you’re facing a warning light or just want peace of mind, our team is dedicated to keeping your vehicle safe, reliable, and road-ready.`,
    image: "/inspection.png",
  },
  {
    icon: Droplet,
    title: "Lube, Oil & Filter",
    slug: "lube-oil-filter",
    header: "Routine Lube, Oil & Filter Services for Optimal Engine Health",
    image: "/oil.png",
    description:
      "Routine oil changes, lube, and filter replacements to keep your engine running smoothly.",
    longDescription: `Regular oil changes are the cornerstone of a healthy engine. Our Lube, Oil & Filter service is meticulously designed to enhance your vehicle’s performance and longevity. We use top-quality oils and premium filters to match your vehicle’s specifications, providing optimal lubrication to all moving parts and reducing engine wear.

    In addition to changing the oil and filter, our technicians perform a quick visual inspection of your vehicle's engine and undercarriage, lubricate essential components, and top off vital fluids, such as coolant and windshield washer fluid. These preventive measures ensure smooth engine operation, improved fuel efficiency, and extended engine life.

    With routine maintenance, we help protect your investment by keeping your engine in peak condition, so you can drive with confidence.`,
  },
  {
    icon: Wrench,
    title: "Tire & Wheel Services",
    slug: "tire-wheel-services",
    header: "Professional Tire & Wheel Services for a Safe, Smooth Ride",
    image: "/tire swap.png",
    description:
      "Complete tire and wheel services, including alignment, suspension, rotation, and balancing for safe and smooth driving.",
    longDescription: `Our Tire & Wheel Services are designed to provide you with a balanced, comfortable, and safe driving experience. Proper tire and wheel maintenance not only enhances driving comfort but also extends the life of your tires, improves fuel efficiency, and promotes even tire wear.

    Our services include wheel alignment to correct any misalignment that could lead to uneven tire wear, as well as regular tire rotation to ensure that all tires wear evenly over time. We also offer precision wheel balancing, which minimizes vibrations and improves ride quality. Additionally, our team carefully inspects suspension components, ensuring stability and optimal handling.

    With our professional tire and wheel care, you can enjoy a smoother ride and enhanced road safety, knowing that your vehicle’s tires and wheels are well-maintained and ready for any journey.`,
  },
  {
    icon: Settings,
    title: "Engine & Transmission",
    slug: "engine-transmission",
    header:
      "Engine & Transmission Services to Maximize Performance and Longevity",
    image: "/engine.png",
    description:
      "Expert engine repair and transmission service, ensuring optimal performance and longevity of your vehicle.",
    longDescription: `The engine and transmission are the powerhouses of your vehicle, and our services are dedicated to keeping them operating at their best. We offer comprehensive diagnostics, repairs, and preventive maintenance services that cover everything from routine tune-ups to complex repairs.

    Our engine services include spark plug replacements, fuel injector cleaning, and timing belt inspections, all of which contribute to better engine performance and efficiency. For transmissions, we offer fluid changes, clutch repairs, and full transmission rebuilds, tailored to the specific needs of your vehicle.

    By addressing issues early and following a consistent maintenance schedule, we help prevent major repairs, reduce breakdowns, and extend the life of your vehicle. Trust us to keep your engine running smoothly and your transmission shifting seamlessly, enhancing your driving experience and extending your car’s lifespan.`,
  },
  {
    icon: BatteryFull,
    title: "Electrical Systems",
    slug: "electrical-systems",
    header: "Complete Electrical System Diagnostics and Repairs",
    image: "/electrical.png",
    description:
      "Full-service electrical diagnostics and repairs for all your vehicle’s electrical needs.",
    longDescription: `Today’s vehicles rely heavily on complex electrical systems, and our services are designed to keep these systems functioning perfectly. We provide everything from battery testing and replacement to intricate wiring repairs, ensuring that all electrical components are in top working order.

    Using specialized diagnostic tools, we quickly identify issues in critical areas like sensors, lighting, power windows, and dashboard displays. Our technicians are trained to repair or replace faulty components, troubleshoot electrical shorts, and resolve any warning light issues that may appear on your dashboard.

    Whether you're experiencing a persistent warning light or an unexpected malfunction, we offer reliable solutions that bring your vehicle’s electrical systems back to full functionality, so you can drive with confidence.`,
  },
  {
    icon: Thermometer,
    title: "Air Conditioning Services",
    slug: "air-conditioning-services",
    header: "Reliable Air Conditioning Services for Comfortable Driving",
    image: "/ac.png",
    description:
      "Air conditioning system diagnostics, repair, and maintenance to keep you cool.",
    longDescription: `Stay cool in hot weather with our comprehensive air conditioning services. We provide in-depth diagnostics, leak detection, and refrigerant recharges to ensure your AC system performs optimally.

    Our technicians inspect and repair all components, from the compressor to the condenser, ensuring maximum cooling efficiency. Regular AC maintenance also helps prevent costly repairs by catching issues like refrigerant leaks and worn-out components early.

    With our professional air conditioning services, you can enjoy a comfortable, climate-controlled environment inside your vehicle, no matter how hot it gets outside.`,
  },
  {
    icon: Car,
    title: "Brake Services",
    slug: "brake-services",
    header: "Trusted Brake Services for Safe, Reliable Stopping Power",
    image: "/brake.png",
    description:
      "Complete brake services, from pad replacements to full brake system diagnostics and repair.",
    longDescription: `Brakes are one of the most critical safety features in any vehicle, and our brake services ensure they function reliably every time you hit the road. We handle everything from brake pad replacements to rotor resurfacing, caliper repairs, and brake fluid changes.

    During our brake inspections, we carefully examine all components, including brake lines and master cylinders, to ensure optimal performance. We use high-quality parts and follow rigorous testing standards to restore your brakes' stopping power.

    With our trusted brake services, you can drive with peace of mind, knowing that your vehicle’s braking system will respond when you need it the most.`,
  },
  {
    icon: CopyCheck,
    title: "Glass Repair & Replacement",
    slug: "glass-repair-replacement",
    header: "Glass Repair & Replacement Services for Clear, Safe Visibility",
    image: "/glass repair.png",
    description:
      "Windshield and glass repair or replacement to keep your view clear and safe.",
    longDescription: `Your windshield and windows are essential for both visibility and structural integrity. Our glass repair and replacement services ensure that even minor chips or cracks don’t compromise your safety.

    Using high-quality materials, we repair small cracks and chips to prevent them from spreading. If replacement is necessary, we install new glass that meets or exceeds OEM standards, restoring clarity and strength to your vehicle’s structure.

    With our services, you can drive confidently, knowing that your view is unobstructed and your windshield provides reliable protection. Our team is here to keep your glass in pristine condition, ensuring both safety and peace of mind on the road.`,
  },
];
