"use client";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const services = [
    { name: "OPD", img: "/services/opd.jpg" },
    { name: "IPD", img: "/services/ipd.jpg" },
    { name: "24-Hour Emergency", img: "/services/emergency.jpg" },
    { name: "Day Care Services", img: "/services/daycare.jpg" },
    { name: "Digital X-Ray", img: "/services/xray.jpg" },
    { name: "ECG", img: "/services/ecg.jpg" },
    { name: "Preventive Health & Wellness", img: "/services/wellness.jpg" },
    { name: "24 Hour Pharmacy", img: "/services/pharmacy.jpg" },
    { name: "Diagnostics Services", img: "/services/diagnostics.jpg" },
];

export default function ServicesPage() {
    return (
        <>
            <Navbar />

            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Section Heading */}
                    <p className="text-green-600 font-semibold uppercase tracking-wide flex items-center gap-2">
                        <span className="w-8 h-[2px] bg-green-600"></span> Our Services
                    </p>
                    <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-800">
                        Hospital Services
                    </h2>
                    <p className="mt-2 text-gray-500 max-w-2xl">
                        We provide specialized healthcare services with modern facilities
                        and expert medical professionals.
                    </p>

                    {/* Services Grid */}
                    <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {services.map((service, i) => (
                            <div
                                key={i}
                                className="bg-white rounded-lg shadow-md hover:shadow-lg transition overflow-hidden"
                            >
                                {/* Service Image */}
                                <img
                                    src={service.img}
                                    alt={service.name}
                                    className="w-full h-52 object-cover"
                                />
                                {/* Service Name */}
                                <div className="p-4 text-center">
                                    <h3 className="text-lg font-semibold text-gray-800">
                                        {service.name}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
