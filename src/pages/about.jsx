import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaUserTie,
  FaHandshake,
  FaWhatsapp,
  FaLock,
  FaLightbulb,
  FaStar,
} from "react-icons/fa";
import fullBodyPhoto from "../assets/about.jpeg";

export default function About() {

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const fadeInUp = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-blue-950 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-800/30 to-cyan-800/30 px-4 py-2 rounded-full text-sm mb-6">
            <FaUserTie className="text-cyan-400" />
            <span>About The Advisor</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Your Trusted{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-yellow-300 bg-clip-text text-transparent">
              Financial Partner
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Dedicated to securing your family's future with personalized
            financial solutions and expert guidance.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Content Section */}
          <motion.div
            className="order-1"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-6"
              variants={itemVariants}
            >
              My{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Mission
              </span>
            </motion.h2>

            <motion.p
              className="text-xl text-gray-300 mb-8 leading-relaxed"
              variants={itemVariants}
            >
              As a licensed Financial Advisor at{" "}
              <span className="text-cyan-300 font-semibold">
                Sri Lanka Insurance Life
              </span>
              , I help individuals and families build secure financial futures
              through tailored insurance and investment solutions.
            </motion.p>

            <motion.p
              className="text-lg text-gray-300 mb-10 leading-relaxed"
              variants={itemVariants}
            >
              My philosophy is simple:{" "}
              <span className="text-yellow-300 font-medium">
                honest guidance, long-term support, and solutions that truly
                match your unique needs.
              </span>
            </motion.p>

            {/* Why Choose */}
            <motion.div
              className="mb-10 bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50"
              variants={itemVariants}
            >
              <h3 className="text-2xl font-bold mb-6 text-cyan-300 flex items-center gap-3">
                <FaStar className="text-yellow-400" />
                Why Choose My Services?
              </h3>

              <div className="space-y-4">
                {[
                  "Personalized financial plans based on your goals",
                  "Simple explanations for complex policies",
                  "Long-term client support",
                  "Fast and smooth claim assistance",
                ].map((text, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <FaCheckCircle className="text-green-400 mt-1" />
                    <p className="text-gray-300">{text}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div variants={itemVariants}>
              <button
                onClick={scrollToContact}
                className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-cyan-600 to-blue-700 text-white px-8 py-4 rounded-xl font-semibold hover:from-cyan-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                <FaHandshake className="group-hover:scale-110 transition-transform" />
                Let's Plan Your Financial Future
              </button>
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="relative order-2"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 blur-xl -z-10"></div>

            <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-slate-700/50">
              <img
                src={fullBodyPhoto}
                alt="Financial Advisor"
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Core Values */}
        <motion.div
          className="mt-20"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <h2 className="text-4xl font-bold mb-4">
              My{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-yellow-300 bg-clip-text text-transparent">
                Core Values
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Guiding principles behind every solution
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <FaLock />, title: "Integrity First", desc: "Honest and transparent advice" },
              { icon: <FaUserTie />, title: "Personalized Service", desc: "Plans made just for you" },
              { icon: <FaLightbulb />, title: "Expert Guidance", desc: "Professional financial insights" },
            ].map((v, i) => (
              <motion.div
                key={i}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-2xl border border-slate-700/50 hover:border-cyan-500/30 transition-all duration-300 group"
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="flex justify-center text-cyan-400 text-3xl mb-6">
                  {v.icon}
                </div>
                <h3 className="text-xl font-bold text-center mb-4 text-cyan-300">
                  {v.title}
                </h3>
                <p className="text-gray-400 text-center">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          className="mt-20 text-center"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-blue-900/30 via-slate-900/50 to-cyan-900/30 backdrop-blur-sm p-12 rounded-3xl border border-slate-700/50">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Secure Your Financial Future?
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Let's build a plan that protects what matters most.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button
                onClick={scrollToContact}
                className="group bg-gradient-to-r from-cyan-600 to-blue-700 text-white px-8 py-4 rounded-xl font-semibold hover:from-cyan-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Get Free Consultation
              </button>

              <a
                href="https://wa.me/94755980938?text=Hello%20I%20need%20financial%20consultation"
                className="group border-2 border-cyan-500 text-cyan-400 px-8 py-4 rounded-xl font-semibold flex items-center gap-2 hover:bg-cyan-500/10 hover:border-cyan-400 hover:text-cyan-300 transition-all duration-300"
              >
                <FaWhatsapp className="text-xl" />
                WhatsApp Chat
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
