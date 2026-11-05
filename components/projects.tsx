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
      title: "AI Gym Planner - AI-Powered Fitness Application",
      description:
        "Developed a full-stack fitness application featuring secure user authentication, email OTP verification, and fitness profile management. Integrated Google's Gemini AI to generate personalized workout plans, with features for saving plans and tracking workout history.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Neon PostgreSQL",
        "Auth.js",
        "Gemini AI",
        "Resend",
      ],
      category: "Full Stack / AI",
      year: "2026",
      links: [
        {
          label: "Live URL",
          url: "https://ai-gym-planner-app.netlify.app/",
        },
        {
          label: "GitHub",
          url: "https://github.com/Anasriza26/ai-gym-planner.git",
        },
      ],
    },
    {
      title: "Mine Estate - Real Estate Mobile Application",
      description:
        "Built a cross-platform real estate application using React Native and Expo, featuring property listings, search and filtering, saved favourites, and multi-image uploads. Implemented Clerk authentication, protected routes, and Supabase Row Level Security to secure user-owned listings and data.",
      technologies: [
        "React Native",
        "Expo",
        "TypeScript",
        "Expo Router",
        "NativeWind",
        "Zustand",
        "Supabase",
        "Clerk",
      ],
      category: "Mobile Application",
      year: "2026",
      links: [
        {
          label: "APK Download",
          url: "https://github.com/Anasriza26/estate-app/releases/download/v1.1.0/MineEstate-v1.1.0.apk",
        },
      ],
    },
    {
      title: "Inventory Management System - Desktop Application",
      description:
        "Developed a Windows desktop inventory management system with user authentication, role-based access control, product and customer management, order processing, and invoice generation. Implemented SQL transactions for reliable stock management, BCrypt password hashing, sales reporting, and database backup functionality.",
      technologies: [
        "C#",
        ".NET",
        "Windows Forms",
        "SQL Server",
        "T-SQL",
        "ADO.NET",
        "BCrypt",
      ],
      category: "Desktop Application",
      year: "2026",
      links: [
        {
          label: "Live URL",
          url: "https://lnkd.in/p/gQ29ey-D",
        },
      ],
    },
    {
      title: "Notes API - RESTful Backend Service",
      description:
        "Developed a RESTful backend service using Node.js and Express.js, providing complete CRUD operations and API health monitoring. Implemented request validation, parameterized SQL queries, centralized error handling, request logging, and environment-based configuration to improve API reliability and security.",
      technologies: [
        "Node.js",
        "Express.js",
        "Express 5",
        "MySQL",
        "REST API",
        "dotenv",
      ],
      category: "Backend Development",
      year: "2026",
      links: [
        {
          label: "GitHub",
          url: "https://github.com/Anasriza26/notes-api",
        },
      ],
    },
    {
      title: "ThinkBoard - Full-Stack MERN Notes Application",
      description:
        "Built a full-stack notes management application with complete CRUD functionality using Next.js, Node.js, Express.js, and MongoDB. Integrated Upstash Redis for sliding-window API rate limiting and developed responsive interfaces with loading, empty, and error states. Deployed the frontend and backend on Vercel with Git-based continuous deployment.",
      technologies: [
        "Next.js",
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Mongoose",
        "Tailwind CSS",
        "Upstash Redis",
        "Vercel",
      ],
      category: "Full Stack / MERN",
      year: "2026",
      links: [
        {
          label: "Live URL",
          url: "https://riza-notes-app.vercel.app/",
        },
      ],
    },
    {
      title: "Noir Étude - Luxury Fashion E-Commerce Website",
      description:
        "Designed and developed a responsive luxury fashion e-commerce website using Next.js and React.js. Focused on reusable components, modern interface design, and optimized layouts to deliver a consistent browsing experience across desktop, tablet, and mobile devices. Deployed the application on Vercel.",
      technologies: [
        "Next.js",
        "React.js",
        "TypeScript",
        "Supabase",
        "PostgreSQL",
        "Tailwind CSS",
        "Shadcn UI",
        "Vercel",
      ],
      category: "E-Commerce Website",
      year: "2026",
      links: [
        {
          label: "Live URL",
          url: "https://noir-etude.vercel.app/",
        },
      ],
    },
    {
      title: "City Timber - Business Website",
      description:
        "Designed and developed a modern, responsive business website for a timber and construction materials company. Presented company information, products, services, and contact details through a professional interface, enhanced with GSAP-powered page transitions, scroll-triggered animations, and interactive navigation.",
      technologies: [
        "Next.js",
        "React.js",
        "TypeScript",
        "Tailwind CSS",
        "Shadcn UI",
        "GSAP",
        "Lucide React",
        "Vercel",
      ],
      category: "Business Website",
      year: "2026",
      links: [
        {
          label: "Live URL",
          url: "https://city-timber.vercel.app/",
        },
      ],
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

            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-muted-foreground max-w-xl mx-auto"
            >
              A selection of web, mobile, backend, and desktop applications
              showcasing my experience in building practical software solutions
              using modern technologies.
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
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
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
                            <Badge variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          </motion.div>
                        ))}
                      </motion.div>

                      {/* Project Links */}
                      {project.links.length > 0 && (
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
                          className="pt-2 mt-auto flex flex-wrap gap-2"
                        >
                          {project.links.map((link) => (
                            <Button
                              key={link.label}
                              asChild
                              variant="outline"
                              size="sm"
                              className="flex-1 gap-2 border-accent/30 hover:border-accent/60 hover:bg-accent/10 hover:text-accent transition-all duration-300 cursor-pointer"
                            >
                              <a
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <ExternalLink className="h-4 w-4" />
                                {link.label}
                              </a>
                            </Button>
                          ))}
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
