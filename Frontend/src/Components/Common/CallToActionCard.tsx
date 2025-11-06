 import React from "react";
import { Smartphone, ArrowRight } from "lucide-react";
import Banner1 from "../../assets/Banner/Banner_1.png";

const CallToActionCard: React.FC = () => {
  return (
    <section className="w-full bg-gradient-to-r from-teal-50 to-white py-12 px-6 md:px-12">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-lg overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 p-6 md:p-10 border border-teal-100">
        {/* Left Text Content */}
        <div className="flex-1 space-y-4 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
            Don’t Wait for the Right Moment — <br />
            <span className="text-teal-600">Start Healing Today</span>
          </h2>
          <p className="text-gray-600 text-sm md:text-base max-w-md mx-auto md:mx-0">
            Immediate support is available. Our experts are ready to help you
            with anxiety, depression, stress, or emotional distress. Reach out
            now and take your first step toward peace of mind.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 mt-4">
            <a
              href="tel:+911234567890"
              className="flex items-center gap-2 bg-teal-600 text-white px-6 py-3 rounded-full font-medium hover:bg-teal-700 transition-all duration-300 shadow-sm"
            >
              <Smartphone size={20} />
              <span>+91 12345 67890</span>
            </a>
            <a
              href="/appointment"
              className="flex items-center gap-2 border border-teal-600 text-teal-600 px-6 py-3 rounded-full font-medium hover:bg-teal-600 hover:text-white transition-all duration-300"
            >
              Book Appointment <ArrowRight size={18} />
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center">
          <img
            src={Banner1}
            alt="Counseling support"
            className="w-72 md:w-[8000px] h-auto object-contain drop-shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default CallToActionCard;
