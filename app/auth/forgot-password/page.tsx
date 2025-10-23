"use client";

import { motion } from "framer-motion";
import { Pacifico } from "next/font/google";
import { useState } from "react";
import { cn } from "@/lib/utils";
import Logo from "@/components/ui/logo";
import Footer from "@/components/sections/footer";
import Link from "next/link";
import { 
  Mail, 
  ArrowLeft, 
  ArrowRight,
  CheckCircle,
  Clock
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

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitted(true);
    setIsLoading(false);
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col overflow-hidden">
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

      <main className="relative z-10 flex-1 flex items-center justify-center">
        <div className="w-full max-w-md mx-auto px-4 md:px-6">
          {/* Logo outside card */}
          <motion.div
            custom={0}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="text-center mb-8"
          >
            <Logo size="lg" />
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
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.05] via-transparent to-emerald-500/[0.05]" />
              
              {/* Card content */}
              <div className="relative z-10 p-8">
                <motion.div
                  custom={2}
                  variants={fadeUpVariants}
                  initial="hidden"
                  animate="visible"
                  className="text-center mb-8"
                >
                  <h1
                    className={cn(
                      "text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-center mb-4",
                      pacifico.className
                    )}
                  >
                    <span className="tagline-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-white/90 to-emerald-300">
                      Reset Password
                    </span>
                  </h1>
                  <p className="text-white/60 text-center">
                    {isSubmitted 
                      ? "Check your email for reset instructions" 
                      : "Enter your email to reset your password"
                    }
                  </p>
                </motion.div>

                <motion.div
                  custom={3}
                  variants={fadeUpVariants}
                  initial="hidden"
                  animate="visible"
                  className="space-y-6"
                >
                  {!isSubmitted ? (
                    <>
                      {/* Email Form */}
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-white/60 mb-2">
                            Email address
                          </label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/40" />
                            <input
                              type="email"
                              id="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              placeholder="Enter your email address"
                              className="w-full pl-10 pr-4 py-3 bg-white/[0.02] border border-white/10 rounded-xl 
                                focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50
                                transition-all duration-300 placeholder:text-white/30 text-white
                                hover:bg-white/[0.04]"
                              required
                            />
                          </div>
                        </div>

                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          type="submit"
                          disabled={isLoading}
                          className="w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-emerald-500 text-white 
                            font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl
                            hover:from-blue-600 hover:to-emerald-600 flex items-center justify-center gap-2
                            disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {isLoading ? (
                            <>
                              <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                              />
                              <span>Sending...</span>
                            </>
                          ) : (
                            <>
                              <span>Send Reset Link</span>
                              <ArrowRight className="w-4 h-4" />
                            </>
                          )}
                        </motion.button>
                      </form>

                      {/* Back to Sign In */}
                      <div className="text-center">
                        <Link
                          href="/auth/signin"
                          className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                        >
                          <ArrowLeft className="w-4 h-4" />
                          <span>Back to Sign In</span>
                        </Link>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Success State */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center space-y-6"
                      >
                        <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto">
                          <CheckCircle className="w-8 h-8 text-emerald-400" />
                        </div>

                        <div>
                          <h3 className="text-xl font-semibold text-white mb-2">
                            Reset Link Sent!
                          </h3>
                          <p className="text-white/60 mb-4">
                            We've sent a password reset link to:
                          </p>
                          <div className="px-4 py-2 bg-white/[0.05] border border-white/10 rounded-lg">
                            <span className="text-white font-medium">{email}</span>
                          </div>
                        </div>

                        <div className="space-y-3">
                          <div className="flex items-center justify-center gap-2 text-sm text-white/40">
                            <Clock className="w-4 h-4" />
                            <span>Link expires in 15 minutes</span>
                          </div>
                        </div>

                        <div className="space-y-3">
                          <button
                            onClick={() => {
                              setIsSubmitted(false);
                              setEmail("");
                            }}
                            className="w-full py-3 px-4 bg-white/[0.02] border border-white/10 text-white 
                              font-medium rounded-xl transition-all duration-300 hover:bg-white/[0.05]"
                          >
                            Didn't receive? Try again
                          </button>

                          <Link
                            href="/auth/signin"
                            className="block w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-emerald-500 text-white 
                              font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl
                              hover:from-blue-600 hover:to-emerald-600 text-center"
                          >
                            Back to Sign In
                          </Link>
                        </div>
                      </motion.div>
                    </>
                  )}
                </motion.div>
              </div>

              {/* Card border glow effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/[0.1] via-transparent to-emerald-500/[0.1] opacity-50 pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
