import { ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import heroImage from '../assets/images/orang.png';

const Hero = () => {
  const [scale, setScale] = useState(1.4);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newScale = Math.min(4.8, 1.4 + (scrollY / 300) * 0.4);
      setScale(newScale);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 order-2 md:order-1 flex flex-col items-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
              Elevate Your <span className="text-[#599d39]">Social Media</span> With AI-Powered
            </h1>
            <div className="relative z-10 flex items-center justify-center mb-6 md:hidden">
              <div className="w-56 h-56 md:w-72 md:h-72 bg-[#599d39] rounded-full opacity-20 absolute -top-4 -left-4"></div>
              <div className="w-56 h-56 md:w-72 md:h-72 bg-white rounded-full opacity-10 absolute -bottom-4 -right-4"></div>
              <div className="relative w-full flex justify-center overflow-hidden" style={{ maxWidth: 400, margin: "0 auto" }}>
                <img
                  src={heroImage}
                  alt="Logo 3Our"
                  className="w-72 md:w-[22rem] h-auto transition-transform duration-300"
                  style={{
                    transform: `scale(${scale})`,
                    maxWidth: "100%",
                    width: "100%",
                    height: "auto",
                    display: "block",
                  }}
                />
              </div>
            </div>
            <p className="text-lg text-gray-300 mb-8 text-center">
              3Our Agency helps businesses grow their online presence through strategic social media into sales with digital marketing solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
          {/* Hero image hanya di desktop */}
          <div className="hidden md:flex md:w-1/2 justify-center order-1 md:order-2">
            <div className="relative">
              <div className="w-56 h-56 md:w-72 md:h-72 bg-[#599d39] rounded-full opacity-20 absolute -top-4 -left-4"></div>
              <div className="w-56 h-56 md:w-72 md:h-72 bg-white rounded-full opacity-10 absolute -bottom-4 -right-4"></div>
              <div className="relative z-10 flex items-center justify-center">
                <img
                  src={heroImage}
                  alt="People Pointing"
                  className="w-72 md:w-[22rem] h-auto animate-spin-slow relative"
                  style={{
                    '--scale': '1.4',
                  } as React.CSSProperties}
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