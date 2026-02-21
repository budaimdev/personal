"use client";

import { Button } from "@heroui/button";
import { Card, CardBody, CardHeader, CardFooter } from "@heroui/card";
import { Link } from "@heroui/link";
import { Chip } from "@heroui/chip";
import { motion } from "framer-motion";
import { Divider } from "@heroui/divider";

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const staggerContainer = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const projects = [
    {
      title: "Terminal System Monitor",
      description: "A lightweight, cross-platform terminal-based system monitoring tool inspired by htop. Built for performance and ease of use.",
      tags: ["C#", ".NET 8", "Terminal UI"],
      link: "#"
    },
    {
      title: "Inventory Manager Mobile",
      description: "Cross-platform mobile application for tracking warehouse inventory in real-time with barcode scanning support.",
      tags: ["Flutter", "Dart", "Firebase"],
      link: "#"
    },
    {
      title: "Secure Notes App",
      description: "Native Android application for storing encrypted notes locally. Built with modern Android architecture components.",
      tags: ["Android", "Jetpack Compose", "Kotlin"],
      link: "#"
    },
    {
      title: "E-commerce Dashboard",
      description: "Comprehensive admin dashboard for managing products, orders, and analytics with real-time data updates.",
      tags: ["Next.js", "TypeScript", "Tailwind"],
      link: "#"
    }
  ];

  return (
    <div className="flex flex-col gap-16 pb-8 relative overflow-x-clip">
      {/* Background Gradients */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <motion.div
          animate={{
            x: ["-5%", "5%", "-5%"],
            y: ["-5%", "5%", "-5%"],
            rotate: [0, 15, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
          className="absolute w-[500px] h-[500px] bg-primary/20 rounded-full blur-[80px] opacity-70"
        />
        <motion.div
          animate={{
            x: ["10%", "-10%", "10%"],
            y: ["10%", "-10%", "10%"],
            scale: [1, 0.8, 1],
            rotate: [0, -10, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
            delay: 5,
          }}
          className="absolute left-[70%] w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[100px] opacity-70"
        />
        <motion.div
          animate={{
            x: ["20%", "-20%", "20%"],
            y: ["-20%", "20%", "-20%"],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
            delay: 10,
          }}
          className="absolute bottom-[-20%] left-[30%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[130px] opacity-70"
        />
      </div>

      {/* Hero Section */}
      <section id="home" className="relative z-10 flex flex-col items-center justify-center min-h-[80vh] text-center gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0  }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 animate-gradient-x bg-[length:200%_auto]">
            Michal Budai
          </h1>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-xl md:text-2xl text-default-500 max-w-2xl"
        >
          Building digital experiences with passion and precision.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex gap-4 mt-8"
        >
          <Button
            as={Link}
            href="#projects"
            color="primary"
            variant="shadow"
            size="lg"
            className="font-semibold"
          >
            View Work
          </Button>
          <Button
            as={Link}
            href="#czechclouds"
            variant="bordered"
            size="lg"
            className="font-semibold"
          >
            My Cloud
          </Button>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative z-10 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl font-bold mb-4">What I Do</h2>
          <p className="text-default-500">My technical expertise and services</p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-2"
        >
          {[
            {
              title: "Web Development",
              desc: "Modern, responsive websites and web applications.",
              icon: "🌐",
              tech: "React, Next.js, TypeScript"
            },
            {
              title: "C# Applications",
              desc: "Backend services and desktop terminal applications.",
              icon: "#️⃣",
              tech: ".NET, C#, WPF, Console"
            },
            {
              title: "Mobile Development",
              desc: "Cross-platform mobile apps for Android and iOS.",
              icon: "📱",
              tech: "Flutter, Jetpack Compose"
            },
            {
              title: "Server Management",
              desc: "Linux server administration and deployment.",
              icon: "🖥️",
              tech: "Linux, Docker, Nginx"
            }
          ].map((item, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card className="h-full hover:scale-105 transition-transform duration-200 bg-content1/50 backdrop-blur-sm border-default-200/50">
                <CardHeader className="flex gap-3">
                  <div className="text-4xl">{item.icon}</div>
                  <div className="flex flex-col">
                    <p className="text-md font-bold">{item.title}</p>
                  </div>
                </CardHeader>
                <CardBody>
                  <p className="text-default-500 mb-4">{item.desc}</p>
                  <p className="text-xs font-mono bg-default-100 p-2 rounded-md">{item.tech}</p>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <Divider className="my-8" />

      {/* Projects Showcase Section */}
      <section id="projects" className="relative z-10 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Selected Projects</h2>
          <p className="text-default-500">A showcase of my recent work across different platforms.</p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card className="h-full hover:border-primary/50 transition-colors duration-300 bg-content1/50 backdrop-blur-sm border-default-200/50">
                <CardHeader className="flex justify-between items-start pb-0">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                </CardHeader>
                <CardBody className="py-4">
                  <p className="text-default-500">{project.description}</p>
                </CardBody>
                <CardFooter className="flex flex-col items-start gap-4 pt-0">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Chip key={tagIndex} size="sm" variant="flat" color="secondary">
                        {tag}
                      </Chip>
                    ))}
                  </div>
                  <Link
                    isExternal
                    showAnchorIcon
                    href={project.link}
                    className="text-sm font-medium"
                  >
                    View Project
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <Divider className="my-8" />

      {/* Czechclouds Section */}
      <section id="czechclouds" className="relative z-10 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Card className="bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/10 dark:to-primary-900/10 border-none shadow-lg overflow-hidden backdrop-blur-md">
            <CardBody className="p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1 space-y-6">
                <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary font-semibold text-sm">
                  Featured Project
                </div>
                <h2 className="text-4xl md:text-5xl font-bold">Czechclouds</h2>
                <p className="text-lg text-default-600">
                  Affordable cloud storage solution based on Nextcloud. Secure, reliable, and accessible from anywhere.
                  Experience the freedom of your own private cloud without breaking the bank.
                </p>
                <ul className="space-y-2 text-default-500">
                  <li className="flex items-center gap-2">✓ Nextcloud based</li>
                  <li className="flex items-center gap-2">✓ High security</li>
                  <li className="flex items-center gap-2">✓ Affordable pricing</li>
                </ul>
                <div className="pt-4">
                  <Button
                    as={Link}
                    href="https://czechclouds.eu"
                    target="_blank"
                    color="primary"
                    size="lg"
                    className="font-bold shadow-lg"
                    endContent={<span>↗</span>}
                  >
                    Visit Czechclouds.eu
                  </Button>
                </div>
              </div>
              <div className="flex-1 flex justify-center items-center">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                  className="relative w-64 h-64 md:w-80 md:h-80 bg-white dark:bg-black rounded-full flex items-center justify-center shadow-2xl"
                >
                  <span className="text-8xl">☁️</span>
                </motion.div>
              </div>
            </CardBody>
          </Card>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-8 mt-8 border-t border-divider">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-default-500">
            © {new Date().getFullYear()} Michal Budai. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" color="foreground" className="text-default-500 hover:text-foreground">
              GitHub
            </Link>
            <Link href="#" color="foreground" className="text-default-500 hover:text-foreground">
              Twitter
            </Link>
            <Link href="#" color="foreground" className="text-default-500 hover:text-foreground">
              LinkedIn
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
