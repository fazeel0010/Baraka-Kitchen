import { motion } from 'motion/react';

export default function Story() {
  return (
    <section id="story" className="py-24 md:py-32 bg-brand-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl">
              <img 
                src="https://cdn.jsdelivr.net/gh/fazeel0010/Baraka-Biryani-Restaurant-@main/Web-Assets/Baraka%20Biryani%20Cover.png" 
                alt="Spices and ingredients" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-brand-200 rounded-3xl -z-10 hidden md:block" />
            <div className="absolute -top-8 -left-8 w-32 h-32 border-2 border-accent/30 rounded-3xl -z-10 hidden md:block" />
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:pl-10"
          >
            <span className="text-accent uppercase tracking-widest text-sm font-bold mb-4 block">
              Our Kitchen
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-900 mb-8 leading-tight tracking-tight">
              Home-Cooked <br/>
              <span className="italic text-brand-800">Perfection</span>
            </h2>
            
            <div className="space-y-6 text-brand-800/80 font-medium leading-relaxed text-lg">
              <p>
                At Baraka Kitchen, we believe the best food comes straight from the heart of a home kitchen. As a passionate homechef, I pour my love for authentic flavors into every single order, ensuring you get that comforting, homemade taste.
              </p>
              <p>
                Every pot of our signature biryani is slow-cooked in small batches using the traditional 'dum' style. We carefully layer premium basmati rice, tender marinated meats, and our secret blend of aromatic spices to steam together in their own rich juices.
              </p>
              <p>
                The result is a dish where every grain of rice is separate, fragrant, and bursting with authentic flavor. We are proud to partner with Foodpanda to deliver this royal, home-cooked experience piping hot, right to your doorstep.
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-brand-900/10">
              <img 
                src="https://cdn.jsdelivr.net/gh/fazeel0010/Baraka-Biryani-Restaurant-@main/Web-Assets/areej%20signature.png" 
                alt="Chef Signature" 
                className="h-40 sm:h-44 opacity-40 filter invert-[0.2]"
                referrerPolicy="no-referrer"
              />
              <p className="mt-4 text-sm uppercase tracking-widest text-brand-900/60 font-medium">
                Head Chef & Founder
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
