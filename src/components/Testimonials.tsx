import { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: "Amrah",
    review: "but is be mild spice me bhe bht Mirchain thin peechli ber to bht he zabardast thi kabab average the.",
    rating: 4,
    date: "Yesterday"
  },
  {
    name: "Aboubakar",
    review: "everything is good",
    rating: 5,
    date: "3 days ago"
  },
  {
    name: "Shoaib",
    review: "Outclass from packaging till taste but 1 boti is very low 😢😢 in biryani beef",
    rating: 5,
    date: "5 days ago",
  },
  {
    name: "Muneeb",
    review: "Best biryani in town. Tasty, hygenic, and flavorful. used quality material and quantity is extra. I believe if we promote then they can provide quality food all over the karachi... recommended 👍😀",
    rating: 5,
    date: "5 days ago",
    isTopReviewer: true
  },
  {
    name: "Fazeel",
    review: "thanks for the tasty biryani once again, that's my weekly restaurant to order the biryani. Want to try more options in future. Haleem was tasty too",
    rating: 5,
    date: "6 days ago",
    isTopReviewer: true
  },
  {
    name: "Sara",
    review: "eveything was delicious in terms of quality and quantity as well. packaging was nic, neat and clean. Biryani is my favorite, although zarda is also nice and tasty",
    rating: 5,
    date: "1 week ago"
  },
  {
    name: "Muneeb",
    review: "highly recommend....packing was nice. taste aisa tha like kisi expert k hath k hai... nice experience",
    rating: 5,
    date: "1 week ago",
    isTopReviewer: true
  },
  {
    name: "Fazeel",
    review: "taste was so good biryani and crispy bite both but chicken piece biryani me bht kum tha at least agr ap leg piece cal rahe hain to sth Ek piece or dein.",
    rating: 5,
    date: "1 week ago",
    isTopReviewer: true
  },
  {
    name: "Muneeb",
    review: "that's my weekend restaurant, biryani taste is excellent and it was fresh, healthy and spicy. with raita it becomes more tastier",
    rating: 5,
    date: "1 week ago",
    isTopReviewer: true
  },
  {
    name: "Fazeel",
    review: "Again same delicious taste of biyani. fresh, hygenic and home made biryani. smells and taste tells about the healthy ingredients were used",
    rating: 5,
    date: "1 week ago",
    isTopReviewer: true
  },
  {
    name: "Raja",
    review: "Best Biryani Maza a gaya full hot , quality chicken , brilliant packaging , best price",
    rating: 5,
    date: "2 weeks ago"
  },
  {
    name: "Faiza",
    review: "everything was fresh and tasty. Kebab and biryani was perfect and egg fried rice too... recommended",
    rating: 5,
    date: "2 weeks ago"
  },
  {
    name: "Fazeel",
    review: "that's my 2rd order and it was same as expected. everything was delicious, fresh and healthy",
    rating: 5,
    date: "2 weeks ago",
    isTopReviewer: true
  },
  {
    name: "Miss",
    review: "very bad taste and unfresh, kabab also very bad, thely ka taste is sy acha Hain.",
    rating: 1,
    date: "2 weeks ago",
    isTopReviewer: true
  },
  {
    name: "Aisha",
    review: "chicken biryani and crispy bites taste really well and fresh. it was flavorful with spicy. Best home made authentic biryani",
    rating: 5,
    date: "2 weeks ago"
  },
  {
    name: "Somi",
    review: "excellent food fresh and hot",
    rating: 5,
    date: "3 weeks ago"
  },
  {
    name: "Yasir",
    review: "All the dishes are fresh, hygienic, and delicious. The portion sizes of the dishes are very good and generous as well. I will definitely order again.",
    rating: 5,
    date: "4 weeks ago"
  },
  {
    name: "Shagufta",
    review: "Tasty and wholesome parathas and very aromatic tea. Omelettes were delicious. Overall, great food service.",
    rating: 5,
    date: "1 month ago",
    isTopReviewer: true
  },
  {
    name: "Faiza",
    review: "delicious & tasty 😋",
    rating: 5,
    date: "1 month ago"
  },
  {
    name: "Muneeb",
    review: "1st oder mein biriyani zaiyda achi thi 2nd mein so so thi",
    rating: 3,
    date: "1 month ago",
    isTopReviewer: true
  },
  {
    name: "Aisha",
    review: "mazai ki ti biryani or garam bhi 🥰",
    rating: 5,
    date: "1 month ago"
  },
  {
    name: "Saqib",
    review: "baqi sub tou bht acha tha siway biryani k, biryani main garm masala tez tha or beef k kafi hard tha. per app samosy, roll, chicken shots bht he mazay k thy🥰🙏😇",
    rating: 4,
    date: "1 month ago"
  },
  {
    name: "Fazeel",
    review: "Amazing everything",
    rating: 5,
    date: "1 month ago",
    isTopReviewer: true
  },
  {
    name: "Shoaib",
    review: "بہت زبردست بریانی تھی اس سے بھی اچھی بات یہ کہ گرم گرم تھی جیسے کہ ابھی چولہے سے اتاری ہو مزہ آ گیا yummy 😋",
    rating: 5,
    date: "1 month ago"
  },
  {
    name: "Aboubakar",
    review: "coldrink ni h deal me",
    rating: 2,
    date: "1 month ago"
  },
  {
    name: "Amrah",
    review: "it was to smelly. not recommended",
    rating: 1,
    date: "2 months ago"
  },
  {
    name: "Syed",
    review: "crispy bite 8 tai or inhony 6 diye h or chai bhi sari Thandi or geri hui h",
    rating: 2,
    date: "2 months ago"
  },
  {
    name: "samira",
    review: "nice",
    rating: 5,
    date: "2 months ago"
  },
  {
    name: "Fazeel",
    review: "excellent biryani ..... ghar jesi. . lekin haleem macheen wala grand hoa waaa. . serf daale .. or spice noo beef buht patlaa .. behtar kare machern use kam kare kam panindale",
    rating: 4,
    date: "2 months ago",
    isTopReviewer: true
  },
  {
    name: "Maaz",
    review: "baraka biryani taste is very good but beef is very hard 🤢 but taste almost done",
    rating: 3,
    date: "2 months ago"
  },
  {
    name: "Waqas",
    review: "loved your biryani so muchhh, don't change it's taste please 🙏🙏🙏",
    rating: 5,
    date: "2 months ago"
  }
];

