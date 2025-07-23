import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import AboutUs from './components/AboutUs';
import Portofolio from './components/Portofolio';
import CallToAction from './components/CallToAction';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <AboutUs />
        <Portofolio />
        <CallToAction />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;