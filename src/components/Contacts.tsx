import { useState } from 'react';
import { Check, Mail, Phone, MapPin, Send } from 'lucide-react';

const GOOGLE_FORM_ACTION_URL = "https://docs.google.com/forms/d/e/1FAIpQLSecchayPvbmumQlYuCtTolMV4fuJdi1_teVcfukkv-sbaA1kg/formResponse";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    social: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const form = new FormData();
    form.append("entry.1760492752", formData.name);
    form.append("entry.1687931253", formData.email);
    form.append("entry.815684394", formData.phone);
    form.append("entry.680285240", formData.service);
    form.append("entry.1238036405", formData.social);
    form.append("entry.1111450217", formData.message);

    fetch(GOOGLE_FORM_ACTION_URL, {
      method: "POST",
      mode: "no-cors",
      body: form,
    }).then(() => {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          social: '',
          message: '',
        });
      }, 3000);
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      {isSubmitted ? (
        <div className="text-center py-8">
          <div className="w-16 h-16 bg-[#599d39]/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Check className="text-[#599d39]" size={32} />
          </div>
          <h3 className="text-2xl font-bold text-black mb-2">Thank You!</h3>
          <p className="text-gray-700">
            Your message has been sent successfully. We'll get back to you shortly.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
              PIC Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#599d39]"
              required
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#599d39]"
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#599d39]"
              />
            </div>
          </div>
          
          <div className="mb-4">
            <label htmlFor="service" className="block text-gray-700 font-medium mb-2">
              Interested Service
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#599d39]"
              required
            >
              <option value="">Select a service</option>
              <option value="social_services">Starter Plan</option>
              <option value="build_plan">Build Plan</option>
              <option value="amplify_pack">Amplify Pack</option>
            </select>
          </div>
          
          <div className="mb-4">
            <label htmlFor="social" className="block text-gray-700 font-medium mb-2">
              Link Social Media
            </label>
            <input
              type="url"
              id="social"
              name="social"
              value={formData.social}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#599d39]"
              placeholder="https://instagram.com/yourusername"
              required
            />
          </div>
          
          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#599d39]"
              required
            ></textarea>
          </div>
          
          <button
            type="submit"
            className="w-full py-3 bg-[#599d39] text-white font-medium rounded-lg hover:bg-[#4a8a2e] transition-colors flex items-center justify-center"
          >
            Send Message <Send size={18} className="ml-2" />
          </button>
        </form>
      )}
    </div>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Have questions about our services? Ready to start your project? Contact us today and let's discuss how we can help your business grow.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
          
          <div>
            <div className="bg-black rounded-lg shadow-lg p-8 text-white h-full">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="mr-4 mt-1 text-[#599d39]" />
                  <div>
                    <h4 className="font-semibold mb-1">Email Us</h4>
                    <p className="text-gray-300">3our.id@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="mr-4 mt-1 text-[#599d39]" />
                  <div>
                    <h4 className="font-semibold mb-1">Contact Us</h4>
                    <p className="text-gray-300">+62 851 7964 2520</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="mr-4 mt-1 text-[#599d39]" />
                  <div>
                    <h4 className="font-semibold mb-1">3Our Location</h4>
                    <p className="text-gray-300">
                      3Our Agency<br />
                      West Jakarta, Indonesia
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-800">
                <h4 className="font-semibold mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://facebook.com/3ourid"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#599d39] transition-colors"
                  >
                    <span className="sr-only">Facebook</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a
                    href="https://instagram.com/3our.id"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#599d39] transition-colors"
                  >
                    <span className="sr-only">Instagram</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;