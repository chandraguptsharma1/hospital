"use client";
import {
  FaVideo,
  FaAmbulance,
  FaHospital,
  FaShieldAlt,
  FaBiking,
} from "react-icons/fa";

export default function Facilities() {
  const facilities = [
    {
      icon: <FaHospital size={28} />,
      title: "Instant Operation",
      desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Etiam eu turpis molestie.",
    },
    {
      icon: <FaVideo size={28} />,
      title: "Online Sessions",
      desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Etiam eu turpis molestie.",
    },
    {
      icon: <FaAmbulance size={28} />,
      title: "Emergency Care",
      desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Etiam eu turpis molestie.",
    },
    {
      icon: <FaShieldAlt size={28} />,
      title: "Private & Secure",
      desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Etiam eu turpis molestie.",
    },
    {
      icon: <FaBiking size={28} />,
      title: "Outdoor Service",
      desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Etiam eu turpis molestie.",
    },
  ];

  return (
    <section className="bg-green-50 py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Text */}
        <div>
          <p className="text-green-600 font-semibold uppercase tracking-wide flex items-center gap-2">
            <span className="w-8 h-[2px] bg-green-600"></span> Our Facilities
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-800">
            Facilities That We Provide
          </h2>
          <p className="mt-6 text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim metus
            nec fringilla accumsan.
          </p>

          <button className="mt-8 px-6 py-3 border border-green-600 text-green-600 rounded-md hover:bg-green-600 hover:text-white transition">
            View All →
          </button>
        </div>

        {/* Right Facility Cards */}
        <div className="grid sm:grid-cols-2 gap-6">
          {facilities.map((f, i) => (
            <div
              key={i}
              className="bg-teal-500 text-white p-6 rounded-lg shadow hover:shadow-xl transition flex flex-col gap-3"
            >
              <div className="text-2xl">{f.icon}</div>
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="text-sm opacity-90">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
