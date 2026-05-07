"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Github } from "lucide-react";

const project = {
  title: "KBArchitecture",
  description:
    "Built with Next.js and Tailwind CSS. A personal website portfolio with a focus on architectural design.",
  color: "bg-primary/5",
  tags: ["Next.js", "Tailwind"],
  image: "/kb-architecture.png",
};

export function Projects() {
  return (
    <section id="projects" className="min-h-screen py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl md:text-7xl font-bold mb-4">
            Featured <span className="text-primary">Project</span>
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto text-lg">
            A deep dive into my most recent work, showcasing technical
            challenges and creative solutions.
          </p>
        </motion.div>

        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-5xl p-8 md:p-12 rounded-[2.5rem] border border-secondary -rotate-1 flex flex-col md:flex-row gap-12 items-center relative overflow-visible"
          >
            <div className="w-full md:w-4/5 relative -ml-4 md:-ml-40 rounded-2xl shadow-lg shadow-primary rotate-1">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5 }}
                className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw, 300px"
                  loading="lazy"
                  className="object-cover"
                />
              </motion.div>
            </div>

            <div className="flex-1 space-y-6 rotate-1">
              <div className="-mr-4 md:-mr-40">
                <h3 className="text-3xl md:text-4xl font-bold text-accent mb-4">
                  {project.title}
                </h3>
                <p className="text-foreground/70 text-lg leading-relaxed font-medium opacity-80">
                  {project.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-1.5 rounded-full bg-background/50 text-sm font-semibold border border-border shadow-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-2 pt-4">
                  <a
                    target="_blank"
                    href="https://kb-architecture.vercel.app/"
                    className="px-8 py-4 rounded-full bg-primary text-white font-semibold hover:bg-secondary transition-all hover:scale-105 shadow-lg"
                  >
                    View Project
                  </a>
                  <motion.a
                    target="_blank"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    href="https://github.com/joshdev-c/K-Web"
                    className="w-14 h-14 flex items-center justify-center rounded-full bg-accent text-white shadow-primary hover:shadow-[0_2px_0_0_#1e3d33] border-2 border-secondary"
                  >
                    <Github size={20} />
                  </motion.a>
                </div>

                {/* <div className="pt-4 flex gap-4 items-center">
                <div className="relative group">
                  <div className="absolute inset-0 translate-x-1 translate-y-1 rounded-xl border-2 border-[#10b981] group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
                  <a
                    href="#"
                    className="relative block px-8 py-3 rounded-xl bg-[#10b981] text-white font-bold transition-transform group-hover:-translate-x-0.5 group-hover:-translate-y-0.5"
                  >
                    View Project
                  </a>
                </div>
                
                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-[#2d5a4c] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
                >
                  <Github size={20} />
                </a>
              </div> */}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
