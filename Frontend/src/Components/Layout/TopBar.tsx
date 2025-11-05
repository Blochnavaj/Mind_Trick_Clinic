 import { Instagram, Linkedin, Phone } from "lucide-react";

function TopBar() {
  return (
    <div className="w-full bg-gradient-to-r from-red-400 to-red-600 text-white px-4 md:px-8 py-2 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4 text-sm">
      {/* Left Text Section */}
      <p className="font-medium text-center sm:text-left text-xs sm:text-sm md:text-base">
        Appointment based only Monday to Saturday (10 AM – 6 PM)
      </p>

      {/* Right Icons Section */}
      <div className="flex flex-wrap items-center justify-center sm:justify-end gap-3 sm:gap-5 text-xs sm:text-sm">
        {/* WhatsApp / Phone */}
        <a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 hover:text-green-300 transition-all duration-200"
        >
          <Phone size={16} className="shrink-0" />
          <span className="hidden sm:inline">+91 98765 43210</span>
        </a>

        {/* Instagram */}
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-300 transition-all duration-200"
          aria-label="Instagram"
        >
          <Instagram size={18} />
        </a>

        {/* LinkedIn */}
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-300 transition-all duration-200"
          aria-label="LinkedIn"
        >
          <Linkedin size={18} />
        </a>
      </div>
    </div>
  );
}

export default TopBar;
