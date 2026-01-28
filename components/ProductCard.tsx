
import React from 'react';
import { Product } from '../types';
import { Globe, MapPin, CreditCard, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-slate-100 group flex flex-col h-full">
      <div className="relative h-56 overflow-hidden shrink-0">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-105 contrast-[1.02] saturate-[1.1]"
        />
        
        {/* Developer Branding - Top Overlay */}
        {product.developer && (
          <div className="absolute top-0 left-0 right-0 bg-slate-900/40 backdrop-blur-[2px] px-4 py-2 flex items-center justify-center">
            <span className="text-[10px] text-white/95 uppercase tracking-[0.3em] font-medium italic" style={{ fontFamily: 'serif' }}>
              {product.developer}
            </span>
          </div>
        )}

        <div className="absolute bottom-4 left-4 flex flex-col gap-2">
          {product.isInternational && (
            <div className="flex items-center bg-indigo-600 text-white text-[9px] font-bold px-2 py-1 rounded uppercase tracking-wider w-fit">
              <Globe size={10} className="mr-1" />
              International
            </div>
          )}
          <div className="bg-white/90 backdrop-blur px-2 py-1 rounded text-[9px] font-bold text-slate-700 uppercase shadow-sm w-fit">
            {product.type}
          </div>
        </div>
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <div className="flex items-start justify-between mb-2 gap-2">
          <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors line-clamp-2">
            {product.name}
          </h3>
          <span className="text-indigo-600 font-bold text-lg whitespace-nowrap">
            {product.price}
          </span>
        </div>

        <div className="flex items-center text-slate-500 text-sm mb-3">
          <MapPin size={14} className="mr-1 shrink-0" />
          <span className="truncate">{product.locationName}</span>
        </div>

        <div className="flex items-center text-slate-600 text-xs mb-4 bg-slate-50 p-2 rounded border border-slate-100">
          <CreditCard size={14} className="mr-2 shrink-0 text-slate-400" />
          <span className="font-medium">Plan: {product.paymentPlan}</span>
        </div>

        {product.description && (
          <div className="mb-6 flex-grow">
            <p className="text-slate-500 text-[11px] leading-relaxed italic border-l-2 border-indigo-100 pl-3">
              {product.description}
            </p>
          </div>
        )}

        <Link
          to="/contact"
          className="block w-full text-center py-3 bg-slate-900 text-white text-sm font-bold rounded-xl hover:bg-slate-800 transition-all shadow-lg hover:shadow-indigo-100 mt-auto"
        >
          Request Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
