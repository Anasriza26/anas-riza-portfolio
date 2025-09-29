"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion, Variants } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const projects = [
    {
      title: "Dreamy Hotel Reservation System",
      description:
        "Created a unique hotel reservation system to showcase capabilities using React and Tailwind CSS. Implemented responsive design and user-friendly interface with modern booking functionality.",
      technologies: ["React", "Tailwind CSS", "JavaScript", "Responsive Design"],
      category: "Web Application",
      year: "2025",
    },
    {
      title: "Student Online Complaint Management System",
      description:
        "Developed a CRUD-based web application for managing student records as an education project. Implemented full functionality for creating, reading, updating, and deleting student complaints.",
      technologies: ["React", "Node.js", "PHP My Admin", "CRUD Operations"],
      category: "Web Application",
      year: "2025",
    },
    {
      title: "E-Commerce Frontend",
      description:
        "Designed a responsive shopping site with product listing and cart functionality as a practice project. Focused on creating an intuitive user experience and modern design patterns.",
      technologies: ["React", "CSS3", "JavaScript", "Responsive Design"],
      category: "Practice Project",
      year: "2024",
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const, // fix TypeScript error
      },
    },
  };

  return (
    <section
      id="projects"
      ref={ref}
      className="bg-muted/30 min-h-screen flex items-center justify-center lg:pt-32 pt-20 relative overflow-hidden px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Title Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="space-y-4 text-center"
          >
            <h2 className="text-3xl sm:text-5xl font-semibold text-foreground">
              Projects
            </h2>
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: 96 } : { width: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-1 bg-gradient-to-r from-accent to-primary mx-auto rounded-full"
            />
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {projects.map((project, index) => (
              <motion.div key={index} variants={cardVariants}>
                <motion.div
                  whileHover={{
                    y: -12,
                    rotateX: 5,
                    rotateY: 5,
                    scale: 1.03,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <Card className="border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-xl hover:shadow-accent/20 group h-full">
                    <CardHeader>
                      <div className="space-y-2">
                        <motion.div
                          className="flex items-center justify-between"
                          initial={{ opacity: 0, x: -20 }}
                          animate={
                            isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                          }
                          transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                        >
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 400 }}
                          >
                            <Badge
                              variant="outline"
                              className="self-start text-xs"
                            >
                              {project.category}
                            </Badge>
                          </motion.div>
                          <motion.span
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                            transition={{
                              duration: 0.5,
                              delay: 0.5 + index * 0.1,
                            }}
                            className="text-xs text-muted-foreground"
                          >
                            {project.year}
                          </motion.span>
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={
                            isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
                          }
                          transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                        >
                          <CardTitle className="text-lg text-foreground group-hover:text-accent transition-colors duration-300">
                            {project.title}
                          </CardTitle>
                        </motion.div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                        className="text-muted-foreground text-sm leading-relaxed"
                      >
                        {project.description}
                      </motion.p>
                      <motion.div
                        className="flex flex-wrap gap-1"
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        variants={{
                          hidden: { opacity: 0 },
                          visible: {
                            opacity: 1,
                            transition: {
                              staggerChildren: 0.05,
                              delayChildren: 0.7 + index * 0.1,
                            },
                          },
                        }}
                      >
                        {project.technologies.map((tech) => (
                          <motion.div
                            key={tech}
                            variants={{
                              hidden: { opacity: 0, scale: 0, rotate: -10 },
                              visible: {
                                opacity: 1,
                                scale: 1,
                                rotate: 0,
                                transition: {
                                  type: "spring",
                                  stiffness: 500,
                                  damping: 25,
                                },
                              },
                            }}
                            whileHover={{
                              scale: 1.15,
                              y: -3,
                              rotate: 3,
                            }}
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
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
