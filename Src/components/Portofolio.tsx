import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Definisikan interface untuk slide
interface PortfolioSlide {
  title: string;
  description: string;
  imageUrl?: string;
}

const Portfolio = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const portfolioSlides: PortfolioSlide[] = [
    {
      title: "Social Media Campaign for Fashion Brand",
      description: "We helped a local fashion brand increase their Instagram followers by 200% and boost engagement rates through strategic content creation and targeted ads."
    },
    {
      title: "E-commerce Website Development",
      description: "Designed and developed a fully responsive e-commerce website with payment gateway integration, resulting in a 150% increase in online sales."
    },
    {
      title: "SEO Strategy for Tech Startup",
      description: "Implemented a comprehensive SEO strategy that improved organic search rankings and increased website traffic by 180% within 3 months."
    },
    {
      title: "Social Media Management for Restaurant Chain",
      description: "Managed social media accounts for a restaurant chain, creating engaging content that increased foot traffic and online orders by 120%."
    },
    {
      title: "CRM Implementation for Service Business",
      description: "Developed and implemented a custom CRM solution with AI integration, improving customer retention rates by 40%."
    }
  ];
  
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => 
      prevSlide === portfolioSlides.length - 1 ? 0 : prevSlide + 1
    );
  };
  
  const prevSlide = () => {
    setCurrentSlide((prevSlide) => 
      prevSlide === 0 ? portfolioSlides.length - 1 : prevSlide - 1
    );
  };
  
  return (
    <section id="portfolio" className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Portfolio</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Take a look at some of our successful projects and how we've helped businesses achieve their goals.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-xl shadow-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {portfolioSlides.map((slide, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="bg-gray-900 p-8 h-96 flex flex-col justify-center items-center text-center">
                    <div className="w-full h-40 bg-gray-800 rounded-lg mb-6 flex items-center justify-center">
                      {slide.imageUrl ? (
                        <img src={slide.imageUrl} alt={slide.title} className="max-h-full" />
                      ) : (
                        <span className="text-gray-600">Portfolio Image</span>
                      )}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{slide.title}</h3>
                    <p className="text-gray-300">{slide.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button 
            onClick={prevSlide}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-[#599d39] rounded-full p-3 shadow-lg text-white hover:bg-[#4a8a2e] z-10"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-[#599d39] rounded-full p-3 shadow-lg text-white hover:bg-[#4a8a2e] z-10"
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>
          
          <div className="flex justify-center mt-6 space-x-2">
            {portfolioSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full ${
                  currentSlide === index ? 'bg-[#599d39]' : 'bg-gray-600'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;