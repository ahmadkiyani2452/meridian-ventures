import { ArrowRight, Phone } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-brand-900 text-white">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
          alt="Modern Architecture"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-900/90 via-brand-900/70 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-accent-400 text-sm font-medium tracking-wide mb-6">
              Meridian Ventures
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight mb-6">
              Building Tomorrow's <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-600">
                Landmarks Today
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-10 max-w-2xl font-light">
              Welcome to Meridian Ventures, where innovation, quality construction, and modern architecture come together to create exceptional commercial and residential developments. We are committed to delivering premium projects that offer lasting value, smart investment opportunities, and an elevated lifestyle.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-full font-medium transition-all flex items-center gap-2 group"
              >
                Explore Our Projects
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-full font-medium transition-all flex items-center gap-2"
              >
                Contact Us
              </a>
              <a
                href="#contact"
                className="flex items-center gap-2 text-white/80 hover:text-white transition-colors ml-2 font-medium"
              >
                <span className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <Phone className="w-4 h-4" />
                </span>
                Book a Site Visit
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
