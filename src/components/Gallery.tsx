import { motion } from 'motion/react';

const images = [
  "https://cdn.jsdelivr.net/gh/fazeel0010/Baraka-Biryani-Restaurant-@main/Web-Assets/Baraka%20Beef%20Biryani%20with%202%20soft%20drink.png?q=80&w=2070&auto=format&fit=crop",
"https://cdn.jsdelivr.net/gh/fazeel0010/Baraka-Biryani-Restaurant-@main/Web-Assets/Baraka%20Chicken%20Biryani%20with%202%20soft%20drink.png?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?q=80&w=2070&auto=format&fit=crop", // Biryani close up

"https://cdn.jsdelivr.net/gh/fazeel0010/Baraka-Biryani-Restaurant-@main/Web-Assets/Baraka-Chicken-Biryani-3.jpg?q=80&w=2070&auto=format&fit=crop",
"https://cdn.jsdelivr.net/gh/fazeel0010/Baraka-Biryani-Restaurant-@main/Web-Assets/Baraka%20Puri.png?q=80&w=2070&auto=format&fit=crop",
"https://cdn.jsdelivr.net/gh/fazeel0010/Baraka-Biryani-Restaurant-@main/Web-Assets/Baraka-Beef%20Biryani.jpg?q=80&w=2070&auto=format&fit=crop",

"https://cdn.jsdelivr.net/gh/fazeel0010/Baraka-Biryani-Restaurant-@main/Web-Assets/Baraka-Chicken-Biryani.jpg?q=80&w=2070&auto=format&fit=crop",
"https://cdn.jsdelivr.net/gh/fazeel0010/Baraka-Biryani-Restaurant-@main/Web-Assets/Baraka%20Kabab.png?q=80&w=2070&auto=format&fit=crop",
"https://cdn.jsdelivr.net/gh/fazeel0010/Baraka-Biryani-Restaurant-@main/Web-Assets/Baraka%20Zinger%20Roll.png?q=80&w=2070&auto=format&fit=crop",
"https://cdn.jsdelivr.net/gh/fazeel0010/Baraka-Biryani-Restaurant-@main/Web-Assets/Baraka%20Chicken%20Roll.png?q=80&w=2070&auto=format&fit=crop",
"https://cdn.jsdelivr.net/gh/fazeel0010/Baraka-Biryani-Restaurant-@main/Web-Assets/Baraka%20Frozen%20Aloo%20Samosa.png?q=80&w=2070&auto=format&fit=crop",
"https://cdn.jsdelivr.net/gh/fazeel0010/Baraka-Biryani-Restaurant-@main/Web-Assets/Baraka%20Plain%20Fries.png?q=80&w=2070&auto=format&fit=crop",


  "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=2010&auto=format&fit=crop", // Cooking process
  // "https://images.unsplash.com/photo-1606491956689-2ea866880c84?q=80&w=1921&auto=format&fit=crop", // Spices
  "https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=1974&auto=format&fit=crop", // Biryani pot

];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 md:py-32 bg-brand-950 text-brand-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <span className="text-accent uppercase tracking-widest text-sm font-bold mb-4 block">
              Visual Journey
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 tracking-tight">
              Our Creations
            </h2>
          </div>
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-brand-50/70 hover:text-accent font-bold transition-colors uppercase tracking-widest text-sm border-b-2 border-brand-50/30 hover:border-accent pb-1"
          >
            Follow our Instagram
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`relative overflow-hidden rounded-2xl group ${
                idx === 0 || idx === 3 ? 'aspect-square' : 'aspect-square'
              }`}
            >
              <img 
                src={src} 
                alt={`Gallery image ${idx + 1}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-brand-950/20 group-hover:bg-transparent transition-colors duration-500" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
