 import React from "react";
import { motion } from "framer-motion"; // Import framer-motion

// Image Imports
import offline from "../../assets/offline_counseling.png";
import online from "../../assets/online_counselling.png";
import phoneCall from "../../assets/phoneCall_counselling.png";
import chat from "../../assets/text_counselling.png";

// Data for counseling modes
const counseling = [
  {
    id: 1,
    name: "Offline Counseling",
    icon: "🏥",
    image: offline,
    shortDescription:
      "Meet your therapist face-to-face at our clinic for in-person sessions in a calm and confidential environment.",
  },
  {
    id: 2,
    name: "Online Counseling",
    icon: "💻",
    image: online,
    shortDescription:
      "Connect with our licensed psychologists from anywhere through secure video sessions designed for your convenience.",
  },
  {
    id: 3,
    name: "Phone Call Counseling",
    icon: "📞",
    image: phoneCall,
    shortDescription:
      "Speak directly with a professional counselor via phone for private and flexible therapy sessions.",
  },
  {
    id: 4,
    name: "Chat Counseling",
    icon: "💬",
    image: chat,
    shortDescription:
      "Text-based counseling for quick emotional support and therapy sessions through real-time chat with experts.",
  },
];

// Animation variants for the container (grid)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Animate children one by one
    },
  },
};

// Animation variants for each card
const cardVariants = {
  hidden: { opacity: 0, y: 20 }, // Start invisible and 20px down
  visible: {
    opacity: 1,
    y: 0, // Animate to visible and original position
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

const CounselingMode: React.FC = () => {
  return (
    // Section wrapper with padding and a light background
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="font-bold text-black text-3xl md:text-4xl">
            Our <span className="  text-red-500 ">Counseling</span> Mode
          </h2>
        </div>

        {/* Responsive Grid Container with Framer Motion */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible" // Animate when the element enters the viewport
          viewport={{ once: true }} // Only animate once
        >
          {/* Map over the counseling data to create cards */}
          {counseling.map((mode) => (
            <motion.div
              key={mode.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col transition-all duration-300"
              variants={cardVariants} // Apply card animation
              whileHover={{ scale: 1.05, shadow: "xl" }} // Animate on hover
            >
              {/* Card Image */}
              <img
                src={mode.image}
                alt={mode.name}
                className="w-full h-48 object-cover" // Fixed height and object-cover
              />

              {/* Card Content */}
              <div className="p-6 flex flex-col flex-grow"> {/* flex-grow ensures all cards are the same height */}
                <div className="flex items-center mb-4">
                  <span
                    className="text-3xl mr-3"
                    role="img"
                    aria-label={`${mode.name} icon`}
                  >
                    {mode.icon}
                  </span>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {mode.name}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm">
                  {mode.shortDescription}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CounselingMode;