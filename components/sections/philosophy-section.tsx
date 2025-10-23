"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"

function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-white/[0.08]",
}: {
  className?: string;
  delay?: number;
  width?: number;
  height?: number;
  rotate?: number;
  gradient?: string;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -150,
        rotate: rotate - 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
        rotate: rotate,
      }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className={cn("absolute", className)}
    >
      <motion.div
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{
          width,
          height,
        }}
        className="relative"
      >
        <div
          className={cn(
            "absolute inset-0 rounded-full",
            "bg-gradient-to-r to-transparent",
            gradient,
            "backdrop-blur-[2px] border-2 border-white/[0.15]",
            "shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]",
            "after:absolute after:inset-0 after:rounded-full",
            "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]"
          )}
        />
      </motion.div>
    </motion.div>
  );
}

export default function PhilosophySection() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  })

  const quoteVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  }

  const principles = [
    {
      title: "Reliability",
      description: "99.9% uptime guarantee with redundant infrastructure ensuring your files are always accessible.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
        </svg>
      ),
      gradient: "from-blue-500/20 via-blue-500/10 to-transparent",
      iconBg: "bg-blue-500/20",
      iconColor: "text-blue-300",
      features: ["99.9% Uptime SLA", "Redundant Infrastructure", "Automatic Backups"],
    },
    {
      title: "Privacy First",
      description: "Your data is yours. We use zero-knowledge encryption and never access or share your files.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      gradient: "from-emerald-500/20 via-emerald-500/10 to-transparent",
      iconBg: "bg-emerald-500/20",
      iconColor: "text-emerald-300",
      features: ["Zero-Knowledge Encryption", "GDPR Compliant", "Data Localization"],
    },
    {
      title: "Performance",
      description: "Optimized for speed with global data centers and smart caching for instant file delivery.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M12 1v6m0 6v6m4.22-13.22l4.24 4.24M1.54 1.54l4.24 4.24M20.46 20.46l-4.24-4.24M1.54 20.46l4.24-4.24" />
        </svg>
      ),
      gradient: "from-cyan-500/20 via-cyan-500/10 to-transparent",
      iconBg: "bg-cyan-500/20",
      iconColor: "text-cyan-300",
      features: ["Global CDN", "Smart Caching", "Instant Sync"],
    },
  ]

  return (
    <section ref={ref} className="py-20 md:py-32 relative overflow-hidden">
      {/* Unique background gradient for philosophy section */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/[0.05] via-transparent to-orange-500/[0.05] blur-3xl" />


      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-200 via-white to-emerald-200">
            Our Principles
          </h2>
          <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto">
            The core values that drive our mission to provide the best cloud storage experience.
          </p>
        </motion.div>

        <motion.div
          variants={quoteVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12 mb-16"
        >
          <div className="text-6xl text-blue-300/30 mb-6">"</div>
          <blockquote className="text-xl md:text-2xl text-white/80 italic mb-8 leading-relaxed">
            We believe that cloud storage should be lightning-fast, incredibly secure, and beautifully simple. 
            Every file you store is important, every moment matters, and every second counts. That's why we built 
            BoltStorage - to give you the power to store, share, and access your data at the speed of thought.
          </blockquote>
          <div className="flex items-center justify-end">
            <div>
              <div className="text-white/90 font-semibold">BoltStorage Manifesto</div>
              <div className="text-white/40 text-sm">Lightning Fast Storage</div>
            </div>
          </div>
        </motion.div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.title}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -3 }}
              className="group relative"
            >
              <div className="relative h-full bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/[0.05] transition-all duration-300 hover:border-white/20">
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${principle.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl ${principle.iconBg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <div className={principle.iconColor}>
                      {principle.icon}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white mb-3">{principle.title}</h3>
                  
                  {/* Description */}
                  <p className="text-white/60 mb-4 leading-relaxed text-sm">{principle.description}</p>

                  {/* Features */}
                  <div className="space-y-2">
                    {principle.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-1 h-1 rounded-full bg-emerald-400/60" />
                        <span className="text-xs text-white/50">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/20 via-emerald-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
