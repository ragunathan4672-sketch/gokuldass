import React from 'react';
import { Product } from '../types';
import { MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const handleEnquiry = () => {
    const message = encodeURIComponent(`Hi, I am interested in ${product.name} (Category: ${product.category}). Please provide more details.`);
    window.open(`https://wa.me/${COMPANY_INFO.whatsapp}?text=${message}`, '_blank');
  };

  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col h-full">
      <div className="relative overflow-hidden h-48">
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-2 right-2 bg-secondary/90 text-white text-xs px-2 py-1 rounded-md backdrop-blur-sm">
          {product.category}
        </div>
      </div>
      
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        <p className="text-slate-500 text-sm mb-4 line-clamp-3 flex-1">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
          <span className="text-xl font-bold text-slate-900">
            ₹{product.price.toLocaleString('en-IN')}
          </span>
          <button 
            onClick={handleEnquiry}
            className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            Buy / Enquiry
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
