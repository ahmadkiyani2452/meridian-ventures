import { TrendingUp, ShieldCheck, Banknote } from 'lucide-react';

export default function Investment() {
  return (
    <section className="py-24 bg-brand-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-900/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-accent-600 font-medium tracking-wider uppercase text-sm mb-4 block">
              Investment Opportunities
            </span>
            <h2 className="text-4xl font-serif font-bold text-brand-900 mb-6 leading-tight">
              Grow Your Wealth with Meridian
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Meridian Ventures offers carefully planned real estate investments designed to provide long-term value, steady growth, and excellent returns. Whether you are purchasing a commercial shop, office space, or residential apartment, our projects are developed to maximize investment potential.
            </p>
            
            <div className="space-y-6">
              {[
                { icon: TrendingUp, title: "Capital Appreciation", desc: "Strategic locations ensure high growth potential over time." },
                { icon: Banknote, title: "Steady Rental Yield", desc: "Commercial spaces designed to attract premium tenants." },
                { icon: ShieldCheck, title: "Secure Assets", desc: "Transparent documentation and reliable construction." }
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm border border-slate-100">
                        <Icon className="w-5 h-5 text-accent-500" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-900 mb-1">{item.title}</h4>
                      <p className="text-slate-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            
            <div className="mt-10">
              <a href="#contact" className="inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-brand-900 hover:bg-brand-800 transition-colors">
                Consult Our Experts
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4 translate-y-8">
              <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop" alt="Real Estate Interior" className="rounded-2xl shadow-lg w-full h-64 object-cover" />
              <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" alt="Corporate Office" className="rounded-2xl shadow-lg w-full h-48 object-cover" />
            </div>
            <div className="space-y-4">
              <img src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop" alt="Modern Building" className="rounded-2xl shadow-lg w-full h-48 object-cover" />
              <img src="https://images.unsplash.com/photo-1572025442646-866d16c84a54?q=80&w=2070&auto=format&fit=crop" alt="Office Space" className="rounded-2xl shadow-lg w-full h-64 object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
