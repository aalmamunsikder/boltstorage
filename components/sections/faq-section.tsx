"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { HelpCircle, MessageCircle, Shield, Zap, Users, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

const faqItems = [
  {
    question: "What is BoltShare?",
    answer: "BoltShare is a lightning-fast cloud storage platform designed for modern teams and individuals. We provide secure, reliable, and scalable file storage with advanced sharing capabilities and real-time collaboration features.",
    icon: HelpCircle,
    color: "text-blue-400"
  },
  {
    question: "How is BoltShare different from other cloud storage services?",
    answer: "BoltShare stands out with our ultra-fast upload/download speeds, advanced security features including end-to-end encryption, real-time collaboration tools, and our unique AI-powered file organization system. We also offer more generous storage plans at competitive prices.",
    icon: Zap,
    color: "text-yellow-400"
  },
  {
    question: "Is my data secure with BoltShare?",
    answer: "Absolutely! We use military-grade AES-256 encryption for all data storage and transfer. Your files are encrypted before they leave your device and remain encrypted on our servers. We're also SOC 2 Type II certified and comply with GDPR, CCPA, and other major privacy regulations.",
    icon: Shield,
    color: "text-green-400"
  },
  {
    question: "Can I collaborate with my team on BoltShare?",
    answer: "Yes! BoltShare is built for collaboration. You can create shared workspaces, set different permission levels, comment on files, track version history, and even collaborate in real-time on documents. Our team features are designed for seamless workflow integration.",
    icon: Users,
    color: "text-purple-400"
  },
  {
    question: "What file types and sizes are supported?",
    answer: "BoltShare supports virtually all file types including documents, images, videos, audio files, code repositories, and more. Individual files can be up to 5GB on our Pro plan and 10GB on Business plans. There's no limit on the number of files you can store.",
    icon: MessageCircle,
    color: "text-cyan-400"
  },
  {
    question: "How fast are file uploads and downloads?",
    answer: "BoltShare leverages our global CDN network and optimized transfer protocols to deliver speeds up to 10x faster than traditional cloud storage. Most users experience upload speeds of 100+ Mbps and download speeds of 500+ Mbps, depending on their internet connection.",
    icon: Zap,
    color: "text-orange-400"
  },
  {
    question: "Can I access my files offline?",
    answer: "Yes! Our desktop and mobile apps allow you to sync files for offline access. Any changes made offline will automatically sync when you reconnect to the internet. You can also mark specific files or folders for offline access.",
    icon: Clock,
    color: "text-pink-400"
  },
  {
    question: "What happens if I exceed my storage limit?",
    answer: "We'll notify you when you're approaching your storage limit. You can upgrade your plan at any time, or we offer flexible add-on storage options. Your files won't be deleted - you'll just need to upgrade or free up space to continue uploading new files.",
    icon: HelpCircle,
    color: "text-indigo-400"
  }
];

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

export default function FAQSection() {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const toggleItem = (value: string) => {
    setOpenItem(openItem === value ? null : value);
  };

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background gradient - unique for FAQ */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.05] via-transparent to-emerald-500/[0.05] blur-3xl" />


      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-center mb-8">
              <motion.span
                className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-white/90 to-emerald-300"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                style={{ willChange: "transform, opacity" }}
              >
                Got Questions?
              </motion.span>
            </h2>
          
          <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
            Find answers to common questions about BoltShare's features, security, and pricing.
          </p>
        </motion.div>

        {/* FAQ Items - Completely Custom */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="relative backdrop-blur-xl bg-white/[0.03] border border-white/[0.08] rounded-3xl shadow-2xl overflow-hidden">
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.02] via-transparent to-emerald-500/[0.02]" />
            
            {/* FAQ Content */}
            <div className="relative z-10 p-6 md:p-8">
              <div className="space-y-3">
                {faqItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white/[0.02] rounded-xl overflow-hidden border-0 outline-none"
                  >
                    {/* FAQ Item Header - Using div instead of button */}
                    <motion.div
                      onClick={() => toggleItem(`item-${index}`)}
                      className="w-full text-left px-6 py-4 flex items-center gap-3 hover:bg-white/[0.05] transition-colors duration-200 cursor-pointer border-0 outline-none focus:outline-none focus:ring-0 focus:border-0"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      style={{ border: 'none', outline: 'none' }}
                    >
                      <div className={`w-8 h-8 rounded-lg bg-white/[0.05] flex items-center justify-center ${item.color} transition-colors`}>
                        <item.icon className="w-4 h-4" />
                      </div>
                      <span className="text-base font-medium text-white flex-1">{item.question}</span>
                      
                      {/* Chevron Icon */}
                      <motion.div
                        animate={{ 
                          rotate: openItem === `item-${index}` ? 180 : 0 
                        }}
                        transition={{ duration: 0.3 }}
                        className="text-white/60"
                      >
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
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </motion.div>
                    </motion.div>

                    {/* FAQ Answer - Expandable */}
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ 
                        height: openItem === `item-${index}` ? "auto" : 0,
                        opacity: openItem === `item-${index}` ? 1 : 0
                      }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-4 text-white/60 leading-relaxed border-0 outline-none">
                        {item.answer}
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Card border glow effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/[0.05] via-transparent to-emerald-500/[0.05] opacity-50 pointer-events-none" />
          </div>
        </motion.div>

        {/* Still have questions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500/20 to-emerald-500/20 border border-blue-500/30 rounded-full backdrop-blur-sm">
            <MessageCircle className="w-5 h-5 text-blue-400" />
            <span className="text-white font-medium">Still have questions?</span>
            <a 
              href="mailto:support@boltshare.com" 
              className="text-blue-400 hover:text-blue-300 transition-colors font-medium"
            >
              Contact our support team
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
