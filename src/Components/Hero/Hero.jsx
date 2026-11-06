
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const Hero = () => {


  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Navbar animation
  const navbarVariants = {
    hidden: { opacity: 0, y: -40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  // Bottom to top animation
  const bottomToTopVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut', delay: 0.1 },
    },
  };

  // Right to left animation
  const rightToLeftVariants = {
    hidden: { opacity: 0, x: 60 },
    visible: (customDelay) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
        delay: customDelay,
      },
    }),
  };

  // Mobile menu animation
  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: 'auto',
      transition: { duration: 0.3, ease: 'easeInOut' },
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.2, ease: 'easeInOut' },
    },
  };

  return (
    <div
      dir="ltr"
      className="min-h-screen w-full bg-[#13292a] text-white font-sans overflow-x-hidden relative flex flex-col justify-between"
    >
      {/* Navbar */}
      <motion.header
        variants={navbarVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-[1200px] mx-auto px-6 py-5 flex items-center justify-between z-30 relative"
      >
        {/* Logo */}
        <a
          href="#home"
          className="flex items-center gap-1.5 text-xl font-bold tracking-tight"
        >
          <span className="text-[#f5b417] text-2xl font-black">e</span>
          <span>learna</span>
        </a>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-gray-200">
          <a href="#home" className="hover:text-[#f5b417] transition flex items-center gap-1">
            Home <span className="text-[10px]">⌄</span>
          </a>

          <a href="#courses" className="hover:text-[#f5b417] transition flex items-center gap-1">
            Courses <span className="text-[10px]">⌄</span>
          </a>

          <a href="#pages" className="hover:text-[#f5b417] transition flex items-center gap-1">
            Pages <span className="text-[10px]">⌄</span>
          </a>

          <a href="#blog" className="hover:text-[#f5b417] transition flex items-center gap-1">
            Blog <span className="text-[10px]">⌄</span>
          </a>

          <a href="#contact" className="hover:text-[#f5b417] transition flex items-center gap-1">
            Contact <span className="text-[10px]">⌄</span>
          </a>
        </nav>

        {/* Navbar right side */}
        <div className="flex items-center gap-5">
          {/* Shopping bag */}
          <div className="relative cursor-pointer">
            <svg
              className="w-5 h-5 text-gray-200 hover:text-white transition"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>

            <span className="absolute -top-1.5 -right-1.5 bg-[#f5b417] text-[#13292a] text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
              0
            </span>
          </div>

          {/* Login and Register */}
          <div className="hidden sm:flex items-center gap-2 text-sm font-medium">
            <a href="#login" className="hover:text-[#f5b417] transition">
              Login
            </a>

            <span className="text-gray-600">|</span>

            <a href="#register" className="hover:text-[#f5b417] transition">
              Register
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex flex-col justify-center items-center w-6 h-6 gap-1.5 z-40 text-gray-200 focus:outline-none cursor-pointer"
          >
            <span
              className={`h-0.5 w-6 bg-current transform transition duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />

            <span
              className={`h-0.5 w-6 bg-current transition duration-300 ${
                isMenuOpen ? 'opacity-0' : ''
              }`}
            />

            <span
              className={`h-0.5 w-6 bg-current transform transition duration-300 ${
                isMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>

        {/* Mobile dropdown menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="absolute top-full left-0 w-full bg-[#163133] shadow-xl md:hidden flex flex-col px-6 py-4 gap-4 border-b border-white/5 z-30 overflow-hidden"
            >
              <a
                href="#home"
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-[#f5b417] text-sm py-1 border-b border-white/5"
              >
                Home
              </a>

              <a
                href="#courses"
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-[#f5b417] text-sm py-1 border-b border-white/5"
              >
                Courses
              </a>

              <a
                href="#pages"
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-[#f5b417] text-sm py-1 border-b border-white/5"
              >
                Pages
              </a>

              <a
                href="#blog"
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-[#f5b417] text-sm py-1 border-b border-white/5"
              >
                Blog
              </a>

              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-[#f5b417] text-sm py-1"
              >
                Contact
              </a>

              <div className="flex sm:hidden items-center gap-3 pt-2 text-sm border-t border-white/5">
                <a href="#login" className="hover:text-[#f5b417]">
                  Login
                </a>

                <span className="text-gray-600">|</span>

                <a href="#register" className="hover:text-[#f5b417]">
                  Register
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Main Hero */}
      <main className="w-full max-w-[1200px] mx-auto px-6 py-6 md:py-10 flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

        {/* Left column: Image and cards */}
        <div className="lg:col-span-6 order-1 relative flex justify-center items-center min-w-0">

          {/* Decorative circles */}
          <div className="w-4 h-4 rounded-full border-2 border-blue-400 absolute top-6 left-12 animate-pulse" />

          <div className="w-2 h-2 rounded-full bg-[#f5b417] absolute top-28 left-6" />

          <div className="w-2.5 h-2.5 rounded-full bg-[#f5b417] absolute bottom-24 right-6" />

          {/* Main student image */}
          <motion.div
            variants={bottomToTopVariants}
            initial="hidden"
            animate="visible"
            className="relative z-10 w-full max-w-[360px] sm:max-w-[400px]"
          >
            <div className="absolute bottom-0 left-4 right-4 h-[76%] bg-[#0e2021] rounded-2xl -z-10" />
<img
  src="https://images.pexels.com/photos/7605938/pexels-photo-7605938.jpeg?cs=srgb"
  alt="Girl studying with laptop and notebook"
  className="w-full h-auto object-cover rounded-2xl"
/>
          </motion.div>

          {/* Achievement awards card */}
          <motion.div
            variants={rightToLeftVariants}
            custom={0.4}
            initial="hidden"
            animate="visible"
            className="absolute left-[-5px] sm:left-2 bottom-24 bg-white text-[#13292a] px-3.5 py-2.5 rounded-lg shadow-xl flex items-center gap-3 border border-gray-100 z-20"
          >
            <div className="w-9 h-9 rounded-md bg-gray-100 flex items-center justify-center text-[#13292a]">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>

            <div>
              <h4 className="text-base font-black leading-none">125+</h4>
              <p className="text-[11px] text-gray-500 font-medium mt-0.5">
                Achievement awards
              </p>
            </div>
          </motion.div>

          {/* Trusted By card */}
          <motion.div
            variants={rightToLeftVariants}
            custom={0.6}
            initial="hidden"
            animate="visible"
            className="absolute right-[-5px] sm:right-4 bottom-5 bg-[#1a3436]/95 backdrop-blur-sm text-white px-4 py-3 rounded-xl shadow-xl border border-white/10 text-center z-20 min-w-[180px]"
          >
            <p className="text-[10px] text-gray-300 font-medium">
              Trusted By
            </p>

            <h4 className="text-xs font-bold mt-0.5">
              15000+ enrolled students
            </h4>

            {/* Student avatars */}
            <div className="flex items-center justify-center -space-x-2 my-2">
              <img
                className="w-6 h-6 rounded-full border border-[#1a3436] object-cover"
                src="https://i.pravatar.cc/100?img=47"
                alt="Student 1"
              />

              <img
                className="w-6 h-6 rounded-full border border-[#1a3436] object-cover"
                src="https://i.pravatar.cc/100?img=44"
                alt="Student 2"
              />

              <img
                className="w-6 h-6 rounded-full border border-[#1a3436] object-cover"
                src="https://i.pravatar.cc/100?img=32"
                alt="Student 3"
              />

              <img
                className="w-6 h-6 rounded-full border border-[#1a3436] object-cover"
                src="https://i.pravatar.cc/100?img=12"
                alt="Student 4"
              />
            </div>

            {/* Rating stars */}
            <div className="flex items-center justify-center gap-1 text-[11px] font-medium">
              <span className="text-[#f5b417]">★★★★★</span>

              <span className="text-gray-300">4.94 (625)</span>
            </div>
          </motion.div>
        </div>

        {/* Right column: Text content */}
        <motion.div
          variants={bottomToTopVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-6 space-y-4 text-left order-2"
        >
          <span className="inline-block text-xs font-bold tracking-[0.15em] text-gray-300">
            ONLINE LEARNING
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-[1.2] tracking-tight">
            More than <span className="text-[#f5b417]">25000+</span>
            <br />
            education courses
            <br />
            online
          </h1>

          <p className="text-sm md:text-base text-gray-300 max-w-md leading-relaxed">
            Lorem ipsum dolor sit amet consectetur. Gravida enim risus
            sollicitudin mauris tincidunt commodo ornare.
          </p>

          <div className="pt-2">
            <motion.button
              type="button"
              whileHover={{
                scale: 1.02,
                backgroundColor: '#f5b417',
                color: '#13292a',
                borderColor: '#f5b417',
              }}
              whileTap={{ scale: 0.98 }}
              className="px-7 py-3 border border-gray-500 rounded-md text-sm font-semibold text-white transition-colors duration-300 cursor-pointer"
            >
              Get Started
            </motion.button>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default Hero;
