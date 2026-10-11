export interface ProductColor {
  id: string;
  name: string;
  hex: string;
  image?: string;
}

export interface BaseFinish {
  id: string;
  name: string;
  extraPrice: number;
}

export interface CustomOption {
  id: string;
  name: string;
  price: number;
  description: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  category: 'anatomica' | 'eletrica' | 'luxo' | 'minimalista';
  price: number;
  originalPrice: number;
  pixDiscountPercent: number;
  rating: number;
  reviewCount: number;
  badge?: string;
  leadTime: string;
  image: string;
  gallery: string[];
  description: string;
  longDescription: string;
  dimensions: {
    length: string;
    width: string;
    height: string;
    weightCapacity: string;
  };
  features: string[];
  availableColors: ProductColor[];
  baseFinishes: BaseFinish[];
  optionalAddons: CustomOption[];
}

export interface CustomizationSelection {
  color: ProductColor;
  baseFinish: BaseFinish;
  embroideryText?: string;
  selectedAddons: string[];
}

export interface CartItem {
  id: string; // unique item id based on product + customizations
  product: Product;
  customization: CustomizationSelection;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
}

