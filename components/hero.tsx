"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Sparkles,
  Facebook,
  Instagram,
  Download,
} from "lucide-react";
import { motion } from "framer-motion";

const handleDownload = (filePath: string, fileName: string) => {
  const a = document.createElement("a");
  a.href = filePath;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 lg:pt-32 pt-20 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-accent/20 to-primary/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-primary/15 to-accent/15 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-2 mb-4 justify-center sm:justify-start"
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles className="h-6 w-6 text-accent" />
                </motion.div>
                <span className="text-sm font-medium text-accent uppercase tracking-wider">
                  Software Engineer
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-balance text-center sm:text-left"
              >
                <span className="bg-gradient-to-r from-foreground via-accent to-primary bg-clip-text text-transparent animate-gradient">
                  Anas Mohammed Riza
                </span>
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xl sm:text-2xl font-medium text-center sm:text-left"
              >
                <span className="text-muted-foreground">Full Stack </span>
                <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent font-semibold">
                  Developer
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-lg text-muted-foreground leading-relaxed text-pretty max-w-2xl text-center sm:text-left"
              >
                I build responsive, full-stack web and mobile applications using
                <span className="text-accent font-medium"> Next.js</span>,
                <span className="text-accent font-medium"> React</span>,
                <span className="text-accent font-medium"> React Native</span>, and
                <span className="text-accent font-medium"> Node.js</span>.
                A BEng (Hons) Software Engineering graduate with six months of
                hands-on experience as a Frontend Developer Intern, bringing a fast
                learning curve and genuine curiosity for new technologies to every
                project.
              </motion.p>
            </div>

            {/* Download Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-wrap gap-4 justify-center sm:justify-start"
            >
              <Button
                onClick={() => handleDownload("/AnasRizaCv.pdf", "Anas Riza CV")}
                variant="outline"
                size="lg"
                className="flex items-center gap-2 bg-gradient-to-r from-accent/10 to-primary/10 hover:from-accent/20 hover:to-primary/20 border-accent/30 hover:border-accent/50 transition-all duration-300 cursor-pointer"
              >
                <Download className="h-5 w-5" />
                Download CV
              </Button>

              <Button
                onClick={() =>
                  handleDownload("/AnasRizaCoverLetter.pdf", "Anas Riza Cover Letter")
                }
                variant="outline"
                size="lg"
                className="flex items-center gap-2 bg-gradient-to-r from-accent/10 to-primary/10 hover:from-accent/20 hover:to-primary/20 border-accent/30 hover:border-accent/50 transition-all duration-300 cursor-pointer"
              >
                <Download className="h-5 w-5" />
                Download Cover Letter
              </Button>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex flex-wrap gap-6 text-sm justify-center sm:justify-start"
            >
              {[{ icon: MapPin, text: "Puttalam, Sri Lanka" }, { icon: Phone, text: "+94 75 412 1698" }, { icon: Mail, text: "rizanas0526rz@gmail.com" }].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors duration-200"
                >
                  <item.icon className="h-4 w-4 text-accent" />
                  <span>{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Column */}
          <motion.div
            className="flex flex-col items-center space-y-6 lg:space-y-4"
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.div
              className="relative w-full max-w-6xl lg:max-w-104 aspect-square rounded-xl overflow-hidden shadow-2xl border border-border/40"
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              <Image
                src="/HeroImage.jpg"
                alt="Anas Mohammed Riza"
                fill
                priority
                className="object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
              <motion.div
                className="absolute inset-0 rounded-xl"
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(var(--accent), 0.3)",
                    "0 0 40px rgba(var(--accent), 0.5)",
                    "0 0 20px rgba(var(--accent), 0.3)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>

            {/* Social Links */}
            <motion.div className="flex gap-8 md:mt-2">
              {[
                { href: "https://web.facebook.com/rizariz.rizariz.52/", icon: Facebook, label: "Facebook" },
                { href: "https://www.instagram.com/r26.5z?igsh=d3B5bXdkOW1hc2Ju", icon: Instagram, label: "Instagram" },
              ].map((social, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1, type: "spring", stiffness: 200 }}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    asChild
                    className="hover:bg-accent/10 hover:text-accent transition-all duration-300 cursor-pointer"
                  >
                    <a href={social.href} target="_blank" rel="noopener noreferrer">
                      <social.icon className="h-6 w-6" />
                      <span className="sr-only">{social.label}</span>
                    </a>
                  </Button>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}