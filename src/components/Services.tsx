import { useState } from 'react';
import { Check, ChevronLeft, ChevronRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}

const ServiceCard = ({ title, description, features, isPopular = false }: ServiceCardProps) => {
  return (
    <div className={`bg-white rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:scale-105 ${isPopular ? 'border-2 border-[#599d39] relative' : ''}`}>
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#599d39] text-white px-4 py-1 rounded-full text-sm font-medium">
          Popular Choice
        </div>
      )}
      <h3 className="text-xl font-bold text-black mb-3">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="mr-2 mt-1 text-[#599d39]">
              <Check size={16} />
            </span>
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      <button className="w-full py-2 px-4 bg-[#599d39] hover:bg-[#4a8a2e] text-white font-medium rounded-lg transition-colors">
        Get Started
      </button>
    </div>
  );
};

const ServicesCarousel = ({ services, title }: { services: ServiceCardProps[], title: string }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsToShow = typeof window !== 'undefined' ? 
    (window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1) : 1;
  
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + cardsToShow >= services.length ? 0 : prevIndex + 1
    );
  };
  
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? Math.max(0, services.length - cardsToShow) : prevIndex - 1
    );
  };
  
  return (
    <div className="relative">
      <h3 className="text-2xl font-bold text-black mb-6">{title}</h3>
      <div className="relative overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)` }}
        >
          {services.map((service, index) => (
            <div 
              key={index} 
              className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 p-3"
            >
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
      </div>
      
      <button 
        onClick={prevSlide}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2 bg-white rounded-full p-2 shadow-lg text-[#599d39] hover:text-[#4a8a2e] z-10"
      >
        <ChevronLeft size={24} />
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2 bg-white rounded-full p-2 shadow-lg text-[#599d39] hover:text-[#4a8a2e] z-10"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

const Services = () => {
  const socialMediaServices = [
    {
      title: "Social Media Branding",
      description: "Professional branding design for your Instagram business profile.",
      features: [
        "Profile optimization",
        "Visual identity design",
        "Content strategy",
        "Brand guidelines",
        "Monthly performance report"
      ]
    },
    {
      title: "Social Media Boosting",
      description: "Enhance your Instagram presence and drive sales with our boosting package.",
      features: [
        "Profile optimization",
        "Visual identity design",
        "Content strategy",
        "Rp 500k monthly ad credit",
        "Sales conversion tracking",
        "Monthly performance report"
      ],
      isPopular: true
    },
    {
      title: "Social Media Creators",
      description: "Elevate your content with professional creators and talent management.",
      features: [
        "Profile optimization",
        "Visual identity design",
        "Content creation with talent",
        "Professional photoshoots",
        "Content calendar",
        "Monthly performance report"
      ]
    },
    {
      title: "Social Media Combo",
      description: "Our complete solution combining branding, content creation, and sales boosting.",
      features: [
        "Profile optimization",
        "Visual identity design",
        "Content creation with talent",
        "Rp 500k monthly ad credit",
        "Sales conversion tracking",
        "Priority support",
        "Comprehensive monthly report"
      ]
    }
  ];

  const projectBaseServices = [
    {
      title: "Web Development",
      description: "Custom website development from design to payment gateway integration.",
      features: [
        "Responsive design",
        "SEO optimization",
        "Payment gateway integration",
        "Content management system",
        "Analytics setup",
        "3 months support"
      ]
    },
    {
      title: "SEO Management",
      description: "3-month SEO strategy development and implementation for your business.",
      features: [
        "Keyword research",
        "On-page optimization",
        "Content strategy",
        "Backlink building",
        "Monthly reporting",
        "Competitor analysis"
      ],
      isPopular: true
    },
    {
      title: "CRM Management",
      description: "Custom CRM flow development with AI integration for your business.",
      features: [
        "Customer journey mapping",
        "Workflow automation",
        "AI integration",
        "Data migration",
        "Team training",
        "Ongoing support"
      ]
    }
  ];

  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Our Services</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            We offer comprehensive social media management and project-based solutions to help your business grow online.
          </p>
        </div>

        <div className="mb-16">
          <ServicesCarousel services={socialMediaServices} title="Social Media Services" />
        </div>

        <div>
          <ServicesCarousel services={projectBaseServices} title="Project-Based Services" />
        </div>
      </div>
    </section>
  );
};

export default Services;