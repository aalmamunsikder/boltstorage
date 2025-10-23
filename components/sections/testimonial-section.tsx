"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

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

export default function TestimonialSection() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CTO at TechStart",
      company: "TechStart Inc.",
      avatar: "SC",
      content: "BoltStorage has transformed how we handle our data. The speed is incredible, and the security features give us peace of mind. We've reduced our storage costs by 40% while improving performance.",
      rating: 5,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      name: "Michael Rodriguez",
      role: "Creative Director",
      company: "Design Studio Pro",
      avatar: "MR",
      content: "As a creative agency, we deal with large files daily. BoltStorage's seamless integration with our workflow and lightning-fast uploads have made our team so much more productive.",
      rating: 5,
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      name: "Emily Watson",
      role: "Operations Manager",
      company: "Global Logistics Co.",
      avatar: "EW",
      content: "The reliability and scalability of BoltStorage are unmatched. We've scaled from 10 users to over 500 without any issues. The customer support team is exceptional.",
      rating: 5,
      gradient: "from-purple-500 to-pink-500",
    },
    {
      name: "David Kim",
      role: "Freelance Developer",
      company: "Independent",
      avatar: "DK",
      content: "I've tried many cloud storage solutions, but BoltStorage stands out. The API is fantastic, the pricing is fair, and the performance is exactly what I need for my projects.",
      rating: 5,
      gradient: "from-orange-500 to-red-500",
    },
    {
      name: "Lisa Anderson",
      role: "CEO",
      company: "StartupHub",
      avatar: "LA",
      content: "BoltStorage has been a game-changer for our startup. The enterprise features we get at a reasonable price point have helped us compete with larger companies.",
      rating: 5,
      gradient: "from-indigo-500 to-purple-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section ref={ref} className="py-20 md:py-32 relative overflow-hidden">
      {/* Unique background gradient for testimonial section */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-500/[0.05] via-transparent to-pink-500/[0.05] blur-3xl" />


      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-200 via-white to-emerald-200">
            Trusted by Thousands
          </h2>
          <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto">
            See what our customers have to say about their experience with BoltStorage.
          </p>
        </motion.div>

        {/* Main Testimonial Carousel */}
        <div className="max-w-4xl mx-auto mb-16">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="relative"
          >
            <motion.div
              variants={itemVariants}
              className="relative bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12"
            >
              <div className="absolute top-8 right-8 text-blue-300/30">
                <Quote className="w-12 h-12" />
              </div>

              <div className="relative z-10">
                <div className="flex items-center space-x-1 mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <blockquote className="text-lg md:text-xl text-white/80 leading-relaxed mb-8">
                  "{testimonials[currentIndex].content}"
                </blockquote>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${testimonials[currentIndex].gradient} flex items-center justify-center text-white font-semibold`}>
                      {testimonials[currentIndex].avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonials[currentIndex].name}</div>
                      <div className="text-sm text-white/60">{testimonials[currentIndex].role}</div>
                      <div className="text-xs text-white/40">{testimonials[currentIndex].company}</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={prevTestimonial}
                      className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/20 transition-all duration-300"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={nextTestimonial}
                      className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/20 transition-all duration-300"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Carousel Indicators */}
            <div className="flex items-center justify-center space-x-2 mt-6">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "w-8 bg-gradient-to-r from-blue-500 to-emerald-500"
                      : "bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
        >
          {[
            { number: "10K+", label: "Active Users" },
            { number: "99.9%", label: "Uptime" },
            { number: "1M+", label: "Files Stored" },
            { number: "150+", label: "Countries" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center"
            >
              <div className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-emerald-300 mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-white/60">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Company Logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20"
        >
          <div className="text-center mb-8">
            <p className="text-white/40 text-sm">TRUSTED BY LEADING COMPANIES</p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-60">
            {["TechCorp", "DataFlow", "CloudNine", "SecureNet", "AppForge"].map((company, index) => (
              <div key={index} className="text-white/40 font-semibold text-lg">
                {company}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
