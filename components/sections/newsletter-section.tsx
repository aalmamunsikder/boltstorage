"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, FormEvent } from "react";
import { Mail, Send, CheckCircle, Sparkles } from "lucide-react";
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

export default function NewsletterSection() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitted(true);
    setIsLoading(false);
    setEmail("");
    
    // Reset after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const benefits = [
    "Exclusive product updates and features",
    "Early access to new tools and beta programs",
    "Special offers and discounts for subscribers",
    "Cloud storage tips and best practices",
    "Industry insights and trend reports",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  };

  return (
    <section ref={ref} className="py-20 md:py-32 relative overflow-hidden">
      {/* Unique background gradient for newsletter section */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-purple-500/[0.05] blur-3xl" />


      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <motion.div
            variants={itemVariants}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              <motion.span
                className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-white/90 to-emerald-300"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                style={{ willChange: "transform, opacity" }}
              >
                Stay in the Loop
              </motion.span>
            </h2>
            <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto">
              Get the latest updates on BoltStorage features, cloud storage trends, and exclusive content delivered straight to your inbox.
            </p>
          </motion.div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Benefits List */}
            <motion.div
              variants={itemVariants}
              className="space-y-4"
            >
              <h3 className="text-xl font-semibold text-white mb-6">What you'll get:</h3>
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-start space-x-3"
                >
                  <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-3 h-3 text-emerald-400" />
                  </div>
                  <span className="text-white/80">{benefit}</span>
                </motion.div>
              ))}
              
              <motion.div
                variants={itemVariants}
                className="mt-8 p-4 bg-white/[0.03] border border-white/10 rounded-xl"
              >
                <p className="text-sm text-white/60">
                  <span className="text-emerald-400 font-medium">Unsubscribe anytime.</span> 
                  {" "}We respect your privacy and will never share your email address.
                </p>
              </motion.div>
            </motion.div>

            {/* Signup Form */}
            <motion.div
              variants={itemVariants}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-emerald-500/10 rounded-2xl blur-3xl" />
              
              <div className="relative bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-emerald-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Welcome aboard! 🎉
                    </h3>
                    <p className="text-white/60">
                      Check your email for a confirmation message.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
                        Email Address
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/40" />
                        <input
                          type="email"
                          id="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="you@example.com"
                          required
                          className="w-full pl-12 pr-4 py-3 bg-white/[0.05] border border-white/10 rounded-xl 
                            focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50
                            transition-all duration-300 placeholder:text-white/30 text-white
                            hover:bg-white/[0.08]"
                        />
                      </div>
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isLoading}
                      whileHover={{ scale: isLoading ? 1 : 1.02 }}
                      whileTap={{ scale: isLoading ? 1 : 0.98 }}
                      className="w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-emerald-500 
                        text-white font-semibold rounded-xl transition-all duration-300
                        hover:from-blue-600 hover:to-emerald-600
                        disabled:opacity-50 disabled:cursor-not-allowed
                        flex items-center justify-center space-x-2"
                    >
                      {isLoading ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                          />
                          <span>Subscribing...</span>
                        </>
                      ) : (
                        <>
                          <span>Subscribe to Newsletter</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </motion.button>
                  </form>
                )}

                {/* Social Proof */}
                <motion.div
                  variants={itemVariants}
                  className="mt-8 pt-6 border-t border-white/10"
                >
                  <p className="text-center text-sm text-white/40 mb-4">
                    Join professionals from leading companies
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-3">
                    {["Microsoft", "Google", "Amazon", "Apple", "Meta"].map((company, index) => (
                      <div
                        key={index}
                        className="px-3 py-1 bg-white/[0.05] rounded-full text-xs text-white/40"
                      >
                        {company}
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Bottom CTA */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-16"
          >
            <p className="text-white/60 mb-4">
              Have questions? 
              <a href="#" className="text-blue-400 hover:text-blue-300 ml-1 transition-colors">
                Contact our support team
              </a>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
