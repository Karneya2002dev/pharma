import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import doctorImg from '../assets/doctor.png';

const floatTransition = {
  y: [0, -10, 0],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: 'easeInOut',
  },
};

const HeroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-100px 0px',
  });

  return (
    <div
      ref={ref}
      className="min-h-screen flex items-center justify-center bg-white px-4 py-10"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1 }}
        className="flex flex-col items-center text-center bg-gradient-to-br from-sky-100 to-white text-gray-800 rounded-3xl shadow-2xl w-full max-w-5xl p-8 md:p-16 gap-10 relative overflow-hidden"
      >
        {/* Floating Tags */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={
            isInView
              ? { opacity: 1, x: 0, ...floatTransition }
              : {}
          }
          transition={{ delay: 0.4 }}
          className="absolute top-[10%] left-[8%] bg-white border border-sky-200 text-sky-700 shadow-lg px-5 py-1.5 rounded-full text-sm font-semibold z-30 backdrop-blur-md"
        >
          ✓ Reliability
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={
            isInView
              ? { opacity: 1, x: 0, ...floatTransition }
              : {}
          }
          transition={{ delay: 0.5 }}
          className="absolute top-[25%] right-[8%] bg-white border border-sky-200 text-sky-700 shadow-lg px-5 py-1.5 rounded-full text-sm font-semibold z-30 backdrop-blur-md"
        >
          ★ Experience
        </motion.div>

     {/* Glowing Doctor Image with Info Card Overlay */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={isInView ? { opacity: 1, y: 0 } : {}}
  transition={{ delay: 0.3 }}
  className="relative flex flex-col items-center"
>
  <div className="absolute -inset-6 rounded-full bg-gradient-to-tr from-blue-300 to-sky-500 blur-3xl opacity-40 z-0"></div>
  <img
    src={doctorImg}
    alt="Doctor"
    className="relative w-[220px] md:w-[320px] z-10 object-contain drop-shadow-lg"
  />

  {/* Info Card inserted here */}
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={isInView ? { opacity: 1, y: 0 } : {}}
    transition={{ delay: 0.6 }}
    className="absolute bottom-[-40px] md:bottom-[-50px] bg-sky-600/90 backdrop-blur-md text-white text-sm p-5 w-72 md:w-80 rounded-xl shadow-lg leading-tight z-20"
  >
    <strong className="text-base">Empowered by Technology</strong>
    <p className="mt-1 text-xs">
      Digital diagnostics, cutting-edge tools, and reliable care—all for your well-being.
    </p>
  </motion.div>
</motion.div>


        {/* Title & Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="space-y-4 max-w-2xl"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold leading-snug text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-500">
            Welcome to <span className="text-sky-600">Fourmax Clinic</span>
          </h1>

          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            <strong>We treat</strong> not just the illness — we focus on the whole person.
            At <span className="font-semibold text-sky-700">Fourmax Pharmaceuticals</span>,
            our mission is to deliver <span className="text-blue-600 font-medium">trustworthy, modern healthcare solutions</span>.
          </p>
        </motion.div>

        {/* Stats Section */}
        <div className="grid grid-cols-3 gap-6 mt-8 text-center text-sm text-gray-700">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1 }}
          >
            <p className="text-sky-600 text-2xl font-bold">10+</p>
            <p className="text-xs">Years of Experience</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.1 }}
          >
            <p className="text-sky-600 text-2xl font-bold">20+</p>
            <p className="text-xs">Expert Physicians</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.2 }}
          >
            <p className="text-sky-600 text-2xl font-bold">100%</p>
            <p className="text-xs">Digital Diagnostics</p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
