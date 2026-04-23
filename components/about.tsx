"use client";

import { motion } from "framer-motion";
import { div } from "framer-motion/client";
import { User, Code, Palette, Smartphone } from "lucide-react";

const skills = [
  { name: "Frontend Development", icon: Code, description: "Building modern, performant web applications with React and Next.js." },
  { name: "UI/UX Design", icon: Palette, description: "Creating beautiful, user-friendly interfaces with Tailwind CSS and Framer Motion." },
  { name: "Mobile Optimization", icon: Smartphone, description: "Ensuring your website looks and works perfectly on all devices." },
];

export function About() {
  return (
    <section id="about" className="py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl md:text-7xl font-bold mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto text-lg">
            I'm a passionate developer dedicated to creating high-quality, interactive web experiences.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto mb-20">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-linear-to-b from-accent via-primary to-accent-light opacity-20" />

          <div className="space-y-12 relative">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col md:flex-row items-center justify-between w-full"
            >
              <div className="w-full md:w-[45%] text-center md:text-right order-2 md:order-1">
                <h4 className="text-2xl font-bold text-accent">High School Excellence</h4>
                <p className="text-foreground/70 italic mb-2">Graduated with High Honors & Salutatorian</p>
                <p className="text-foreground/70 text-sm">
                  My foundation was built on academic excellence and a drive to lead, setting the stage for my technical career.
                </p>
              </div>
              <div className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full bg-accent text-white shadow-lg mb-4 md:mb-0 order-1 md:order-2">
                <div className="w-3 h-3 rounded-full bg-white" />
              </div>
              <div className="hidden md:block w-[45%] order-3" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col md:flex-row items-center justify-between w-full"
            >
              <div className="hidden md:block w-[45%]" />
              <div className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white shadow-lg mb-4 md:mb-0">
                <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                <div className="relative w-4 h-4 rounded-full bg-white" />
              </div>
              <div className="w-full md:w-[45%] text-center md:text-left">
                <h4 className="text-2xl font-bold text-primary">College Education</h4>
                <p className="text-foreground/70 italic mb-2">B.S. in Computer Science (Current)</p>
                <p className="text-foreground/70 text-sm">
                  Currently deep-diving into algorithms, system design, and modern web technologies to sharpen my engineering skills.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col md:flex-row items-center justify-between w-full"
            >
              <div className="w-full md:w-[45%] text-center md:text-right order-2 md:order-1">
                <h4 className="text-2xl font-bold text-accent-light">Future Aspirations</h4>
                <p className="text-foreground/70 text-sm mt-2">
                  Aspiring to become a <span className="text-primary font-bold">Software Engineer</span>. I am committed to building impactful solutions and contributing to the global tech ecosystem.
                </p>
              </div>
              <div className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full bg-accent-light text-white shadow-lg mb-4 md:mb-0 order-1 md:order-2">
                <div className="w-3 h-3 rounded-full bg-white" />
              </div>
              <div className="hidden md:block w-[45%] order-3" />
            </motion.div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, rotate: 2, transition: { duration: 0.2 }, borderColor: "#fbc07e" }}
              className="p-8 rounded-3xl border border-border shadow-sm"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 text-primary">
                <skill.icon size={24} />
              </div>
              <h4 className="text-xl font-bold mb-3">{skill.name}</h4>
              <p className="text-foreground/70 text-sm leading-relaxed">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}