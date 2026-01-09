import { motion } from "framer-motion";
import { 
  FaPhoneAlt, 
  FaWhatsapp, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaFacebook, 
  FaInstagram,
  FaLinkedin,
  FaArrowUp,
  FaHeart,
} from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  // Social media data
  const socialMedia = [
    {
      icon: <FaFacebook className="w-5 h-5" />,
      label: "Facebook",
      url: "https://www.facebook.com/share/1WpP8fcsu6/",
      color: "hover:bg-[#1877F2] border-blue-600/20 text-blue-500",
      bgColor: "bg-blue-500/10",
      hoverTextColor: "group-hover:text-white",
    },
    {
      icon: <FaInstagram className="w-5 h-5" />,
      label: "Instagram",
      url: "https://www.instagram.com/raki__mnr?igsh=YzZhbXMwZG11M2tn",
      color: "hover:bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] border-pink-600/20 text-pink-500",
      bgColor: "bg-gradient-to-r from-pink-500/10 to-purple-500/10",
      hoverTextColor: "group-hover:text-white",
    },
    {
      icon: <FaLinkedin className="w-5 h-5" />,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/rakindu-rajapaksha-rakimnr?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      color: "hover:bg-[#0A66C2] border-blue-700/20 text-blue-600",
      bgColor: "bg-blue-600/10",
      hoverTextColor: "group-hover:text-white",
    },
  ];

  const contactInfo = [
    {
      icon: <FaPhoneAlt className="w-5 h-5" />,
      text: "+94 75 598 0938",
      href: "tel:+94755980938",
      color: "text-blue-400",
      hoverColor: "hover:text-blue-300",
    },
    {
      icon: <FaEnvelope className="w-5 h-5" />,
      text: "rakindurajapaksha.slic@gmail.com",
      href: "mailto:rakindurajapaksha.slic@gmail.com",
      color: "text-blue-400",
      hoverColor: "hover:text-blue-300",
    },
    {
      icon: <FaMapMarkerAlt className="w-5 h-5" />,
      text: "Kalutara, Sri Lanka",
      color: "text-blue-400",
      hoverColor: "hover:text-blue-300",
    },
  ];

  const quickLinks = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Services", id: "services" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-slate-900 to-blue-950 text-white overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-500/5 via-transparent to-transparent"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Top Section */}
        <div className="grid lg:grid-cols-3 gap-10 mb-12">
          {/* Brand Column */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-300 via-blue-400 to-blue-300 bg-clip-text text-transparent">
                Rakindu Rajapaksha
              </h2>
              <p className="text-gray-300 mt-2 font-medium">Financial Advisor - Sri Lanka Insurance Life</p>
            </div>
            
            <div className="space-y-4">
              <p className="text-gray-300 leading-relaxed">
                Helping individuals and businesses achieve financial freedom through strategic planning and innovative solutions.
              </p>
              
              {/* Availability Badge */}
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-blue-600/10 border border-blue-500/20 rounded-full px-4 py-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-blue-300 font-medium">Available for Consultations</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links & Contact - Fixed spacing between columns */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12"> {/* Increased gap from gap-8 to gap-12 */}
              {/* Quick Links */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
                  <span className="w-2 h-6 bg-gradient-to-b from-blue-400 to-blue-500 rounded-full"></span>
                  Quick Links
                </h3>
                <ul className="space-y-3">
                  {quickLinks.map((link) => (
                    <li key={link.id}>
                      <button
                        onClick={() => scrollToSection(link.id)}
                        className="group flex items-center gap-3 text-gray-400 hover:text-blue-300 transition-all duration-300 hover:translate-x-1"
                      >
                        <svg className="w-3 h-3 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        {link.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Info - Added right padding for extra space */}
              <div className="pr-4"> {/* Added right padding */}
                <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
                  <span className="w-2 h-6 bg-gradient-to-b from-blue-500 to-blue-600 rounded-full"></span>
                  Contact Info
                </h3>
                <ul className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <li key={index} className="break-words"> {/* Added break-words */}
                      <a
                        href={item.href || '#'}
                        className={`group flex items-start gap-3 text-gray-400 ${item.hoverColor || 'hover:text-blue-300'} transition-colors duration-300`}
                      >
                        <div className={`p-2 rounded-lg ${item.color.replace('text', 'bg')} bg-opacity-10 group-hover:bg-opacity-20 transition-all flex-shrink-0`}>
                          {item.icon}
                        </div>
                        <span className="pt-1.5 break-all text-sm md:text-base"> {/* Added break-all and responsive text size */}
                          {item.text}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Social Media - Added left padding for extra space */}
              <div className="pl-4"> {/* Added left padding */}
                <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
                  <span className="w-2 h-6 bg-gradient-to-b from-blue-600 to-blue-700 rounded-full"></span>
                  Connect With Me
                </h3>
                <p className="text-gray-300 mb-6 text-sm">
                  Follow for financial insights and market updates
                </p>
                <div className="flex flex-wrap gap-3">
                  {socialMedia.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 rounded-xl flex items-center justify-center border ${social.color} ${social.bgColor} transition-all duration-300 group relative overflow-hidden`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      title={social.label}
                    >
                      <div className={`relative z-10 ${social.hoverTextColor} transition-colors`}>
                        {social.icon}
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          className="h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent mb-8"
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        ></motion.div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-gray-400 text-sm text-center md:text-left">
            <p>© {new Date().getFullYear()} Rakindu Rajapaksha. All rights reserved.</p>
            <p className="mt-1 text-gray-500">Financial Advisor - Sri Lanka Insurance Life</p>
          </div>

          <div className="text-gray-400 text-sm flex items-center gap-2">
            <span>Made by</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <FaHeart className="w-4 h-4 text-red-500" />
            </motion.div>
            <span className="text-blue-300">Tharushi Paranagama</span>
          </div>

          <motion.button
            onClick={scrollToTop}
            className="group flex items-center gap-2 bg-slate-800/50 border border-slate-700/50 text-gray-300 px-5 py-2.5 rounded-xl hover:text-blue-300 hover:border-blue-500/30 transition-all duration-300 backdrop-blur-sm"
            whileHover={{ y: -3 }}
          >
            <FaArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            <span className="text-sm font-medium">Back to Top</span>
          </motion.button>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <motion.a
          href="https://wa.me/94755980938?text=Hello%20I%20need%20financial%20consultation"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center w-14 h-14 bg-gradient-to-br from-[#25D366] to-emerald-600 rounded-full shadow-2xl shadow-green-500/30"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          animate={{
            y: [0, -8, 0],
            boxShadow: [
              "0 10px 25px -5px rgba(37, 211, 102, 0.3)",
              "0 20px 40px -5px rgba(37, 211, 102, 0.5)",
              "0 10px 25px -5px rgba(37, 211, 102, 0.3)"
            ]
          }}
          transition={{
            y: {
              repeat: Infinity,
              duration: 2,
              ease: "easeInOut"
            },
            boxShadow: {
              repeat: Infinity,
              duration: 2,
              ease: "easeInOut"
            }
          }}
        >
          <FaWhatsapp className="w-7 h-7 text-white" />
          <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-slate-900 text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-lg border border-slate-700">
            Chat on WhatsApp
          </span>
        </motion.a>
      </div>
    </footer>
  );
};

export default Footer;