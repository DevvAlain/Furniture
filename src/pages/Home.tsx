import React from 'react';
import { motion } from 'framer-motion';
import workshopBanner from '../assets/images/banner 1.png';
import interior1 from '../assets/images/interior 1.png';
import interior2 from '../assets/images/interior 2.png';
import interior3 from '../assets/images/interior 3.png';
import interior4 from '../assets/images/interior 4.png';
import img from '../assets/images/img.png';
import banner2 from '../assets/images/banner 2.png';
import icon1 from '../assets/icons/icon 1.png';
import icon2 from '../assets/icons/icon 2.png';
import icon3 from '../assets/icons/icon 3.png';
import icon4 from '../assets/icons/icon 4.png';

const Home: React.FC = () => {
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

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  // Unified transitions and constants
  const defaultTransition = { duration: 0.8 };
  const imageHoverScale = 1.08;
  const cardHoverLift = -8;

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${workshopBanner})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/35"></div>
        <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-6 md:px-8">
          <motion.div
            className="max-w-5xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-[1.1] bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent"
              variants={fadeInUp}
              transition={defaultTransition}
            >
              Specializing in manufacturing and
              <br />
              designing premium wooden furniture
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl lg:text-3xl text-yellow-300 font-light mb-12 drop-shadow-lg max-w-3xl mx-auto"
              variants={fadeInUp}
              transition={defaultTransition}
            >
              Crafted with precision, built to last
            </motion.p>
            <motion.button
              className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white px-12 py-4 rounded-full font-semibold text-lg shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300"
              variants={fadeInUp}
              transition={defaultTransition}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Product Gallery */}
      <section className="py-24 px-6 md:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="text-center mb-20"
          >
            <motion.p
              className="text-yellow-600 text-sm font-bold tracking-widest uppercase mb-6"
              variants={fadeInUp}
            >
              OUR GALLERY
            </motion.p>
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent leading-tight"
              variants={fadeInUp}
            >
              Featured <span className="text-yellow-600">Products</span>
            </motion.h2>
            <motion.p
              className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed"
              variants={fadeInUp}
            >
              Discover our handcrafted furniture collection, where traditional
              craftsmanship meets modern design
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.div
              className="bg-white h-96 rounded-3xl overflow-hidden group hover:shadow-2xl shadow-lg transition-all duration-500 border border-gray-100"
              variants={scaleIn}
              whileHover={{ y: cardHoverLift }}
            >
              <div className="relative h-full overflow-hidden">
                <img
                  src={interior1}
                  alt="Premium Wooden Sideboard with Ceramic Vases"
                  className="w-full h-full object-cover transition-transform duration-700"
                  style={{ transform: 'scale(1)' }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = `scale(${imageHoverScale})`)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = 'scale(1)')
                  }
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <h3 className="font-bold text-lg mb-2">Premium Sideboard</h3>
                  <p className="text-sm opacity-90">
                    Handcrafted wooden furniture with ceramic accents
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="bg-white h-96 rounded-3xl overflow-hidden group hover:shadow-2xl shadow-lg transition-all duration-500 border border-gray-100"
              variants={scaleIn}
              whileHover={{ y: cardHoverLift }}
            >
              <div className="relative h-full overflow-hidden">
                <img
                  src={interior2}
                  alt="Modern Dark Wood Console Table"
                  className="w-full h-full object-cover transition-transform duration-700"
                  style={{ transform: 'scale(1)' }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = `scale(${imageHoverScale})`)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = 'scale(1)')
                  }
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <h3 className="font-bold text-lg mb-2">Console Table</h3>
                  <p className="text-sm opacity-90">
                    Modern dark wood design for contemporary spaces
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="bg-white h-96 rounded-3xl overflow-hidden group hover:shadow-2xl shadow-lg transition-all duration-500 border border-gray-100"
              variants={scaleIn}
              whileHover={{ y: cardHoverLift }}
            >
              <div className="relative h-full overflow-hidden">
                <img
                  src={interior3}
                  alt="Elegant Gray Armchair with Coffee Table"
                  className="w-full h-full object-cover transition-transform duration-700"
                  style={{ transform: 'scale(1)' }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = `scale(${imageHoverScale})`)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = 'scale(1)')
                  }
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <h3 className="font-bold text-lg mb-2">Armchair Set</h3>
                  <p className="text-sm opacity-90">
                    Elegant gray armchair with matching coffee table
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Product Section */}
      <section className="py-24 px-6 md:px-8 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div variants={fadeInLeft} className="space-y-8">
              <motion.p
                className="text-yellow-600 text-sm font-bold tracking-widest uppercase"
                variants={fadeInUp}
              >
                PRODUCT
              </motion.p>
              <motion.h2
                className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent leading-tight"
                variants={fadeInUp}
              >
                We <span className="text-yellow-600">Create</span>
                <br />
                The Art Furniture
              </motion.h2>
              <motion.p
                className="text-gray-600 leading-relaxed text-lg max-w-lg"
                variants={fadeInUp}
              >
                Every piece is meticulously crafted by our skilled artisans
                using premium materials and traditional techniques, ensuring
                exceptional quality and timeless beauty for your space.
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                variants={fadeInUp}
              >
                <motion.button
                  className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-yellow-500/25 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Collection
                </motion.button>
                <motion.button
                  className="border-2 border-gray-300 hover:border-yellow-500 text-gray-700 hover:text-yellow-600 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </motion.button>
              </motion.div>
            </motion.div>
            <motion.div className="relative group" variants={fadeInRight}>
              <div className="bg-white h-[500px] rounded-3xl overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-500 border border-gray-200">
                <div className="relative h-full overflow-hidden">
                  <img
                    src={interior4}
                    alt="Modern Wooden Frame Sofa with Designer Pillows"
                    className="w-full h-full object-cover transition-transform duration-700"
                    style={{ transform: 'scale(1)' }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.transform = `scale(${imageHoverScale})`)
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.transform = 'scale(1)')
                    }
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-8 left-8 right-8 text-white transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <h3 className="font-bold text-xl mb-2">
                      Designer Sofa Collection
                    </h3>
                    <p className="text-sm opacity-90">
                      Modern wooden frame with premium designer pillows
                    </p>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-yellow-400/20 rounded-full group-hover:scale-110 transition-transform duration-500"></div>
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-yellow-500/30 rounded-full group-hover:scale-110 transition-transform duration-500"></div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-6 md:px-8 bg-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-100/30 rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-yellow-200/20 rounded-full"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div className="relative group" variants={fadeInLeft}>
              <div className="relative z-10 overflow-hidden rounded-3xl">
                <img
                  src={img}
                  alt="Woodworking Craftsmanship in Our Manufactory"
                  className="w-full h-auto rounded-3xl shadow-2xl transition-transform duration-700"
                  style={{ transform: 'scale(1)' }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = `scale(${imageHoverScale})`)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = 'scale(1)')
                  }
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              {/* Floating badge */}
              <motion.div
                className="absolute -right-6 top-[-3.75rem] md:top-[-4.5rem]
             bg-gradient-to-r from-yellow-500 to-yellow-600
             text-white px-8 py-4 rounded-full font-bold shadow-2xl"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                ⭐ Premium Quality
              </motion.div>
            </motion.div>

            <motion.div variants={fadeInRight} className="space-y-8">
              <motion.p
                className="text-yellow-600 text-sm font-bold tracking-widest uppercase"
                variants={fadeInUp}
              >
                ABOUT US
              </motion.p>
              <motion.h2
                className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent leading-tight"
                variants={fadeInUp}
              >
                Come Join <span className="text-yellow-600">Our</span>
                <br />
                Manufactory
              </motion.h2>
              <motion.p
                className="text-gray-600 leading-relaxed text-lg max-w-lg"
                variants={fadeInUp}
              >
                Working with Vietnam is full of potential – but only when you
                find the right partner. We're your trusted local team, offering
                insight, control, and clarity in every step of the sourcing
                journey.
              </motion.p>
              <motion.button
                className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white px-10 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-yellow-500/25 transition-all duration-300"
                variants={fadeInUp}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>

              <motion.div
                className="grid grid-cols-2 gap-6"
                variants={staggerContainer}
              >
                <motion.div
                  className="text-center p-8 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-3xl border border-yellow-200 shadow-lg hover:shadow-xl transition-all duration-500"
                  variants={scaleIn}
                  whileHover={{ y: cardHoverLift }}
                >
                  <div className="text-5xl font-bold text-yellow-600 mb-3">
                    16+
                  </div>
                  <div className="text-gray-700 font-semibold text-lg">
                    Happy Customers
                  </div>
                </motion.div>
                <motion.div
                  className="text-center p-8 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-3xl border border-yellow-200 shadow-lg hover:shadow-xl transition-all duration-500"
                  variants={scaleIn}
                  whileHover={{ y: cardHoverLift }}
                >
                  <div className="text-5xl font-bold text-yellow-600 mb-3">
                    80+
                  </div>
                  <div className="text-gray-700 font-semibold text-lg">
                    Active Users
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <motion.section
        className="relative w-full overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <motion.div
            className="bg-gradient-to-br from-[#F5EEE8] to-[#F0E6D6] relative"
            variants={fadeInLeft}
          >
            <div className="absolute top-10 right-10 w-24 h-24 bg-yellow-300 rounded-full opacity-20"></div>
            <div className="absolute bottom-16 left-8 w-16 h-16 bg-yellow-400 rounded-full opacity-25"></div>

            <div className="max-w-[680px] py-16 lg:py-24 px-8 lg:pl-20 lg:pr-10 relative z-10 space-y-8">
              <motion.p
                className="text-yellow-600 text-sm font-bold tracking-widest uppercase"
                variants={fadeInUp}
              >
                CONTACT
              </motion.p>
              <motion.h2
                className="text-4xl lg:text-6xl leading-tight font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent"
                variants={fadeInUp}
              >
                Come Join <span className="text-yellow-600">Our</span>
                <br />
                Manufactory
              </motion.h2>
              <motion.p
                className="text-gray-600 text-lg leading-relaxed max-w-[520px]"
                variants={fadeInUp}
              >
                Ready to bring your furniture vision to life? Get in touch with
                our expert team and discover how we can create exceptional
                pieces for your space.
              </motion.p>

              {/* Contact list for mobile/tablet */}
              <motion.div
                className="mt-8 space-y-4 lg:hidden"
                variants={staggerContainer}
              >
                <motion.div
                  className="flex items-center group"
                  variants={fadeInUp}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-[#C5AE63] to-[#B79E55] rounded-full flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300 p-2">
                    <img
                      src={icon1}
                      alt="Phone"
                      className="w-6 h-6 object-contain"
                    />
                  </div>
                  <span className="text-[#2c2c2c] font-medium">1900 1602</span>
                </motion.div>
                <motion.div
                  className="flex items-center group"
                  variants={fadeInUp}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-[#C5AE63] to-[#B79E55] rounded-full flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300 p-2">
                    <img
                      src={icon2}
                      alt="Email"
                      className="w-6 h-6 object-contain"
                    />
                  </div>
                  <span className="text-[#2c2c2c] font-medium">
                    furniture@gmail.com
                  </span>
                </motion.div>
                <motion.div
                  className="flex items-center group"
                  variants={fadeInUp}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-[#C5AE63] to-[#B79E55] rounded-full flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300 p-2">
                    <img
                      src={icon3}
                      alt="Website"
                      className="w-6 h-6 object-contain"
                    />
                  </div>
                  <span className="text-[#2c2c2c] font-medium">
                    furniture.com
                  </span>
                </motion.div>
                <motion.div
                  className="flex items-center group"
                  variants={fadeInUp}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-[#C5AE63] to-[#B79E55] rounded-full flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300 p-2">
                    <img
                      src={icon4}
                      alt="Location"
                      className="w-6 h-6 object-contain"
                    />
                  </div>
                  <span className="text-[#2c2c2c] font-medium">
                    Tam Phước, huyện Long Thành, tỉnh Đồng Nai
                  </span>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT: image panel */}
          <motion.div
            className="relative h-[260px] sm:h-[340px] lg:h-auto min-h-[260px] overflow-hidden"
            variants={fadeInRight}
          >
            <motion.img
              src={banner2}
              alt="Workshop"
              className="absolute inset-0 w-full h-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.7 }}
            />
            <div className="absolute inset-0 bg-gradient-to-l from-black/50 to-black/30"></div>

            {/* Floating elements on image */}
            <motion.div
              className="absolute top-8 right-8 bg-white/20 backdrop-blur-sm rounded-full p-4"
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <span className="text-white text-2xl">🏭</span>
            </motion.div>
          </motion.div>
        </div>

        {/* Cột icon nổi ở rìa giữa hai nửa (desktop) */}
        <motion.div
          className="hidden lg:flex flex-col gap-6 absolute inset-y-0 left-1/2 -translate-x-6 justify-center z-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div
            className="flex items-center group"
            variants={fadeInRight}
          >
            <motion.div
              className="w-14 h-14 bg-gradient-to-r from-[#C5AE63] to-[#B79E55] rounded-full flex items-center justify-center shadow-xl mr-4 group-hover:scale-110 transition-all duration-300 p-3"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <img src={icon1} alt="Phone" className="w-8 h-8 object-contain" />
            </motion.div>
            <span className="text-white drop-shadow-lg font-semibold">
              1900 1602
            </span>
          </motion.div>
          <motion.div
            className="flex items-center group"
            variants={fadeInRight}
          >
            <motion.div
              className="w-14 h-14 bg-gradient-to-r from-[#C5AE63] to-[#B79E55] rounded-full flex items-center justify-center shadow-xl mr-4 group-hover:scale-110 transition-all duration-300 p-3"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <img src={icon2} alt="Email" className="w-8 h-8 object-contain" />
            </motion.div>
            <span className="text-white drop-shadow-lg font-semibold">
              furniture@gmail.com
            </span>
          </motion.div>
          <motion.div
            className="flex items-center group"
            variants={fadeInRight}
          >
            <motion.div
              className="w-14 h-14 bg-gradient-to-r from-[#C5AE63] to-[#B79E55] rounded-full flex items-center justify-center shadow-xl mr-4 group-hover:scale-110 transition-all duration-300 p-3"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={icon3}
                alt="Website"
                className="w-8 h-8 object-contain"
              />
            </motion.div>
            <span className="text-white drop-shadow-lg font-semibold">
              furniture.com
            </span>
          </motion.div>
          <motion.div
            className="flex items-center group"
            variants={fadeInRight}
          >
            <motion.div
              className="w-14 h-14 bg-gradient-to-r from-[#C5AE63] to-[#B79E55] rounded-full flex items-center justify-center shadow-xl mr-4 group-hover:scale-110 transition-all duration-300 p-3"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={icon4}
                alt="Location"
                className="w-8 h-8 object-contain"
              />
            </motion.div>
            <span className="text-white drop-shadow-lg max-w-[320px] font-semibold">
              Tam Phước, huyện Long Thành, tỉnh Đồng Nai
            </span>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default Home;
