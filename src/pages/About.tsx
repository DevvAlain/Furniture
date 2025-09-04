import React from 'react';
import { motion } from 'framer-motion';
import banner2 from '../assets/images/banner 2.png';
import interior1 from '../assets/images/interior 1.png';
import interior2 from '../assets/images/interior 2.png';
import icon1 from '../assets/icons/icon 1.png';
import icon2 from '../assets/icons/icon 2.png';
import icon3 from '../assets/icons/icon 3.png';
import icon4 from '../assets/icons/icon 4.png';
import icon5 from '../assets/icons/icon 5.png';
import icon6 from '../assets/icons/icon 6.png';
import icon7 from '../assets/icons/icon 7.png';

const About: React.FC = () => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0 },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0 },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section
        className="
          relative w-full overflow-hidden
          h-[50vh] min-h-[300px] sm:h-[42vh] lg:h-[58vh]
          bg-center bg-cover bg-no-repeat
          bg-[position:50%_35%]
        "
        style={{ backgroundImage: `url(${banner2})` }}
      >
        {/* Improved overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/15 to-transparent"></div>

        <div className="relative z-10 flex items-end h-full">
          <div className="max-w-7xl mx-auto w-full px-6 sm:px-6 lg:px-8 pb-12 sm:pb-16 md:pb-24 lg:pb-28">
            <motion.h1
              className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold drop-shadow-lg"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              About Us
            </motion.h1>
          </div>
        </div>
      </section>

      {/* Main About Section */}
      <section className="py-12 sm:py-16 lg:py-24 px-6 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* LEFT: text */}
            <motion.div
              variants={fadeInLeft}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <motion.p
                className="text-brand-gold text-xs sm:text-sm font-bold tracking-wider uppercase mb-4"
                variants={fadeInUp}
              >
                ABOUT US
              </motion.p>
              <motion.h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6"
                variants={fadeInUp}
              >
                Come Join <span className="text-brand-gold">Our</span>
                <br />
                Manufactory
              </motion.h2>
              <motion.p
                className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-[65ch]"
                variants={fadeInUp}
              >
                Working with Vietnam is full of potential – but only when you
                find the right partner. We're your trusted local team, offering
                insight, control, and clarity in every step of the sourcing
                journey.
              </motion.p>
            </motion.div>

            {/* RIGHT: layered images */}
            <motion.div
              variants={fadeInRight}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <div className="relative w-full max-w-[400px] sm:max-w-[500px] lg:max-w-[560px] aspect-[4/3] mx-auto">
                {/* Ảnh trên (trước) */}
                <motion.img
                  src={interior1}
                  alt="Workshop Interior Top View"
                  loading="lazy"
                  decoding="async"
                  className="absolute z-10 top-0 left-0 w-[86%] h-[64%] object-cover rounded-xl sm:rounded-2xl shadow-lg sm:shadow-[0_12px_30px_rgba(0,0,0,0.08)]"
                  variants={scaleIn}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  whileHover={{ scale: 1.05 }}
                />

                {/* Ảnh dưới (sau) */}
                <motion.img
                  src={interior2}
                  alt="Workshop Interior Bottom View"
                  loading="lazy"
                  decoding="async"
                  className="absolute z-0 right-0 bottom-0 w-[78%] h-[62%] object-cover rounded-xl sm:rounded-2xl shadow-lg sm:shadow-[0_12px_30px_rgba(0,0,0,0.08)]"
                  variants={scaleIn}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  whileHover={{ scale: 1.05 }}
                />

                {/* Pattern chấm ở góc trái dưới của khung trên - hidden on mobile */}
                <motion.div
                  className="pointer-events-none absolute z-[5] left-6 sm:left-10 top-[58%] w-24 sm:w-36 h-16 sm:h-24
                   text-gray-300/60 sm:text-gray-300/80 hidden sm:block
                   [background-image:radial-gradient(currentColor_2px,transparent_2px)]
                   [background-size:8px_8px] sm:[background-size:12px_12px]"
                  variants={fadeInUp}
                  transition={{ duration: 0.6, delay: 0.6 }}
                />

                {/* Thẻ 20+ Product chồng ở mép trái-dưới ảnh trên */}
                <motion.div
                  className="absolute z-20 left-[26%] top-[58%] -translate-x-1/2 -translate-y-1/2
                   bg-white rounded-xl sm:rounded-2xl px-3 py-2 sm:px-5 sm:py-3
                   shadow-lg sm:shadow-[0_12px_30px_rgba(0,0,0,0.08)] ring-1 ring-black/5
                   hover:scale-105 transition-transform duration-300"
                  variants={scaleIn}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900">
                      20+
                    </div>
                    <div className="text-xs text-slate-500">Product</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      {/* Services Section */}
      <section className="py-12 sm:py-16 lg:py-24 px-6 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.div
              className="text-center p-4 sm:p-6 lg:p-8 group"
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className="mx-auto mb-4 sm:mb-6 flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={icon5}
                  alt="Modern Machine"
                  loading="lazy"
                  className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 transition-all duration-300"
                />
              </motion.div>
              <motion.h3
                className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-brand-ink"
                variants={fadeInUp}
              >
                Modern Machine
              </motion.h3>
              <motion.p
                className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-[65ch] mx-auto"
                variants={fadeInUp}
              >
                Working with Vietnam is full of potential – but only when you
                find the right partner for manufacturing excellence.
              </motion.p>
            </motion.div>

            <motion.div
              className="text-center p-4 sm:p-6 lg:p-8 group"
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className="mx-auto mb-4 sm:mb-6 flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: -5 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={icon6}
                  alt="Quality Control"
                  loading="lazy"
                  className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 transition-all duration-300"
                />
              </motion.div>
              <motion.h3
                className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-brand-ink"
                variants={fadeInUp}
              >
                Quality Control
              </motion.h3>
              <motion.p
                className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-[65ch] mx-auto"
                variants={fadeInUp}
              >
                Rigorous quality standards ensure every product meets
                international specifications and customer expectations.
              </motion.p>
            </motion.div>

            <motion.div
              className="text-center p-4 sm:p-6 lg:p-8 group sm:col-span-2 lg:col-span-1"
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className="mx-auto mb-4 sm:mb-6 flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={icon7}
                  alt="Expert Craftsmanship"
                  loading="lazy"
                  className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 transition-all duration-300"
                />
              </motion.div>
              <motion.h3
                className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-brand-ink"
                variants={fadeInUp}
              >
                Expert Craftsmanship
              </motion.h3>
              <motion.p
                className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-[65ch] mx-auto"
                variants={fadeInUp}
              >
                Skilled artisans combine traditional techniques with modern
                technology for superior craftsmanship results.
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <motion.section
        className="relative w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* LEFT: text panel */}
          <motion.div className="bg-brand-cream" variants={fadeInLeft}>
            <div className="max-w-[620px] px-6 sm:px-6 lg:px-16 py-8 sm:py-10 lg:py-14 lg:pr-10">
              <motion.p
                className="text-brand-gold text-xs font-bold tracking-wider uppercase mb-3"
                variants={fadeInUp}
              >
                CONTACT
              </motion.p>
              <motion.h2
                className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl leading-tight font-bold text-brand-ink mb-4"
                variants={fadeInUp}
              >
                Come Join <span className="text-brand-gold">Our</span>
                <br />
                Manufactory
              </motion.h2>
              <motion.p
                className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-[65ch] mb-6"
                variants={fadeInUp}
              >
                Ready to bring your furniture vision to life? Get in touch with
                our expert team and discover how we can create exceptional
                pieces for your space.
              </motion.p>
            </div>
          </motion.div>

          {/* RIGHT: image panel */}
          <motion.div
            className="relative min-h-[220px] lg:min-h-[420px]"
            variants={fadeInRight}
          >
            <motion.img
              src={banner2}
              alt="Workshop Contact"
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.7 }}
            />
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Mobile contact overlay on image */}
            <motion.div
              className="lg:hidden absolute inset-0 flex flex-col justify-center px-6 space-y-4"
              variants={staggerContainer}
            >
              <motion.div
                className="flex items-center group"
                variants={fadeInUp}
              >
                <motion.div
                  className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 transition-all duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <img src={icon1} alt="Phone" className="w-5 h-5" />
                </motion.div>
                <span className="text-white font-semibold drop-shadow-lg">
                  1900 1602
                </span>
              </motion.div>
              <motion.div
                className="flex items-center group"
                variants={fadeInUp}
              >
                <motion.div
                  className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 transition-all duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <img src={icon2} alt="Email" className="w-5 h-5" />
                </motion.div>
                <span className="text-white font-semibold drop-shadow-lg">
                  furniture@gmail.com
                </span>
              </motion.div>
              <motion.div
                className="flex items-center group"
                variants={fadeInUp}
              >
                <motion.div
                  className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 transition-all duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <img src={icon3} alt="Website" className="w-5 h-5" />
                </motion.div>
                <span className="text-white font-semibold drop-shadow-lg">
                  furniture.com
                </span>
              </motion.div>
              <motion.div
                className="flex items-center group"
                variants={fadeInUp}
              >
                <motion.div
                  className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 transition-all duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <img src={icon4} alt="Location" className="w-5 h-5" />
                </motion.div>
                <span className="text-white font-semibold drop-shadow-lg">
                  Tam Phước, huyện Long Thành, tỉnh Đồng Nai
                </span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating contact rail on desktop */}
        <motion.div
          className="hidden lg:flex flex-col gap-4 absolute inset-y-0 left-1/2 -translate-x-5 justify-center z-20"
          variants={staggerContainer}
        >
          <motion.div
            className="flex items-center group"
            variants={fadeInRight}
          >
            <motion.div
              className="w-9 h-9 bg-brand-gold rounded-full flex items-center justify-center shadow mr-3 transition-transform duration-300 group-hover:scale-110"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <img src={icon1} alt="Phone" className="w-4 h-4" />
            </motion.div>
            <span className="text-white text-base drop-shadow">1900 1602</span>
          </motion.div>
          <motion.div
            className="flex items-center group"
            variants={fadeInRight}
          >
            <motion.div
              className="w-9 h-9 bg-brand-gold rounded-full flex items-center justify-center shadow mr-3 transition-transform duration-300 group-hover:scale-110"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <img src={icon2} alt="Email" className="w-4 h-4" />
            </motion.div>
            <span className="text-white text-base drop-shadow">
              furniture@gmail.com
            </span>
          </motion.div>
          <motion.div
            className="flex items-center group"
            variants={fadeInRight}
          >
            <motion.div
              className="w-9 h-9 bg-brand-gold rounded-full flex items-center justify-center shadow mr-3 transition-transform duration-300 group-hover:scale-110"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <img src={icon3} alt="Website" className="w-4 h-4" />
            </motion.div>
            <span className="text-white text-base drop-shadow">
              furniture.com
            </span>
          </motion.div>
          <motion.div
            className="flex items-center group"
            variants={fadeInRight}
          >
            <motion.div
              className="w-9 h-9 bg-brand-gold rounded-full flex items-center justify-center shadow mr-3 transition-transform duration-300 group-hover:scale-110"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <img src={icon4} alt="Location" className="w-4 h-4" />
            </motion.div>
            <span className="text-white text-base drop-shadow max-w-[320px]">
              Tam Phước, huyện Long Thành, tỉnh Đồng Nai
            </span>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default About;
