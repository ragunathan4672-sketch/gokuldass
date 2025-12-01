import { Product, ProductCategory } from './types';

export const COMPANY_INFO = {
  name: "AG ELECTRONICS",
  address: "RPWV+9F2, Mariyamman Kovil St, Keel Kumaramangalam, Tamil Nadu 605007",
  phone: "+91 9994728824",
  email: "ragunathan4672@gmail.com",
  whatsapp: "919994728824", // Clean number for API
  instagram: "https://www.instagram.com/ag_electonics24?igsh=MmgzZnhkc2pzNjBq",
  mapLink: "https://www.google.com/maps/search/?api=1&query=RPWV+9F2,+Mariyamman+Kovil+St,+Keel+Kumaramangalam,+Tamil+Nadu+605007"
};

export const CATEGORY_BANNERS: Partial<Record<ProductCategory, string>> = {
  [ProductCategory.HOME_AUTOMATION]: "https://images.unsplash.com/photo-1558002038-109177381792?auto=format&fit=crop&q=80&w=2072",
  [ProductCategory.SIGN_BOARDS]: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&q=80&w=2070",
  [ProductCategory.AMPLIFIERS]: "https://images.unsplash.com/photo-1543419800-093a0279c5cc?auto=format&fit=crop&q=80&w=2070",
  [ProductCategory.PCB_DESIGN]: "https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?auto=format&fit=crop&q=80&w=2070",
  [ProductCategory.PROJECTS]: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2070",
};

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 'ha-001',
    name: 'Smart WiFi Switch Node',
    description: 'Control your home appliances from anywhere using your smartphone. Compatible with Google Home and Alexa.',
    price: 1200,
    category: ProductCategory.HOME_AUTOMATION,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKKokZOQ3wkPByhzMPhDDwjL9nOIvNZUNmSQ&s' // Smart home concept
  },
  {
    id: 'ha-002',
    name: 'Automatic Water Level Controller',
    description: 'Prevents overflow and dry running of motor pumps. Fully automatic operation.',
    price: 2500,
    category: ProductCategory.HOME_AUTOMATION,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKKokZOQ3wkPByhzMPhDDwjL9nOIvNZUNmSQ&s' // Technical/Industrial automation
  },
  {
    id: 'sb-001',
    name: 'P10 LED Scrolling Sign Board',
    description: 'Programmable LED display for shops and advertising. High brightness and weather resistant.',
    price: 4500,
    category: ProductCategory.SIGN_BOARDS,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEM54gE-YGGfzZPKtaJAkdLztCrk4x467nLA&s' // Bright Neon/LED lights
  },
  {
    id: 'sb-002',
    name: 'Custom Neon Acrylic Sign',
    description: 'Personalized neon signs for businesses and home decor. Available in multiple colors.',
    price: 3000,
    category: ProductCategory.SIGN_BOARDS,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEM54gE-YGGfzZPKtaJAkdLztCrk4x467nLA&s' // Specific Neon Sign
  },
  {
    id: 'amp-001',
    name: '5.1 Channel Home Theater Board',
    description: 'High-fidelity audio amplifier board with heavy bass output and crystal clear treble.',
    price: 1800,
    category: ProductCategory.AMPLIFIERS,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKEMsiRndlY2kkpQg9xtUluRih9GdTpFnTKw&s' // Detailed Circuit Board
  },
  {
    id: 'amp-002',
    name: '1000W Mono Block Amplifier',
    description: 'Heavy duty amplifier for DJ systems and outdoor events.',
    price: 5500,
    category: ProductCategory.AMPLIFIERS,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKEMsiRndlY2kkpQg9xtUluRih9GdTpFnTKw&s' // Audio Equipment/Subwoofer
  },
  {
    id: 'pcb-001',
    name: 'Custom PCB Prototyping',
    description: 'Professional PCB design and printing service. Single and double layer support.',
    price: 500,
    category: ProductCategory.PCB_DESIGN,
    imageUrl: 'https://res.cloudinary.com/uf-552861/image/upload/v1717412530/schematic_and_associated_PCB_hc7df9.jpg' // Soldering/PCB work
  },
  {
    id: 'proj-001',
    name: 'IoT Weather Station Kit',
    description: 'Complete project kit for students. Measures temperature, humidity, and pressure.',
    price: 1500,
    category: ProductCategory.PROJECTS,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN6q05Py_JHYeFlxtF5yH6Grs543MAwKlS_g&s' // Raspberry Pi/Electronics project
  },
  {
    id: 'proj-002',
    name: 'Arduino Obstacle Avoiding Robot',
    description: 'Educational robotics kit. Includes chassis, motors, sensors, and Arduino board.',
    price: 2200,
    category: ProductCategory.PROJECTS,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR1c7EL_Udp_jtChpTXpquVyuXd1aP5GTzOw&s' // Robot
  }
];
