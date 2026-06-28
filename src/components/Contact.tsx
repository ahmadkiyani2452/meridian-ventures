import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import React, { useState } from 'react';
import { saveContactMessage } from '../firebase';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');
    
    try {
      await saveContactMessage({
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        subject: formData.subject,
        message: formData.message
      });
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        phone: '',
        email: '',
        subject: 'General Inquiry',
        message: ''
      });
      
      // Auto-hide success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    } catch (error) {
      setIsSubmitting(false);
      setErrorMessage('Koi error aya hai message send karne me. Dobara koshish karein.');
      console.error(error);
    }
  };

  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent-600 font-medium tracking-wider uppercase text-sm mb-4 block">
            Get In Touch
          </span>
          <h2 className="text-4xl font-serif font-bold text-brand-900 mb-6">
            Book a Site Visit Today
          </h2>
          <p className="text-slate-600 text-lg">
            Interested in visiting our projects? Book a personalized site visit today and let our sales consultants guide you through every detail.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-brand-50 p-8 rounded-2xl border border-slate-100">
              <h3 className="font-serif font-bold text-xl text-brand-900 mb-6">Contact Details</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Phone className="w-5 h-5 text-accent-500" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-brand-900">Phone & WhatsApp</p>
                    <p className="text-slate-600 mt-1">+92 344 2366218</p>
                    <p className="text-slate-600">+92 300 6576565 </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Mail className="w-5 h-5 text-accent-500" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-brand-900">Email Address</p>
                    <a href="mailto:business.sultanbuilder@gmail.com" className="text-accent-600 hover:text-accent-700 transition-colors mt-1 inline-block">
                      business.sultanbuilder@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
                    <MapPin className="w-5 h-5 text-accent-500" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-brand-900">Office Address</p>
                    <p className="text-slate-600 mt-1">
                      Meridian Ventures Head Office<br />
                      Plot 3A, Block K, Top City Islamabad, Pakistan
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 relative overflow-hidden">
              {submitSuccess && (
                <div className="absolute inset-0 bg-white/95 backdrop-blur-sm z-10 flex flex-col items-center justify-center text-center p-6 transition-all duration-300">
                  <CheckCircle2 className="w-16 h-16 text-emerald-500 mb-4 animate-bounce" />
                  <h4 className="text-2xl font-serif font-bold text-brand-900 mb-2">Message Sent Successfully!</h4>
                  <p className="text-slate-600 max-w-md">
                    Bohat shukriya! Aapka message hmare database me save ho chuka hai. Hmari team jald hi aap se contact karegi.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitSuccess(false)}
                    className="mt-6 text-sm text-accent-600 hover:text-accent-700 font-medium underline"
                  >
                    Send another message
                  </button>
                </div>
              )}

              {errorMessage && (
                <div className="mb-6 p-4 bg-rose-50 border border-rose-100 text-rose-600 rounded-lg text-sm">
                  {errorMessage}
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-brand-900 mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-brand-50 border-transparent focus:bg-white focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 transition-all outline-none text-brand-900"
                    placeholder="Ahmad Munir"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-brand-900 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-brand-50 border-transparent focus:bg-white focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 transition-all outline-none text-brand-900"
                    placeholder="+92 XXX XXXXXXX"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-brand-900 mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-brand-50 border-transparent focus:bg-white focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 transition-all outline-none text-brand-900"
                    placeholder="ahmad@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-brand-900 mb-2">Subject</label>
                  <select
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-brand-50 border-transparent focus:bg-white focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 transition-all outline-none text-brand-900"
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Book a Site Visit (SkyBridge)">Book a Site Visit (SkyBridge)</option>
                    <option value="Investment Opportunities">Investment Opportunities</option>
                    <option value="Bin Sultan Arcade Info">Bin Sultan Arcade Info</option>
                  </select>
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-brand-900 mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-brand-50 border-transparent focus:bg-white focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 transition-all outline-none text-brand-900 resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-accent-500 hover:bg-accent-600 text-white font-medium py-4 rounded-lg flex items-center justify-center gap-2 transition-all active:scale-[0.98] disabled:opacity-70"
              >
                {isSubmitting ? (
                  <span className="animate-pulse">Sending...</span>
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
