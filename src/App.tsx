import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import AboutUs from './components/AboutUs';
import Portfolio from './components/Portfolio';
import CallToAction from './components/CallToAction';
import Contact from './components/Contacts';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <AboutUs />
        <Portfolio />
        <CallToAction />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;