export enum ProductCategory {
  HOME_AUTOMATION = 'Home Automation',
  SIGN_BOARDS = 'Sign Boards',
  AMPLIFIERS = 'Custom Amplifiers',
  PCB_DESIGN = 'PCB Design',
  PROJECTS = 'School/College Projects',
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number; // In INR
  category: ProductCategory;
  imageUrl: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface CartItem extends Product {
  quantity: number;
}
