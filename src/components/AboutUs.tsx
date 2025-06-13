import { Users, Award, TrendingUp } from 'lucide-react';
import teamImage from '../assets/images/team.jpg';
const AboutUs = () => {
  return (
    <section id="about" className="pt-6 pb-16 bg-white">
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

        <div
          className="
            flex md:grid
            grid-cols-1 md:grid-cols-3
            gap-8 mb-16
            overflow-x-auto md:overflow-visible
            snap-x snap-mandatory
            "
        >
          <div className="bg-gray-50 p-6 rounded-lg text-center min-w-[90vw] max-w-xs mx-auto md:min-w-0 md:max-w-none snap-center">
            <div className="w-12 h-12 bg-[#599d39]/20 rounded-full flex items-center justify-center mb-4 mx-auto">
              <Users className="text-[#599d39]" />
            </div>
            <h4 className="text-xl font-bold text-black mb-2">Expert Team</h4>
            <p className="text-gray-700 text-justify">
              Our team consists of experienced professionals with diverse backgrounds in digital marketing, design, development, and business strategy.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg text-center min-w-[90vw] max-w-xs mx-auto md:min-w-0 md:max-w-none snap-center">
            <div className="w-12 h-12 bg-[#599d39]/20 rounded-full flex items-center justify-center mb-4 mx-auto">
              <Award className="text-[#599d39]" />
            </div>
            <h4 className="text-xl font-bold text-black mb-2">Quality Service</h4>
            <p className="text-gray-700 text-justify">
              We pride ourselves on delivering high-quality services tailored to each client's unique needs and goals, ensuring maximum impact and ROI.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg text-center min-w-[90vw] max-w-xs mx-auto md:min-w-0 md:max-w-none snap-center">
            <div className="w-12 h-12 bg-[#599d39]/20 rounded-full flex items-center justify-center mb-4 mx-auto">
              <TrendingUp className="text-[#599d39]" />
            </div>
            <h4 className="text-xl font-bold text-black mb-2">Proven Results</h4>
            <p className="text-gray-700 text-justify">
              Our data-driven approach has helped our clients achieve significant growth in their online presence, engagement, and conversion rates.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;