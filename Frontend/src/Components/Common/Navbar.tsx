 import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full z-50 bg-white/90 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <RouterLink
          to="/"
          className="text-2xl font-bold text-teal-600 tracking-wide"
        >
          Mind<span className="text-gray-800">Trick</span>
        </RouterLink>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <RouterLink
            to="/"
            className="text-gray-700 hover:text-teal-600 transition-colors duration-200 font-medium"
          >
            Home
          </RouterLink>

          {/* Smooth Scroll to Services */}
          <ScrollLink
            to="services"
            smooth={true}
            duration={600}
            offset={-80} // adjust for navbar height
            className="text-gray-700 hover:text-teal-600 transition-colors duration-200 font-medium cursor-pointer"
          >
            Services
          </ScrollLink>

          <RouterLink
            to="/doctors"
            className="text-gray-700 hover:text-teal-600 transition-colors duration-200 font-medium"
          >
            Doctors
          </RouterLink>
          <RouterLink
            to="/faq"
            className="text-gray-700 hover:text-teal-600 transition-colors duration-200 font-medium"
          >
            FAQ
          </RouterLink>
          <RouterLink
            to="/contact"
            className="text-gray-700 hover:text-teal-600 transition-colors duration-200 font-medium"
          >
            Contact
          </RouterLink>

          <RouterLink
            to="/appointment"
            className="bg-teal-600 text-white px-4 py-2 rounded-full hover:bg-teal-700 transition-all duration-300 shadow-sm"
          >
            Book Appointment
          </RouterLink>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md border-t border-gray-100">
          <div className="flex flex-col items-center gap-4 py-4">
            <RouterLink
              to="/"
              onClick={() => setIsOpen(false)}
              className="text-gray-700 hover:text-teal-600 font-medium"
            >
              Home
            </RouterLink>

            <ScrollLink
              to="services"
              smooth={true}
              duration={600}
              offset={-80}
              onClick={() => setIsOpen(false)}
              className="text-gray-700 hover:text-teal-600 font-medium cursor-pointer"
            >
              Services
            </ScrollLink>

            <RouterLink
              to="/appointment"
              onClick={() => setIsOpen(false)}
              className="bg-teal-600 text-white px-4 py-2 rounded-full hover:bg-teal-700 transition-all duration-300 shadow-sm"
            >
              Book Appointment
            </RouterLink>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
