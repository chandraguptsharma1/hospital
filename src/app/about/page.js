"use client";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AboutPage() {
    return (
        <>
            <Navbar />

            {/* About Us Section */}
            <section className="bg-teal-800 py-24">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    {/* Left Content */}
                    <div className="text-white space-y-6">
                        {/* Small Title */}
                        <p className="uppercase text-yellow-400 font-semibold tracking-wide">
                            ~ Who We Are
                        </p>

                        {/* Main Heading */}
                        <h2 className="text-3xl md:text-4xl font-bold">
                            We Help To Get You Well.
                        </h2>

                        {/* Main Description */}
                        <p className="text-gray-200 leading-relaxed">
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy text
                            ever since the 1500s,
                        </p>

                        {/* Bottom Small Block */}
                        <div className="flex items-start gap-4">
                            <img
                                src="https://i.ibb.co/MyW7qtYQ/bro.png"
                                alt="Hospital Icon"
                                className="w-10 h-10"
                            />
                            <p className="text-sm text-gray-300 leading-relaxed">
                                It is a long established fact that a reader will be distracted
                                by the readable content of a page when looking at its layout.
                                The point of using Lorem Ipsum is that it has a more-or-less
                                normal distribution of letters, making it look like readable
                                English.
                            </p>
                        </div>
                    </div>

                    {/* Right Illustration */}
                    <div className="flex justify-center">
                        <img
                            src="https://i.ibb.co/CdZ32FB/rafiki.png"
                            alt="Hospital Illustration"
                            className="w-full max-w-md"
                        />
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
