import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url("https://cdn.jsdelivr.net/gh/fazeel0010/Baraka-Biryani-Restaurant-@main/Web-Assets/Baraka%20Biryani%20Cover%20New.png")',
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-brand-950/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-950/20 via-transparent to-brand-950/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-16">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="block text-accent uppercase tracking-[0.3em] text-sm md:text-base mb-6 font-bold"
        >
          {/* Authentic Heritage */}
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-8 leading-[1.1] tracking-tight"
        >
      {          /*    The Royal Taste of <br className="hidden md:block" />
          <span className="italic text-accent">Biryani</span>*/}
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-white/90 mb-12 max-w-2xl mx-auto font-light leading-relaxed"
        >
       {          /*   Experience the rich, aromatic spices and slow-cooked perfection that has been passed down through generations. */}
        </motion.p>
      </div>
      
      {/* Bottom Actions & Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="absolute bottom-32 left-1/2 -translate-x-1/2 w-full px-6 flex justify-center z-20"
      >
        <a 
          href="#menu" 
          className="w-full sm:w-auto px-8 py-4 bg-accent text-white font-bold uppercase tracking-widest rounded-full hover:bg-accent/90 transition-all shadow-xl shadow-accent/20 text-center hover:scale-105"
        >
          Explore Menu
        </a>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-brand-50/60 uppercase tracking-widest text-xs mb-4">Scroll</span>
        <div className="w-[1px] h-12 bg-brand-50/30 overflow-hidden">
          <motion.div 
            animate={{ y: [0, 48, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-full h-1/2 bg-accent"
          />
        </div>
      </motion.div>
    </section>
  );
}
