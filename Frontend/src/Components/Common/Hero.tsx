 import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

function Hero() {
  return (
    <section className="w-full bg-gradient-to-r from-teal-50 via-white to-teal-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 flex flex-col-reverse md:flex-row items-center gap-10">
        {/* Left Text Content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            Heal Your Mind, <br />
            <span className="text-teal-600">Transform Your Life</span>
          </h1>
          <p className="mt-4 text-gray-600 text-sm sm:text-base md:text-lg max-w-md mx-auto md:mx-0">
            Mind Trick Clinic provides professional care for depression,
            anxiety, stress, and more — helping you achieve a healthier, happier
            state of mind.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              to="/appointment"
              className="bg-teal-600 text-white px-6 py-3 rounded-full font-medium hover:bg-teal-700 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Book Appointment <ArrowRight size={18} />
            </Link>
            <Link
              to="/about"
              className="border border-teal-600 text-teal-600 px-6 py-3 rounded-full font-medium hover:bg-teal-600 hover:text-white transition-all duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center">
          <img
            src="https://img.freepik.com/free-photo/psychologist-consulting-patient-office_1157-41027.jpg?t=st=1730710000~exp=1730713600~hmac=b9638fa9369ffb7e477fc98960c469326ee0b781c8f18292c3801e7ddc3a41eb&w=1380"
            alt="Therapist and patient"
            className="rounded-2xl shadow-lg w-full max-w-md md:max-w-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
