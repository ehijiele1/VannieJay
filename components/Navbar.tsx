import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Real Estate', path: '/products' },
    { name: 'Investments', path: '/investment-solutions' },
    { name: 'Insights', path: '/resources' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-[#E5E5E5]">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        <div className="flex justify-between items-center h-[76px]">
          <Link to="/" className="shrink-0 flex items-center h-12" aria-label="VannieJay home">
            <Logo className="h-10" />
          </Link>

          <div className="hidden lg:flex items-center gap-7">
            {navItems.slice(1).map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-[13px] font-medium transition-colors ${isActive(item.path) ? 'text-[#111111]' : 'text-[#777777] hover:text-[#111111]'}`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="inline-flex items-center px-5 py-2.5 rounded-lg bg-[#111111] text-white text-[13px] font-semibold hover:bg-[#333333] transition-colors"
            >
              Start a Conversation
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-[#111111] rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#C8A24A]"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-white border-t border-[#E5E5E5]">
          <div className="max-w-[1280px] mx-auto px-5 py-4 space-y-1">
            {navItems.slice(1).map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-3 rounded-lg text-base font-medium ${isActive(item.path) ? 'bg-[#F4F4F4] text-[#111111]' : 'text-[#777777]'}`}
              >
                {item.name}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setIsOpen(false)} className="block mt-2 px-4 py-3 rounded-lg bg-[#111111] text-white text-center font-semibold">
              Start a Conversation
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
