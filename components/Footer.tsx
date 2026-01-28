
import React from 'react';
import { SOCIAL_LINKS, BRAND_NAME, BRAND_STATEMENT } from '../constants';
import { Facebook, Instagram, Linkedin, Twitter, Youtube, MessageCircle } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          <div className="col-span-1 lg:col-span-2 space-y-8">
            <div className="flex justify-start">
              <Logo className="h-16" light />
            </div>
            <p className="text-slate-400 text-base leading-relaxed max-w-md font-light">
              {BRAND_STATEMENT}
            </p>
            <div className="flex space-x-5">
              <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Facebook size={22} /></a>
              <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Instagram size={22} /></a>
              <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Linkedin size={22} /></a>
              <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Twitter size={22} /></a>
              <a href={SOCIAL_LINKS.youtube} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Youtube size={22} /></a>
              <a href={SOCIAL_LINKS.tiktok} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                   <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.27 1.76-.23.84-.16 1.74.28 2.48.48.81 1.37 1.39 2.28 1.47.99.08 2.03-.23 2.75-.91.47-.44.75-1.05.85-1.69.17-1.19.11-2.39.12-3.58.01-4.69-.02-9.37.02-14.06z"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6 italic uppercase text-xs tracking-widest">Navigation</h3>
            <ul className="space-y-4 text-sm">
              <li><a href="#/about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#/investment-solutions" className="hover:text-white transition-colors">Investment Solutions</a></li>
              <li><a href="#/products" className="hover:text-white transition-colors">Property Listings</a></li>
              <li><a href="#/services" className="hover:text-white transition-colors">Our Services</a></li>
              <li><a href="#/resources" className="hover:text-white transition-colors">Knowledge Center</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6 italic uppercase text-xs tracking-widest">Connect</h3>
            <div className="flex flex-col space-y-6">
              <a
                href={SOCIAL_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold rounded-xl transition-colors w-fit shadow-lg"
              >
                <MessageCircle size={18} className="mr-2" />
                WhatsApp Advisory
              </a>
              <div className="space-y-2">
                <p className="text-xs text-slate-500 italic">
                  “Trust is our primary asset.”
                </p>
                <p className="text-[10px] text-slate-600 font-bold uppercase tracking-tighter">
                  Referrals are always rewarded.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-slate-600 font-bold uppercase tracking-widest">
          <p>© {new Date().getFullYear()} {BRAND_NAME}</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
