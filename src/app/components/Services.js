"use client";
import {
  FaHeartbeat,
  FaBrain,
  FaUserMd,
  FaLungs,
  FaXRay,
  FaSpa,
} from "react-icons/fa";

export default function Services() {
  const services = [
    {
      icon: <FaHeartbeat size={40} className="text-teal-600" />,
      title: "Cardiology",
      desc: "Expert heart care services with modern facilities.",
    },
    {
      icon: <FaBrain size={40} className="text-teal-600" />,
      title: "Neurology",
      desc: "Advanced neurology treatments and diagnosis.",
    },
    {
      icon: <FaUserMd size={40} className="text-teal-600" />,
      title: "Urology",
      desc: "Comprehensive care for urinary and reproductive health.",
    },
    {
      icon: <FaLungs size={40} className="text-teal-600" />,
      title: "Pulmonary",
      desc: "Pulmonary treatments for respiratory diseases.",
    },
    {
      icon: <FaXRay size={40} className="text-teal-600" />,
      title: "Radiology",
      desc: "Modern diagnostic imaging and radiology services.",
    },
    {
      icon: <FaSpa size={40} className="text-teal-600" />,
      title: "Hypnotherapy",
      desc: "Holistic therapies for better mental wellness.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Section Heading */}
        <p className="text-green-600 font-semibold uppercase tracking-wide">
          Medical Services
        </p>
        <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-800">
          Find Out More About Our Services
        </h2>

        {/* Grid */}
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div
              key={i}
              className={`p-8 rounded-xl border bg-green-50 hover:shadow-xl transition 
                ${
                  s.highlight
                    ? "bg-white shadow-lg border-t-4 border-blue-600"
                    : ""
                }`}
            >
              <div className="flex justify-center mb-4">{s.icon}</div>
              <h3
                className={`text-xl font-semibold ${
                  s.highlight ? "text-blue-700" : "text-green-700"
                }`}
              >
                {s.title}
              </h3>
              <p className="mt-2 text-gray-600 text-sm">{s.desc}</p>
              {s.highlight && (
                <button className="mt-4 text-blue-600 font-medium flex items-center justify-center gap-2">
                  Read More →
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
