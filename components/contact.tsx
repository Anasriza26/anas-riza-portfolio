"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  MessageSquare,
} from "lucide-react";
import { motion, Variants, Easing } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

// Define easing arrays for TS compatibility
const easeOut: Easing = [0.42, 0, 0.58, 1];
const easeInOut: Easing = [0.42, 0, 0.58, 1];
const backOut: Easing = [0.175, 0.885, 0.32, 1.275];

// Animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

const cardHoverVariants: Variants = {
  rest: { scale: 1, y: 0, transition: { duration: 0.3, ease: easeInOut } },
  hover: { scale: 1.02, y: -4, transition: { duration: 0.3, ease: easeInOut } },
};

const iconHoverVariants: Variants = {
  rest: { scale: 1, rotate: 0 },
  hover: { scale: 1.1, rotate: 5, transition: { duration: 0.2, ease: backOut } },
};

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "rizanas0526rz@gmail.com",
      href: "mailto:rizanas0526rz@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+94 754121698",
      href: "tel:+94754121698",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "17/21, Poles Road, Puttalam, Sri Lanka",
      href: "#",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Anasriza26",
      description: "Check out my code repositories",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/anasriza/",
      description: "Connect with me professionally",
    },
    {
      icon: MessageSquare,
      label: "WhatsApp",
      href: "https://wa.me/94754121698",
      description: "Send me a message directly",
    },
  ];

  return (
    <section id="contact" className="lg:pt-32 pt-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="space-y-8"
        >
          {/* Header Section */}
          <motion.div variants={itemVariants} className="space-y-4 text-center">
            <motion.h2
              className="text-3xl sm:text-5xl font-semibold text-foreground"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: easeOut }}
            >
              Get In Touch
            </motion.h2>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-accent to-primary mx-auto rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: easeOut }}
            />
            <motion.p
              className="text-muted-foreground max-w-2xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              If you would like to discuss a project or just say hi, I'm always
              down to chat. Feel free to reach out through any of the channels
              below.
            </motion.p>
          </motion.div>

          {/* Content Grid */}
          <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-6">
              <motion.h3
                className="text-xl font-semibold text-foreground"
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -20 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: easeOut }}
              >
                Contact Information
              </motion.h3>
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover="hover"
                    initial="rest"
                    animate="rest"
                    className="flex items-center gap-4"
                  >
                    <motion.div
                      variants={iconHoverVariants}
                      className="flex-shrink-0 w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center"
                    >
                      <contact.icon className="h-5 w-5 text-accent" />
                    </motion.div>
                    <div>
                      <p className="text-sm text-muted-foreground">{contact.label}</p>
                      {contact.href !== "#" ? (
                        <motion.a
                          href={contact.href}
                          className="text-foreground hover:text-accent transition-colors"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {contact.value}
                        </motion.a>
                      ) : (
                        <p className="text-foreground">{contact.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="space-y-6">
              <motion.h3
                className="text-xl font-semibold text-foreground"
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 20 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: easeOut }}
              >
                Connect With Me
              </motion.h3>
              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover="hover"
                    initial="rest"
                    animate="rest"
                  >
                    <Card className="border-border/50 hover:border-accent/50 transition-colors">
                      <CardContent className="p-4">
                        <motion.div variants={cardHoverVariants} className="flex items-center gap-4">
                          <motion.div
                            variants={iconHoverVariants}
                            className="flex-shrink-0 w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center"
                          >
                            <social.icon className="h-5 w-5 text-accent" />
                          </motion.div>
                          <div className="flex-1">
                            <h4 className="font-medium text-foreground">{social.label}</h4>
                            <p className="text-sm text-muted-foreground">{social.description}</p>
                          </div>
                          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Button variant="ghost" size="sm" asChild>
                              <a href={social.href} target="_blank" rel="noopener noreferrer">
                                Visit
                              </a>
                            </Button>
                          </motion.div>
                        </motion.div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
