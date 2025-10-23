"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  RiGithubFill,
  RiDashboardLine,
  RiTwitterXFill,
  RiLinkedinBoxFill,
} from "react-icons/ri";
import { siteConfig } from "@/config/site";

export default function ConnectSection() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const connections = [
    {
      name: "Dashboard",
      icon: RiDashboardLine,
      url: siteConfig.links.dashboard,
      description: "Access your cloud storage dashboard",
      gradient: "from-blue-500/20 via-cyan-500/20 to-emerald-500/20",
      glowColor: "group-hover:shadow-blue-500/25",
      featured: true,
    },
    {
      name: "GitHub",
      icon: RiGithubFill,
      url: siteConfig.links.social.github,
      description: "Check out our open source projects",
      gradient: "from-gray-600 via-gray-700 to-gray-800",
      shadowColor: "shadow-gray-500/25",
    },
    {
      name: "LinkedIn",
      icon: RiLinkedinBoxFill,
      url: siteConfig.links.social.linkedin,
      description: "Connect with our team",
      gradient: "from-blue-600 via-blue-700 to-blue-800",
      shadowColor: "shadow-blue-500/25",
    },
    {
      name: "Twitter",
      icon: RiTwitterXFill,
      url: siteConfig.links.social.twitter,
      description: "Follow for updates and tips",
      gradient: "from-slate-500 via-grey-500 to-sky-500",
      shadowColor: "shadow-blue-500/25",
    },
  ];

  return (
    <section ref={ref} className="py-20 md:py-32 relative overflow-hidden">
      {/* Background with animated gradients */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              "radial-gradient(600px circle at left top, rgba(59, 130, 246, 0.15), transparent 80%)",
              "radial-gradient(600px circle at right bottom, rgba(16, 185, 129, 0.15), transparent 80%)",
              "radial-gradient(600px circle at left top, rgba(59, 130, 246, 0.15), transparent 80%)",
            ],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-200 via-white to-emerald-200">
            Get Connected
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-blue-500/50 to-emerald-500/50 mx-auto mb-8 blur-sm" />
        </motion.div>

        <div className="grid grid-cols-1 gap-8 max-w-7xl mx-auto">
          {/* Featured Dashboard Card */}
          <motion.a
            href="#"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="group relative overflow-hidden rounded-2xl p-8 md:p-12
              bg-white/[0.03] backdrop-blur-[12px]
              border border-white/[0.08]
              transition-colors duration-300
              hover:bg-white/[0.05]
              hover:border-white/[0.15]
              hover:shadow-2xl hover:shadow-blue-500/25"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-emerald-500/5" />

            <div className="relative md:grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="inline-flex items-center space-x-3 bg-white/5 rounded-full px-4 py-1.5 border border-white/10">
                  <span className="text-sm text-white/70">Get Started</span>
                </div>

                <div>
                  <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-white mb-4">
                    Access Your Dashboard
                  </h3>

                  <p className="text-lg text-white/60 leading-relaxed">
                    Manage your files, monitor storage usage, and access all BoltStorage features from your personal dashboard.
                  </p>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-emerald-500 
                    text-white font-semibold transition-all duration-300 
                    inline-flex items-center space-x-2 hover:from-blue-600 hover:to-emerald-600"
                >
                  <span>Open Dashboard</span>
                  <motion.div
                    animate={{ x: [0, 4, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    →
                  </motion.div>
                </motion.button>
              </div>

              <div className="hidden md:block">
                <div className="relative">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-emerald-500/20 rounded-full blur-3xl"
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 1, 0, -1, 0],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="relative z-10 flex items-center justify-center rounded-full p-12"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-emerald-500/10 to-cyan-500/10 rounded-full blur-3xl" />
                    <RiDashboardLine className="w-40 h-40 text-white/40" />
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.a>

          {/* Social Links Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {connections
              .filter((connection) => !connection.featured)
              .map((connection, index) => (
                <motion.a
                  key={connection.name}
                  href={connection.url}
                  initial={{ opacity: 0, y: 30 }}
                  animate={
                    inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                  }
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-xl p-6
                  bg-white/[0.03] backdrop-blur-sm
                  border border-white/[0.08]
                  transition-all duration-300
                  hover:bg-white/[0.05]
                  hover:border-white/[0.15]
                  hover:scale-[1.02]"
                >
                  <div
                    className={`w-12 h-12 rounded-full bg-gradient-to-r ${connection.gradient} p-2.5 mb-4
                  transition-transform duration-300 group-hover:scale-110`}
                  >
                    <connection.icon className="w-full h-full text-white" />
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-2">
                    {connection.name}
                  </h3>
                  <p className="text-white/60 mb-4">{connection.description}</p>

                  <div className="inline-flex items-center text-white/80 text-sm">
                    <span>Learn more</span>
                    <motion.div
                      animate={{ x: [0, 4, 0] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="ml-2"
                    >
                      →
                    </motion.div>
                  </div>
                </motion.a>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
