  import { Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-10 pb-6 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold text-teal-500 mb-3">
            Mind<span className="text-white">Trick</span>  
          </h2>
          <p className="text-sm leading-relaxed">
            Your trusted mental health and wellness center. We help you heal,
            grow, and live with peace through professional therapy and care.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:text-teal-400 transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-teal-400 transition-colors">
                About Us
              </a>
            </li>
            <li>
              <a
                href="/services"
                className="hover:text-teal-400 transition-colors"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="/appointment"
                className="hover:text-teal-400 transition-colors"
              >
                Book Appointment
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-teal-400" /> +91 98765 43210
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="text-teal-400" /> info@mindtrickclinic.com
            </li>
            <li>Ahmedabad, Gujarat, India</li>
          </ul>
        </div>

        {/* Social & Payments */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Connect & Pay</h3>
          <div className="flex items-center gap-4 mb-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400 transition-all"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-all"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-all"
            >
              <Facebook size={20} />
            </a>
          </div>

          <p className="text-sm mb-2">We Accept All Payments:</p>
          <div className="flex items-center gap-3">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/5a/Google_Pay_Logo.svg"
              alt="GPay"
              className="h-5"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/42/PhonePe_Logo.svg"
              alt="PhonePe"
              className="h-5"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/08/Paytm_logo.png"
              alt="Paytm"
              className="h-5"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg"
              alt="Card"
              className="h-5"
            />
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Mind Trick Clinic. All rights reserved. | Designed by{" "}
        <span className="text-teal-400 font-medium">Bloch Navaj</span>
      </div>
    </footer>
  );
}

export default Footer;
