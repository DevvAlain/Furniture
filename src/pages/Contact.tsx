import React from 'react';
import banner2 from '../assets/images/banner 2.png';
import img2 from '../assets/images/img 2.png';
import icon1 from '../assets/icons/icon 1.png';
import icon2 from '../assets/icons/icon 2.png';
import icon3 from '../assets/icons/icon 3.png';
import icon4 from '../assets/icons/icon 4.png';
import { ScrollReveal } from '../components/ScrollReveal';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
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
            <ScrollReveal animation="fade-in-up" delay={200}>
              <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-semibold drop-shadow-lg">
                Contact
              </h1>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-8">
        <div className="max-w-7xl mx-auto">
          {/* Card */}
          <div className="rounded-3xl overflow-hidden shadow-[0_16px_48px_rgba(0,0,0,0.08)] bg-white">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* LEFT: text + contacts */}
              <div className="bg-[#F5F5F5] p-8 sm:p-10 lg:p-12">
                <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4">
                  Get in <span className="text-[#B79E55]">touch</span>
                </h2>
                <p className="text-slate-600 leading-7 max-w-[55ch] mb-8">
                  Working with Vietnam is full of potential — but only when you
                  find the right
                </p>

                <div className="space-y-5">
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 bg-[#C5AE63] rounded-full flex items-center justify-center">
                      <img src={icon1} alt="Phone" className="w-5 h-5" />
                    </div>
                    <span className="text-slate-700 text-lg">1900 1602</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 bg-[#C5AE63] rounded-full flex items-center justify-center">
                      <img src={icon2} alt="Email" className="w-5 h-5" />
                    </div>
                    <span className="text-slate-700 text-lg">
                      furniture@gmail.com
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 bg-[#C5AE63] rounded-full flex items-center justify-center">
                      <img src={icon3} alt="Website" className="w-5 h-5" />
                    </div>
                    <span className="text-slate-700 text-lg">
                      furniture.com
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 bg-[#C5AE63] rounded-full flex items-center justify-center">
                      <img src={icon4} alt="Location" className="w-5 h-5" />
                    </div>
                    <span className="text-slate-700 text-lg">
                      Tam Phước, huyện Long Thành, tỉnh Đồng Nai
                    </span>
                  </div>
                </div>
              </div>

              {/* RIGHT: image (show full, no crop) */}
              <div className="relative min-h-[320px] md:min-h-[420px] flex items-center justify-center bg-white">
                <img
                  src={img2}
                  alt="Kitchen Interior"
                  className="w-full h-full object-contain"
                  loading="lazy"
                  decoding="async"
                />
                {/* đường chia dọc mảnh giữa 2 nửa */}
                <span className="hidden md:block absolute inset-y-0 left-0 w-px bg-black/10"></span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
