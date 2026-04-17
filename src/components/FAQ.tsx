import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "Do you offer home delivery?",
    answer: "Yes, we partner with Foodpanda to deliver piping hot meals straight to your doorstep. You can also place orders directly through WhatsApp to arrange pick-ups."
  },
  {
    question: "How far in advance should I place a bulk 'Daig' order?",
    answer: "For catering and bulk 'Daig' orders, we kindly request a minimum of 24 hours advance notice so our homechef can slow-cook your meal to traditional perfection."
  },
  {
    question: "Are your meat products Halal certified?",
    answer: "Absolutely. All our meat is 100% certified Halal and sourced from premium, trusted local butchers."
  },
  {
    question: "Can I customize the spice level?",
    answer: "For regular single orders, our Biryani comes in a standard, authentic traditional spice level to maintain the original recipe's integrity. For bulk 'Daig' orders, we offer customized spice levels to perfectly suit your event's guests."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-brand-50">
      <div className="max-w-3xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <span className="text-accent uppercase tracking-widest text-sm font-bold mb-4 block">Help Desk</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-900 mb-6">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className="bg-white border border-brand-200 rounded-xl overflow-hidden shadow-sm transition-all hover:shadow-md cursor-pointer"
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            >
              <div className="flex justify-between items-center p-6 text-brand-900">
                <h4 className="font-bold text-lg pr-8">{faq.question}</h4>
                <div className={`text-accent transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`}>
                  <ChevronDown size={20} />
                </div>
              </div>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-0 text-brand-800/70 border-t border-brand-50 mx-6 mt-2 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
