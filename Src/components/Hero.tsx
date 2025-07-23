import { ArrowRight } from 'lucide-react';
import logo from '../assets/images/logo.png';

const Hero = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Elevate Your <span className="text-[#599d39]">Social Media</span> Presence
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              3Our Agency helps businesses grow their online presence through strategic social media management, web development, and digital marketing solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#services" 
                className="px-6 py-3 bg-[#599d39] text-white font-medium rounded-lg hover:bg-[#4a8a2e] transition-colors flex items-center justify-center"
              >
                Explore Services <ArrowRight className="ml-2" size={18} />
              </a>
              <a 
                href="#contact" 
                className="px-6 py-3 border border-[#599d39] text-[#599d39] font-medium rounded-lg hover:bg-[#599d39]/10 transition-colors flex items-center justify-center"
              >
                Contact Us
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-[#599d39] rounded-full opacity-20 absolute -top-6 -left-6"></div>
              <div className="w-64 h-64 md:w-80 md:h-80 bg-white rounded-full opacity-10 absolute -bottom-6 -right-6"></div>
              <div className="relative z-10 bg-gray-900 p-4 rounded-xl shadow-xl">
                <div className="w-64 h-64 md:w-80 md:h-80 bg-gray-800 rounded-lg flex items-center justify-center">
                  <img src={logo} alt="3Our Agency" className="w-40 h-auto" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
