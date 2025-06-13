const CallToAction = () => {
  return (
    <section className="py-16 bg-[#599d39]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-2/3 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to transform your social media into sales?</h2>
            <p className="text-xl text-white/90">
              Let's discuss how 3Our Agency can help your business grow online.
            </p>
          </div>
          <div>
            <a 
              href="#contact" 
              className="px-8 py-4 bg-white text-[#599d39] font-bold rounded-lg hover:bg-gray-100 transition-colors inline-block"
            >
              Contact Us Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;