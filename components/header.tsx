"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Download } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const navigation = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 200);
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-lg shadow-primary/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between h-16 px-2">
          <div className="flex-shrink-0">
            <Link href="/" className="block" onClick={handleClick}>
              <motion.h1
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`text-xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent transition-transform duration-200 ${
                  clicked ? "scale-105" : ""
                }`}
              >
                Anas Riza
              </motion.h1>
            </Link>
          </div>

          {/* Desktop Navigation - Improved tablet responsiveness */}
          <nav className="hidden lg:block">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.3,
                  },
                },
              }}
              className="ml-10 flex items-baseline space-x-8"
            >
              {navigation.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  variants={{
                    hidden: { opacity: 0, y: -20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                  className="relative text-muted-foreground hover:text-foreground transition-all duration-300 text-sm font-medium group"
                >
                  {item.name}
                  <motion.span
                    className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-accent to-primary"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}
            </motion.div>
          </nav>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="hidden lg:flex items-center space-x-3"
          >
            <ThemeToggle />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:hidden flex items-center space-x-2"
          >
            <ThemeToggle />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-5 w-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-5 w-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </Button>
          </motion.div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden overflow-hidden"
            >
              <motion.div
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                exit={{ y: -20 }}
                transition={{ duration: 0.3 }}
                className="px-2 pt-2 pb-3 space-y-1 bg-card/95 backdrop-blur-xl border border-border/50 rounded-xl mt-2 shadow-xl shadow-primary/10"
              >
                {navigation.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                    whileTap={{ scale: 0.98 }}
                    className="block px-4 py-3 text-muted-foreground hover:text-foreground hover:bg-accent/10 rounded-lg transition-all duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}