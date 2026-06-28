import { ShieldCheck, Target, Lightbulb, Users } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-brand-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-accent-600 font-medium tracking-wider uppercase text-sm mb-4 block">
              About Meridian Ventures
            </span>
            <h2 className="text-4xl font-serif font-bold text-brand-900 mb-6">
              A Legacy of Quality Construction
            </h2>
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
              <p>
                <strong>Meridian Ventures</strong> is a forward-thinking real estate development company committed to shaping modern communities through exceptional commercial and residential projects. Built on a foundation of trust, quality, and innovation, we strive to create developments that combine elegant architecture, strategic locations, and long-term investment value.
              </p>
              <p>
                Formerly known as <strong> Sultan Builders</strong>, our journey has evolved into <strong>Meridian Ventures</strong> — a brand that reflects our vision for the future. With years of experience in delivering successful projects, we continue to set new standards in design, construction, and customer satisfaction.
              </p>
              <p>
                At <strong>Meridian Ventures</strong>, we believe every project is more than just a building — its a lasting investment, a thriving business opportunity, and a place where people can live, work, and grow with confidence. Our mission is to deliver landmark developments that enrich communities and create value for generations to come.
              </p>
            </div>
            
            <div className="mt-10 grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                <Target className="w-8 h-8 text-accent-500 mb-4" />
                <h3 className="font-serif font-bold text-brand-900 text-xl mb-2">Our Vision</h3>
                <p className="text-slate-600 text-sm">
                  To become one of Pakistan's most trusted real estate developers by delivering world-class projects that inspire confidence, innovation, and long-term value.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                <Lightbulb className="w-8 h-8 text-accent-500 mb-4" />
                <h3 className="font-serif font-bold text-brand-900 text-xl mb-2">Our Mission</h3>
                <ul className="text-slate-600 text-sm space-y-2">
                  <li className="flex gap-2"><span className="text-accent-500">•</span> Deliver premium quality</li>
                  <li className="flex gap-2"><span className="text-accent-500">•</span> Secure investments</li>
                  <li className="flex gap-2"><span className="text-accent-500">•</span> Modern communities</li>
                  <li className="flex gap-2"><span className="text-accent-500">•</span> Ensure transparency</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/bin.jpeg" 
                alt="Meridian Ventures Project" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback to stock construction image if custom image is not yet uploaded
                  e.currentTarget.src = "https://images.unsplash.com/photo-1541888081686-e26093d395da?q=80&w=1887&auto=format&fit=crop";
                }}
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-brand-900 text-white p-8 rounded-2xl shadow-xl max-w-xs">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-accent-500 p-3 rounded-full">
                  <ShieldCheck className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold font-serif">Trusted</div>
                  <div className="text-slate-300 text-sm">Developers</div>
                </div>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                Evolving from Sultan Builders to deliver even greater excellence in real estate.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
