import { useState, useEffect } from 'react';
import { Menu, X, UtensilsCrossed, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Our Story', href: '#story' },
    { name: 'Menu', href: '#menu' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Location', href: '#location' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-brand-950/95 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#" className="flex items-center group shrink-0 transition-all">
          <img 
            src="https://cdn.jsdelivr.net/gh/fazeel0010/Baraka-Biryani-Restaurant-@main/Web-Assets/Baraka-Biryani.png" 
            alt="Baraka Kitchen Logo" 
            className="h-12 sm:h-16 md:h-20 w-auto object-contain shrink-0 relative z-10 group-hover:scale-105 transition-transform duration-500" 
          />
          <div className="flex flex-col justify-center -ml-1 sm:-ml-3 mt-1 sm:mt-2">
            <span className="text-xl sm:text-2xl md:text-[28px] font-serif font-bold text-white tracking-wider leading-none drop-shadow-md">
              Baraka
            </span>
            <span className="text-[9px] sm:text-[10px] md:text-xs font-sans uppercase tracking-[0.35em] text-accent font-bold mt-1.5 leading-none drop-shadow-sm pl-0.5 opacity-90">
              Kitchen
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-bold uppercase tracking-widest text-white hover:text-accent transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative p-2 text-white hover:text-accent transition-colors"
          >
            <ShoppingBag size={24} />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 bg-accent text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full translate-x-1/4 -translate-y-1/4">
                {cartCount}
              </span>
            )}
          </button>
        </div>

        {/* Mobile Nav Toggle & Cart */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative p-2 text-brand-50 hover:text-accent transition-colors"
          >
            <ShoppingBag size={24} />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 bg-accent text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full translate-x-1/4 -translate-y-1/4">
                {cartCount}
              </span>
            )}
          </button>
          <button
            className="text-brand-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-brand-950 shadow-xl py-6 flex flex-col items-center space-y-6 md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-bold uppercase tracking-widest text-white hover:text-accent transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
            href="#location"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-8 py-3 bg-accent text-white rounded-full hover:bg-accent/90 transition-colors uppercase text-sm font-bold tracking-widest shadow-lg shadow-accent/20"
            >
              Contact Us
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
