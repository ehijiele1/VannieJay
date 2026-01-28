
import { Product } from './types';

export const BRAND_NAME = "VannieJay Business Services";
export const BRAND_STATEMENT = "VannieJay Business Services helps individuals and organizations build long-term wealth and sustainable growth through real estate, investment solutions, and strategic support services.";

// Brand Assets
// Banner Image: Professional/Growth/Abstract (Existing)
export const INVESTMENT_BANNER_URL = "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=1200";

// Strategic Image: Hands holding Naira/Wealth (New)
export const STRATEGIC_WEALTH_IMAGE = "https://images.unsplash.com/photo-1634733988138-bf2c3a2a13fa?auto=format&fit=crop&q=80&w=1200";

// Specific Investment Solutions Page Banner (Replace with your Google Drive Link)
export const INVESTMENT_SOLUTIONS_BANNER = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1600";

export const SOCIAL_LINKS = {
  facebook: "https://facebook.com/vanniejaybizserv",
  instagram: "https://www.instagram.com/vanniejaybizserv",
  linkedin: "https://www.linkedin.com/company/vanniejay",
  twitter: "https://twitter.com/vanniejaybzserv",
  youtube: "https://www.youtube.com/@vanniejaybizserv",
  tiktok: "https://www.tiktok.com/@vanniejaybizserv",
  google: "https://share.google/JrVWvhaxsBLPw3Esf",
  whatsapp: "https://wa.me/2348033034155",
  phone: "+2348033034155"
};

export const EXTERNAL_LINKS = {
  smeCareers: "https://sme.careers/apply?referral=rp--119bac",
  realEstateCareers: "https://vanniejay.zohorecruit.com/jobs/Careers",
  podcast: "https://anchor.fm/vanniejay",
  hrEmail: "hr@vanniejay.com.ng"
};

export const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    name: "FarmWey: PalmOrigin",
    developer: "Pertinence Group",
    locationName: "Ewekoro, Ogun State, Nigeria",
    price: "₦700,000",
    paymentPlan: "20% Deposit | Outright/Installments",
    type: 'Land',
    region: 'Nigeria',
    purpose: 'Investment',
    paymentOption: ['Outright', '12 Months'],
    imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1400",
    description: "Your gateway to profitable oil palm investment. Featuring high-definition clusters of fresh fruit, this opportunity offers high-yield entry into the agricultural value chain."
  },
  {
    id: '7',
    name: "Hill City Estate",
    developer: "OG Holdings",
    locationName: "Ikola Road, Alagbado, Lagos",
    price: "₦15,000,000",
    paymentPlan: "Outright | 10% Agency Fee",
    type: 'Land',
    region: 'Nigeria',
    purpose: 'Residential',
    paymentOption: ['Outright'],
    imageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1400",
    description: "The first mini-city in Ikola. A prime location featuring green areas, recreational facilities, and a resort center. Proximity to Winners Chapel (Canaanland) and AIT."
  },
  {
    id: '6',
    name: "Ire II",
    developer: "Pertinence Group",
    locationName: "Obafemi Owode, Ogun State",
    price: "₦8,000,000",
    paymentPlan: "Outright (0-3 Months)",
    type: 'Land',
    region: 'Nigeria',
    purpose: 'Investment',
    paymentOption: ['Outright', '3 Months'],
    imageUrl: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&q=80&w=1200",
    description: "Premium Phase 2 development at Mowe-Ofada Road. Secured with a C of O, Ire II is strategically positioned for residential growth and high-yield land banking."
  },
  {
    id: '2',
    name: "RentFlex",
    developer: "Brick By Brique",
    locationName: "Detroit, USA",
    price: "$10,000",
    paymentPlan: "Monthly Rental Income",
    type: 'Investment',
    region: 'USA',
    purpose: 'Investment',
    paymentOption: ['Outright'],
    isInternational: true,
    imageUrl: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=1400",
    description: "Earn high returns through monthly rental income. Solo or shared slots available to fund property purchases. Income starts within 1-3 months."
  },
  {
    id: '3',
    name: "LandFlex",
    developer: "Brick By Brique",
    locationName: "Texas/Oklahoma/Paris",
    price: "$5,000",
    paymentPlan: "5-10% Annual Appreciation",
    type: 'Investment',
    region: 'USA',
    purpose: 'Investment',
    paymentOption: ['Outright'],
    isInternational: true,
    imageUrl: "https://images.unsplash.com/photo-1533282960533-51328aa49826?auto=format&fit=crop&q=80&w=1400",
    description: "Long-term land banking in high-growth locations like Greenville (TX) and Eiffel Tower (Paris). Hedge against inflation with compounded value."
  },
  {
    id: '4',
    name: "Build2Profit",
    developer: "Brick By Brique",
    locationName: "Dallas/Houston, USA",
    price: "$25,000",
    paymentPlan: "18 Months | 18%-25% ROI",
    type: 'Investment',
    region: 'USA',
    purpose: 'Investment',
    paymentOption: ['Outright'],
    isInternational: true,
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1400",
    description: "Co-fund new construction projects in highbrow USA/Canada cities. Short-term development play with high gross returns and USD capital security."
  },
  {
    id: '5',
    name: "FlexPool",
    developer: "Brick By Brique",
    locationName: "Global Opportunities",
    price: "$500",
    paymentPlan: "Steady Monthly/Quarterly Returns",
    type: 'Investment',
    region: 'USA',
    purpose: 'Investment',
    paymentOption: ['Outright'],
    isInternational: true,
    imageUrl: "https://images.unsplash.com/photo-1624555130581-1d9cca783bc0?auto=format&fit=crop&q=80&w=1400",
    description: "Ultra-low entry cost to explore curated real estate pools. Earn guaranteed steady returns and protect against currency devaluation."
  }
];
