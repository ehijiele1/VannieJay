import React from 'react';
import { Link } from 'react-router-dom';
import { SOCIAL_LINKS, BRAND_NAME, BRAND_STATEMENT } from '../constants';
import { Facebook, Instagram, Linkedin, Twitter, Youtube, MessageCircle } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => (
  <footer className="bg-[#111111] text-white">
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-14 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <Logo className="h-14" light />
          <p className="mt-7 max-w-md text-sm leading-7 text-white/55">{BRAND_STATEMENT}</p>
          <p className="mt-5 text-xs font-semibold uppercase tracking-[0.22em] text-[#C8A24A]">The Gateway to Opportunity.</p>
          <div className="mt-8 flex flex-wrap gap-5 text-white/55">
            <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-white"><Facebook size={19} /></a>
            <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-white"><Instagram size={19} /></a>
            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-white"><Linkedin size={19} /></a>
            <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer" aria-label="X" className="hover:text-white"><Twitter size={19} /></a>
            <a href={SOCIAL_LINKS.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:text-white"><Youtube size={19} /></a>
          </div>
        </div>
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-white">Explore</h2>
          <ul className="mt-6 space-y-3 text-sm text-white/55">
            <li><Link to="/about" className="hover:text-white">About</Link></li>
            <li><Link to="/investment-solutions" className="hover:text-white">Investments</Link></li>
            <li><Link to="/products" className="hover:text-white">Real Estate</Link></li>
            <li><Link to="/services" className="hover:text-white">Services</Link></li>
            <li><Link to="/resources" className="hover:text-white">Insights</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-white">Start a conversation</h2>
          <p className="mt-6 text-sm leading-6 text-white/55">Tell us what you are trying to solve and we will help you identify the next step.</p>
          <a href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-[#111111] hover:bg-[#F4F4F4]"><MessageCircle size={17} /> WhatsApp</a>
        </div>
      </div>
      <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-7 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/35 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {BRAND_NAME}</p>
        <div className="flex gap-6"><a href="#" className="hover:text-white/70">Privacy Policy</a><a href="#" className="hover:text-white/70">Terms of Service</a></div>
      </div>
    </div>
  </footer>
);

export default Footer;
