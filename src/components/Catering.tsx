import { motion } from 'motion/react';
import { Users, PartyPopper } from 'lucide-react';

export default function Catering() {
  return (
    <section className="py-20 bg-brand-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[url('https://cdn.jsdelivr.net/gh/fazeel0010/Baraka-Biryani-Restaurant-@main/Web-Assets/Baraka%20Beef%20Biryani%20-5.png')] bg-cover bg-center"></div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 relative"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl relative">
              <img 
                src="https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=1200&auto=format&fit=crop" 
                alt="Large biryani degh cooking" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-950 via-transparent to-transparent"></div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-1/2"
          >
            <div className="flex items-center space-x-2 text-accent mb-4">
              <PartyPopper size={20} />
              <span className="uppercase tracking-widest text-sm font-bold">Daig & Catering Orders</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
              Bring the <span className="text-accent">Feast</span> to Your Event
            </h2>
            
            <p className="text-brand-50/80 text-lg mb-8 leading-relaxed">
              Planning a party, family gathering, or a corporate event? Let Baraka Kitchen handle the food. 
              We accept large "Daig" orders for our signature Biryani, cooked slowly to perfection, ensuring 
              every guest experiences the authentic homemade taste.
            </p>

            <ul className="space-y-4 mb-8">
              <li className="flex items-center text-brand-50/90 font-medium">
                <Users size={18} className="text-accent mr-4" />
                Special rates for Daig (Bulk) orders
              </li>
              <li className="flex items-center text-brand-50/90 font-medium">
                <Users size={18} className="text-accent mr-4" />
                Customized spice levels and requirements
              </li>
              <li className="flex items-center text-brand-50/90 font-medium">
                <Users size={18} className="text-accent mr-4" />
                At least 24 hours advance notice required
              </li>
            </ul>

            <a 
              href={`https://wa.me/923328799437?text=${encodeURIComponent('Hello Baraka Kitchen! I would like to inquire about a catering / bulk Daig order.')}`}
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-accent text-white text-sm font-bold uppercase tracking-widest rounded-full hover:bg-accent/90 transition-all hover:-translate-y-1 shadow-[0_10px_40px_-10px_rgba(215,15,100,0.5)]"
            >
              Inquire for Events
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
