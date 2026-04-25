import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter, UtensilsCrossed } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const customIcon = new L.Icon({
  iconUrl: 'https://cdn.jsdelivr.net/gh/fazeel0010/Baraka-Biryani-Restaurant-@main/Web-Assets/Baraka-Biryani.png',
  iconSize: [60, 60],
  iconAnchor: [30, 30],
  popupAnchor: [0, -30]
});

export default function Footer() {
  return (
    <footer id="location" className="bg-brand-900 text-brand-50/80 py-20 border-t border-brand-50/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Brand */}
          <div className="lg:col-span-1 flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="flex flex-col items-center lg:items-center mb-6">
              <img 
                src="https://cdn.jsdelivr.net/gh/fazeel0010/Baraka-Biryani-Restaurant-@main/Web-Assets/Baraka-Biryani.png" 
                alt="Baraka Kitchen Logo" 
                className="h-20 md:h-28 w-auto object-contain relative z-10 mb-2" 
                loading="lazy"
                decoding="async"
              />
<div className="flex flex-col items-center mt-1 self-center">
                <span className="text-3xl md:text-4xl font-brand font-black bg-gradient-to-r from-amber-300 via-accent to-orange-600 bg-clip-text text-transparent tracking-tight leading-none pb-1">
                  Baraka
                </span>
                <span className="text-[10px] md:text-xs font-sans uppercase tracking-[0.4em] text-white/90 font-bold leading-none pl-[0.4em]">
                  Kitchen
                </span>
              </div>
            </div>
            <p className="flex justify-center lg:justify-start text-sm leading-relaxed mb-8">
              Authentic dum biryani and royal Pakistani cuisine, served in an elegant, rustic setting.
            </p>
            <div className="flex justify-center lg:justify-start space-x-4 mb-8">
              <a href="#" className="w-10 h-10 rounded-full border border-brand-50/20 flex items-center justify-center hover:bg-accent hover:text-brand-950 hover:border-accent transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-brand-50/20 flex items-center justify-center hover:bg-accent hover:text-brand-950 hover:border-accent transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-brand-50/20 flex items-center justify-center hover:bg-accent hover:text-brand-950 hover:border-accent transition-all">
                <Twitter size={18} />
              </a>
            </div>
            
            <a 
              href="https://www.foodpanda.pk/restaurant/jq2x/baraka-biryani" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-2.5 bg-[#D70F64] text-white text-xs font-bold uppercase tracking-wider rounded-full hover:bg-[#e21b70] transition-colors shadow-md shadow-[#D70F64]/20"
            >
              <UtensilsCrossed size={16} className="mr-2" />
              Order on Foodpanda
            </a>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-serif font-bold text-brand-50 mb-6 uppercase tracking-widest">Contact</h4>
            <ul className="space-y-4 text-sm font-medium mb-6">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-accent shrink-0 mt-1" />
                <span>Nawab St, Model Colony Surti Housing Society, Karachi, 75080, Pakistan</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-accent shrink-0" />
                <span>+92 (332) 879-9437</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-accent shrink-0" />
                <span>order@barakakitchen.com</span>
              </li>
            </ul>
            <div className="flex flex-col gap-3">
              <a 
                href="https://wa.me/923328799437" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-2.5 bg-[#25D366] text-white text-xs font-bold uppercase tracking-wider rounded-full hover:bg-[#128C7E] transition-colors shadow-md shadow-[#25D366]/20"
              >
                Contact on WhatsApp
              </a>
              <a 
                href="tel:+923328799437" 
                className="inline-flex items-center justify-center px-6 py-2.5 bg-brand-50 text-brand-950 text-xs font-bold uppercase tracking-wider rounded-full hover:bg-brand-50/90 transition-colors shadow-md"
              >
                <Phone size={16} className="mr-2" />
                Contact on Phone
              </a>
            </div>
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

          {/* Location Map */}
          <div>
            <h4 className="text-lg font-serif font-bold text-brand-50 mb-6 uppercase tracking-widest">Map</h4>
            <div className="w-full h-48 bg-brand-950 rounded-xl overflow-hidden border border-brand-50/20" style={{ isolation: 'isolate' }}>
              <MapContainer 
                center={[24.910569, 67.199396]} 
                zoom={16} 
                scrollWheelZoom={false} 
                style={{ height: '100%', width: '100%', zIndex: 10 }}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[24.910569, 67.199396]} icon={customIcon}>
                  <Popup>
                    <div className="text-center font-serif text-brand-900 font-bold p-1">
                      Baraka Kitchen <br/>
                      <a 
                        href="https://maps.google.com/?q=24.910569,67.199396" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-accent text-xs mt-1 inline-block uppercase tracking-widest"
                      >
                        Get Directions
                      </a>
                    </div>
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
          </div>

        </div>

        <div className="mt-20 pt-8 border-t border-brand-50/10 flex flex-col md:flex-row justify-between items-center text-xs text-brand-50/50">
          <p>&copy; {new Date().getFullYear()} Baraka Kitchen. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-brand-50 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-50 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
