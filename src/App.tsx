import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Projects from './components/Projects';
import Media from './components/Media';
import Investment from './components/Investment';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AdminPortal from './components/AdminPortal';

export default function App() {
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white selection:bg-accent-500/30 selection:text-brand-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Features />
        <Projects />
        <Media />
        <Investment />
        <Contact />
      </main>
      <Footer onAdminClick={() => setIsAdminOpen(true)} />
      <AdminPortal isOpen={isAdminOpen} onClose={() => setIsAdminOpen(false)} />
    </div>
  );
}
