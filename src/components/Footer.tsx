import { Building2, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

interface FooterProps {
  onAdminClick: () => void;
}

export default function Footer({ onAdminClick }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-900 text-slate-300 pt-20 pb-10 border-t border-brand-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <div className="flex items-center gap-2 mb-6">
            <img 
              src="/logo.png" 
              alt="Meridian Ventures" 
              className="h-20 w-auto object-contain transition-all duration-300"
            />
          </div>
          <p className="text-xl font-serif italic text-slate-400 mb-8 max-w-2xl">
            Building Trust <span className="text-accent-500 px-2">•</span> Creating Landmarks <span className="text-accent-500 px-2">•</span> Delivering Excellence
          </p>
          
          <div className="flex gap-6 mb-8">
            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent-500 hover:text-white transition-all duration-300">
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-medium">
            <a href="#about" className="hover:text-accent-400 transition-colors">About Us</a>
            <a href="#projects" className="hover:text-accent-400 transition-colors">Projects</a>
            <a href="#features" className="hover:text-accent-400 transition-colors">Why Choose Us</a>
            <a href="#contact" className="hover:text-accent-400 transition-colors">Contact</a>
            <button 
              onClick={onAdminClick} 
              className="hover:text-accent-400 transition-colors font-medium cursor-pointer"
            >
              Portal Login
            </button>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500 gap-4">
          <p>&copy; {currentYear} Meridian Ventures. All Rights Reserved.</p>
          <button 
            onClick={onAdminClick}
            className="text-slate-600 hover:text-accent-500 transition-colors font-mono text-xs flex items-center gap-1 cursor-pointer"
          >
            🛡️ Admin Inquiries Portal
          </button>
        </div>
      </div>
    </footer>
  );
}
