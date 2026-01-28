
export type ProductType = 'Land' | 'Residential' | 'Investment';
export type Location = 'Nigeria' | 'USA';
export type PaymentOption = 'Outright' | '3 Months' | '6 Months' | '12 Months';
export type Purpose = 'Residential' | 'Commercial' | 'Investment';

export interface Product {
  id: string;
  name: string;
  developer?: string; // Added developer field
  locationName: string;
  price: string;
  paymentPlan: string;
  type: ProductType;
  region: Location;
  purpose: Purpose;
  paymentOption: PaymentOption[];
  imageUrl: string;
  isInternational?: boolean;
  description?: string;
}

export interface ServiceCategory {
  title: string;
  description: string;
  services: string[];
}
