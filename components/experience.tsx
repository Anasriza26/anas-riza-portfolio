"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion, Variants } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const experiences = [
    {
      period: "MAR 2025 — SEP 2025",
      title: "Frontend Development Intern",
      company: "FocalDive",
      location: "Onsite",
      description:
        "Contributed as a Frontend Developer for Book My Play, Sri Lanka's largest online turf booking system, where I helped build responsive and user-friendly web applications using NextJS, Tailwind CSS, and TypeScript. Collaborated with senior developers to enhance UI/UX design, improve application performance, and ensure accessibility across devices. Took responsibility for fixing bugs and implementing new features based on client requirements. Gained hands-on experience with version control (Git), code reviews, and agile teamwork, which strengthened both my technical expertise and ability to work effectively within a professional engineering environment.",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Git",
        "UI/UX",
      ],
    },
  ];

  // Variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const, // cast to satisfy TS
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut" as const, // cast to satisfy TS
      },
    },
  };

  return (
    <section
      id="experience"
      ref={ref}
      className="px-4 sm:px-6 lg:px-8 bg-muted/30 min-h-screen flex items-center justify-center lg:pt-32 pt-20 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="space-y-8"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Title Section */}
          <motion.div variants={itemVariants} className="space-y-4 text-center">
            <h2 className="text-3xl sm:text-5xl font-semibold text-foreground">
              Experience
            </h2>
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: 96 } : { width: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-1 bg-gradient-to-r from-accent to-primary mx-auto rounded-full"
            />
          </motion.div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                <Card className="border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-xl hover:shadow-accent/10">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                      >
                        <CardTitle className="text-xl text-foreground">
                          {exp.title}
                        </CardTitle>
                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                          transition={{ duration: 0.6, delay: 0.5 }}
                          className="text-accent font-medium"
                        >
                          {exp.company}
                        </motion.p>
                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                          transition={{ duration: 0.6, delay: 0.6 }}
                          className="text-sm text-muted-foreground"
                        >
                          {exp.location}
                        </motion.p>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{
                          duration: 0.5,
                          delay: 0.5,
                          type: "spring",
                          stiffness: 200,
                        }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <Badge variant="outline" className="self-start sm:self-center">
                          {exp.period}
                        </Badge>
                      </motion.div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                      className="text-muted-foreground leading-relaxed"
                    >
                      {exp.description}
                    </motion.p>

                    <motion.div
                      className="flex flex-wrap gap-2"
                      initial="hidden"
                      animate={isInView ? "visible" : "hidden"}
                      variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.7 } },
                      }}
                    >
                      {exp.technologies.map((tech) => (
                        <motion.div
                          key={tech}
                          variants={{
                            hidden: { opacity: 0, scale: 0.8, y: 10 },
                            visible: { opacity: 1, scale: 1, y: 0 },
                          }}
                          whileHover={{ scale: 1.1, y: -2 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          <Badge variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
