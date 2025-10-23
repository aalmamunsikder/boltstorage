"use client";

import { motion } from "framer-motion";
import { Pacifico } from "next/font/google";
import { useState } from "react";
import { cn } from "@/lib/utils";
import Logo from "@/components/ui/logo";
import Link from "next/link";
import Footer from "@/components/sections/footer";
import { 
  AlertTriangle, 
  RefreshCw, 
  ArrowRight,
  Home,
  Mail,
  HelpCircle,
  Shield,
  Clock,
  AlertCircle
} from "lucide-react";

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pacifico",
});

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

export default function AuthFallbackPage() {
  const [isLoading, setIsLoading] = useState(false);

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  };

  const handleRetry = async () => {
    setIsLoading(true);
    
    // Simulate retry attempt
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Redirect to sign in or handle retry logic
    window.location.href = "/auth/signin";
  };

  const errorSolutions = [
    {
      icon: RefreshCw,
      title: "Try Again",
      description: "Refresh the page and attempt authentication",
      action: "retry"
    },
    {
      icon: Mail,
      title: "Contact Support",
      description: "Reach out to our support team",
      action: "support"
    },
    {
      icon: Home,
      title: "Go Home",
      description: "Return to the main page",
      action: "home"
    }
  ];

  const errorTips = [
    {
      icon: AlertCircle,
      title: "Check Connection",
      description: "Ensure you have a stable internet connection"
    },
    {
      icon: Clock,
      title: "Wait and Retry",
      description: "Sometimes temporary issues resolve themselves"
    },
    {
      icon: Shield,
      title: "Clear Cache",
      description: "Clear your browser cache and cookies"
    }
  ];

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.05] via-transparent to-emerald-500/[0.05] blur-3xl" />

      <div className="absolute inset-0 overflow-hidden">
        <ElegantShape
          delay={0.3}
          width={600}
          height={140}
          rotate={12}
          gradient="from-blue-500/[0.15]"
          className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
        />

        <ElegantShape
          delay={0.5}
          width={500}
          height={120}
          rotate={-15}
          gradient="from-emerald-500/[0.15]"
          className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
        />

        <ElegantShape
          delay={0.4}
          width={300}
          height={80}
          rotate={-8}
          gradient="from-cyan-500/[0.15]"
          className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
        />

        <ElegantShape
          delay={0.6}
          width={200}
          height={60}
          rotate={20}
          gradient="from-blue-400/[0.15]"
          className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
        />

        <ElegantShape
          delay={0.7}
          width={150}
          height={40}
          rotate={-25}
          gradient="from-emerald-400/[0.15]"
          className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
        />
      </div>

      <div className="relative z-10 w-full max-w-3xl mx-auto px-4 md:px-6 py-8">
        {/* Clickable Logo */}
        <motion.div
          custom={0}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-6"
        >
          <Link href="/" className="inline-block">
            <Logo size="lg" />
          </Link>
        </motion.div>

        {/* Main Auth Card */}
        <motion.div
          custom={1}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="relative"
        >
          {/* Card with glassmorphism effect */}
          <div className="relative backdrop-blur-xl bg-white/[0.03] border border-white/[0.08] rounded-3xl shadow-2xl overflow-hidden">
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/[0.05] via-transparent to-orange-500/[0.05]" />
            
            {/* Card content */}
            <div className="relative z-10 p-6">
              <motion.div
                custom={2}
                variants={fadeUpVariants}
                initial="hidden"
                animate="visible"
                className="text-center mb-6"
              >
                {/* Error Icon */}
                <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center mx-auto mb-3">
                  <AlertTriangle className="w-6 h-6 text-red-400" />
                </div>

                <h1
                  className={cn(
                    "text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-center mb-3",
                    pacifico.className
                  )}
                >
                  <span className="tagline-gradient bg-clip-text text-transparent bg-gradient-to-r from-red-300 via-white/90 to-orange-300">
                    Authentication Error
                  </span>
                </h1>
                <p className="text-white/60 text-center text-sm">
                  We couldn't complete your authentication request. This might be a temporary issue.
                </p>
              </motion.div>

              <motion.div
                custom={3}
                variants={fadeUpVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 lg:grid-cols-2 gap-6"
              >
                {/* Left Side - Error Solutions */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-base font-semibold text-white mb-3">Quick Solutions</h3>
                    <div className="space-y-2">
                      {errorSolutions.map((solution, index) => (
                        <motion.button
                          key={solution.action}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => {
                            if (solution.action === "retry") {
                              handleRetry();
                            } else if (solution.action === "support") {
                              window.location.href = "mailto:support@boltstorage.com";
                            } else if (solution.action === "home") {
                              window.location.href = "/";
                            }
                          }}
                          className="w-full flex items-center gap-3 px-3 py-2 rounded-lg 
                            border border-white/10 bg-white/[0.02] backdrop-blur-sm
                            transition-all duration-300 hover:bg-white/[0.05] hover:border-white/20
                            text-left"
                        >
                          <div className="w-8 h-8 rounded-full bg-white/[0.05] flex items-center justify-center flex-shrink-0">
                            <solution.icon className="w-4 h-4 text-white/60" />
                          </div>
                          <div className="flex-1">
                            <div className="text-white font-medium text-sm">{solution.title}</div>
                            <div className="text-white/40 text-xs">{solution.description}</div>
                          </div>
                          <ArrowRight className="w-3 h-3 text-white/40" />
                        </motion.button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Side - Error Tips & Quick Links */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-base font-semibold text-white mb-3">Troubleshooting Tips</h3>
                    <div className="space-y-2">
                      {errorTips.map((tip, index) => (
                        <div key={index} className="flex items-start gap-2 p-2 rounded-lg bg-white/[0.02] border border-white/5">
                          <div className="w-6 h-6 rounded-full bg-white/[0.05] flex items-center justify-center flex-shrink-0 mt-0.5">
                            <tip.icon className="w-3 h-3 text-white/60" />
                          </div>
                          <div>
                            <div className="text-white font-medium text-xs mb-1">{tip.title}</div>
                            <div className="text-white/40 text-xs">{tip.description}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Quick Links */}
                  <div className="pt-3 border-t border-white/10">
                    <div className="flex items-center justify-center gap-2 text-xs text-white/40 mb-2">
                      <HelpCircle className="w-3 h-3" />
                      <span>Quick links</span>
                    </div>
                    <div className="flex justify-center gap-3">
                      <Link
                        href="/auth/signin"
                        className="text-blue-400 hover:text-blue-300 transition-colors text-xs"
                      >
                        Sign In
                      </Link>
                      <span className="text-white/20">•</span>
                      <Link
                        href="/auth/signup"
                        className="text-blue-400 hover:text-blue-300 transition-colors text-xs"
                      >
                        Sign Up
                      </Link>
                      <span className="text-white/20">•</span>
                      <Link
                        href="/auth/forgot-password"
                        className="text-blue-400 hover:text-blue-300 transition-colors text-xs"
                      >
                        Reset Password
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Card border glow effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-red-500/[0.1] via-transparent to-orange-500/[0.1] opacity-50 pointer-events-none" />
          </div>
        </motion.div>
      </div>

      {/* Fixed Footer */}
      <div className="fixed bottom-0 left-0 right-0 z-50">
        <Footer />
      </div>
    </div>
  );
}
