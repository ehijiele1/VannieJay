
import React from 'react';
import { Target, Globe2, ShieldCheck, Users, Mail, ArrowRight } from 'lucide-react';
import { EXTERNAL_LINKS } from '../constants';

const About: React.FC = () => {
  return (
    <div className="pb-20">
      {/* Header Banner */}
      <section className="relative h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=1600" 
            alt="About VannieJay Banner" 
            className="w-full h-full object-cover brightness-[0.3]"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 italic">About VannieJay</h1>
          <p className="text-xl text-slate-300 max-w-2xl leading-relaxed font-light">
            A multi-service firm dedicated to long-term wealth creation and strategic organizational growth through global expertise.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20">
        <div className="bg-white rounded-[2.5rem] shadow-2xl p-8 md:p-16 grid grid-cols-1 lg:grid-cols-2 gap-16 border border-slate-100">
          <div className="space-y-10">
            <div>
              <div className="flex flex-col md:flex-row md:items-center gap-6 mb-4">
                <div className="w-20 h-20 shrink-0 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 shadow-lg border border-indigo-100">
                   <Users size={40} />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 italic">Who We Are</h2>
              </div>
              <p className="text-slate-600 leading-relaxed text-lg">
                VannieJay Business Services is a premier multi-service firm providing specialized real estate investment solutions, property marketing, and talent sourcing services. We cater to forward-thinking individuals and organizations looking to navigate local and global markets with confidence.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 inline-flex items-center italic">
                <Target className="mr-3 text-indigo-600" /> Our Mission
              </h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                Our mission is to empower our clients by providing access to verified wealth-building assets and operational expertise. We believe in sustainable growth through strategic real estate acquisitions and effective workforce management.
              </p>
            </div>
          </div>

          <div className="space-y-10">
             <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 inline-flex items-center italic">
                <ShieldCheck className="mr-3 text-indigo-600" /> How We Operate
              </h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                We utilize a partner-led advisory model. Our approach is referral-driven, focusing on deep trust and long-term relationships rather than high-volume transactionality. By partnering with leading developers and technology platforms, we ensure our offerings are of the highest standard.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 inline-flex items-center italic">
                <Globe2 className="mr-3 text-indigo-600" /> Where We Operate
              </h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                Headquartered in Nigeria, we manage a significant portfolio across major Nigerian metropolitan areas. Additionally, we provide streamlined access to select international markets, with a core focus on high-yield real estate opportunities in the United States.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join the Journey Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="bg-slate-50 rounded-[3rem] p-12 lg:p-20 border border-slate-100 flex flex-col lg:flex-row items-center gap-16 overflow-hidden relative">
          <div className="lg:w-1/2">
             <h2 className="text-4xl font-extrabold text-slate-900 mb-8 italic">Join Our Journey</h2>
             <p className="text-slate-600 text-xl leading-relaxed mb-10 font-light">
               We are constantly seeking passionate sales and marketing professionals, as well as other talented individuals ready to make a difference in our dynamic firm.
             </p>
             <div className="flex flex-col gap-6">
               <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-indigo-600 border border-slate-100">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Apply Today</p>
                    <a href={`mailto:${EXTERNAL_LINKS.hrEmail}`} className="text-xl font-bold text-slate-900 hover:text-indigo-600 transition-colors">
                      {EXTERNAL_LINKS.hrEmail}
                    </a>
                  </div>
               </div>
               <a 
                href={`mailto:${EXTERNAL_LINKS.hrEmail}`}
                className="inline-flex items-center justify-center px-10 py-5 bg-slate-900 text-white font-bold rounded-2xl hover:bg-slate-800 transition-all w-fit shadow-xl"
               >
                 Submit Your CV <ArrowRight size={20} className="ml-2" />
               </a>
             </div>
          </div>
          <div className="lg:w-1/2 relative h-[400px]">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800"
              alt="Dynamic Team"
              className="w-full h-full object-cover rounded-[2.5rem] shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>
      </section>

      {/* Visual Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="rounded-3xl overflow-hidden h-96 shadow-2xl relative group">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200"
            alt="Corporate Environment"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-indigo-900/10"></div>
        </div>
      </section>
    </div>
  );
};

export default About;
