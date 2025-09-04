import React from 'react';
import { motion } from 'framer-motion';
import banner2 from '../assets/images/banner 2.png';
import img2 from '../assets/images/img 2.png';
import icon1 from '../assets/icons/icon 1.png';
import icon2 from '../assets/icons/icon 2.png';
import icon3 from '../assets/icons/icon 3.png';
import icon4 from '../assets/icons/icon 4.png';

const Contact: React.FC = () => {
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
          h-[42vh] min-h-[280px] lg:h-[58vh]
          bg-center bg-cover bg-no-repeat
          bg-[position:50%_35%]
        "
        style={{ backgroundImage: `url(${banner2})` }}
      >
        {/* Improved overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/10 to-transparent"></div>

        <div className="relative z-10 flex items-end h-full">
          <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-16 md:pb-24 lg:pb-28">
            <motion.h1
              className="text-white text-4xl md:text-5xl lg:text-6xl font-semibold drop-shadow-lg"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Contact
            </motion.h1>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-8">
        <div className="max-w-7xl mx-auto">
          {/* Card */}
          <motion.div
            className="rounded-3xl overflow-hidden shadow-[0_16px_48px_rgba(0,0,0,0.08)] bg-white"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={scaleIn}
            transition={{ duration: 0.8 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* LEFT: text + contacts */}
              <motion.div
                className="bg-[#F5F5F5] p-8 sm:p-10 lg:p-12"
                variants={fadeInLeft}
                transition={{ duration: 0.8 }}
              >
                <motion.h2
                  className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4"
                  variants={fadeInUp}
                >
                  Get in <span className="text-[#B79E55]">touch</span>
                </motion.h2>
                <motion.p
                  className="text-slate-600 leading-7 max-w-[55ch] mb-8"
                  variants={fadeInUp}
                >
                  Working with Vietnam is full of potential — but only when you
                  find the right partner. We're your trusted local team.
                </motion.p>

                <motion.div className="space-y-5" variants={staggerContainer}>
                  <motion.div
                    className="flex items-center gap-4 group"
                    variants={fadeInUp}
                  >
                    <motion.div
                      className="w-11 h-11 bg-[#C5AE63] rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <img src={icon1} alt="Phone" className="w-4 h-4" />
                    </motion.div>
                    <span className="text-slate-700 text-lg">1900 1602</span>
                  </motion.div>
                  <motion.div
                    className="flex items-center gap-4 group"
                    variants={fadeInUp}
                  >
                    <motion.div
                      className="w-11 h-11 bg-[#C5AE63] rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <img src={icon2} alt="Email" className="w-4 h-4" />
                    </motion.div>
                    <span className="text-slate-700 text-lg">
                      furniture@gmail.com
                    </span>
                  </motion.div>
                  <motion.div
                    className="flex items-center gap-4 group"
                    variants={fadeInUp}
                  >
                    <motion.div
                      className="w-11 h-11 bg-[#C5AE63] rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <img src={icon3} alt="Website" className="w-4 h-4" />
                    </motion.div>
                    <span className="text-slate-700 text-lg">
                      furniture.com
                    </span>
                  </motion.div>
                  <motion.div
                    className="flex items-center gap-4 group"
                    variants={fadeInUp}
                  >
                    <motion.div
                      className="w-11 h-11 bg-[#C5AE63] rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <img src={icon4} alt="Location" className="w-4 h-4" />
                    </motion.div>
                    <span className="text-slate-700 text-lg">
                      Tam Phước, huyện Long Thành, tỉnh Đồng Nai
                    </span>
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* RIGHT: image (show full, no crop) */}
              <motion.div
                className="relative min-h-[320px] md:min-h-[420px] flex items-center justify-center bg-white"
                variants={fadeInRight}
                transition={{ duration: 0.8 }}
              >
                <motion.img
                  src={img2}
                  alt="Kitchen Interior"
                  className="w-full h-full object-contain"
                  loading="lazy"
                  decoding="async"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                />
                {/* đường chia dọc mảnh giữa 2 nửa */}
                <span className="hidden md:block absolute inset-y-0 left-0 w-px bg-black/10"></span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
