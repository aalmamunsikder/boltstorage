"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import Logo from "@/components/ui/logo";
import { Github, Twitter, Linkedin, Mail, Cloud, Shield, Zap, ChevronUp } from "lucide-react";

export default function Footer() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const [isExpanded, setIsExpanded] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isFixed, setIsFixed] = useState(true);

  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // At the very top - show fixed minimal footer
      if (scrollY === 0) {
        setIsFixed(true);
        setIsExpanded(false);
      }
      // Scrolled a bit - show inline compact footer
      else if (scrollY < windowHeight * 0.5) {
        setIsFixed(false);
        setIsExpanded(false);
      }
      // Scrolled more - expand footer
      else {
        setIsFixed(false);
        setIsExpanded(true);
      }
      
      // Show scroll to top button when scrolled down
      if (scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    product: [
      { name: "Features", href: "#" },
      { name: "Pricing", href: "#" },
      { name: "Security", href: "#" },
      { name: "API", href: "#" },
    ],
    company: [
      { name: "About", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Press", href: "#" },
    ],
    support: [
      { name: "Help Center", href: "#" },
      { name: "Contact", href: "#" },
      { name: "Status", href: "#" },
      { name: "Documentation", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Twitter, href: "#" },
    { icon: Github, href: "#" },
    { icon: Linkedin, href: "#" },
    { icon: Mail, href: "#" },
  ];

  return (
    <>
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        >
          <ChevronUp className="w-5 h-5" />
        </motion.button>
      )}

      {/* Fixed Footer (When at Top) */}
      {isFixed && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-0 left-0 right-0 z-50 px-4"
        >
          <motion.div
            initial={{ scale: 0.98 }}
            animate={{ scale: 1 }}
            className="relative max-w-7xl mx-auto mb-6 px-4 py-2 rounded-2xl backdrop-blur-xl bg-white/[0.02] border border-white/10"
          >
            {/* Gradient background effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 via-transparent to-cyan-500/10 opacity-50" />

            {/* Animated glow effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/5 to-cyan-500/5 animate-pulse" />

            {/* Content */}
            <div className="relative flex flex-row items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <Logo size="sm" />
                <span className="text-xs font-bold text-white/60">
                  Start Free Today | No credit card required
                </span>
              </div>

              <div className="flex items-center gap-2 text-[9px] text-white/40">
                <Cloud className="w-3 h-3" />
                <span>Lightning Fast Storage</span>
                <span>All Rights Reserved</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Inline Footer (When Scrolled) */}
      {!isFixed && (
        <footer ref={ref} className="relative bg-[#030303] border-t border-white/10">
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-cyan-900/10" />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            className="relative z-10"
          >
            {/* Compact Footer (Default Scrolled State) */}
            <motion.div
              layout
              className="max-w-7xl mx-auto px-4 py-4"
            >
              <motion.div
                layout
                className="flex flex-row items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <Logo size="sm" />
                  <div>
                    <span className="text-sm font-bold text-white/80">Start Your Free Trial | No credit card required</span>
                    <div className="text-xs text-white/50">10GB free storage</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 text-[10px] text-white/40">
                    <Cloud className="w-3 h-3" />
                    <span>Lightning Fast Storage</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Expanded Footer (When Scrolled Further) */}
            <motion.div
              layout
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: isExpanded ? "auto" : 0,
                opacity: isExpanded ? 1 : 0,
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                  {/* Brand Column */}
                  <div className="lg:col-span-2">
                    <p className="text-white/60 text-sm mb-6 leading-relaxed">
                      Lightning-fast cloud storage built for speed, security, and simplicity. 
                      Store, share, and access your files from anywhere in the world.
                    </p>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="flex items-center gap-2 text-xs text-white/40">
                        <Shield className="w-4 h-4 text-emerald-400" />
                        <span>256-bit Encryption</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-white/40">
                        <Zap className="w-4 h-4 text-blue-400" />
                        <span>99.9% Uptime</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      {socialLinks.map((social, index) => (
                        <motion.a
                          key={index}
                          href={social.href}
                          whileHover={{ scale: 1.1, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          className="w-10 h-10 rounded-full bg-white/[0.05] border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all duration-300"
                        >
                          <social.icon className="w-4 h-4" />
                        </motion.a>
                      ))}
                    </div>
                  </div>

                  {/* Product Links */}
                  <div>
                    <h3 className="text-sm font-semibold text-white mb-4">Product</h3>
                    <ul className="space-y-2">
                      {footerLinks.product.map((link) => (
                        <li key={link.name}>
                          <a
                            href={link.href}
                            className="text-xs text-white/40 hover:text-white/60 transition-colors duration-200"
                          >
                            {link.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Company Links */}
                  <div>
                    <h3 className="text-sm font-semibold text-white mb-4">Company</h3>
                    <ul className="space-y-2">
                      {footerLinks.company.map((link) => (
                        <li key={link.name}>
                          <a
                            href={link.href}
                            className="text-xs text-white/40 hover:text-white/60 transition-colors duration-200"
                          >
                            {link.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Support Links */}
                  <div>
                    <h3 className="text-sm font-semibold text-white mb-4">Support</h3>
                    <ul className="space-y-2">
                      {footerLinks.support.map((link) => (
                        <li key={link.name}>
                          <a
                            href={link.href}
                            className="text-xs text-white/40 hover:text-white/60 transition-colors duration-200"
                          >
                            {link.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 mt-12 pt-8">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-4 text-xs text-white/40">
                      <span>© {currentYear} BoltStorage. All rights reserved.</span>
                      <span>•</span>
                      <a href="#" className="hover:text-white/60 transition-colors">Privacy Policy</a>
                      <span>•</span>
                      <a href="#" className="hover:text-white/60 transition-colors">Terms of Service</a>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-white/40">
                      <span>Made with</span>
                      <span className="text-blue-400">⚡</span>
                      <span>in the cloud</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </footer>
      )}
    </>
  );
}
