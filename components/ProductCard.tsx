import React from 'react';
import { Product } from '../types';
import { Globe, MapPin, CreditCard } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProductCardProps { product: Product; }

const ProductCard: React.FC<ProductCardProps> = ({ product }) => (
  <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#E5E5E5] bg-white transition duration-300 hover:-translate-y-1 hover:border-[#C8A24A]/60 hover:shadow-[0_18px_50px_rgba(17,17,17,0.08)]">
    <div className="relative h-56 shrink-0 overflow-hidden bg-[#F4F4F4]">
      <img src={product.imageUrl} alt={product.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]" />
      {product.developer && <div className="absolute left-4 top-4 rounded-md bg-[#111111]/85 px-3 py-2 text-[9px] font-medium uppercase tracking-[0.18em] text-white">{product.developer}</div>}
      <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
        {product.isInternational && <span className="inline-flex items-center gap-1 rounded-md bg-[#111111] px-2.5 py-1.5 text-[9px] font-semibold uppercase tracking-wider text-white"><Globe size={10} /> International</span>}
        <span className="rounded-md bg-white px-2.5 py-1.5 text-[9px] font-semibold uppercase tracking-wider text-[#111111]">{product.type}</span>
      </div>
    </div>
    <div className="flex flex-grow flex-col p-6">
      <div className="flex items-start justify-between gap-4">
        <h3 className="line-clamp-2 text-lg font-semibold leading-6 text-[#111111] group-hover:text-[#C8A24A]">{product.name}</h3>
        <span className="shrink-0 text-base font-semibold text-[#111111]">{product.price}</span>
      </div>
      <div className="mt-3 flex items-center gap-1.5 text-sm text-[#777777]"><MapPin size={14} /><span className="truncate">{product.locationName}</span></div>
      <div className="mt-4 flex items-center gap-2 rounded-lg border border-[#E5E5E5] bg-[#F4F4F4] p-3 text-xs text-[#333333]"><CreditCard size={14} className="shrink-0 text-[#777777]" /><span>Payment: {product.paymentPlan}</span></div>
      {product.description && <p className="mt-4 line-clamp-3 text-xs leading-5 text-[#777777]">{product.description}</p>}
      <Link to="/contact" className="mt-6 inline-flex min-h-11 w-full items-center justify-center rounded-lg bg-[#111111] px-4 py-3 text-sm font-semibold text-white hover:bg-[#333333] focus:outline-none focus:ring-2 focus:ring-[#C8A24A] focus:ring-offset-2">Request details</Link>
    </div>
  </article>
);

export default ProductCard;
