"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { motion, Variants, useInView } from "framer-motion";
import { useRef } from "react";

export function Projects() {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    amount: 0.1,
  });

  const projects = [
    {
      title: "Noir Etude - Luxury Fashion E-Commerce",
      description:
        "A polished, modern shopping experience built with reusable React/Next.js components. Optimized layouts and load performance across desktop, tablet, and mobile, then shipped to production on Vercel.",
      technologies: [
        "Next.js",
        "React.js",
        "TypeScript",
        "Tailwind CSS",
        "Shadcn UI",
      ],
      category: "Live Project",
      year: "2025",
      liveUrl: "https://noir-etude.vercel.app",
    },
    {
      title: "City Timber - Business Website",
      description:
        "A modern, responsive business site for a timber and construction materials company, complete with cinematic GSAP page-load transitions, scroll-triggered reveals, and smooth mobile navigation.",
      technologies: [
        "Next.js",
        "React.js",
        "TypeScript",
        "GSAP",
        "Tailwind CSS",
      ],
      category: "Live Project",
      year: "2025",
      liveUrl: "https://city-timber.vercel.app",
    },
    {
      title: "Book My Play - Turf Booking Platform",
      description:
        "Contributed frontend features to a nationwide sports turf booking platform, building reusable UI components within a scalable architecture alongside a team of designers and developers.",
      technologies: [
        "Next.js",
        "Tailwind CSS",
        "Shadcn UI",
        "TypeScript",
      ],
      category: "Team Project",
      year: "2025",
    },
    {
      title: "Dreamy Hotel Reservation System",
      description:
        "A hotel reservation web app that simplifies the booking flow with an intuitive UI and reusable React components, backed by Firebase for real-time data handling.",
      technologies: ["React.js", "Tailwind CSS", "Firebase"],
      category: "Web Application",
      year: "2025",
    },
    {
      title: "Student Online Complaint Management System",
      description:
        "A full-stack complaint management system enabling secure issue tracking for educational institutions, with complete CRUD functionality and responsive interfaces integrated with RESTful APIs.",
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "REST API",
      ],
      category: "Full Stack",
      year: "2025",
    },
    {
      title: "Mobile Authentication App",
      description:
        "A cross-platform mobile app securing user access with registration and login powered by Firebase Authentication and Firestore.",
      technologies: [
        "React Native",
        "Expo",
        "Firebase Auth",
        "Firestore",
      ],
      category: "Mobile App",
      year: "2024",
    },
    {
      title: "Mobile Todo Application",
      description:
        "A task management app built for everyday use, with full CRUD functionality and a clean, responsive mobile UI.",
      technologies: ["React Native", "Expo", "JavaScript"],
      category: "Mobile App",
      year: "2024",
    },
  ];

  const containerVariants: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
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
            animate={
              isInView
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 30 }
            }
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

            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-muted-foreground max-w-xl mx-auto"
            >
              A mix of web, mobile, and full-stack builds, some shipped to
              production, others built to sharpen specific skills.
            </motion.p>
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
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                >
                  <Card className="border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-xl hover:shadow-accent/20 group h-full flex flex-col">
                    <CardHeader>
                      <div className="space-y-2">
                        <motion.div
                          className="flex items-center justify-between"
                          initial={{ opacity: 0, x: -20 }}
                          animate={
                            isInView
                              ? { opacity: 1, x: 0 }
                              : { opacity: 0, x: -20 }
                          }
                          transition={{
                            duration: 0.5,
                            delay: 0.4 + index * 0.1,
                          }}
                        >
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            transition={{
                              type: "spring",
                              stiffness: 400,
                            }}
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
                            animate={
                              isInView
                                ? { opacity: 1 }
                                : { opacity: 0 }
                            }
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
                            isInView
                              ? { opacity: 1, y: 0 }
                              : { opacity: 0, y: 10 }
                          }
                          transition={{
                            duration: 0.5,
                            delay: 0.5 + index * 0.1,
                          }}
                        >
                          <CardTitle className="text-lg text-foreground group-hover:text-accent transition-colors duration-300">
                            {project.title}
                          </CardTitle>
                        </motion.div>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-4 flex flex-col flex-1">
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={
                          isInView
                            ? { opacity: 1 }
                            : { opacity: 0 }
                        }
                        transition={{
                          duration: 0.5,
                          delay: 0.6 + index * 0.1,
                        }}
                        className="text-muted-foreground text-sm leading-relaxed"
                      >
                        {project.description}
                      </motion.p>

                      {/* Technologies */}
                      <motion.div
                        className="flex flex-wrap gap-1"
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        variants={{
                          hidden: {
                            opacity: 0,
                          },
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
                              hidden: {
                                opacity: 0,
                                scale: 0,
                                rotate: -10,
                              },
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
                            transition={{
                              type: "spring",
                              stiffness: 400,
                            }}
                          >
                            <Badge
                              variant="secondary"
                              className="text-xs"
                            >
                              {tech}
                            </Badge>
                          </motion.div>
                        ))}
                      </motion.div>

                      {/* Show button only when a live project URL exists */}
                      {project.liveUrl && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={
                            isInView
                              ? { opacity: 1, y: 0 }
                              : { opacity: 0, y: 10 }
                          }
                          transition={{
                            duration: 0.5,
                            delay: 0.8 + index * 0.1,
                          }}
                          className="pt-2 mt-auto"
                        >
                          <Button
                            asChild
                            variant="outline"
                            size="sm"
                            className="w-full gap-2 border-accent/30 hover:border-accent/60 hover:bg-accent/10 hover:text-accent transition-all duration-300 cursor-pointer"
                          >
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink className="h-4 w-4" />
                              View Project
                            </a>
                          </Button>
                        </motion.div>
                      )}
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