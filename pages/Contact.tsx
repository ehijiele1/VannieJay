
import React, { useState } from 'react';
import { MessageSquare, Mail, MapPin, Send, PhoneCall, ArrowRight, Globe, Phone } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: 'Real Estate Investment',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMsg = `Hello VannieJay, I am ${formData.name}. I am interested in ${formData.interest}. My message: ${formData.message}`;
    const encodedMsg = encodeURIComponent(whatsappMsg);
    // Updated to use ? separator for direct wa.me/number links
    window.open(`${SOCIAL_LINKS.whatsapp}?text=${encodedMsg}`, '_blank');
  };

  return (
    <div className="pb-20">
      {/* Banner Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&q=80&w=1600" 
            alt="Contact Banner" 
            className="w-full h-full object-cover brightness-[0.3]"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 italic">Connect With Us</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-light">
            Whether you are exploring luxury property or strategic talent solutions, our team is standing by to assist.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          {/* Left: Info */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8 italic">Operational Reach</h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-12 font-light">
                VannieJay Business Services operates locally across Nigeria's major urban centers and maintains a strategic presence in select international markets.
              </p>
              
              <div className="space-y-12">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 shrink-0 shadow-sm border border-indigo-100">
                    <Mail size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-xl mb-1">Strategic Inquiries</h4>
                    <p className="text-slate-600 text-lg font-light">hello@vanniejay.com.ng</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 shrink-0 shadow-sm border border-emerald-100">
                    <MessageSquare size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-xl mb-1">WhatsApp Hotline</h4>
                    <a
                      href={SOCIAL_LINKS.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-600 font-bold text-lg hover:underline flex items-center gap-2"
                    >
                      Instant Client Support <Send size={18} />
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-rose-50 rounded-2xl flex items-center justify-center text-rose-600 shrink-0 shadow-sm border border-rose-100">
                    <Phone size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-xl mb-1">Direct Voice Line</h4>
                    <a 
                      href={`tel:${SOCIAL_LINKS.phone}`} 
                      className="text-slate-600 text-lg font-light hover:text-rose-600 transition-colors"
                    >
                      +234 803 303 4155
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 shrink-0 shadow-sm border border-blue-100">
                    <Globe size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-xl mb-1">Key Markets</h4>
                    <p className="text-slate-600 text-lg font-light leading-relaxed">Nigeria: Lagos, Abuja, Ogun<br/>USA: Houston (TX), Atlanta (GA)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-12 bg-indigo-900 text-white rounded-[3rem] shadow-2xl relative overflow-hidden group mt-10">
               <PhoneCall className="absolute -bottom-8 -right-8 text-white/10 w-48 h-48 group-hover:scale-110 transition-transform duration-700" />
               <h4 className="font-bold text-2xl mb-6 italic">Referral Appreciation</h4>
               <p className="text-indigo-100 text-xl leading-relaxed italic font-light relative z-10">
                 "Our firm is built on a foundation of trust. Strategic referrals from our partners are the cornerstone of our expansion, and we ensure they are consistently recognized and rewarded."
               </p>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-white p-10 md:p-16 rounded-[4rem] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.1)] border border-slate-100">
            <h3 className="text-3xl font-bold text-slate-900 mb-10 italic text-center">Advisory Request</h3>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 gap-8">
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Full Name</label>
                  <input
                    type="text"
                    required
                    className="w-full px-8 py-5 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-indigo-500 focus:outline-none focus:bg-white transition-all text-lg"
                    placeholder="Jane Doe"
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Email Address</label>
                  <input
                    type="email"
                    required
                    className="w-full px-8 py-5 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-indigo-500 focus:outline-none focus:bg-white transition-all text-lg"
                    placeholder="jane@organization.com"
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Primary Area of Interest</label>
                <div className="relative">
                  <select
                    className="w-full px-8 py-5 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-indigo-500 focus:outline-none focus:bg-white transition-all appearance-none cursor-pointer text-lg"
                    value={formData.interest}
                    onChange={e => setFormData({...formData, interest: e.target.value})}
                  >
                    <option>Real Estate & Property Investment</option>
                    <option>Talent Sourcing & SME Careers</option>
                    <option>Business & Marketing Support</option>
                    <option>International (USA) Opportunities</option>
                    <option>Other / General Inquiry</option>
                  </select>
                  <div className="absolute right-8 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                    <ArrowRight size={20} className="rotate-90" />
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Inquiry Details</label>
                <textarea
                  required
                  rows={4}
                  className="w-full px-8 py-5 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-indigo-500 focus:outline-none focus:bg-white transition-all text-lg"
                  placeholder="Please describe your objectives..."
                  value={formData.message}
                  onChange={e => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-6 bg-indigo-600 text-white font-bold rounded-[2rem] hover:bg-indigo-700 transition-all flex items-center justify-center shadow-2xl text-xl hover:translate-y-[-4px]"
              >
                Send via WhatsApp <ArrowRight size={24} className="ml-3" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
