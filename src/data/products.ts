import { Product } from '../types/product';
import heroImage from '../assets/images/chair.jpg';
import teakDining from '../assets/images/Teak_Dining_Table.jpg';
import Teak_Luxury_Sofa  from "../assets/images/Teak_Frame_Luxury_Sofa.jpg";
import Royal_Teak_Platform_Bed from "../assets/images/Royal_Teak_Platform_Bed.jpg";
import Teak_Coffee_Table from "../assets/images/Teak_Coffee_Table.jpg";
import Teak_Lounge_Chair from "../assets/images/Teak_Lounge_Chair.jpg";
import Teak_Sectional_Sofa from "../assets/images/Teak_Sectional_Sofa.jpg";
import Teak_Canopy_Bed from "../assets/images/Teak_Canopy_Bed.jpg";


export const products: Product[] = [
  {
    id: 'chair-001',
    name: 'Classic Teak Dining Chair',
    description: 'Handcrafted from premium teak wood, this dining chair combines traditional craftsmanship with modern comfort. The elegant design features a contoured seat and supportive backrest, making it perfect for long dinner conversations.',
    price: 5999.99,
    category: 'chairs',
    images: [heroImage],
    features: [
      'Handcrafted from premium teak wood',
      'Contoured seat for maximum comfort',
      'Ergonomic backrest design',
      'Durable construction with mortise and tenon joints',
      'Natural oil finish that enhances wood grain'
    ],
    dimensions: {
      width: 45,
      height: 90,
      depth: 50
    },
    material: 'Premium Teak Wood',
    inStock: true,
    rating: 4.8,
    reviews: 124,
    isFeatured: true
  },
  {
    id: 'table-001',
    name: 'Teak Dining Table',
    description: 'This stunning extendable dining table is the centerpiece your home deserves. Crafted from the finest teak wood, it features an innovative extension mechanism that allows you to accommodate extra guests with ease.',
    price: 34999.99,
    category: 'tables',
    images: [teakDining],
    features: [
      'Extends from 6 to 8 seating capacity',
      'Smooth extension mechanism',
      'Solid teak construction',
      'Hand-finished with natural oils',
      'Waterproof and stain-resistant surface'
    ],
    dimensions: {
      width: 180,
      height: 75,
      depth: 90
    },
    material: 'Premium Teak Wood',
    inStock: true,
    rating: 4.9,
    reviews: 86,
    isFeatured: true
  },
  {
    id: 'sofa-001',
    name: 'Teak Frame Luxury Sofa',
    description: 'Experience unparalleled comfort with our luxury sofa featuring a solid teak frame. The premium upholstery and plush cushioning create a perfect balance of support and softness, while the teak frame adds a touch of natural elegance.',
    price: 49999,
    category: 'sofas',
    images: [Teak_Luxury_Sofa],
    features: [
      'Solid teak wood frame',
      'Premium fabric upholstery',
      'High-density foam cushions',
      'Removable and washable covers',
      'Reinforced corner blocks for stability'
    ],
    dimensions: {
      width: 220,
      height: 85,
      depth: 95
    },
    material: 'Teak Wood Frame with Premium Fabric',
    inStock: true,
    rating: 4.7,
    reviews: 58,
    isFeatured: true
  },
  {
    id: 'cot-001',
    name: 'Royal Teak Platform Bed',
    description: 'Transform your bedroom with our Royal Teak Platform Bed. This masterpiece combines the natural beauty of teak with contemporary design, creating a stunning centerpiece that will last for generations.',
    price: 59999.99,
    category: 'cots',
    images: [Royal_Teak_Platform_Bed],
    features: [
      'Solid teak construction',
      'Platform design with slat support (no box spring needed)',
      'Integrated headboard with subtle detailing',
      'Reinforced center support',
      'Hand-finished with natural oils'
    ],
    dimensions: {
      width: 160,
      height: 40,
      depth: 200
    },
    material: 'Premium Teak Wood',
    inStock: true,
    rating: 4.9,
    reviews: 42,
    isNew: true,
    isFeatured: true
  },
  {
    id: 'chair-002',
    name: 'Teak Lounge Chair',
    description: 'Relax in style with our Teak Lounge Chair. The ergonomic design and premium cushioning provide exceptional comfort, while the teak frame ensures durability and timeless appeal.',
    price: 5999.99,
    category: 'chairs',
    images: [Teak_Lounge_Chair],
    features: [
      'Ergonomic design for maximum comfort',
      'Weather-resistant teak construction',
      'Premium outdoor cushions included',
      'Adjustable backrest with multiple positions',
      'Smooth armrests for added comfort'
    ],
    dimensions: {
      width: 70,
      height: 100,
      depth: 150
    },
    material: 'Premium Teak Wood with Outdoor Fabric',
    inStock: true,
    rating: 4.6,
    reviews: 35
  },
  {
    id: 'table-002',
    name: 'Teak Coffee Table',
    description: 'Add a touch of elegance to your living room with our Teak Coffee Table. The sleek design features a spacious top and convenient lower shelf, providing both style and functionality.',
    price: 5599.99,
    category: 'tables',
    images: [Teak_Coffee_Table],
    features: [
      'Solid teak construction',
      'Spacious tabletop for entertaining',
      'Lower shelf for additional storage',
      'Rounded edges for safety',
      'Natural oil finish that enhances wood grain'
    ],
    dimensions: {
      width: 120,
      height: 45,
      depth: 70
    },
    material: 'Premium Teak Wood',
    inStock: true,
    rating: 4.7,
    reviews: 28
  },
  {
    id: 'sofa-002',
    name: 'Teak Sectional Sofa',
    description: 'Create the perfect gathering space with our Teak Sectional Sofa. The modular design allows for flexible arrangements, while the premium materials ensure lasting comfort and durability.',
    price: 45000.99,
    category: 'sofas',
    images: [Teak_Sectional_Sofa],
    features: [
      'Modular design for flexible arrangements',
      'Solid teak wood frame',
      'Premium fabric upholstery',
      'High-density foam cushions',
      'Removable and washable covers'
    ],
    dimensions: {
      width: 280,
      height: 85,
      depth: 230
    },
    material: 'Teak Wood Frame with Premium Fabric',
    inStock: false,
    rating: 4.8,
    reviews: 19
  },
  {
    id: 'cot-002',
    name: 'Teak Canopy Bed',
    description: 'Experience luxury with our Teak Canopy Bed. The four-poster design creates a dramatic focal point, while the solid teak construction ensures stability and longevity.',
    price: 150000.99,
    category: 'cots',
    images: [Teak_Canopy_Bed],
    features: [
      'Four-poster canopy design',
      'Solid teak construction',
      'Platform design with slat support',
      'Reinforced corner posts',
      'Hand-finished with natural oils'
    ],
    dimensions: {
      width: 180,
      height: 220,
      depth: 210
    },
    material: 'Premium Teak Wood',
    inStock: true,
    rating: 4.9,
    reviews: 15,
    isNew: true
  }
]; 