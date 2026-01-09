import { motion } from "framer-motion";
import { 
  FaHeartbeat,
  FaHospitalUser,
  FaCar,
  FaHome,
  FaPlane,
  FaBriefcase,
  FaChartLine,
  FaUmbrellaBeach,
  FaGraduationCap,
  FaShieldAlt,
  FaLightbulb,
  FaHandHoldingHeart,
  FaCheckCircle
} from "react-icons/fa";

const services = [
  {
    title: "Life Insurance",
    icon: <FaHeartbeat />,
    description: "A strong shield that provides financial support to your family in case of accidents or death, ensuring your children's education, loan repayments, and family living standards remain secure.",
    benefits: ["Family financial security", "Debt protection", "Education funding", "Income replacement"],
    gradient: "from-blue-600 to-cyan-500"
  },
  {
    title: "Health Insurance",
    icon: <FaHospitalUser />,
    description: "Essential coverage that handles high medical expenses including hospital bills, medicine costs, and surgeries. Your health stays protected with reduced financial burden during unexpected illnesses.",
    benefits: ["Medical expense coverage", "Cashless hospitalization", "Pre & post hospitalization", "Annual health checkups"],
    gradient: "from-emerald-600 to-green-500"
  },
  {
    title: "Motor/Vehicle Insurance",
    icon: <FaCar />,
    description: "Mandatory protection for your vehicle against accidents, theft, fire, and other risks. In Sri Lanka, third-party coverage is legally required to ensure safe driving with compensation in accidents.",
    benefits: ["Accident compensation", "Theft protection", "Third-party liability", "Legal compliance"],
    gradient: "from-amber-600 to-yellow-500"
  },
  {
    title: "Home/Property Insurance",
    icon: <FaHome />,
    description: "Protect your most valuable asset from risks like fire, theft, floods, and natural disasters. Affordable coverage that ensures your home remains protected forever with minimal premium payments.",
    benefits: ["Property damage cover", "Contents protection", "Natural disaster cover", "Theft protection"],
    gradient: "from-purple-600 to-pink-500"
  },
  {
    title: "Travel Insurance",
    icon: <FaPlane />,
    description: "Comprehensive coverage for accidents, illnesses, flight delays, lost baggage, and emergencies during international travels. Travel with peace of mind knowing you're protected abroad.",
    benefits: ["Medical emergencies abroad", "Trip cancellation", "Lost baggage", "Flight delays"],
    gradient: "from-cyan-600 to-blue-500"
  },
  {
    title: "Business Insurance",
    icon: <FaBriefcase />,
    description: "Protect your business from risks like fire, theft, liabilities, and interruptions. Coverage that allows your business to grow continuously while managing potential risks effectively.",
    benefits: ["Property damage", "Liability coverage", "Business interruption", "Employee protection"],
    gradient: "from-red-600 to-orange-500"
  },
  {
    title: "Investment Plans",
    icon: <FaChartLine />,
    description: "Strategic wealth-building solutions to grow your savings safely for future goals. Customized investment strategies designed to match your risk appetite and financial objectives.",
    benefits: ["Wealth accumulation", "Tax benefits", "Flexible contributions", "Long-term growth"],
    gradient: "from-green-600 to-emerald-500"
  },
  {
    title: "Retirement Plans",
    icon: <FaUmbrellaBeach />,
    description: "Secure your golden years with comprehensive retirement planning. Build a substantial corpus that ensures a peaceful, independent, and financially secure retirement lifestyle.",
    benefits: ["Regular pension", "Tax savings", "Lump sum payout", "Life coverage"],
    gradient: "from-blue-500 to-indigo-600"
  },
  {
    title: "Child Education Plans",
    icon: <FaGraduationCap />,
    description: "Secure your child's future education and dreams with dedicated savings plans. Ensure funds are available for higher education, vocational training, or international studies.",
    benefits: ["Education fund guarantee", "Waiver of premium", "Flexible maturity", "Bonus additions"],
    gradient: "from-pink-600 to-rose-500"
  }
];

export default function Services() {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const cardHoverVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.05, transition: { type: "spring", stiffness: 300, damping: 15 } }
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
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-800/30 to-cyan-800/30 px-4 py-2 rounded-full text-sm mb-6">
            <FaShieldAlt className="text-cyan-400" />
            <span>Insurance & Investment Solutions</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Comprehensive <span className="bg-gradient-to-r from-cyan-400 to-yellow-300 bg-clip-text text-transparent">Financial Protection</span>
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Insurance is a strong shield that protects your life and assets from unexpected risks.
            Choose the right coverage and secure your future with peace of mind.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group"
              variants={itemVariants}
              whileHover="hover"
              initial="rest"
              animate="rest"
            >
              <motion.div
                className="h-full bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 overflow-hidden shadow-xl"
                variants={cardHoverVariants}
              >

                <div className={`relative h-2 bg-gradient-to-r ${service.gradient}`}>
                  <div className="absolute -bottom-6 left-6 w-14 h-14 bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl flex items-center justify-center shadow-lg border border-slate-700/50">
                    <div className={`text-2xl bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                      {service.icon}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-10">
                  <h3 className="text-xl font-bold mb-4 text-cyan-300">{service.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>

                  <div className="space-y-2 mb-6">
                    {service.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <FaCheckCircle className="text-green-400 text-sm" />
                        <span className="text-sm text-gray-300">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <div className={`h-1 w-12 bg-gradient-to-r ${service.gradient} rounded-full group-hover:w-24 transition-all duration-300`} />
                </div>

              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Final CTA */}
        <motion.div
          className="text-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="bg-gradient-to-r from-blue-900/30 via-slate-900/50 to-cyan-900/30 backdrop-blur-sm p-12 rounded-3xl border border-slate-700/50">

            <h2 className="text-3xl font-bold mb-6">Ready to Secure Your Future?</h2>

            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Let's build a customized financial protection plan that fits your life and your goals.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-600 to-blue-700 text-white px-8 py-4 rounded-xl font-semibold hover:from-cyan-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:scale-105 flex items-center gap-3"
              >
                <FaHandHoldingHeart />
                Get Personalized Consultation
              </a>
            </div>

          </div>
        </motion.div>

      </div>
    </motion.div>
  );
}
