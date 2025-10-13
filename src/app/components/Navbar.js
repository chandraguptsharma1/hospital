"use client";
import Link from "next/link";
import { FaHospitalSymbol } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-green-50 shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo + Name */}
        <div className="flex items-center space-x-2">
          <FaHospitalSymbol className="text-green-600 text-2xl" />
          <span className="text-2xl font-bold text-green-700">GET WELL HOSPITAL</span>
        </div>

        {/* Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <li>
            <Link href="/" className="hover:text-green-600">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-green-600">
              About
            </Link>
          </li>
          <li>
            <Link href="/services" className="hover:text-green-600">
              Services
            </Link>
          </li>
          <li>
            <Link href="/doctors" className="hover:text-green-600">
              Doctors
            </Link>
          </li>

          <li>
            <Link href="/contact" className="hover:text-green-600">
              Contact
            </Link>
          </li>
        </ul>

        {/* Appointment Button */}
        <Link
          href="/appointment"
          className="ml-6 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md shadow"
        >
          Make Appointment
        </Link>
      </div>
    </nav>
  );
}