export default function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-brand-100 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center relative z-10">
        <span className="text-accent uppercase tracking-widest text-sm font-bold mb-4 block">Testimonials</span>
        <div className="flex flex-col md:flex-row justify-between items-end md:items-end mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-900 text-left">
            What Our <br className="hidden md:block" /> <span className="text-accent">Diners Say</span>
          </h2>
          <div className="flex gap-4 mt-6 md:mt-0 self-start md:self-auto">
            <button 
              onClick={scrollLeft} 
              aria-label="Previous"
              className="w-12 h-12 rounded-full border-2 border-brand-900 text-brand-900 flex items-center justify-center hover:bg-brand-900 hover:text-white transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={scrollRight} 
              aria-label="Next"
              className="w-12 h-12 rounded-full border-2 border-brand-900 text-brand-900 flex items-center justify-center hover:bg-brand-900 hover:text-white transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div className="relative -mx-6 md:-mx-12 px-6 md:px-12">
          <div 
            ref={containerRef}
            className="flex overflow-x-auto gap-6 snap-x snap-mandatory hide-scrollbar pb-8 pt-4 w-full"
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none'
            }}
          >
            {testimonials.map((testimonial, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: Math.min(idx * 0.1, 0.5) }}
                className="bg-white p-8 rounded-2xl shadow-xl border border-brand-200 flex-shrink-0 w-[300px] md:w-[350px] snap-center flex flex-col h-[320px] relative text-left"
              >
                <Quote size={40} className="text-brand-100 absolute top-6 right-6" />
                
                <div className="flex justify-between items-start mb-6">
                  <div className="flex gap-1 text-accent">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={16} 
                        fill={i < testimonial.rating ? "currentColor" : "none"} 
                        className={i < testimonial.rating ? "text-yellow-500" : "text-gray-300"} 
                      />
                    ))}
                  </div>
                  <span className="text-xs text-brand-500 font-medium">{testimonial.date}</span>
                </div>
                
                <p className="text-brand-800/80 italic mb-auto leading-relaxed overflow-hidden" 
                   style={{
                     display: '-webkit-box',
                     WebkitLineClamp: 5,
                     WebkitBoxOrient: 'vertical'
                   }}
                >
                  "{testimonial.review}"
                </p>
                
                <div className="border-t border-brand-100 pt-5 mt-4">
                  <div className="flex items-center gap-2">
                    <h4 className="font-bold text-brand-900 font-serif truncate max-w-[150px]">{testimonial.name}</h4>
                    {testimonial.isTopReviewer && (
                      <span className="bg-brand-100 text-brand-900 text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider shrink-0">
                        Top Reviewer
                      </span>
                    )}
                  </div>
                  <p className="text-[10px] text-brand-500 mt-1 uppercase tracking-widest font-medium">Foodpanda Order</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
