"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import { Github, Linkedin, Twitter } from "lucide-react";

export function Hero() {
  const socialLinks = [
    { icon: Github, href: "https://github.com/joshdev-c", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/joshua-castillejos-567875286/", label: "LinkedIn" },
    { icon: Twitter, href: "https://x.com/JoshuaC58531720", label: "Twitter" },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16"
    >
      <div className="max-w-4xl px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6"
        >
          Hey, I'm <span className="text-primary">Josh</span>
          <span className="text-accent">.</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="h-24 md:h-32 mb-12"
        >
          <TypeAnimation
            sequence={[
              "I don't just write code, I shape experiences.",
              3000,
              "I design with instinct, I build with intention.",
              3000,
              "I make ideas into reality.",
              3000
            ]}
            wrapper="p"
            speed={50}
            deletionSpeed={75}
            repeat={Infinity}
            className="text-xl md:text-2xl text-foreground font-medium h-12 mb-10"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex flex-wrap gap-6 justify-center items-center"
        >
          <a
            href="#projects"
            className="px-8 py-4 rounded-full bg-primary text-white font-semibold hover:bg-secondary transition-all hover:scale-105 shadow-lg"
          >
            View Projects
          </a>
          
          <div className="flex gap-4">
            {socialLinks.map((social, index) => (
              <motion.a
                target="_blank"
                key={index}
                href={social.href}
                aria-label={social.label}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="relative group w-14 h-14 flex items-center justify-center rounded-full bg-accent text-white shadow-primary hover:shadow-[0_2px_0_0_#1e3d33] border-2 border-secondary"
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
