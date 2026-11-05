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
      title: "Application Development",
      description:
        "Building web, mobile, and desktop applications with React, Next.js, Node.js, React Native, C#, and .NET.",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description:
        "Building cross-platform mobile applications with React Native, Expo, Supabase, and TypeScript.",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description:
        "Experienced in Agile workflows, Git, code reviews, and collaborating with development teams.",
    },
    {
      icon: Zap,
      title: "Reliable Solutions",
      description:
        "Focused on clean code, responsive interfaces, application security, and maintainable software.",
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
                  I'm a Software Engineer with a First Class Honours degree in
                  Software Engineering from London Metropolitan University. I
                  specialize in developing modern web and mobile applications,
                  with a strong interest in building practical, reliable, and
                  user-focused software solutions.
                </motion.p>

                <motion.p variants={itemVariants}>
                  My experience spans web, mobile, and desktop application
                  development using{" "}
                  <span className="text-accent font-medium">React</span>,{" "}
                  <span className="text-accent font-medium">Next.js</span>,{" "}
                  <span className="text-accent font-medium">Node.js</span>,{" "}
                  <span className="text-accent font-medium">React Native</span>,
                  and <span className="text-accent font-medium">C# / .NET</span>
                  . I've also worked with REST APIs, PostgreSQL, MongoDB, MySQL,
                  and SQL Server, building applications ranging from responsive
                  websites and mobile apps to Windows Forms desktop systems.
                </motion.p>

                <motion.p variants={itemVariants}>
                  During my six-month Frontend Developer Internship at{" "}
                  <span className="text-accent font-medium">FocalDive</span>, I
                  contributed to{" "}
                  <a
                    href="https://bookmyplay.lk"
                    className="text-accent font-medium hover:underline"
                  >
                    BookMyPlay.lk
                  </a>
                  , a production turf-booking platform. I developed responsive
                  interfaces, reusable components, integrated APIs, and
                  collaborated with the development team using Git and Agile
                  practices. I'm continuously improving my skills and looking
                  forward to contributing to meaningful software projects.
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
