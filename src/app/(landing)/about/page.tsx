"use client";

import React from "react";
import PageLayout from "@/components/Utilities/PageLayout";
import Image from "next/image";
import {
  Twitter,
  Instagram,
  Linkedin,
  Zap,
  Shield,
  Lightbulb,
  Puzzle,
} from "lucide-react";
import { about } from "@/config/about";
import { motion } from "motion/react";

function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const timelineItemVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  const teamCardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      rotateY: -15,
    },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      rotateY: 0,
      transition: {
        duration: 0.7,
        delay: index * 0.2,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
    hover: {
      y: -8,
      rotateY: 5,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const socialIconVariants = {
    hover: {
      scale: 1.2,
      rotate: 5,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  const journeyIcons = [Zap, Shield, Lightbulb, Puzzle];
  const journeyColors = [
    "from-yellow-500 to-orange-500",
    "from-blue-500 to-cyan-500",
    "from-purple-500 to-pink-500",
    "from-green-500 to-emerald-500",
  ];

  return (
    <PageLayout>
      <motion.div
        className="w-full max-w-7xl mx-auto px-8 py-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Hero Section */}
        <motion.div
          className="bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-800 p-16 rounded-3xl text-white mb-16 relative overflow-hidden shadow-2xl"
          variants={itemVariants}
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.3 },
          }}
        >
          {/* Animated Background Elements */}
          <div className="absolute inset-0 opacity-10">
            <motion.div
              className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.1, 0.15, 0.1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-white"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.05, 0.1, 0.05],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            />
          </div>

          <motion.p
            className="text-sm font-semibold tracking-wider text-indigo-200 uppercase mb-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {about.title}
          </motion.p>
          <motion.h2
            className="text-5xl md:text-6xl font-bold mt-4 mb-4 leading-tight bg-gradient-to-r from-white to-indigo-100 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {about.header}
          </motion.h2>
          <motion.p
            className="text-lg text-indigo-100 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            {about.subHeader}
          </motion.p>
        </motion.div>

        {/* Journey Section - Redesigned */}
        <motion.div
          className="mb-16"
          variants={itemVariants}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.p
              className="text-sm font-semibold tracking-wider text-indigo-600 uppercase mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {about.journeySection.title}
            </motion.p>
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-6 leading-tight bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {about.journeySection.header}
            </motion.h1>
            <motion.p
              className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {about.journeySection.description}
            </motion.p>
          </div>

          {/* Journey Timeline */}
          <div className="relative">
            {/* Timeline Line - Hidden on mobile */}
            <div
              className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-indigo-200 via-purple-200 to-indigo-200 dark:from-indigo-800 dark:via-purple-800 dark:to-indigo-800 hidden lg:block"
              style={{ height: "calc(100% - 200px)", top: "100px" }}
            ></div>

            {/* Journey Items */}
            <div className="space-y-16 lg:space-y-24">
              {about.journey.map((item, index) => {
                const IconComponent = journeyIcons[index];
                const isEven = index % 2 === 0;

                return (
                  <motion.div
                    key={index}
                    variants={timelineItemVariants}
                    custom={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className={`relative flex flex-col lg:flex-row items-center gap-8 ${
                      isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                    }`}
                  >
                    {/* Content Card */}
                    <motion.div
                      className="flex-1 lg:max-w-md"
                      whileHover={{
                        y: -8,
                        transition: { duration: 0.3 },
                      }}
                    >
                      <div
                        className={`p-8 rounded-3xl bg-white dark:bg-gray-900 shadow-xl border border-gray-100 dark:border-gray-800 relative overflow-hidden group ${
                          isEven ? "lg:ml-8" : "lg:mr-8"
                        }`}
                      >
                        {/* Background Gradient */}
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${journeyColors[index]} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}
                        />

                        {/* Step Number */}
                        <div
                          className={`inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r ${journeyColors[index]} text-white text-sm font-bold mb-4`}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </div>

                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                          {item.description}
                        </p>

                        {/* Decorative Arrow - Desktop only */}
                        <div
                          className={`absolute top-1/2 transform -translate-y-1/2 hidden lg:block ${
                            isEven ? "-right-4" : "-left-4"
                          }`}
                        >
                          <div
                            className={`w-8 h-8 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 transform rotate-45 ${
                              isEven
                                ? "border-l-0 border-b-0"
                                : "border-r-0 border-t-0"
                            }`}
                          />
                        </div>
                      </div>
                    </motion.div>

                    {/* Center Icon */}
                    <motion.div
                      className="relative z-10 flex-shrink-0 order-first lg:order-none"
                      whileHover={{
                        scale: 1.1,
                        rotate: 5,
                        transition: { duration: 0.3 },
                      }}
                    >
                      <div
                        className={`w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-gradient-to-r ${journeyColors[index]} flex items-center justify-center shadow-lg border-4 border-white dark:border-gray-900`}
                      >
                        <IconComponent className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
                      </div>

                      {/* Pulse Animation */}
                      <motion.div
                        className={`absolute inset-0 rounded-full bg-gradient-to-r ${journeyColors[index]} opacity-20`}
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [0.2, 0, 0.2],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.5,
                        }}
                      />
                    </motion.div>

                    {/* Spacer for even layout */}
                    <div className="flex-1 lg:max-w-md hidden lg:block" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          className="mt-16"
          variants={itemVariants}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.p
            className="text-sm font-semibold tracking-wider text-indigo-600 uppercase mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {about.teamSection.title}
          </motion.p>
          <motion.h1
            className="text-4xl md:text-5xl font-bold mt-4 mb-8 leading-tight bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {about.teamSection.header}
          </motion.h1>

          <motion.ul
            className="flex flex-wrap justify-center gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ staggerChildren: 0.2 }}
          >
            {about.team.map((member, index) => (
              <motion.li
                key={index}
                variants={teamCardVariants}
                custom={index}
                whileHover="hover"
                className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-8 w-full md:w-auto md:max-w-md shadow-2xl border border-gray-700 relative overflow-hidden group"
              >
                {/* Card Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

                <motion.div
                  className="relative w-48 h-48 mb-6 rounded-full overflow-hidden mx-auto ring-4 ring-indigo-500/20 group-hover:ring-indigo-500/40 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={member.image}
                    fill
                    style={{ objectFit: "cover" }}
                    alt={member.name}
                    className="group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:from-black/10 transition-all duration-300" />
                </motion.div>

                <div className="relative z-10">
                  <motion.h3
                    className="text-2xl font-semibold text-white mb-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {member.name}
                  </motion.h3>
                  <motion.p
                    className="text-indigo-400 font-medium mb-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    {member.role}
                  </motion.p>
                  <motion.p
                    className="text-gray-300 leading-relaxed mb-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    {member.description}
                  </motion.p>

                  <motion.div
                    className="flex gap-4 justify-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    {member.social.map((social, socialIndex) => (
                      <motion.a
                        key={socialIndex}
                        href={social.url}
                        aria-label={social.name}
                        variants={socialIconVariants}
                        whileHover="hover"
                        whileTap="tap"
                        className="text-gray-400 hover:text-indigo-400 transition-colors p-2 rounded-full bg-gray-800/50 hover:bg-indigo-600/20"
                      >
                        {social.name === "Twitter" && <Twitter size={20} />}
                        {social.name === "Instagram" && <Instagram size={20} />}
                        {social.name === "LinkedIn" && <Linkedin size={20} />}
                      </motion.a>
                    ))}
                  </motion.div>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </PageLayout>
  );
}

export default About;
