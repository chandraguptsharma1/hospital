"use client";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const doctors = [
    {
        name: "Dr. Nabilla Sp. PD",
        specialization: "Internist",
        status: "away",
        img: "https://img.freepik.com/free-photo/beautiful-young-female-doctor-looking-camera-office_1301-7807.jpg?semt=ais_hybrid&w=740&q=80",
    },
    {
        name: "Dr. Ibrahim M. Kes, Sp. B",
        specialization: "Surgeon",
        status: "online",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJvGYshs3AKgKcA5W77fNPPgTKSjqLer7tuw&s",
    },
    {
        name: "Merlina Ha S. Psi, M. Psi",
        specialization: "Clinical Psychology",
        status: "away",
        img: "https://hips.hearstapps.com/hmg-prod/images/portrait-of-a-happy-young-doctor-in-his-clinic-royalty-free-image-1661432441.jpg",
    },
    {
        name: "Dr. Arto Edmunds Sp. P",
        specialization: "Lung Specialist",
        status: "online",
        img: "https://plus.unsplash.com/premium_photo-1673953510158-174d4060db8b?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWVkaWNhbCUyMGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
        name: "Dr. Alexander Sp. B",
        specialization: "Surgeon",
        status: "online",
        img: "https://hips.hearstapps.com/hmg-prod/images/portrait-of-a-happy-young-doctor-in-his-clinic-royalty-free-image-1661432441.jpg",
    },
    {
        name: "Dr. Anisa Rahman Sp. PD",
        specialization: "Internist",
        status: "offline",
        img: "https://media.sciencephoto.com/f0/14/06/85/f0140685-800px-wm.jpg",
    },
];

const statusColors = {
    online: "text-green-600 bg-green-100",
    away: "text-yellow-600 bg-yellow-100",
    offline: "text-red-600 bg-red-100",
};

export default function DoctorsPage() {
    return (
        <>
            <Navbar />

            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Section Heading */}
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10">
                        Our Doctors
                    </h2>

                    {/* Doctors Grid */}
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {doctors.map((doc, i) => (
                            <div
                                key={i}
                                className="border rounded-xl bg-white shadow-sm hover:shadow-lg transition overflow-hidden"
                            >
                                {/* Image */}
                                <div className="relative">
                                    <img
                                        src={doc.img}
                                        alt={doc.name}
                                        className="w-full h-72 object-cover"
                                    />
                                    {/* Status Badge */}
                                    <span
                                        className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-medium ${statusColors[doc.status]}`}
                                    >
                                        {doc.status.charAt(0).toUpperCase() + doc.status.slice(1)}
                                    </span>
                                </div>

                                {/* Info */}
                                <div className="p-4">
                                    <h3 className="font-semibold text-lg text-gray-800">
                                        {doc.name}
                                    </h3>
                                    <p className="text-gray-500 text-sm">{doc.specialization}</p>
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
