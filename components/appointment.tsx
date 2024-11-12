import React from "react";
import { MapPin, Calendar, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Appointment() {
  return (
    <section id="contact" className="py-16 bg-gray-900 text-white pt-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-bold mb-4">Schedule an Appointment</h2>
            <p className="text-gray-400 mb-8">
              Gord&apos;s Auto Repair is here to serve you with quality and
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
                <a href="tel:604-875-1525" className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-yellow-400" />
                  <span>604-875-1525</span>
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-yellow-400" />
                <a href="mailto:john@gordsauto.ca">john@gordsauto.ca</a>
              </div>
            </div>
          </div>
          <form
            action="https://public.herotofu.com/v1/719efb00-e0b9-11ee-8980-3397320e035b"
            method="post"
            acceptCharset="UTF-8"
            className="space-y-4"
          >
            <div>
              <label htmlFor="name" className="text-white">
                Your Name
              </label>
              <Input
                name="Name"
                id="name"
                type="text"
                placeholder="Name"
                required
                className="bg-gray-800 border-gray-700 mt-1"
              />
            </div>

            <div>
              <label htmlFor="phone" className="text-white">
                Your Phone
              </label>
              <Input
                name="Phone"
                id="phone"
                type="tel"
                placeholder="Phone"
                required
                className="bg-gray-800 border-gray-700 mt-1"
              />
            </div>

            <div>
              <label htmlFor="email" className="text-white">
                Your Email
              </label>
              <Input
                name="Email"
                id="email"
                type="email"
                placeholder="Email"
                required
                className="bg-gray-800 border-gray-700 mt-1"
              />
            </div>

            <div>
              <label htmlFor="message" className="text-white">
                Message
              </label>
              <Textarea
                name="Message"
                id="message"
                placeholder="Message"
                className="bg-gray-800 border-gray-700 mt-1"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-yellow-400 text-black hover:bg-yellow-500"
            >
              Submit
            </Button>

            {/* Hidden anti-spam field */}
            <div
              style={{
                textIndent: "-99999px",
                whiteSpace: "nowrap",
                overflow: "hidden",
                position: "absolute",
              }}
              aria-hidden="true"
            >
              <input
                type="text"
                name="_gotcha"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
