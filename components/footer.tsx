"use client";

import { motion, Variants, easeIn, easeOut, easeInOut, backOut } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  // Corrected container variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  // Corrected item variants
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: easeOut, // ✅ Use typed easing
      },
    },
  };

  const techStack = ["Next.js", "Tailwind CSS"];
  const [firstTech, secondTech] = techStack;

  return (
    <motion.footer
      className="py-8 px-4 sm:px-6 lg:px-8 border-t border-border lg:mt-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          {/* Copyright Text */}
          <motion.div
            variants={itemVariants}
            className="text-center sm:text-left"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Anas Riza. All rights reserved.
            </p>
          </motion.div>

          {/* Built With Text */}
          <motion.div variants={itemVariants} className="text-center sm:text-right">
            <p className="text-sm text-muted-foreground">
              Built with{" "}
              <motion.span
                className="text-foreground font-medium"
                whileHover={{
                  color: "hsl(var(--accent))",
                  scale: 1.05,
                }}
                transition={{ duration: 0.2 }}
              >
                {firstTech}
              </motion.span>{" "}
              and{" "}
              <motion.span
                className="text-foreground font-medium"
                whileHover={{
                  color: "hsl(var(--accent))",
                  scale: 1.05,
                }}
                transition={{ duration: 0.2, delay: 0.05 }}
              >
                {secondTech}
              </motion.span>
            </p>
          </motion.div>
        </motion.div>

        {/* Optional: Subtle decorative element */}
        <motion.div
          className="mt-6 flex justify-center"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.4, ease: easeInOut }}
        >
          <motion.div
            className="w-16 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent rounded-full"
            animate={{
              scaleX: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: easeInOut,
            }}
          />
        </motion.div>
      </div>
    </motion.footer>
  );
}
