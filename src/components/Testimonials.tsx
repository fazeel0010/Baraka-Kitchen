import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Ahmed Raza",
    review: "The most authentic dum biryani I've had in a long time! The meat was incredibly tender and the rice was perfectly separate. Highly recommended.",
    rating: 5
  },
  {
    name: "Sarah K.",
    review: "You can really taste the homemade quality in this food. The signature deal with the shami kabab and raita is my absolute go-to for lunch.",
    rating: 5
  },
  {
    name: "Bilal M.",
    review: "Ordered a bulk Daig for my son's birthday. The delivery was on time, and every single guest asked me where the food was from. Outstanding taste!",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-brand-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <span className="text-accent uppercase tracking-widest text-sm font-bold mb-4 block">Testimonials</span>
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-900 mb-16">
          What Our <span className="text-accent flex items-center justify-center gap-2 mt-2">Diners Say</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-[0_10px_40px_-20px_rgba(35,27,24,0.1)] relative border border-brand-200"
            >
              <Quote size={40} className="text-brand-100 absolute top-6 right-6" />
              <div className="flex gap-1 text-accent mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-brand-800/80 italic mb-8 leading-relaxed text-left">
                "{testimonial.review}"
              </p>
              <div className="text-left border-t border-brand-100 pt-6">
                <h4 className="font-bold text-brand-900 font-serif">{testimonial.name}</h4>
                <p className="text-xs text-brand-500 uppercase tracking-wider mt-1">Verified Customer</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
