"use client";

import { Code, Smartphone, Users, Zap } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const highlights = [
    {
      icon: Code,
      title: "Full Stack Development",
      description:
        "Building end-to-end apps with Next.js, React, Node.js, Express, and TypeScript",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description:
        "Crafting cross-platform mobile apps with React Native, Expo, and Firebase",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description:
        "Comfortable working alongside designers and senior developers in agile teams",
    },
    {
      icon: Zap,
      title: "Performance Focus",
      description:
        "Optimizing applications for speed, accessibility, and a smooth user experience",
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section
      id="about"
      ref={ref}
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 lg:pt-32 pt-20 relative overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_1px_1px,_theme(colors.accent/20)_1px,_transparent_0)] bg-[size:24px_24px]"></div>
      </div>

      <div className="max-w-6xl mx-auto">
        <motion.div
          className="space-y-12"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Title Section */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <h2 className="text-3xl sm:text-5xl font-semibold text-foreground">
              About Me
            </h2>
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: 96 } : { width: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-1 bg-gradient-to-r from-accent to-primary mx-auto rounded-full"
            />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Description */}
            <motion.div
              variants={itemVariants}
              className="space-y-6 px-6 lg:px-0"
            >
              <motion.div
                className="space-y-6 text-muted-foreground leading-relaxed"
                variants={containerVariants}
              >
                <motion.p variants={itemVariants}>
                  I'm a Software Engineer with a BEng (Hons) in Software
                  Engineering and a genuine love for building things that
                  work well and feel good to use. What started as curiosity
                  about how websites come together has grown into a full
                  stack skill set spanning web, mobile, and backend
                  development.
                </motion.p>

                <motion.p variants={itemVariants}>
                  I enjoy turning ideas into real, working products using{" "}
                  <span className="text-accent font-medium">Next.js</span>,{" "}
                  <span className="text-accent font-medium">React</span>,{" "}
                  <span className="text-accent font-medium">React Native</span>,{" "}
                  and{" "}
                  <span className="text-accent font-medium">Node.js</span>,
                  backed by databases like PostgreSQL, MongoDB, and Firebase.
                  From e-commerce sites to booking platforms and mobile apps,
                  I like owning a project from the first line of code to the
                  final deploy.
                </motion.p>

                <motion.p variants={itemVariants}>
                  During my six months as a Frontend Developer Intern at{" "}
                  <span className="text-accent font-medium">FocalDive</span>,
                  I got to build production-facing interfaces, turn designs
                  into clean reusable components, and work closely with
                  senior developers who taught me a lot about writing code
                  that other people can actually maintain. That experience
                  sharpened my eye for detail and gave me a real appreciation
                  for good collaboration — and I'm always looking for the
                  next challenge to learn from.
                </motion.p>
              </motion.div>
            </motion.div>

            {/* Right Column - Highlights Grid */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {highlights.map((highlight) => (
                <motion.div
                  key={highlight.title}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="group p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-accent/30 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10"
                >
                  <div className="space-y-3">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className="w-12 h-12 rounded-lg bg-gradient-to-r from-accent/20 to-primary/20 flex items-center justify-center group-hover:from-accent/30 group-hover:to-primary/30 transition-all duration-300"
                    >
                      <highlight.icon className="h-6 w-6 text-accent" />
                    </motion.div>
                    <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
                      {highlight.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}