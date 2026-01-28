
import React, { useState, useMemo } from 'react';
import { MOCK_PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';
import { ProductType, Location, Purpose } from '../types';
import { Search, Filter, X } from 'lucide-react';

const Products: React.FC = () => {
  const [filterType, setFilterType] = useState<ProductType | 'All'>('All');
  const [filterRegion, setFilterRegion] = useState<Location | 'All'>('All');
  const [filterPurpose, setFilterPurpose] = useState<Purpose | 'All'>('All');

  const filteredProducts = useMemo(() => {
    return MOCK_PRODUCTS.filter(product => {
      const typeMatch = filterType === 'All' || product.type === filterType;
      const regionMatch = filterRegion === 'All' || product.region === filterRegion;
      const purposeMatch = filterPurpose === 'All' || product.purpose === filterPurpose;
      return typeMatch && regionMatch && purposeMatch;
    });
  }, [filterType, filterRegion, filterPurpose]);

  const clearFilters = () => {
    setFilterType('All');
    setFilterRegion('All');
    setFilterPurpose('All');
  };

  return (
    <div className="pb-20">
      {/* Banner Section */}
      <section className="relative h-[45vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1600" 
            alt="Property Portfolio Banner" 
            className="w-full h-full object-cover brightness-[0.4]"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 italic">Property Portfolio</h1>
          <p className="text-lg text-slate-200 max-w-2xl mx-auto font-light leading-relaxed">
            Discover a curated selection of residential and commercial opportunities across Nigeria and the United States.
          </p>
        </div>
      </section>

      <section className="bg-white border-b border-slate-200 py-8 sticky top-[80px] z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters Bar */}
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center space-x-2">
              <Filter size={18} className="text-slate-400" />
              <span className="text-sm font-bold text-slate-900 uppercase tracking-tight">Refine By:</span>
            </div>

            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value as any)}
              className="bg-slate-50 border border-slate-200 text-sm font-medium rounded-xl px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all cursor-pointer"
            >
              <option value="All">All Types</option>
              <option value="Land">Land</option>
              <option value="Residential">Residential</option>
              <option value="Investment">Investment</option>
            </select>

            <select
              value={filterRegion}
              onChange={(e) => setFilterRegion(e.target.value as any)}
              className="bg-slate-50 border border-slate-200 text-sm font-medium rounded-xl px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all cursor-pointer"
            >
              <option value="All">All Regions</option>
              <option value="Nigeria">Nigeria</option>
              <option value="USA">USA (International)</option>
            </select>

            <select
              value={filterPurpose}
              onChange={(e) => setFilterPurpose(e.target.value as any)}
              className="bg-slate-50 border border-slate-200 text-sm font-medium rounded-xl px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all cursor-pointer"
            >
              <option value="All">All Purposes</option>
              <option value="Residential">Residential</option>
              <option value="Commercial">Commercial</option>
              <option value="Investment">Investment</option>
            </select>

            {(filterType !== 'All' || filterRegion !== 'All' || filterPurpose !== 'All') && (
              <button
                onClick={clearFilters}
                className="flex items-center text-sm text-red-600 hover:text-red-700 transition-colors font-bold ml-2"
              >
                <X size={16} className="mr-1" /> Reset
              </button>
            )}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24 bg-slate-50 rounded-[3rem] border-2 border-dashed border-slate-200">
            <Search size={48} className="mx-auto text-slate-300 mb-6" />
            <h3 className="text-2xl font-bold text-slate-900 italic">No listings match your selection</h3>
            <p className="text-slate-500 mt-2 max-w-md mx-auto">Try broadening your search or contact our advisory team for off-market opportunities.</p>
            <button
              onClick={clearFilters}
              className="mt-8 px-8 py-3 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-transform hover:scale-105"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>

      {/* Trust Note */}
      <section className="max-w-5xl mx-auto px-4 text-center mt-12 py-12 bg-slate-900 text-slate-300 rounded-[2.5rem] shadow-2xl border border-slate-800">
        <p className="text-lg italic font-light leading-relaxed px-8">
          <span className="text-indigo-400 font-bold block mb-4 uppercase text-xs tracking-[0.2em]">Confidentiality Notice</span>
          To protect the integrity of our developments and partners, specific developer identities are disclosed during private consultation and formal documentation. All listed prices are transparent and verified.
        </p>
      </section>
    </div>
  );
};

export default Products;
