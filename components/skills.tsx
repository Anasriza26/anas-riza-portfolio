"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion, Variants } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        "React.js",
        "Next.js",
        "JavaScript (ES6+)",
        "TypeScript",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "shadcn/ui",
        "GSAP",
      ],
    },
    {
      title: "Backend Development",
      skills: [
        "Node.js",
        "Express.js",
        "C#",
        ".NET",
        "REST APIs",
        "ADO.NET",
        "Middleware",
        "CRUD Operations",
      ],
    },
    {
      title: "Mobile & Desktop Development",
      skills: [
        "React Native",
        "Expo",
        "Expo Router",
        "NativeWind",
        "Zustand",
        "C# Windows Forms",
      ],
    },
    {
      title: "Databases & Data Management",
      skills: [
        "PostgreSQL",
        "Supabase",
        "SQL Server",
        "MySQL",
        "MongoDB",
        "Mongoose",
        "Neon",
        "Firebase Firestore",
        "Upstash Redis",
        "T-SQL",
      ],
    },
    {
      title: "Authentication & Security",
      skills: [
        "Clerk",
        "Auth.js",
        "Firebase Authentication",
        "JWT",
        "BCrypt",
        "Row Level Security (RLS)",
        "Parameterized Queries",
      ],
    },
    {
      title: "Tools & Platforms",
      skills: [
        "Git",
        "GitHub",
        "VS Code",
        "Visual Studio",
        "Android Studio",
        "Postman",
        "Thunder Client",
        "SQL Server Management Studio",
        "pgAdmin",
        "Figma",
        "Vercel",
        "Expo EAS Build",
      ],
    },
    {
      title: "Programming & Other Technologies",
      skills: [
        "Python",
        "SQL",
        "T-SQL",
        "Gemini API",
        "Resend",
        "Axios",
        "Zod",
      ],
    },
    {
      title: "Professional Skills",
      skills: [
        "Problem-Solving",
        "Analytical Thinking",
        "Team Collaboration",
        "Communication",
        "Adaptability",
        "Agile Development",
        "Code Review",
        "Self-Motivation",
      ],
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 60, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="skills"
      ref={ref}
      className="bg-muted/30 min-h-screen flex items-center justify-center lg:pt-32 pt-20 relative overflow-hidden px-4 sm:px-6 lg:px-8"
    >
      {/* Animated background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/4 -left-1/4 w-96 h-96 bg-gradient-to-r from-accent/10 to-primary/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], rotate: [0, -90, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-1/4 -right-1/4 w-96 h-96 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-6xl mx-auto">
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="space-y-4 text-center"
          >
            <h2 className="text-3xl sm:text-5xl font-semibold text-foreground">
              Skills
            </h2>
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: 96 } : { width: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-1 bg-gradient-to-r from-accent to-primary mx-auto rounded-full"
            />
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                style={{ transformStyle: "preserve-3d" }}
              >
                <motion.div
                  whileHover={{
                    y: -10,
                    scale: 1.03,
                    rotateX: 2,
                    rotateY: 2,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Card className="border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-2xl hover:shadow-accent/20 relative overflow-hidden group h-full">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/10 to-transparent"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                    />
                    <CardHeader>
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={
                          isInView
                            ? { opacity: 1, x: 0 }
                            : { opacity: 0, x: -20 }
                        }
                        transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      >
                        <CardTitle className="text-lg text-foreground group-hover:text-accent transition-colors duration-300 relative z-10">
                          {category.title}
                        </CardTitle>
                      </motion.div>
                    </CardHeader>
                    <CardContent>
                      <motion.div
                        className="flex flex-wrap gap-2"
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        variants={{
                          hidden: { opacity: 0 },
                          visible: {
                            opacity: 1,
                            transition: {
                              staggerChildren: 0.06,
                              delayChildren: 0.5 + index * 0.1,
                            },
                          },
                        }}
                      >
                        {category.skills.map((skill) => (
                          <motion.div
                            key={skill}
                            variants={{
                              hidden: {
                                opacity: 0,
                                scale: 0,
                                y: 20,
                                rotate: -10,
                              },
                              visible: {
                                opacity: 1,
                                scale: 1,
                                y: 0,
                                rotate: 0,
                                transition: {
                                  type: "spring",
                                  stiffness: 500,
                                  damping: 30,
                                },
                              },
                            }}
                            whileHover={{
                              scale: 1.15,
                              y: -5,
                              rotate: [0, -5, 5, 0],
                              boxShadow: "0 10px 25px rgba(var(--accent), 0.3)",
                            }}
                            whileTap={{ scale: 0.95 }}
                            transition={{
                              rotate: { duration: 0.3 },
                              type: "spring",
                              stiffness: 400,
                            }}
                          >
                            <Badge
                              variant="secondary"
                              className="text-xs relative z-10 cursor-pointer"
                            >
                              {skill}
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
