import { ArrowRight } from 'lucide-react';
import heroImage from '../assets/images/orang.png';

const Hero = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 order-2 md:order-1">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Elevate Your <span className="text-[#599d39]">Social Media</span> With AI-Powered
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              3Our Agency helps businesses grow their online presence through strategic social media into sales with digital marketing solutions.
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
          <div className="md:w-1/2 flex justify-center order-1 md:order-2">
            <div className="relative">
              <div className="w-56 h-56 md:w-72 md:h-72 bg-[#599d39] rounded-full opacity-20 absolute -top-4 -left-4"></div>
              <div className="w-56 h-56 md:w-72 md:h-72 bg-white rounded-full opacity-10 absolute -bottom-4 -right-4"></div>
              <div className="relative z-10 flex items-center justify-center">
                <img
                  src={heroImage}
                  alt="People Pointing"
                  className="w-72 md:w-[22rem] h-auto animate-float"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;