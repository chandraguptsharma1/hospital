"use client";
import { motion } from "framer-motion";
import {
  FaAmbulance,
  FaStethoscope,
  FaHeartbeat,
  FaUserMd,
} from "react-icons/fa";

export default function Hero() {
  const facilities = [
    {
      icon: <FaAmbulance size={40} className="text-green-600" />,
      title: "24/7 Emergency",
    },
    {
      icon: <FaUserMd size={40} className="text-green-600" />,
      title: "Expert Doctors",
    },
    {
      icon: <FaStethoscope size={40} className="text-green-600" />,
      title: "OPD Services",
    },
    {
      icon: <FaHeartbeat size={40} className="text-green-600" />,
      title: "Heart Care",
    },
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-r from-green-50 to-blue-50 flex items-center overflow-hidden pt-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between w-full">
        {/* Left Text (50%) */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2 text-center md:text-left relative z-10"
        >
          <h1 className="text-5xl font-bold text-green-700 leading-snug">
            Compassionate Care <br /> for a Healthier Tomorrow
          </h1>
          <p className="mt-6 text-gray-600 text-lg max-w-lg mx-auto md:mx-0">
            From emergency response to specialized treatments, our hospital is
            equipped with modern facilities and dedicated professionals to
            ensure your well-being.
          </p>
          <button className="mt-8 px-8 py-3 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition">
            Book Appointment
          </button>
        </motion.div>

        {/* Right Facilities (50%) */}
        <div className="w-full md:w-1/2 mt-12 md:mt-0 grid grid-cols-2 gap-6 relative z-10">
          {facilities.map((f, i) => (
            <motion.div
              key={i}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="p-6 bg-white rounded-xl shadow-lg flex flex-col items-center text-center hover:scale-105 transition"
            >
              {f.icon}
              <h3 className="mt-4 font-semibold text-gray-700">{f.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Heartbeat Animation */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
        <svg width="100%" height="200" viewBox="0 0 1000 200">
          <path
            d="M0 100 L200 100 L250 50 L300 150 L350 80 L400 120 L450 50 L500 150 L550 100 L1000 100"
            className="heartbeat-line"
          />
        </svg>
        <FaHeartbeat
          size={80}
          className="heartbeat-icon text-red-500 absolute"
        />
      </div>
    </section>
  );
}
