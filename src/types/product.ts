export type ProductCategory = 'chairs' | 'tables' | 'sofas' | 'cots';

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: ProductCategory;
  images: string[];
  features: string[];
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  material: string;
  inStock: boolean;
  rating: number;
  reviews: number;
  isNew?: boolean;
  isFeatured?: boolean;
  discount?: number;
}; 