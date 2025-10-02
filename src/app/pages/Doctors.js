"use client";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaFacebookF, FaTwitter, FaWhatsapp } from "react-icons/fa";

const doctors = [
  {
    name: "Dr. Diana Ayers",
    role: "Cardiologist",
    img: "https://img.freepik.com/free-photo/beautiful-young-female-doctor-looking-camera-office_1301-7807.jpg?semt=ais_hybrid&w=740&q=80",
  },
  {
    name: "Dr. Tracy Mckay",
    role: "Dermatologist",
    img: "/doctor2.jpg",
  },
  {
    name: "Dr. Jeffrey Davis",
    role: "Orthopedic Surgeon",
    img: "/doctor3.jpg",
  },
  {
    name: "Dr. Allen Hartzler",
    role: "Neurologist",
    img: "/doctor4.jpg",
  },
  {
    name: "Dr. Sophia Carter",
    role: "Pediatrician",
    img: "/doctor5.jpg",
  },
  {
    name: "Dr. Michael Brown",
    role: "ENT Specialist",
    img: "/doctor6.jpg",
  },
  {
    name: "Dr. Emily White",
    role: "Gynecologist",
    img: "/doctor7.jpg",
  },
  {
    name: "Dr. Daniel Green",
    role: "General Physician",
    img: "/doctor8.jpg",
  },
];

export default function DoctorsPage() {
  return (
    <>


      {/* Doctors Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Heading */}
          <p className="text-green-600 font-semibold uppercase tracking-wide flex items-center gap-2">
            <span className="w-8 h-[2px] bg-green-600"></span> Our Doctors
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-800">
            Meet Our Specialist Team
          </h2>
          <p className="mt-2 text-gray-500 max-w-2xl">
            Our experienced doctors are here to provide the best healthcare
            services tailored to your needs.
          </p>

          {/* Doctors Grid */}
          <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {doctors.map((doc, i) => (
              <div
                key={i}
                className="group relative bg-white shadow-lg rounded-lg overflow-hidden"
              >
                {/* Doctor Image */}
                <img
                  src={doc.img}
                  alt={doc.name}
                  className="w-full h-72 object-cover"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-green-600 bg-opacity-90 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition">
                  <h3 className="text-white text-lg font-bold">{doc.name}</h3>
                  <p className="text-white text-sm">{doc.role}</p>
                  <div className="flex space-x-4 mt-4">
                    <a href="#" className="text-white hover:text-gray-200">
                      <FaFacebookF />
                    </a>
                    <a href="#" className="text-white hover:text-gray-200">
                      <FaTwitter />
                    </a>
                    <a href="#" className="text-white hover:text-gray-200">
                      <FaWhatsapp />
                    </a>
                  </div>
                </div>

                {/* Bottom Info (Default) */}
                <div className="p-4 text-center bg-white">
                  <h3 className="text-blue-700 font-semibold">{doc.name}</h3>
                  <p className="text-gray-500 text-sm">{doc.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


    </>
  );
}
