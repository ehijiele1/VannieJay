import { Product } from './types';
import * as Data from './lib/business-data';

export const BRAND_NAME = Data.BRAND_NAME;
export const BRAND_STATEMENT = Data.BRAND_STATEMENT;

// Brand Assets
export const INVESTMENT_BANNER_URL = "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=1200";
export const STRATEGIC_WEALTH_IMAGE = "https://images.unsplash.com/photo-1634733988138-bf2c3a2a13fa?auto=format&fit=crop&q=80&w=1200";
export const INVESTMENT_SOLUTIONS_BANNER = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1600";

export const SOCIAL_LINKS = Data.SOCIAL_LINKS;
export const EXTERNAL_LINKS = Data.EXTERNAL_LINKS;

export const MOCK_PRODUCTS: Product[] = Data.PRODUCTS.map(p => ({
  ...p,
  locationName: p.location,
  paymentOption: (p.paymentPlan.includes('Installments') ? ['Outright', '12 Months'] : ['Outright']) as any,
  imageUrl: p.id === '1' ? "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1400" :
    p.id === '2' ? "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=1400" :
      p.id === '3' ? "https://images.unsplash.com/photo-1533282960533-51328aa49826?auto=format&fit=crop&q=80&w=1400" :
        p.id === '4' ? "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1400" :
          p.id === '6' ? "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&q=80&w=1200" :
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1400"
}));
