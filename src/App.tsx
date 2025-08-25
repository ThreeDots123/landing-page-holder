import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import "./App.css";
import logoImg from "./assets/Logo Vector.png";
import clsx from "clsx";

export default function LandingPage() {
  return (
    <div className="min-h-screen w-screen flex flex-col bg-white text-gray-900">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-8 py-6 bg-white text-white">
        <div className="text-2xl font-bold">
          <img src={logoImg} alt="chekout-logo" className="w-full h-10 w-10" />
        </div>
        <div className="space-x-8">
          {["About", "Solutions", "Careers", "Contact"].map((item, idx) => (
            <a
              key={idx}
              href={`/${item.toLowerCase()}`}
              className={clsx("hover:text-[#333]", idx > 1 && "max-md:hidden")}
            >
              {item}
            </a>
          ))}
        </div>
      </nav>
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-r from-blue-900 to-blue-600 text-white py-20 px-6 flex flex-col items-center text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold max-w-4xl"
        >
          Transforming Businesses with Technology Solutions
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-6 max-w-2xl text-lg md:text-xl"
        >
          Chekout is a multi-competency enterprise transformation and
          technology-consulting firm.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-8 flex gap-4"
        >
          <Button
            size="lg"
            className="rounded-2xl bg-white text-white hover:bg-gray-100"
          >
            Get Started <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-2xl border-white text-white hover:bg-white hover:text-blue-700"
          >
            Learn More
          </Button>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Our Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Technology Consulting",
                desc: "Expert guidance to help you align technology with business objectives.",
              },
              {
                title: "Enterprise Transformation",
                desc: "Redefining businesses with innovative and sustainable IT solutions.",
              },
              {
                title: "Training & Development",
                desc: "Empowering teams with cutting-edge skills to thrive in the digital age.",
              },
            ].map((service, i) => (
              <Card key={i} className="shadow-md rounded-2xl">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            src="https://Chekout.com/wp-content/uploads/2023/01/Chekout-team.jpg"
            alt="About Chekout"
            className="rounded-2xl shadow-lg"
            style={{ visibility: "hidden" }}
          />
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Who We Are</h2>
            <p className="text-gray-700 mb-4">
              We are a team of passionate professionals committed to delivering
              technology solutions that transform businesses across industries.
            </p>
            <p className="text-gray-700 mb-6">
              With years of expertise, we partner with organizations to redefine
              their operations, enhance efficiency, and create innovative
              strategies.
            </p>
            <Button className="rounded-2xl">Read More</Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Chekout</h3>
            <p className="text-gray-300">
              Transforming businesses with technology solutions that drive
              growth and innovation.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li>About</li>
              <li>Solutions</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p className="text-gray-300">chekout@chekout.xyz</p>
            <p className="text-gray-300">+234 807 466 9881</p>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Chekout. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
