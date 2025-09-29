"use client";

import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Experience } from "@/components/experience";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { Education } from "@/components/education";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { motion, AnimatePresence, Variants, easeIn, easeOut, easeInOut } from "framer-motion";

// Page transition variants (typed)
const pageVariants: Variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  in: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeOut,
    },
  },
  out: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.4,
      ease: easeIn,
    },
  },
};

// Container variants for staggered children
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

// Section variants for individual sections
const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: easeOut,
    },
  },
};

export default function Home() {
  const sections = [
    { id: "hero", component: <Hero /> },
    { id: "about", component: <About /> },
    { id: "experience", component: <Experience /> },
    { id: "projects", component: <Projects /> },
    { id: "skills", component: <Skills /> },
    { id: "education", component: <Education /> },
    { id: "contact", component: <Contact /> },
  ];

  return (
    <AnimatePresence mode="wait">
      <motion.main
        key="home-page"
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        className="bg-background overflow-hidden"
      >
        <Header />

        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          {/* Hero Section - Immediate impact */}
          <motion.section
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { duration: 0.8, ease: easeOut }, // ✅ Typed easing
              },
            }}
          >
            <Hero />
          </motion.section>

          {/* Other Sections with staggered animation */}
          {sections.slice(1).map((section, index) => (
            <motion.section
              key={section.id}
              variants={sectionVariants}
              whileInView="visible"
              initial="hidden"
              viewport={{
                once: true,
                margin: "-50px",
                amount: 0.1,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
            >
              {section.component}
            </motion.section>
          ))}
        </motion.div>

        {/* Footer with separate animation */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2, ease: easeInOut }} // ✅ Typed easing
        >
          <Footer />
        </motion.section>
      </motion.main>
    </AnimatePresence>
  );
}
