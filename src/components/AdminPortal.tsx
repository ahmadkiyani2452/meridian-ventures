import React, { useState, useEffect } from 'react';
import { Lock, Eye, EyeOff, ShieldCheck, Mail, Phone, Calendar, Trash2, X, RefreshCw, FileText } from 'lucide-react';
import { fetchContactMessages, ContactMessage, db } from '../firebase';
import { doc, deleteDoc } from 'firebase/firestore';

interface AdminPortalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AdminPortal({ isOpen, onClose }: AdminPortalProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState('');
  
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState<ContactMessage | null>(null);
  const [filterSubject, setFilterSubject] = useState('All');

  // Hardcoded simple demo password
  const ADMIN_PASSWORD = 'meridian2026';

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setLoginError('');
      loadMessages();
    } else {
      setLoginError('Ghalat password! Dobara koshish karein.');
    }
  };

  const loadMessages = async () => {
    setLoading(true);
    try {
      const data = await fetchContactMessages();
      setMessages(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string, e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent opening the details modal
    if (confirm('Kya aap waqai ye inquiry delete karna chahte hain?')) {
      try {
        await deleteDoc(doc(db, 'contact_messages', id));
        setMessages(prev => prev.filter(m => m.id !== id));
        if (selectedMessage?.id === id) {
          setSelectedMessage(null);
        }
      } catch (err) {
        console.error("Error deleting document: ", err);
        alert("Delete karne me koi masla pesh aya.");
      }
    }
  };

  const formatTimestamp = (timestamp: any) => {
    if (!timestamp) return 'Abhi abhi';
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    return date.toLocaleDateString('ur-PK', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }) + ' - ' + date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const filteredMessages = filterSubject === 'All' 
    ? messages 
    : messages.filter(m => m.subject === filterSubject);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-brand-900/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl w-full max-w-5xl h-[85vh] flex flex-col overflow-hidden shadow-2xl border border-slate-100">
        
        {/* Header */}
        <div className="bg-brand-900 text-white px-8 py-5 flex items-center justify-between border-b border-brand-800">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-accent-500" />
            <div>
              <h2 className="font-serif text-xl font-bold tracking-wide">Meridian Ventures Inquiries Portal</h2>
              <p className="text-xs text-slate-400">Manage client messages and leads securely in one place</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto bg-slate-50 p-6 md:p-8">
          {!isAuthenticated ? (
            /* Login Form */
            <div className="max-w-md mx-auto my-12 bg-white p-8 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-accent-500/10 text-accent-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lock className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-serif font-bold text-brand-900 mb-2">Admin Login Required</h3>
                <p className="text-slate-500 text-sm">Apne inquiries aur messages dekhne ke liye password enter karein.</p>
              </div>

              <form onSubmit={handleLogin} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-brand-900 mb-2">Portal Password</label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter password..."
                      className="w-full pl-4 pr-12 py-3 rounded-xl bg-brand-50 border-transparent focus:bg-white focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 transition-all outline-none text-brand-900 font-mono"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-brand-900 transition-colors"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                  {loginError && (
                    <p className="text-rose-600 text-xs mt-2 font-medium">{loginError}</p>
                  )}
                  <p className="text-slate-400 text-xs mt-3 italic text-center">
                    (Hint: Default demo password is <strong className="font-mono text-slate-500">meridian2026</strong>)
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full bg-accent-500 hover:bg-accent-600 text-white font-medium py-3 rounded-xl shadow-lg shadow-accent-500/10 transition-all"
                >
                  Access Inquiries Portal
                </button>
              </form>
            </div>
          ) : (
            /* Dashboard View */
            <div className="h-full flex flex-col gap-6">
              
              {/* Toolbar */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                <div className="flex flex-wrap gap-2 items-center">
                  <span className="text-sm font-medium text-slate-500">Filter by Subject:</span>
                  {['All', 'General Inquiry', 'Book a Site Visit (SkyBridge)', 'Investment Opportunities', 'Bin Sultan Arcade Info'].map((sub) => (
                    <button
                      key={sub}
                      onClick={() => setFilterSubject(sub)}
                      className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-colors ${
                        filterSubject === sub 
                          ? 'bg-brand-900 text-white' 
                          : 'bg-brand-50 text-slate-600 hover:bg-brand-100'
                      }`}
                    >
                      {sub.replace(' (SkyBridge)', '').replace(' Info', '')}
                    </button>
                  ))}
                </div>

                <button
                  onClick={loadMessages}
                  disabled={loading}
                  className="flex items-center gap-2 text-xs font-medium bg-brand-50 hover:bg-brand-100 text-brand-900 px-4 py-2 rounded-lg transition-colors border border-slate-100"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
                  Refresh
                </button>
              </div>

              {/* Inquiry Cards / List Grid */}
              <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-6 overflow-hidden">
                
                {/* List of Messages */}
                <div className="lg:col-span-1 overflow-y-auto bg-white rounded-2xl border border-slate-100 p-4 space-y-3 h-[50vh] lg:h-auto">
                  <h3 className="font-serif font-bold text-slate-900 text-lg border-b border-slate-100 pb-3 flex justify-between items-center">
                    <span>Inquiries List</span>
                    <span className="text-xs font-sans font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">
                      {filteredMessages.length} Messages
                    </span>
                  </h3>

                  {loading && messages.length === 0 ? (
                    <div className="py-12 text-center text-slate-400">Loading messages...</div>
                  ) : filteredMessages.length === 0 ? (
                    <div className="py-12 text-center text-slate-400 text-sm">Koi message nahi mila.</div>
                  ) : (
                    filteredMessages.map((msg) => (
                      <div
                        key={msg.id}
                        onClick={() => setSelectedMessage(msg)}
                        className={`p-4 rounded-xl border text-left cursor-pointer transition-all hover:shadow-sm ${
                          selectedMessage?.id === msg.id
                            ? 'bg-brand-50 border-accent-400 shadow-sm'
                            : 'bg-white border-slate-100 hover:border-slate-300'
                        }`}
                      >
                        <div className="flex justify-between items-start gap-2 mb-2">
                          <span className="text-xs font-bold text-accent-600 bg-accent-500/10 px-2 py-0.5 rounded-md">
                            {msg.subject.replace(' (SkyBridge)', '').replace(' Info', '')}
                          </span>
                          <button
                            onClick={(e) => msg.id && handleDelete(msg.id, e)}
                            className="p-1 rounded-md text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                        <h4 className="font-semibold text-brand-900 text-sm line-clamp-1">{msg.name}</h4>
                        <p className="text-xs text-slate-500 mb-2">{msg.email}</p>
                        <p className="text-xs text-slate-600 line-clamp-2">{msg.message}</p>
                      </div>
                    ))
                  )}
                </div>

                {/* Message Details Preview Panel */}
                <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-100 p-6 flex flex-col justify-between overflow-y-auto h-[45vh] lg:h-auto">
                  {selectedMessage ? (
                    <div className="space-y-6">
                      <div className="border-b border-slate-100 pb-4">
                        <div className="flex flex-wrap gap-2 items-center mb-3">
                          <span className="text-xs font-bold bg-accent-500 text-white px-2.5 py-1 rounded-full">
                            {selectedMessage.subject}
                          </span>
                          <span className="text-xs text-slate-400 flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5" />
                            {formatTimestamp(selectedMessage.createdAt)}
                          </span>
                        </div>
                        <h3 className="font-serif font-bold text-2xl text-brand-900">{selectedMessage.name}</h3>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <a 
                          href={`tel:${selectedMessage.phone}`}
                          className="flex items-center gap-3 p-3 bg-brand-50 rounded-xl hover:bg-brand-100 transition-colors"
                        >
                          <Phone className="w-5 h-5 text-accent-600" />
                          <div>
                            <p className="text-xs text-slate-400 font-semibold">Phone Number</p>
                            <p className="text-sm text-brand-900 font-medium">{selectedMessage.phone}</p>
                          </div>
                        </a>
                        <a 
                          href={`mailto:${selectedMessage.email}`}
                          className="flex items-center gap-3 p-3 bg-brand-50 rounded-xl hover:bg-brand-100 transition-colors"
                        >
                          <Mail className="w-5 h-5 text-accent-600" />
                          <div>
                            <p className="text-xs text-slate-400 font-semibold">Email Address</p>
                            <p className="text-sm text-brand-900 font-medium break-all">{selectedMessage.email}</p>
                          </div>
                        </a>
                      </div>

                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                          <FileText className="w-3.5 h-3.5" />
                          Message / Details
                        </h4>
                        <p className="text-slate-700 leading-relaxed whitespace-pre-wrap">{selectedMessage.message}</p>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center text-center py-20 text-slate-400 flex-1">
                      <FileText className="w-16 h-16 stroke-1 mb-4 text-slate-300 animate-pulse" />
                      <h4 className="font-serif font-bold text-lg text-brand-900 mb-1">No Message Selected</h4>
                      <p className="text-sm max-w-sm">Kisi message ki tafseel dekhne ke liye list me se us message par click karein.</p>
                    </div>
                  )}

                  {selectedMessage && (
                    <div className="mt-8 pt-4 border-t border-slate-100 flex justify-end gap-3">
                      <a 
                        href={`https://wa.me/${selectedMessage.phone.replace(/[^0-9]/g, '')}`} 
                        target="_blank" 
                        rel="noreferrer"
                        className="bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-2.5 rounded-xl text-sm font-medium transition-colors"
                      >
                        Reply on WhatsApp
                      </a>
                      <a 
                        href={`mailto:${selectedMessage.email}?subject=Re: ${selectedMessage.subject}`}
                        className="bg-brand-900 hover:bg-brand-800 text-white px-5 py-2.5 rounded-xl text-sm font-medium transition-colors"
                      >
                        Send Email
                      </a>
                    </div>
                  )}
                </div>

              </div>

            </div>
          )}
        </div>

      </div>
    </div>
  );
}
