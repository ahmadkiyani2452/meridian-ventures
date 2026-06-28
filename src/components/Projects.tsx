import { MapPin, CheckCircle, Clock } from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-brand-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent-500 font-medium tracking-wider uppercase text-sm mb-4 block">
            Our Portfolio
          </span>
          <h2 className="text-4xl font-serif font-bold mb-6">
            Landmark Developments
          </h2>
          <p className="text-slate-300 text-lg">
            Explore our signature projects, designed to offer premium commercial and residential spaces in the most sought-after locations.
          </p>
        </div>

        <div className="space-y-24">
          {/* Completed Project: Bin Sultan Arcade */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-sm font-medium mb-6">
                <CheckCircle className="w-4 h-4" />
                Completed Project
              </div>
              <h3 className="text-4xl font-serif font-bold mb-4">Bin Sultan Arcade</h3>
              <div className="flex items-center gap-2 text-slate-300 mb-6">
                <MapPin className="w-5 h-5 text-accent-500" />
                <span>B-17 Main Markaz, Islamabad</span>
              </div>
              <p className="text-slate-300 leading-relaxed mb-8">
                Bin Sultan Arcade is a successfully completed mixed-use commercial and residential project located in the prime commercial hub of B-17 Main Markaz, Islamabad. The project was carefully designed to provide businesses and families with a modern environment, premium facilities, and excellent accessibility.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                {['Commercial Shops', 'Corporate Offices', '1 & 2 Bed Apartments', 'Modern Architecture', 'Lift Facility', 'Dedicated Parking'].map((feature, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent-500" />
                    <span className="text-sm text-slate-200">{feature}</span>
                  </div>
                ))}
              </div>
              
              <button className="text-accent-400 hover:text-accent-300 font-medium flex items-center gap-2 transition-colors">
                View Gallery <ArrowRightIcon />
              </button>
            </div>
            <div className="order-1 lg:order-2">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl relative group">
                <img 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
                  alt="Bin Sultan Arcade" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-brand-900/20 group-hover:bg-brand-900/10 transition-colors" />
              </div>
            </div>
          </div>

          {/* Upcoming Project: SkyBridge */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl relative group">
                <img 
                  src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2000&auto=format&fit=crop" 
                  alt="SkyBridge" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-brand-900/20 group-hover:bg-brand-900/10 transition-colors" />
              </div>
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-500/20 text-accent-400 border border-accent-500/30 text-sm font-medium mb-6">
                <Clock className="w-4 h-4" />
                Launching Soon
              </div>
              <h3 className="text-4xl font-serif font-bold mb-4">SkyBridge</h3>
              <div className="flex items-center gap-2 text-slate-300 mb-6">
                <MapPin className="w-5 h-5 text-accent-500" />
                <span>Top City, Islamabad</span>
              </div>
              <p className="text-slate-300 leading-relaxed mb-8">
                SkyBridge is the upcoming flagship development of Meridian Ventures, designed to redefine modern living and commercial excellence. The project will feature contemporary architecture, premium commercial spaces, elegant residential apartments, and world-class amenities, making it one of the most promising investment opportunities in Top City.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                {['Luxury Apartments', 'Executive Offices', 'Premium Shops', 'Modern Elevation', 'Smart Facilities', 'Attractive Payment Plans'].map((feature, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent-500" />
                    <span className="text-sm text-slate-200">{feature}</span>
                  </div>
                ))}
              </div>
              
              <button className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-3 rounded-full font-medium transition-colors shadow-lg shadow-accent-500/20">
                Register Interest
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ArrowRightIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
    </svg>
  );
}
