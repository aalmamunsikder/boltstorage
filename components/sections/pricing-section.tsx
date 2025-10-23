"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { Check, Zap, Shield, Cloud } from "lucide-react";
import Link from "next/link";
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

export default function PricingSection() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Starter",
      description: "Perfect for individuals and small projects",
      price: isAnnual ? 9 : 12,
      yearlyPrice: 108,
      icon: Cloud,
      features: [
        "100 GB Storage",
        "2 Users",
        "Basic Security",
        "Email Support",
        "Mobile App Access",
        "File Sharing",
      ],
      notIncluded: ["Advanced Analytics", "Priority Support", "Custom Integrations"],
      popular: false,
      gradient: "from-blue-500/20 to-cyan-500/20",
    },
    {
      name: "Professional",
      description: "Ideal for growing teams and businesses",
      price: isAnnual ? 29 : 39,
      yearlyPrice: 348,
      icon: Zap,
      features: [
        "1 TB Storage",
        "10 Users",
        "Advanced Security",
        "Priority Support",
        "Mobile App Access",
        "File Sharing",
        "Advanced Analytics",
        "API Access",
      ],
      notIncluded: ["Custom Integrations"],
      popular: true,
      gradient: "from-emerald-500/20 to-blue-500/20",
    },
    {
      name: "Enterprise",
      description: "Complete solution for large organizations",
      price: isAnnual ? 99 : 129,
      yearlyPrice: 1188,
      icon: Shield,
      features: [
        "Unlimited Storage",
        "Unlimited Users",
        "Enterprise Security",
        "24/7 Phone Support",
        "Mobile App Access",
        "File Sharing",
        "Advanced Analytics",
        "API Access",
        "Custom Integrations",
        "Dedicated Account Manager",
      ],
      notIncluded: [],
      popular: false,
      gradient: "from-purple-500/20 to-pink-500/20",
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

  return (
    <section id="pricing" ref={ref} className="py-20 md:py-32 relative overflow-hidden">
      {/* Unique background gradient for pricing section */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/[0.05] via-transparent to-teal-500/[0.05] blur-3xl" />


      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-200 via-white to-emerald-200">
            Simple, Transparent Pricing
          </h2>
          <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-12">
            Choose the perfect plan for your needs. All plans include our core features with no hidden fees.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4">
            <span className={`text-sm font-medium ${!isAnnual ? 'text-white' : 'text-white/60'}`}>
              Monthly
            </span>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative w-14 h-7 bg-white/10 rounded-full border border-white/20 transition-colors duration-300"
            >
              <motion.div
                animate={{ x: isAnnual ? 28 : 0 }}
                transition={{ duration: 0.3 }}
                className="absolute top-1 w-5 h-5 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full"
              />
            </motion.button>
            <span className={`text-sm font-medium ${isAnnual ? 'text-white' : 'text-white/60'}`}>
              Annual
              <span className="ml-1 text-xs text-emerald-400">Save 20%</span>
            </span>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className={`relative group ${
                plan.popular
                  ? "scale-105 md:scale-110"
                  : ""
              } transition-all duration-300`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="px-4 py-1 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full">
                    <span className="text-xs font-semibold text-white">Most Popular</span>
                  </div>
                </div>
              )}

              <div className={`relative h-full p-8 rounded-2xl border ${
                plan.popular
                  ? "bg-gradient-to-br from-white/[0.08] to-white/[0.03] border-emerald-500/30"
                  : "bg-white/[0.03] border-white/10"
              } backdrop-blur-sm hover:bg-white/[0.05] transition-all duration-300`}>
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${plan.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${plan.gradient} flex items-center justify-center`}>
                      <plan.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-white">
                        ${plan.price}
                        <span className="text-sm font-normal text-white/60">/mo</span>
                      </div>
                      {isAnnual && (
                        <div className="text-xs text-emerald-400">
                          ${plan.yearlyPrice}/year
                        </div>
                      )}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-white/60 text-sm mb-6">{plan.description}</p>

                  <div className="space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <div key={feature} className="flex items-center space-x-3">
                        <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 text-emerald-400" />
                        </div>
                        <span className="text-sm text-white/80">{feature}</span>
                      </div>
                    ))}
                    {plan.notIncluded.map((feature) => (
                      <div key={feature} className="flex items-center space-x-3 opacity-50">
                        <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                          <div className="w-3 h-3 bg-white/30 rounded-full" />
                        </div>
                        <span className="text-sm text-white/50 line-through">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link href="/auth/signup">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full py-3 rounded-full font-semibold transition-all duration-300 ${
                        plan.popular
                          ? "bg-gradient-to-r from-emerald-500 to-blue-500 text-white hover:from-emerald-600 hover:to-blue-600"
                          : "bg-white/10 text-white hover:bg-white/20 border border-white/20"
                      }`}
                    >
                      Get Started
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-white/60 mb-4">
            All plans include 30-day money-back guarantee
          </p>
          <div className="flex items-center justify-center space-x-8 text-sm text-white/40">
            <div className="flex items-center space-x-2">
              <Shield className="w-4 h-4" />
              <span>SSL Encryption</span>
            </div>
            <div className="flex items-center space-x-2">
              <Zap className="w-4 h-4" />
              <span>99.9% Uptime</span>
            </div>
            <div className="flex items-center space-x-2">
              <Cloud className="w-4 h-4" />
              <span>Global CDN</span>
            </div>
          </div>
          
          {/* Additional Auth Links */}
          <div className="mt-8 flex justify-center gap-6 text-sm">
            <Link 
              href="/auth/signin" 
              className="text-white/40 hover:text-white/60 transition-colors"
            >
              Already have an account? Sign in
            </Link>
            <span className="text-white/20">•</span>
            <Link 
              href="/auth/forgot-password" 
              className="text-white/40 hover:text-white/60 transition-colors"
            >
              Forgot password?
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
