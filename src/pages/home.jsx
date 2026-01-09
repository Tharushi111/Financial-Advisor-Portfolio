import { 
  FaWhatsapp, 
  FaCheckCircle, 
  FaChartLine, 
  FaShieldAlt, 
  FaHeadset, 
  FaLightbulb, 
  FaUsers, 
  FaHandshake,
  FaUser,
  FaComments,
  FaBolt,
  FaHandHoldingHeart
} from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import photo from '../assets/aboutme.png';

export default function Home() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const fadeInUp = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      className="bg-gradient-to-br from-gray-900 via-slate-900 to-blue-950 text-white min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      id="home"
    >
      {/* HERO */}
      <motion.section 
        className="px-6 py-20 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="space-y-6" variants={itemVariants}>
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-800/30 to-cyan-800/30 px-4 py-2 rounded-full text-sm">
            <FaChartLine className="text-cyan-400" />
            <span>Financial Advisor</span>
          </div>

          <motion.h1 
            className="text-5xl md:text-6xl font-bold leading-tight"
            variants={itemVariants}
          >
            Secure Your Family's{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-yellow-300 bg-clip-text text-transparent">
              Financial Future
            </span>{" "}
            with Confidence
          </motion.h1>

          <motion.p 
            className="text-xl text-gray-300 leading-relaxed"
            variants={itemVariants}
          >
            At <span className="text-cyan-300 font-semibold">Sri Lanka Insurance Life</span>, I provide personalized financial solutions that protect what matters most while growing your wealth strategically.
          </motion.p>

          <motion.div 
            className="flex flex-wrap gap-4 pt-4"
            variants={itemVariants}
          >
            {/* Scroll to Contact */}
            <a 
              href="#contact"
              className="group bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-2 hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Free Consultation
              <IoIosArrowForward className="group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="https://wa.me/94755980938?text=Hello%20I%20need%20financial%20consultation"
              className="group border-2 border-cyan-500 text-cyan-400 px-8 py-4 rounded-xl font-semibold flex items-center gap-2 hover:bg-cyan-500/10 hover:border-cyan-400 hover:text-cyan-300 transition-all duration-300"
            >
              <FaWhatsapp className="text-xl" />
              WhatsApp Chat
            </a>
          </motion.div>
        </motion.div>

        {/* Image Section */}
        <motion.div 
          className="relative flex justify-center items-center"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          <div className="relative">
            <div 
              className="absolute -inset-6 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 blur-xl -z-10"
              style={{ transform: 'scale(1.1)' }}
            ></div>

            <img
              src={photo}
              alt="Financial Advisor"
              className="w-full max-w-md h-auto object-contain relative z-10 rounded-lg shadow-2xl"
              style={{
                boxShadow: '0 25px 50px -12px rgba(6, 182, 212, 0.25), 0 0 15px rgba(6, 182, 212, 0.15)',
              }}
            />
          </div>
        </motion.div>
      </motion.section>

      {/* STATS */}
      <motion.section 
        className="py-16 bg-gradient-to-r from-blue-900/30 via-slate-900/50 to-cyan-900/30"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <h2 className="text-3xl font-bold mb-3">Building Financial Legacies</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Trusted expertise in securing families' futures through comprehensive insurance and investment solutions
            </p>
          </motion.div>

          <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <StatCard icon={<FaChartLine />} endValue={10} suffix="+" text="Policies Handled" gradient="from-blue-600 to-cyan-500" barColor="from-blue-500 to-cyan-500" inView={inView}/>
            <StatCard icon={<FaChartLine />} endValue={10} suffix="M+" text="Premium Value" gradient="from-emerald-600 to-green-500" barColor="from-emerald-500 to-green-500" inView={inView}/>
            <StatCard icon={<FaHeadset />} endValue={1} suffix="+" text="Years Experience" gradient="from-amber-600 to-yellow-500" barColor="from-amber-500 to-yellow-500" inView={inView}/>
            <StatCard icon={<FaUsers />} endValue={100} suffix="%" text="Client Support" gradient="from-purple-600 to-pink-500" barColor="from-purple-500 to-pink-500" inView={inView}/>
          </div>
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section className="py-20 px-6 max-w-6xl mx-auto text-center" variants={itemVariants}>
        <a 
          href="#contact"
          className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-600 to-blue-700 text-white px-8 py-4 rounded-xl font-semibold hover:scale-105 transition"
        >
          <FaCheckCircle />
          Start Your Financial Journey Today
        </a>
      </motion.section>
    </motion.div>
  );
}

/* STAT CARD */
function StatCard({ icon, endValue, suffix, text, gradient, barColor, inView }) {
  return (
    <motion.div 
      className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-2xl border border-slate-700/50 hover:border-cyan-500/30 transition"
      whileHover={{ y: -5 }}
    >
      <div className={`w-14 h-14 bg-gradient-to-br ${gradient} rounded-xl flex items-center justify-center mb-4`}>
        {icon}
      </div>

      <h3 className="text-4xl font-bold text-cyan-300">
        {inView ? <CountUp end={endValue} duration={2} suffix={suffix}/> : `0${suffix}`}
      </h3>

      <p className="text-gray-300 mt-2">{text}</p>
      <div className={`h-1 w-12 bg-gradient-to-r ${barColor} rounded-full mt-3`}></div>
    </motion.div>
  );
}
