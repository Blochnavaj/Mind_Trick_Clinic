import React from "react";
import ServiceCard from "./ServiceCard";
import {services} from "../../assets/assets";

const Services: React.FC = () => {
  return (
    <section id="services" className="py-16 bg-gradient-to-b from-red-50 to-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Our <span className="text-red-500">Counseling</span> Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
