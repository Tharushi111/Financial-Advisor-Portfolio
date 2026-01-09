import { 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaClock, 
  FaPhoneAlt, 
  FaWhatsapp, 
  FaFacebook, 
  FaInstagram, 
  FaLinkedin,
  FaPaperPlane,
  FaUserCircle
} from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const contactVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const iconContainerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const iconVariants = {
    rest: { scale: 1 },
    hover: { 
      scale: 1.15,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15
      }
    }
  };

  return (
    <motion.div 
      className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-blue-950 text-white px-6 py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          variants={contactVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-800/30 to-cyan-800/30 px-4 py-2 rounded-full text-sm mb-6"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <FaPaperPlane className="text-cyan-400" />
            <span>Let's Connect</span>
          </motion.div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Get In <span className="bg-gradient-to-r from-cyan-400 to-yellow-300 bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Ready to secure your financial future? Connect with me through any of these channels for personalized financial guidance.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left Column - Contact Information */}
          <motion.div 
            className="space-y-8"
            variants={contactVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Contact Info Cards */}
            <motion.div 
              className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 shadow-2xl"
              whileHover={{ y: -5 }}
            >
              <h2 className="text-2xl font-bold mb-8 bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                Contact Information
              </h2>
              
              <div className="space-y-6">
                {[
                  { 
                    icon: <FaEnvelope />, 
                    title: "Email", 
                    content: "rakindurajapaksha.slic@gmail.com",
                    gradient: "from-blue-600 to-cyan-500"
                  },
                  { 
                    icon: <FaPhoneAlt />, 
                    title: "Phone", 
                    content: "+94 75 598 0938",
                    gradient: "from-blue-600 to-cyan-500"
                  },
                  { 
                    icon: <FaWhatsapp />, 
                    title: "WhatsApp", 
                    content: "+94 75 598 0938",
                    gradient: "from-blue-600 to-cyan-500"
                  },
                  { 
                    icon: <FaMapMarkerAlt />, 
                    title: "Location", 
                    content: "Kalutara, Sri Lanka",
                    gradient: "from-blue-600 to-cyan-500"
                  },
                  { 
                    icon: <FaClock />, 
                    title: "Response Time", 
                    content: "Within 24–48 hours",
                    gradient: "from-blue-600 to-cyan-500"
                  },
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center gap-4 group"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className={`relative w-12 h-12 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                      <div className="text-white text-xl">
                        {item.icon}
                      </div>
                      {/* Glow effect on hover */}
                      <div className="absolute -inset-2 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-300 mb-1">{item.title}</h3>
                      <p className="text-cyan-300 group-hover:text-cyan-200 transition-colors">
                        {item.content}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Social Media Links */}
          <motion.div 
            className="space-y-8"
            variants={contactVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Social Media Grid */}
            <motion.div 
              className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 shadow-2xl"
              whileHover={{ y: -5 }}
            >
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold mb-3 bg-gradient-to-r from-cyan-300 to-yellow-300 bg-clip-text text-transparent">
                  Connect With Me
                </h2>
                <p className="text-gray-400">Follow and connect through social media for updates and insights</p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { 
                    icon: <FaFacebook />, 
                    name: "Facebook",
                    color: "text-blue-500",
                    hoverColor: "hover:text-blue-400",
                    link: "https://www.facebook.com/share/1WpP8fcsu6/"
                  },
                  { 
                    icon: <FaInstagram />, 
                    name: "Instagram",
                    color: "text-pink-500",
                    hoverColor: "hover:text-pink-400",
                    link: "https://www.instagram.com/raki__mnr?igsh=YzZhbXMwZG11M2tn"
                  },
                  { 
                    icon: <FaLinkedin />, 
                    name: "LinkedIn",
                    color: "text-blue-400",
                    hoverColor: "hover:text-blue-300",
                    link: "https://www.linkedin.com/in/rakindu-rajapaksha-rakimnr?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_appm"
                  },
                  { 
                    icon: <FaWhatsapp />, 
                    name: "WhatsApp",
                    color: "text-green-500",
                    hoverColor: "hover:text-green-400",
                    link: "https://wa.me/94755980938?text=Hello%20I%20need%20financial%20consultation"
                  },
                ].map((social, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col items-center group"
                    variants={iconContainerVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: index * 0.1 }}
                    onMouseEnter={() => setHoveredIcon(index)}
                    onMouseLeave={() => setHoveredIcon(null)}
                  >
                    <motion.a
                      href={social.link}
                      className={`relative mb-3 ${social.color} ${social.hoverColor} transition-colors duration-300`}
                      variants={iconVariants}
                      initial="rest"
                      animate={hoveredIcon === index ? "hover" : "rest"}
                      whileHover="hover"
                    >
                      {/* Simple glow effect */}
                      <div className={`absolute -inset-3 ${social.color.replace('text-', 'bg-')} rounded-full blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                      
                      {/* Icon with simple scale animation */}
                      <div className="relative text-5xl md:text-6xl">
                        {social.icon}
                      </div>
                    </motion.a>
                    
                    {/* Icon name with fade-in animation */}
                    <motion.span 
                      className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors text-center font-medium"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.1 + 0.2 }}
                    >
                      {social.name}
                    </motion.span>
                  </motion.div>
                ))}
              </div>

              {/* Featured connection */}
              <motion.div 
                className="mt-12 pt-8 border-t border-slate-700/50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
              </motion.div>
            </motion.div>

            {/* Quick Contact */}
            <motion.div 
              className="relative bg-gradient-to-br from-blue-900/30 to-cyan-900/30 backdrop-blur-sm p-8 rounded-2xl border border-cyan-500/30 shadow-2xl overflow-hidden"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                  Quick Connect
                </h3>
                <p className="text-gray-300 mb-6">Choose your preferred way to get in touch</p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://wa.me/94755980938?text=Hello%20I%20need%20financial%20consultation"
                    className="group relative px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-500 rounded-xl font-semibold hover:from-green-700 hover:to-emerald-600 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                  >
                    <FaWhatsapp className="text-xl" />
                    <span>WhatsApp</span>
                  </a>
                  
                  <a
                    href="tel:+94755980938"
                    className="group relative px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl font-semibold hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                  >
                    <FaPhoneAlt />
                    <span>Call Now</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}