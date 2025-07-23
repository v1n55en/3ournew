import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import AboutUs from './components/AboutUs';
import Portfolio from './components/Portfolio';
import CallToAction from './components/CallToAction';
import Contact from './components/Contacts';
import Footer from './components/Footer';
import SocialMediaAudit from './pages/SocialMediaAudit';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <main>
                <Hero />
                <Services />
                <AboutUs />
                <Portfolio />
                <CallToAction />
                <Contact />
              </main>
            }
          />
          <Route path="/social-media-audit" element={<SocialMediaAudit />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;