import { CheckCircle2, Clock, Map, TrendingUp, Building, Users, Star, ShieldCheck } from 'lucide-react';

const features = [
  { icon: Building, title: "Premium Construction Quality", desc: "Using the best materials for lasting durability." },
  { icon: Map, title: "Prime Project Locations", desc: "Strategically chosen for high growth and accessibility." },
  { icon: Star, title: "Modern Architectural Design", desc: "Contemporary aesthetics blended with functional spaces." },
  { icon: TrendingUp, title: "Secure Investment Opportunities", desc: "High ROI and capital appreciation." },
  { icon: Users, title: "Customer-Centric Approach", desc: "Focused on client satisfaction and transparency." },
  { icon: Clock, title: "Timely Project Delivery", desc: "Committed to handing over projects on schedule." },
  { icon: ShieldCheck, title: "Professional Management", desc: "Experienced team handling every detail." },
  { icon: CheckCircle2, title: "Long-Term Value Creation", desc: "Building assets that appreciate over generations." },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent-600 font-medium tracking-wider uppercase text-sm mb-4 block">
            Why Choose Us
          </span>
          <h2 className="text-4xl font-serif font-bold text-brand-900 mb-6">
            The Meridian Advantage
          </h2>
          <p className="text-slate-600 text-lg">
            We don't just build structures; we create landmarks that offer unparalleled living experiences and lucrative investment returns.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index} 
                className="group p-6 bg-brand-50 rounded-2xl hover:bg-brand-900 transition-colors duration-300"
              >
                <div className="w-12 h-12 bg-white group-hover:bg-accent-500 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300 shadow-sm">
                  <Icon className="w-6 h-6 text-brand-900 group-hover:text-white" />
                </div>
                <h3 className="font-serif font-bold text-xl text-brand-900 group-hover:text-white mb-3 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-slate-600 group-hover:text-slate-300 text-sm leading-relaxed transition-colors">
                  {feature.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
