import { useState, useEffect } from "react";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaBars,
  FaTimes,
  FaHome,
  FaInfoCircle,
  FaCogs,
  FaEnvelope,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { name: "Home", id: "home", icon: <FaHome /> },
    { name: "About", id: "about", icon: <FaInfoCircle /> },
    { name: "Services", id: "services", icon: <FaCogs /> },
    { name: "Contact", id: "contact", icon: <FaEnvelope /> },
  ];

  /* Navbar background on scroll */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Active section highlight FIXED */
  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "-40% 0px -50% 0px", // 🔥 KEY FIX (navbar offset)
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-gradient-to-r from-gray-900/95 via-slate-900/95 to-blue-950/95 backdrop-blur-lg border-b border-slate-700/50 py-3 shadow-xl"
            : "bg-gradient-to-r from-gray-900 via-slate-900 to-blue-950 py-4 border-b border-slate-800/30"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <button
              onClick={() => scrollToSection("home")}
              className="flex items-center space-x-3 group text-left"
            >
              <div>
                <h1 className="font-bold text-xl bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Rakindu Rajapaksha
                </h1>
                <p className="text-xs text-gray-400 flex items-center">
                  <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-1.5 animate-pulse"></span>
                  Financial Advisor - Sri Lanka Insurance Life
                </p>
              </div>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.id)}
                  className={`flex items-center space-x-2 px-5 py-3 rounded-xl font-medium transition-all duration-200 ${
                    activeSection === link.id
                      ? "bg-gradient-to-r from-cyan-500/20 to-blue-600/20 text-cyan-300"
                      : "text-gray-300 hover:text-white hover:bg-slate-800/50"
                  }`}
                >
                  <span>{link.icon}</span>
                  <span>{link.name}</span>
                </button>
              ))}

              <div className="h-8 w-px bg-slate-700/50 mx-2"></div>

              {/* Contact Buttons */}
              <div className="flex items-center space-x-3">
                <a
                  href="tel:+94XXXXXXXXX"
                  className="group flex items-center space-x-2 px-4 py-3 bg-gradient-to-r from-blue-700 to-blue-800 text-white rounded-xl font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  <FaPhoneAlt className="group-hover:animate-pulse" />
                  <span>Call Now</span>
                </a>

                <a
                  href="https://wa.me/94XXXXXXXXX"
                  className="group flex items-center space-x-2 px-4 py-3 bg-gradient-to-r from-cyan-600 to-blue-700 text-white rounded-xl font-semibold hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  <FaWhatsapp className="text-lg group-hover:scale-110 transition-transform" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-3 rounded-xl bg-slate-800/50 hover:bg-slate-700/50 transition-all duration-200"
            >
              {isOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden bg-gradient-to-b from-slate-900 to-blue-950/95 border-t border-slate-700/50"
            >
              <div className="px-4 pt-4 pb-6 space-y-1">
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => scrollToSection(link.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                      activeSection === link.id
                        ? "bg-gradient-to-r from-cyan-500/20 to-blue-600/20 text-cyan-300"
                        : "text-gray-300 hover:text-white hover:bg-slate-800/50"
                    }`}
                  >
                    <span>{link.icon}</span>
                    <span className="font-medium">{link.name}</span>
                  </button>
                ))}

                <div className="h-px bg-slate-700/50 my-3"></div>

                <div className="grid grid-cols-2 gap-3">
                  <a
                    href="tel:+94755980938"
                    className="flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-blue-700 to-blue-800 text-white rounded-xl font-semibold"
                  >
                    <FaPhoneAlt />
                    <span>Call</span>
                  </a>

                  <a
                    href="https://wa.me/94755980938?text=Hello%20I%20need%20financial%20consultation"
                    className="flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-cyan-600 to-blue-700 text-white rounded-xl font-semibold"
                  >
                    <FaWhatsapp />
                    <span>Chat</span>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Spacer for fixed navbar */}
      <div className="h-20"></div>
    </>
  );
}
