"use client";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ContactPage() {
    return (
        <>
            <Navbar />
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Heading */}
                    <div className="text-center mb-12">
                        <p className="text-green-600 font-semibold uppercase tracking-wide">
                            Contact Us
                        </p>
                        <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-800">
                            Get In Touch With Get Well Hospital
                        </h2>
                        <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
                            We are available 24×7 for all your medical needs. Visit us or reach out to book your appointment.
                        </p>
                    </div>

                    {/* Contact Info & Form */}
                    <div className="grid md:grid-cols-2 gap-10">
                        {/* Left: Info */}
                        <div className="bg-white shadow-md rounded-lg p-8">
                            <h3 className="text-2xl font-semibold text-green-700 mb-6">Contact Information</h3>
                            <ul className="space-y-4 text-gray-700">
                                <li className="flex items-center gap-3">
                                    <FaMapMarkerAlt className="text-green-600 text-xl" />
                                    Plot No. 286, Co-operative Colony, Near Ukrid More - 827001
                                </li>
                                <li className="flex items-center gap-3">
                                    <FaPhoneAlt className="text-green-600 text-xl" />
                                    <span>
                                        <p>+91 8904117494</p>
                                        <p>+91 9431586911</p>
                                    </span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <FaEnvelope className="text-green-600 text-xl" />
                                    getwellhospital@gmail.com
                                </li>
                                <li className="flex items-center gap-3">
                                    <FaClock className="text-green-600 text-xl" />
                                    24 Hrs Emergency & Medical Service
                                </li>
                            </ul>

                            <div className="mt-8">
                                <img
                                    src="/images/hospital-building.jpg"
                                    alt="Get Well Hospital"
                                    className="rounded-lg shadow-md"
                                />
                            </div>
                        </div>

                        {/* Right: Contact Form */}
                        <div className="bg-white shadow-md rounded-lg p-8">
                            <h3 className="text-2xl font-semibold text-green-700 mb-6">Send Us a Message</h3>
                            <form className="space-y-5">
                                <div>
                                    <label className="block text-gray-700 mb-2">Full Name</label>
                                    <input
                                        type="text"
                                        placeholder="Enter your name"
                                        className="w-full border rounded-md p-3 focus:ring-2 focus:ring-green-500 outline-none"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 mb-2">Email</label>
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="w-full border rounded-md p-3 focus:ring-2 focus:ring-green-500 outline-none"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 mb-2">Message</label>
                                    <textarea
                                        rows="4"
                                        placeholder="Write your message here..."
                                        className="w-full border rounded-md p-3 focus:ring-2 focus:ring-green-500 outline-none"
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Google Map */}
                    <div className="mt-16">
                        <iframe
                            title="Get Well Hospital Location"
                            src="https://www.google.com/maps?q=Co-operative+Colony+Ukrid+More,+Bokaro,+Jharkhand&output=embed"
                            className="w-full h-96 rounded-lg shadow-lg border"
                            allowFullScreen
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}
