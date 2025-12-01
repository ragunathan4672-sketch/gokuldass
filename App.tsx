import React, { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin, CircuitBoard, Cpu, Music, Lightbulb, GraduationCap, ArrowRight, Instagram, Facebook } from 'lucide-react';
import { COMPANY_INFO, MOCK_PRODUCTS, CATEGORY_BANNERS } from './constants';
import { ProductCategory } from './types';
import ProductCard from './components/ProductCard';
import AIChat from './components/AIChat';

const App: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProductCategory | 'All'>('All');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentView, setCurrentView] = useState<'home' | 'products' | 'contact'>('home');

  const filteredProducts = activeCategory === 'All' 
    ? MOCK_PRODUCTS 
    : MOCK_PRODUCTS.filter(p => p.category === activeCategory);

  const categories = Object.values(ProductCategory);

  const handleNavClick = (view: 'home' | 'products' | 'contact') => {
    setCurrentView(view);
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const HeroSection = () => (
    <div className="relative bg-secondary text-white min-h-[600px] flex items-center overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        {React.createElement('spline-viewer', { url: "https://prod.spline.design/GzvLASCd9J12468j/scene.splinecode" })}
      </div>

      <div className="container mx-auto px-4 relative z-10 pointer-events-none">
        <div className="max-w-3xl pointer-events-auto bg-slate-900/40 backdrop-blur-md p-6 md:p-8 rounded-3xl border border-white/10 shadow-2xl">
          <div className="inline-block bg-primary/20 text-primary border border-primary/30 px-4 py-1 rounded-full text-sm font-semibold mb-6">
            Innovating the Future
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            AG ELECTRONICS <br/>
            <span className="text-primary text-3xl md:text-5xl">Your Tech Partner</span>
          </h1>
          <p className="text-lg text-slate-200 mb-8 max-w-xl font-medium">
            Specializing in Home Automation, Custom PCB Design, Amplifiers, LED Sign Boards, and innovative School & College Projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => handleNavClick('products')}
              className="bg-primary hover:bg-sky-600 text-white px-8 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all shadow-lg shadow-primary/25"
            >
              Explore Products <ArrowRight className="w-5 h-5" />
            </button>
            <button 
               onClick={() => handleNavClick('contact')}
               className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-3 rounded-lg font-semibold backdrop-blur-sm transition-all"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const ServicesPreview = () => (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Expertise</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: CircuitBoard, title: "PCB Design", desc: "Professional single & multi-layer PCB prototyping." },
            { icon: Music, title: "Custom Audio", desc: "High-fidelity amplifiers and home theater systems." },
            { icon: Lightbulb, title: "Home Automation", desc: "Smart switches and sensors for modern living." },
            { icon: GraduationCap, title: "School Projects", desc: "Innovative project kits for engineering students." },
          ].map((service, idx) => (
            <div key={idx} className="bg-slate-50 p-8 rounded-2xl hover:bg-white hover:shadow-xl transition-all border border-slate-100 group text-center">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:scale-110 transition-transform">
                <service.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-500">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const ContactView = () => (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-slate-900 mb-8 text-center">Contact Us</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
            <h2 className="text-xl font-bold mb-6">Get in Touch</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Address</h3>
                  <p className="text-slate-600 leading-relaxed max-w-xs">{COMPANY_INFO.address}</p>
                  <a href={COMPANY_INFO.mapLink} target="_blank" rel="noreferrer" className="text-primary text-sm font-medium mt-2 inline-block hover:underline">
                    View on Google Maps
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                 <div className="bg-primary/10 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Phone & WhatsApp</h3>
                  <p className="text-slate-600">{COMPANY_INFO.phone}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                 <div className="bg-primary/10 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Email</h3>
                  <p className="text-slate-600">{COMPANY_INFO.email}</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-slate-100">
              <h3 className="font-semibold mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <button 
                  onClick={() => window.open(COMPANY_INFO.instagram, '_blank')}
                  className="bg-slate-100 p-3 rounded-full hover:bg-primary hover:text-white transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </button>
                <button className="bg-slate-100 p-3 rounded-full hover:bg-primary hover:text-white transition-colors">
                  <Facebook className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="bg-white p-2 rounded-2xl shadow-sm border border-slate-100 h-96 lg:h-auto">
             <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.696612450893!2d79.8166!3d11.9348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDU2JzA1LjMiTiA3OcKwNDknMDAuMCJF!5e0!3m2!1sen!2sin!4v1635000000000!5m2!1sen!2sin" 
               width="100%" 
               height="100%" 
               style={{border:0, borderRadius: '1rem'}} 
               allowFullScreen={true} 
               loading="lazy">
             </iframe>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Navbar */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div 
              className="flex items-center gap-2 cursor-pointer" 
              onClick={() => handleNavClick('home')}
            >
              <div className="bg-secondary text-white p-2 rounded-lg">
                <Cpu className="w-6 h-6" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-secondary leading-none">AG ELECTRONICS</h1>
                <p className="text-[10px] text-slate-500 tracking-wider">INNOVATE & BUILD</p>
              </div>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              <button 
                onClick={() => handleNavClick('home')} 
                className={`text-sm font-medium hover:text-primary transition-colors ${currentView === 'home' ? 'text-primary' : 'text-slate-600'}`}
              >
                Home
              </button>
              <button 
                onClick={() => handleNavClick('products')} 
                className={`text-sm font-medium hover:text-primary transition-colors ${currentView === 'products' ? 'text-primary' : 'text-slate-600'}`}
              >
                Products & Services
              </button>
              <button 
                onClick={() => handleNavClick('contact')} 
                className={`text-sm font-medium hover:text-primary transition-colors ${currentView === 'contact' ? 'text-primary' : 'text-slate-600'}`}
              >
                Contact
              </button>
              <button 
                onClick={() => window.open(`https://wa.me/${COMPANY_INFO.whatsapp}`, '_blank')}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-2"
              >
                <Phone className="w-4 h-4" /> WhatsApp Us
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-slate-600"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 p-4 absolute w-full shadow-lg">
            <div className="flex flex-col gap-4">
              <button onClick={() => handleNavClick('home')} className="text-left font-medium text-slate-700 p-2 hover:bg-slate-50 rounded">Home</button>
              <button onClick={() => handleNavClick('products')} className="text-left font-medium text-slate-700 p-2 hover:bg-slate-50 rounded">Products</button>
              <button onClick={() => handleNavClick('contact')} className="text-left font-medium text-slate-700 p-2 hover:bg-slate-50 rounded">Contact</button>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {currentView === 'home' && (
          <>
            <HeroSection />
            <ServicesPreview />
            {/* Featured Products Mini Section */}
            <div className="bg-slate-50 py-20">
              <div className="container mx-auto px-4">
                 <div className="flex justify-between items-end mb-12">
                   <div>
                     <h2 className="text-3xl font-bold text-slate-900 mb-2">Featured Products</h2>
                     <p className="text-slate-500">Handpicked items for you</p>
                   </div>
                   <button 
                    onClick={() => handleNavClick('products')}
                    className="text-primary font-semibold hover:underline flex items-center gap-1"
                   >
                     View All <ArrowRight className="w-4 h-4" />
                   </button>
                 </div>
                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                   {MOCK_PRODUCTS.slice(0, 4).map(product => (
                     <ProductCard key={product.id} product={product} />
                   ))}
                 </div>
              </div>
            </div>
          </>
        )}

        {currentView === 'products' && (
          <div className="container mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold text-slate-900 mb-8">Our Catalog</h1>
            
            {/* Filters */}
            <div className="flex flex-wrap gap-2 mb-8">
              <button 
                onClick={() => setActiveCategory('All')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === 'All' ? 'bg-secondary text-white' : 'bg-white border border-slate-200 text-slate-600 hover:border-primary hover:text-primary'}`}
              >
                All
              </button>
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === cat ? 'bg-secondary text-white' : 'bg-white border border-slate-200 text-slate-600 hover:border-primary hover:text-primary'}`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Category Banner */}
            {activeCategory !== 'All' && CATEGORY_BANNERS[activeCategory] && (
              <div className="mb-10 rounded-2xl overflow-hidden h-64 md:h-80 relative shadow-lg group">
                <img 
                  src={CATEGORY_BANNERS[activeCategory]} 
                  alt={activeCategory} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex flex-col justify-end p-8">
                  <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">{activeCategory}</h2>
                  <p className="text-slate-200 text-lg max-w-2xl">
                    Explore our premium selection of {activeCategory.toLowerCase()} solutions designed for reliability and performance.
                  </p>
                </div>
              </div>
            )}

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            
            {filteredProducts.length === 0 && (
               <div className="text-center py-20 text-slate-400">
                 No products found in this category.
               </div>
            )}
          </div>
        )}

        {currentView === 'contact' && <ContactView />}
      </main>

      {/* Footer */}
      <footer className="bg-secondary text-slate-400 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-slate-800 pb-12">
            <div>
              <div className="flex items-center gap-2 mb-6 text-white">
                <Cpu className="w-6 h-6" />
                <span className="text-xl font-bold">AG ELECTRONICS</span>
              </div>
              <p className="mb-6 leading-relaxed">
                Your one-stop destination for home automation, custom audio solutions, and student engineering projects. Quality and innovation guaranteed.
              </p>
            </div>
            
            <div>
              <h3 className="text-white font-bold mb-6">Quick Links</h3>
              <ul className="space-y-4">
                <li><button onClick={() => handleNavClick('products')} className="hover:text-primary transition-colors">Products</button></li>
                <li><button onClick={() => handleNavClick('products')} className="hover:text-primary transition-colors">School Projects</button></li>
                <li><button onClick={() => handleNavClick('contact')} className="hover:text-primary transition-colors">Custom PCB Design</button></li>
                <li><button onClick={() => handleNavClick('contact')} className="hover:text-primary transition-colors">Contact Support</button></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold mb-6">Contact Info</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 mt-1 shrink-0 text-primary" />
                  <span>{COMPANY_INFO.address}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 shrink-0 text-primary" />
                  <span>{COMPANY_INFO.phone}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 shrink-0 text-primary" />
                  <span>{COMPANY_INFO.email}</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} AG Electronics. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <AIChat />
    </div>
  );
};

export default App;