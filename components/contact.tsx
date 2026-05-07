"use client";

import { motion } from "framer-motion";
import { Send, Mail, Github, Linkedin, Twitter, Gitlab } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setIsSubmitting(true);
    
    try {
      const formData = new FormData(form);
      const response = await fetch("https://formspree.io/f/mqenldwn", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });
      
      const result = await response.json();
      console.log("Formspree response:", result);
      
      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
      } else {
        throw new Error(result.error || "Failed to send message");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert(`Error: ${(error as Error).message || "Unknown error. Please try again or email directly."}`);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setIsSubmitted(false), 5000);
    }
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com/joshdev-c", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/joshua-castillejos-567875286/", label: "LinkedIn" },
    { icon: Twitter, href: "https://x.com/JoshuaC58531720", label: "Twitter" },
  ];

  return (
    <section id="contact" className="py-16 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Get In <span className="text-primary">Touch</span>
            </h2>
            <p className="text-foreground/70 text-lg mb-10 max-w-md leading-relaxed">
              Have a project in mind or just want to say hello? I'd love to hear from you. Feel free to reach out through the form or my social media.
            </p>

            <div className="space-y-6">
              <a
                href="mailto:joshuabcastillejos@gmail.com"
                className="flex items-center gap-4 text-foreground/80 hover:text-primary transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <Mail size={24} />
                </div>
                <span className="text-lg font-medium">joshuabcastillejos@gmail.com</span>
              </a>

              <div className="flex gap-4 pt-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    aria-label={social.label}
                    className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all hover:scale-110"
                  >
                    <social.icon size={24} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-card border border-border rounded-[2.5rem] p-8 md:p-12 shadow-xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full -mr-16 -mt-16 blur-3xl" />
            
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold ml-1">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your name"
                    className="w-full px-5 py-3 rounded-2xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold ml-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Your email"
                    className="w-full px-5 py-3 rounded-2xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold ml-1">Message</label>
                <textarea
                  required
                  name="message"
                  rows={4}
                  placeholder="Your message"
                  className="w-full px-5 py-3 rounded-2xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className={`w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg ${
                  isSubmitted
                    ? "bg-green-500 text-white"
                    : "bg-primary text-white hover:bg-secondary"
                }`}
              >
                {isSubmitting ? (
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : isSubmitted ? (
                  "Message Sent!"
                ) : (
                  <>
                    Send Message <Send size={20} />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
