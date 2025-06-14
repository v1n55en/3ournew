import { useState } from "react";
import { Users, Award, TrendingUp, ChevronLeft, ChevronRight } from "lucide-react";
import teamImage from '../assets/images/team.jpg';

const expertCards = [
  {
    icon: <Users className="text-[#599d39]" />,
    title: "Expert Team",
    desc: "Our team consists of experienced professionals with diverse backgrounds in digital marketing, design, development, and business strategy.",
  },
  {
    icon: <Award className="text-[#599d39]" />,
    title: "Quality Service",
    desc: "We pride ourselves on delivering high-quality services tailored to each client's unique needs and goals, ensuring maximum impact and ROI.",
  },
  {
    icon: <TrendingUp className="text-[#599d39]" />,
    title: "Proven Results",
    desc: "Our data-driven approach has helped our clients achieve significant growth in their online presence, engagement, and conversion rates.",
  },
];

const AboutUs = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevCard = () => setActiveIndex((prev) => (prev === 0 ? expertCards.length - 1 : prev - 1));
  const nextCard = () => setActiveIndex((prev) => (prev === expertCards.length - 1 ? 0 : prev + 1));

  return (
    <section id="about" className="pt-4 pb-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">About 3Our</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            We are a dedicated team of digital marketing experts passionate about helping businesses thrive in the digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-bold text-black mb-4 text-center">3Our Story</h3>
            <p className="text-gray-700 mb-4 text-justify">
              Founded with a vision to bridge the gap between businesses and their digital potential, 3Our Agency has grown into a comprehensive digital marketing powerhouse. We started as a small team focused on social media management building a strong and consistent brand presence to supporting sales through the latest digital platforms.
            </p>
            <p className="text-gray-700 mb-4 text-justify">
              The name "3Our" comes from the three founders, each representing a key pillar in our approach: creativity, strategy, and results. We believe that effective digital marketing requires all three elements working in harmony to deliver exceptional outcomes for our clients.
            </p>
            <p className="text-gray-700 text-justify">
              Today, we're proud to have helped numerous businesses across various industries establish strong online presences and achieve their marketing goals.
            </p>
          </div>
          <div className="bg-gray-100 rounded-lg p-8 order-1 md:order-2">
            <div className="relative">
              <div className="w-full h-64 bg-[#599d39] rounded-lg opacity-10 absolute -top-4 -left-4"></div>
              <div className="relative z-10 bg-white p-4 rounded-lg shadow-lg">
                <img 
                  src={teamImage} 
                  alt="Our Team" 
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Carousel untuk mobile */}
        <div className="relative flex md:hidden justify-center mb-8">
          <div className="bg-gray-50 p-6 rounded-lg text-center min-w-[90vw] max-w-xs mx-auto relative">
            {/* Tombol kiri */}
            <button
              onClick={prevCard}
              className="absolute left-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-gray-200 hover:bg-gray-300 shadow"
              aria-label="Previous"
              style={{ zIndex: 2 }}
            >
              <ChevronLeft />
            </button>
            {/* Isi card */}
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-[#599d39]/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                {expertCards[activeIndex].icon}
              </div>
              <h4 className="text-xl font-bold text-black mb-2">{expertCards[activeIndex].title}</h4>
              <p className="text-gray-700 text-justify">{expertCards[activeIndex].desc}</p>
            </div>
            {/* Tombol kanan */}
            <button
              onClick={nextCard}
              className="absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-gray-200 hover:bg-gray-300 shadow"
              aria-label="Next"
              style={{ zIndex: 2 }}
            >
              <ChevronRight />
            </button>
          </div>
        </div>

        {/* Grid untuk desktop */}
        <div className="hidden md:grid grid-cols-3 gap-8 mb-16">
          {expertCards.map((card, idx) => (
            <div key={idx} className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="w-12 h-12 bg-[#599d39]/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                {card.icon}
              </div>
              <h4 className="text-xl font-bold text-black mb-2">{card.title}</h4>
              <p className="text-gray-700 text-justify">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;