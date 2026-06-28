import { Play, Image as ImageIcon } from 'lucide-react';

export default function Media() {
  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent-600 font-medium tracking-wider uppercase text-sm mb-4 block">
            Media & Gallery
          </span>
          <h2 className="text-4xl font-serif font-bold text-brand-900 mb-6">
            Explore Our Journey
          </h2>
          <p className="text-slate-600 text-lg">
            Explore our construction journey through photographs and videos showcasing completed work, construction progress, and architectural details.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Photos Grid */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-6">
              <ImageIcon className="w-6 h-6 text-accent-500" />
              <h3 className="text-2xl font-serif font-bold text-brand-900">Photo Gallery</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square rounded-2xl overflow-hidden bg-brand-100 group relative cursor-pointer">
                <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071&auto=format&fit=crop" alt="Construction" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-brand-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-medium">Construction</span>
                </div>
              </div>
              <div className="aspect-square rounded-2xl overflow-hidden bg-brand-100 group relative cursor-pointer">
                <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" alt="Architecture" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-brand-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-medium">Architecture</span>
                </div>
              </div>
              <div className="col-span-2 aspect-[2/1] rounded-2xl overflow-hidden bg-brand-100 group relative cursor-pointer">
                <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" alt="Interiors" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-brand-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-medium">Interiors</span>
                </div>
              </div>
            </div>
          </div>

          {/* Videos Grid */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-6">
              <Play className="w-6 h-6 text-accent-500" />
              <h3 className="text-2xl font-serif font-bold text-brand-900">Video Tours</h3>
            </div>
            <div className="space-y-4">
              <div className="aspect-video rounded-2xl overflow-hidden bg-brand-900 relative group cursor-pointer">
                <img src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2000&auto=format&fit=crop" alt="Video Thumbnail" className="w-full h-full object-cover opacity-60 transition-transform duration-500 group-hover:scale-105 group-hover:opacity-40" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                  <div className="w-16 h-16 rounded-full bg-accent-500 flex items-center justify-center mb-3 shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 fill-current ml-1" />
                  </div>
                  <span className="font-medium text-lg">SkyBridge Walkthrough</span>
                  <span className="text-sm text-slate-300">3:45</span>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-1 aspect-video rounded-xl overflow-hidden bg-brand-900 relative group cursor-pointer">
                  <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071&auto=format&fit=crop" alt="Video Thumbnail" className="w-full h-full object-cover opacity-60 transition-transform duration-500 group-hover:scale-105 group-hover:opacity-40" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                    <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center backdrop-blur-sm group-hover:bg-white/20 transition-colors">
                      <Play className="w-4 h-4 fill-current ml-1" />
                    </div>
                  </div>
                </div>
                <div className="flex-1 aspect-video rounded-xl overflow-hidden bg-brand-900 relative group cursor-pointer">
                  <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" alt="Video Thumbnail" className="w-full h-full object-cover opacity-60 transition-transform duration-500 group-hover:scale-105 group-hover:opacity-40" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                    <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center backdrop-blur-sm group-hover:bg-white/20 transition-colors">
                      <Play className="w-4 h-4 fill-current ml-1" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
