import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import logo from '../assets/images/logo.png';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <img src={logo} alt="3Our" className="h-10 mb-4" />
            <p className="text-gray-400 mb-6">
              Elevating your social media presence with strategic management, creative content, and result-driven solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#599d39] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#599d39] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#599d39] transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-[#599d39] transition-colors">Home</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-[#599d39] transition-colors">Services</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-[#599d39] transition-colors">About Us</a></li>
              <li><a href="#portfolio" className="text-gray-400 hover:text-[#599d39] transition-colors">Portfolio</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-[#599d39] transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail size={18} className="mr-2 mt-1 text-[#599d39]" />
                <span className="text-gray-400">info@3our-agency.com</span>
              </li>
              <li className="flex items-start">
                <Phone size={18} className="mr-2 mt-1 text-[#599d39]" />
                <span className="text-gray-400">+62 123 456 7890</span>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 text-[#599d39]" />
                <span className="text-gray-400">Jakarta, Indonesia</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} 3Our Agency. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;