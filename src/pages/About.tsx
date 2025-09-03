import React from 'react';
import banner2 from '../assets/images/banner 2.png';
import { ScrollReveal } from '../components/ScrollReveal';

const About: React.FC = () => {
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
        style={{ backgroundImage: "url('/src/assets/images/banner 2.png')" }}
      >
        {/* Improved overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/10 to-transparent"></div>

        <div className="relative z-10 flex items-end h-full">
          <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-16 md:pb-24 lg:pb-28">
            <ScrollReveal animation="fade-in-up" delay={200}>
              <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-semibold drop-shadow-lg">
                About Us
              </h1>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Main About Section */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT: text */}
          <ScrollReveal animation="fade-in-left" delay={100}>
            <div>
              <p className="text-brand-gold text-sm font-semibold tracking-wider uppercase mb-3">
                ABOUT US
              </p>
              <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6">
                Come Join <span className="text-brand-gold">Our</span>
                <br />
                Manufactory
              </h2>
              <p className="text-slate-600 leading-8 max-w-[65ch]">
                Working with Vietnam is full of potential – but only when you
                find the right partner. We're your trusted local team, offering
                insight, control, and clarity in every step of the sourcing
                journey.
              </p>
            </div>
          </ScrollReveal>

          {/* RIGHT: layered images */}
          <ScrollReveal animation="fade-in-right" delay={300}>
            <div className="relative w-full max-w-[560px] aspect-[4/3] mx-auto">
              {/* Ảnh trên (trước) */}
              <img
                src="/src/assets/images/interior 1.png"
                alt="Workshop Interior Top View"
                loading="lazy"
                decoding="async"
                className="absolute z-10 top-0 left-0 w-[86%] h-[64%] object-cover rounded-2xl shadow-[0_12px_30px_rgba(0,0,0,0.08)]"
              />

              {/* Ảnh dưới (sau) */}
              <img
                src="/src/assets/images/interior 2.png"
                alt="Workshop Interior Bottom View"
                loading="lazy"
                decoding="async"
                className="absolute z-0 right-0 bottom-0 w-[78%] h-[62%] object-cover rounded-2xl shadow-[0_12px_30px_rgba(0,0,0,0.08)]"
              />

              {/* Pattern chấm ở góc trái dưới của khung trên */}
              <div
                className="pointer-events-none absolute z-[5] left-10 top-[58%] w-36 h-24
                 text-gray-300/80
                 [background-image:radial-gradient(currentColor_2px,transparent_2px)]
                 [background-size:12px_12px]"
              />

              {/* Thẻ 20+ Product chồng ở mép trái-dưới ảnh trên */}
              <div
                className="absolute z-20 left-[26%] top-[58%] -translate-x-1/2 -translate-y-1/2
                 bg-white rounded-2xl px-5 py-3
                 shadow-[0_12px_30px_rgba(0,0,0,0.08)] ring-1 ring-black/5
                 hover:scale-105 transition-transform duration-300"
              >
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                    20+
                  </div>
                  <div className="text-xs sm:text-sm text-slate-500">
                    Product
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
      {/* Services Section */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollReveal animation="fade-in-up" delay={100}>
              <div className="text-center p-8 group">
                <div className="w-24 h-24 sm:w-28 sm:h-28 bg-brand-cream rounded-lg flex items-center justify-center mx-auto mb-6 transition-transform duration-300 hover:scale-[1.03] focus-visible:ring-2 ring-brand-gold/60">
                  <img
                    src="/src/assets/icons/icon 5.png"
                    alt="Modern Machine"
                    loading="lazy"
                    className="w-12 h-12 sm:w-14 sm:h-14"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-brand-ink">
                  Modern Machine
                </h3>
                <p className="text-gray-600 leading-7 max-w-[65ch] mx-auto">
                  Working with Vietnam is full of potential – but only when you
                  find the right partner for manufacturing excellence.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-in-up" delay={200}>
              <div className="text-center p-8 group">
                <div className="w-24 h-24 sm:w-28 sm:h-28 bg-brand-cream rounded-lg flex items-center justify-center mx-auto mb-6 transition-transform duration-300 hover:scale-[1.03] focus-visible:ring-2 ring-brand-gold/60">
                  <img
                    src="/src/assets/icons/icon 6.png"
                    alt="Quality Control"
                    loading="lazy"
                    className="w-12 h-12 sm:w-14 sm:h-14"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-brand-ink">
                  Quality Control
                </h3>
                <p className="text-gray-600 leading-7 max-w-[65ch] mx-auto">
                  Rigorous quality standards ensure every product meets
                  international specifications and customer expectations.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-in-up" delay={300}>
              <div className="text-center p-8 group">
                <div className="w-24 h-24 sm:w-28 sm:h-28 bg-brand-cream rounded-lg flex items-center justify-center mx-auto mb-6 transition-transform duration-300 hover:scale-[1.03] focus-visible:ring-2 ring-brand-gold/60">
                  <img
                    src="/src/assets/icons/icon 7.png"
                    alt="Expert Craftsmanship"
                    loading="lazy"
                    className="w-12 h-12 sm:w-14 sm:h-14"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-brand-ink">
                  Expert Craftsmanship
                </h3>
                <p className="text-gray-600 leading-7 max-w-[65ch] mx-auto">
                  Skilled artisans combine traditional techniques with modern
                  technology for superior craftsmanship results.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ScrollReveal animation="scale-in">
        <section className="relative w-full">
          {/* Split layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* LEFT: text panel */}
            <div className="bg-brand-cream">
              <div className="max-w-[620px] px-4 sm:px-6 lg:px-16 py-10 lg:py-14 lg:pr-10">
                <p className="text-brand-gold text-xs font-semibold tracking-wider uppercase mb-2">
                  CONTACT
                </p>
                <h2 className="text-[clamp(24px,3.6vw,44px)] leading-tight font-extrabold text-brand-ink mb-4">
                  Come Join <span className="text-brand-gold">Our</span>
                  <br />
                  Manufactory
                </h2>
                <p className="text-[#2c2c2c]/75 text-sm lg:text-base leading-8 max-w-[65ch]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam.
                </p>

                {/* Mobile contact list */}
                <div className="mt-6 space-y-3 lg:hidden">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-brand-gold rounded-full flex items-center justify-center mr-2.5">
                      📞
                    </div>
                    <span className="text-[#2c2c2c] text-sm">1900 1602</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-brand-gold rounded-full flex items-center justify-center mr-2.5">
                      ✉️
                    </div>
                    <span className="text-[#2c2c2c] text-sm">
                      furniture@gmail.com
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-brand-gold rounded-full flex items-center justify-center mr-2.5">
                      🌐
                    </div>
                    <span className="text-[#2c2c2c] text-sm">
                      furniture.com
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-brand-gold rounded-full flex items-center justify-center mr-2.5">
                      📍
                    </div>
                    <span className="text-[#2c2c2c] text-sm">
                      Tam Phước, huyện Long Thành, tỉnh Đồng Nai
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: image panel */}
            <div className="relative min-h-[220px] lg:min-h-[420px]">
              <img
                src={banner2}
                alt="Workshop Contact"
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40"></div>
            </div>
          </div>

          {/* Floating contact rail on desktop */}
          <div className="hidden lg:flex flex-col gap-4 absolute inset-y-0 left-1/2 -translate-x-5 justify-center z-20">
            <div className="flex items-center group">
              <div className="w-9 h-9 bg-brand-gold rounded-full flex items-center justify-center shadow mr-3 transition-transform duration-300 group-hover:scale-110">
                📞
              </div>
              <span className="text-white text-base drop-shadow">
                1900 1602
              </span>
            </div>
            <div className="flex items-center group">
              <div className="w-9 h-9 bg-brand-gold rounded-full flex items-center justify-center shadow mr-3 transition-transform duration-300 group-hover:scale-110">
                ✉️
              </div>
              <span className="text-white text-base drop-shadow">
                furniture@gmail.com
              </span>
            </div>
            <div className="flex items-center group">
              <div className="w-9 h-9 bg-brand-gold rounded-full flex items-center justify-center shadow mr-3 transition-transform duration-300 group-hover:scale-110">
                🌐
              </div>
              <span className="text-white text-base drop-shadow">
                furniture.com
              </span>
            </div>
            <div className="flex items-center group">
              <div className="w-9 h-9 bg-brand-gold rounded-full flex items-center justify-center shadow mr-3 transition-transform duration-300 group-hover:scale-110">
                📍
              </div>
              <span className="text-white text-base drop-shadow max-w-[320px]">
                Tam Phước, huyện Long Thành, tỉnh Đồng Nai
              </span>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
};

export default About;
