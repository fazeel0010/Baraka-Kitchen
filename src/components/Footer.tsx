import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter, UtensilsCrossed } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="location" className="bg-brand-900 text-brand-50/80 py-20 border-t border-brand-50/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img src="https://cdn.jsdelivr.net/gh/fazeel0010/Baraka-Biryani-Restaurant-@main/Web-Assets/Baraka-Biryani.png" alt="Braka Biryani Logo" className="h-24 md:h-32 w-auto" />
            </div>
            <p className="text-sm leading-relaxed mb-8">
              Authentic dum biryani and royal Pakistani cuisine, served in an elegant, rustic setting.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.foodpanda.pk/restaurant/jq2x/baraka-biryani" className="w-10 h-10 rounded-full border border-brand-50/20 flex items-center justify-center hover:bg-accent hover:text-brand-950 hover:border-accent transition-all">
                <Instagram size={18} />
              </a>
              <a href="https://www.foodpanda.pk/restaurant/jq2x/baraka-biryani" className="w-10 h-10 rounded-full border border-brand-50/20 flex items-center justify-center hover:bg-accent hover:text-brand-950 hover:border-accent transition-all">
                <Facebook size={18} />
              </a>
              <a href="https://www.foodpanda.pk/restaurant/jq2x/baraka-biryani" className="w-10 h-10 rounded-full border border-brand-50/20 flex items-center justify-center hover:bg-accent hover:text-brand-950 hover:border-accent transition-all">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-serif font-bold text-brand-50 mb-6 uppercase tracking-widest">Contact</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-accent shrink-0 mt-1" />
                <span>H#61, Surti Muslim Society, Model Colony, Malir District, KHI 75100</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-accent shrink-0" />
                <span>+92 (332) 879-9437</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-accent shrink-0" />
                <span>reservations@barakabiryani.com</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-lg font-serif font-bold text-brand-50 mb-6 uppercase tracking-widest">Hours</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li className="flex justify-between border-b border-brand-50/10 pb-2">
                <span>Mon - Thu</span>
                <span>11:30 AM - 10:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-brand-50/10 pb-2">
                <span>Fri - Sat</span>
                <span>11:30 AM - 11:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-brand-50/10 pb-2">
                <span>Sunday</span>
                <span>12:00 PM - 9:30 PM</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-serif font-bold text-brand-50 mb-6 uppercase tracking-widest">Newsletter</h4>
            <p className="text-sm mb-4 font-medium">Subscribe to receive updates, access to exclusive deals, and more.</p>
            <form className="flex flex-col space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="bg-brand-950 border border-brand-50/20 px-6 py-3.5 text-sm focus:outline-none focus:border-accent text-brand-50 placeholder-brand-50/50 rounded-full transition-colors"
              />
              <button 
                type="submit" 
                className="bg-accent text-white font-bold uppercase tracking-widest text-sm py-3.5 rounded-full hover:bg-accent/90 transition-all shadow-lg shadow-accent/20"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>

        <div className="mt-20 pt-8 border-t border-brand-50/10 flex flex-col md:flex-row justify-between items-center text-xs text-brand-50/50">
          <p>&copy; {new Date().getFullYear()} Baraka Biryani. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-brand-50 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-50 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
