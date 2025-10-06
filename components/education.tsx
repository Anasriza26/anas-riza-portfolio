"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const education = [
    {
      period: new Date().getFullYear().toString(),
      degree: "BSc (Hons) Software Engineering",
      institution: "Esoft Metro Campus",
      location: "Bambalapitiya, Sri Lanka",
      type: "In Progress",
      status: "current",
    },
    {
      period: "2025",
      degree: "Higher National Diploma (HND) in Computing",
      institution: "Esoft Metro Campus",
      location: "Bambalapitiya, Sri Lanka",
      type: "Completed",
      status: "completed",
    },
    {
      period: "2022",
      degree: "Advanced Level Examination in Engineering Technology Stream",
      institution: "Zahira College Puttalam",
      location: "Puttalam, Sri Lanka",
      type: "Secondary Education",
      status: "completed",
    },
    {
      period: "2019",
      degree: "Ordinary Level Examination",
      institution: "Zahira College Puttalam",
      location: "Puttalam, Sri Lanka",
      type: "Secondary Education",
      status: "completed",
    },
  ];

  const certifications = [
    {
      title: "Higher National Diploma (HND) in Computing",
      issuer: "Esoft Metro Campus",
      type: "Academic Qualification",
    },
    {
      title: "English Speaking and Listening Short Course",
      issuer: "Open University, Puttalam",
      type: "Language Certification",
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const educationVariants = (index: number): Variants => ({
    hidden: {
      opacity: 0,
      x: index % 2 === 0 ? -60 : 60,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  });

  const certVariants: Variants = {
    hidden: { opacity: 0, rotateY: -90, scale: 0.8 },
    visible: {
      opacity: 1,
      rotateY: 0,
      scale: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <section
      id="education"
      ref={ref}
      className="lg:pt-32 pt-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center"
    >
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          className="space-y-12"
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
              Education
            </h2>
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: 96 } : { width: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-1 bg-gradient-to-r from-accent to-primary mx-auto rounded-full"
            />
          </motion.div>

          {/* Education Section */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center gap-2 mb-6"
            >
              <motion.div
                animate={
                  isInView ? { rotate: [0, 360], scale: [1, 1.2, 1] } : {}
                }
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  times: [0, 0.5, 1],
                }}
              >
                <GraduationCap className="h-5 w-5 text-accent" />
              </motion.div>
              <h3 className="text-xl font-semibold text-foreground">
                Academic Qualifications
              </h3>
            </motion.div>

            <motion.div
              className="space-y-4 relative"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {/* Timeline Line */}
              <motion.div
                initial={{ height: 0 }}
                animate={isInView ? { height: "100%" } : { height: 0 }}
                transition={{ duration: 1.5, delay: 0.5 }}
                className="absolute left-0 top-0 w-1 bg-gradient-to-b from-accent via-primary to-accent/50 rounded-full hidden md:block"
                style={{ marginLeft: "-12px" }}
              />

              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  variants={educationVariants(index)}
                  whileHover={{ scale: 1.02, x: 10 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  className="relative"
                >
                  {/* Timeline Dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.15 }}
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-accent border-4 border-background hidden md:block"
                    style={{ marginLeft: "-20px" }}
                  >
                    <motion.div
                      animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="absolute inset-0 rounded-full bg-accent"
                    />
                  </motion.div>

                  <Card className="border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 relative overflow-hidden group">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={false}
                    />
                    <CardHeader className="relative z-10">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={
                            isInView
                              ? { opacity: 1, y: 0 }
                              : { opacity: 0, y: 20 }
                          }
                          transition={{
                            duration: 0.5,
                            delay: 0.6 + index * 0.15,
                          }}
                        >
                          <CardTitle className="text-lg text-foreground group-hover:text-accent transition-colors duration-300">
                            {edu.degree}
                          </CardTitle>
                          <p className="text-accent font-medium">
                            {edu.institution}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {edu.location}
                          </p>
                        </motion.div>
                        <div className="flex flex-col gap-2 self-start sm:self-center">
                          <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={
                              isInView
                                ? { opacity: 1, scale: 1 }
                                : { opacity: 0, scale: 0.8 }
                            }
                            transition={{
                              duration: 0.5,
                              delay: 0.7 + index * 0.15,
                              type: "spring",
                              stiffness: 200,
                            }}
                            whileHover={{ scale: 1.1 }}
                          >
                            <Badge variant="outline">{edu.period}</Badge>
                          </motion.div>
                          <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={
                              isInView
                                ? { opacity: 1, scale: 1 }
                                : { opacity: 0, scale: 0.8 }
                            }
                            transition={{
                              duration: 0.5,
                              delay: 0.8 + index * 0.15,
                              type: "spring",
                              stiffness: 200,
                            }}
                            whileHover={{ scale: 1.1 }}
                          >
                            <Badge
                              variant={
                                edu.status === "current"
                                  ? "default"
                                  : "secondary"
                              }
                              className="text-xs"
                            >
                              {edu.type}
                            </Badge>
                          </motion.div>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Certifications Section */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center gap-2 mb-6"
            >
              <motion.div
                animate={
                  isInView
                    ? { rotate: [0, -15, 15, -15, 0], scale: [1, 1.2, 1] }
                    : {}
                }
                transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
              >
                <Award className="h-5 w-5 text-accent" />
              </motion.div>
              <h3 className="text-xl font-semibold text-foreground">
                Certifications
              </h3>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  variants={certVariants}
                  whileHover={{ scale: 1.05, rotateY: 5, z: 50 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <Card className="border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-xl hover:shadow-accent/20 h-full relative overflow-hidden group">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/20 to-transparent"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.6 }}
                    />

                    <CardContent className="pt-6 relative z-10">
                      <motion.div
                        className="space-y-2"
                        initial={{ opacity: 0, y: 10 }}
                        animate={
                          isInView
                            ? { opacity: 1, y: 0 }
                            : { opacity: 0, y: 10 }
                        }
                        transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                      >
                        <h4 className="font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
                          {cert.title}
                        </h4>
                        <p className="text-sm text-accent">{cert.issuer}</p>
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          <Badge variant="secondary" className="text-xs">
                            {cert.type}
                          </Badge>
                        </motion.div>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
