import React from 'react';
import { motion } from 'framer-motion';
import { FaFlask, FaIndustry, FaCheckCircle, FaTruckMoving } from 'react-icons/fa';

const services = [
  {
    icon: <FaFlask size={80} className="text-white" />,
    title: 'Research & Development',
    description:
      'Developing breakthrough medications through innovative scientific research and clinical trials.',
  },
  {
    icon: <FaIndustry size={80} className="text-white" />,
    title: 'Manufacturing',
    description:
      'Producing high-quality pharmaceutical products in state-of-the-art facilities.',
  },
  {
    icon: <FaCheckCircle size={80} className="text-white" />,
    title: 'Quality Control',
    description:
      'Ensuring all products meet rigorous safety and efficacy standards.',
  },
  {
    icon: <FaTruckMoving size={80} className="text-white" />,
    title: 'Distribution',
    description:
      'Global supply chain ensuring our products reach patients worldwide.',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.8,
      type: 'spring',
    },
  }),
};

const WhatWeDoSection = () => {
  return (
    <div className="w-full py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-12 relative inline-block">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
            What We Do
          </span>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-400 to-blue-300 mt-2 mx-auto rounded-full" />
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {services.map((service, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              className="relative group transition-all duration-500"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 blur-sm transition duration-500 rounded-xl" />

              <div className="relative z-10 bg-white text-gray-800 shadow-xl flex rounded-xl overflow-hidden h-64 md:h-72">
                
                {/* Icon Background Half */}
                <div className="w-1/2 bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                  {service.icon}
                </div>

                {/* Text Half */}
                <div className="w-1/2 p-6 flex flex-col justify-center text-left">
                  <h3 className="text-xl font-bold text-blue-700 mb-2">{service.title}</h3>
                  <div className="h-1 w-10 bg-purple-400 mb-4" />
                  <p className="text-sm text-gray-600">{service.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatWeDoSection;
