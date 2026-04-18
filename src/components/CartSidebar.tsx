import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShoppingBag, Plus, Minus, Trash2, CheckCircle, Loader2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import emailjs from '@emailjs/browser';

export default function CartSidebar() {
  const { items, isCartOpen, setIsCartOpen, updateQuantity, removeFromCart, cartTotal, clearCart } = useCart();
  const [formData, setFormData] = useState({ name: '', phone: '', address: '' });
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault();
    if (items.length === 0) return;
    if (!formData.name || !formData.phone || !formData.address) {
      alert("Please fill out all fields for delivery.");
      return;
    }

    setIsSubmitting(true);

    let orderDetails = `*New Order - Baraka Kitchen*%0A%0A`;
    orderDetails += `*Customer Details:*%0AName: ${formData.name}%0APhone: ${formData.phone}%0AAddress: ${formData.address}%0A%0A`;
    orderDetails += `*Order Items:*%0A`;
    
    items.forEach(item => {
      orderDetails += `- ${item.quantity}x ${item.name} (${item.priceStr})%0A`;
    });
    
    orderDetails += `%0A*Total Amount:* Rs. ${cartTotal.toLocaleString()}`;

    // Prepare Email parameters
    const orderItemsList = items.map(item => `- ${item.quantity}x ${item.name} (${item.priceStr})`).join('\n');
    let emailSent = false;

    try {
      // If EmailJS variables are configured, use it to send the email directly in the background
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (serviceId && templateId && publicKey) {
        await emailjs.send(
          serviceId,
          templateId,
          {
            customer_name: formData.name,
            customer_phone: formData.phone,
            customer_address: formData.address,
            order_items: orderItemsList,
            total_amount: `Rs. ${cartTotal.toLocaleString()}`,
            to_email: 'order@barakakitchen.com'
          },
          publicKey
        );
        emailSent = true;
      }
    } catch (error) {
      console.error("Email sending failed:", error);
      // Fallback to mailto if EmailJS fails
    }

    // WhatsApp Redirect
    const waUrl = `https://wa.me/923328799437?text=${orderDetails}`;
    
    if (!emailSent) {
      // Fallback: Mailto string construction if EmailJS is not configured or failed
      const mailBody = `New Order - Baraka Kitchen\n\nCustomer Details:\nName: ${formData.name}\nPhone: ${formData.phone}\nAddress: ${formData.address}\n\nOrder Items:\n${orderItemsList}\n\nTotal Amount: Rs. ${cartTotal.toLocaleString()}`;
      const mailtoUrl = `mailto:order@barakakitchen.com?subject=New Order from ${formData.name}&body=${encodeURIComponent(mailBody)}`;
      
      const iframe = document.createElement('iframe');
      iframe.src = mailtoUrl;
      iframe.style.display = 'none';
      document.body.appendChild(iframe);
      
      setTimeout(() => {
        document.body.removeChild(iframe);
      }, 500);
    }

    // Open WhatsApp
    setTimeout(() => {
      window.open(waUrl, '_blank');
      
      clearCart();
      setIsCartOpen(false);
      setShowSuccessPopup(true);
      setIsSubmitting(false);
    }, 200);
  };

  return (
    <>
      <AnimatePresence>
        {isCartOpen && (
          <div className="relative z-[100]">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="fixed inset-0 bg-brand-950/60 backdrop-blur-sm"
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 w-full md:max-w-md h-full bg-white shadow-2xl flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-brand-100/50 bg-white z-10 shrink-0">
                <div className="flex items-center gap-3 text-brand-900">
                  <ShoppingBag size={24} className="text-accent" />
                  <h2 className="text-2xl font-serif font-bold">Your Tray</h2>
                </div>
                <button 
                  onClick={() => setIsCartOpen(false)}
                  className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-brand-50 transition-colors text-brand-900"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Scrollable Content */}
              <div className="flex-1 min-h-0 overflow-y-auto">
                {items.length === 0 ? (
                  <div className="px-6 py-12 flex flex-col items-center justify-center text-brand-500 space-y-4 h-full min-h-[300px]">
                    <ShoppingBag size={64} className="opacity-20" />
                    <p className="text-lg font-medium text-brand-800/60">Your tray is empty</p>
                  </div>
                ) : (
                  <div className="p-6 space-y-8">
                    {/* Items List */}
                    <div className="space-y-4">
                      {items.map((item) => (
                        <div key={item.name} className="flex gap-4 items-center bg-brand-50 p-4 rounded-xl border border-brand-100/50 relative group">
                          <div className="flex-1 min-w-0 pr-10">
                            <h4 className="font-bold text-brand-900 leading-tight mb-1 truncate">{item.name}</h4>
                            <span className="text-accent font-bold text-sm block mb-3">{item.priceStr}</span>
                            
                            <div className="flex items-center bg-white w-fit rounded-lg border border-brand-200 overflow-hidden shadow-sm">
                              <button onClick={() => updateQuantity(item.name, -1)} className="px-3 py-1.5 text-brand-500 hover:text-brand-900 hover:bg-brand-100/50 transition-colors"><Minus size={14} /></button>
                              <span className="text-brand-900 font-bold w-6 text-center text-sm">{item.quantity}</span>
                              <button onClick={() => updateQuantity(item.name, 1)} className="px-3 py-1.5 text-brand-500 hover:text-brand-900 hover:bg-brand-100/50 transition-colors"><Plus size={14} /></button>
                            </div>
                          </div>
                          <button 
                            onClick={() => removeFromCart(item.name)}
                            className="absolute top-4 right-4 p-2 text-brand-200 hover:text-red-500 hover:bg-red-50 rounded-full transition-all sm:opacity-0 sm:group-hover:opacity-100 opacity-100"
                            title="Remove Item"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      ))}
                    </div>
                    
                    {/* Delivery Form */}
                    <div className="pt-6 border-t border-brand-100 border-dashed">
                      <form id="checkout-form" onSubmit={handleCheckout} className="space-y-6">
                        <div>
                          <h3 className="font-bold text-brand-900 font-serif text-xl mb-1">Delivery Details</h3>
                          <p className="text-xs text-brand-800/60 font-medium">Please fill in your details to place the order.</p>
                        </div>
                        
                        <div className="space-y-4">
                          <div>
                            <label className="block text-[10px] font-bold text-brand-800 uppercase tracking-widest mb-1.5 ml-1">Full Name</label>
                            <input required type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-brand-200 focus:border-accent focus:ring-4 focus:ring-accent/10 outline-none transition-all text-brand-950 bg-white text-sm" placeholder="e.g. John Doe" />
                          </div>
                          <div>
                            <label className="block text-[10px] font-bold text-brand-800 uppercase tracking-widest mb-1.5 ml-1">Phone Number</label>
                            <input required type="tel" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-brand-200 focus:border-accent focus:ring-4 focus:ring-accent/10 outline-none transition-all text-brand-950 bg-white text-sm" placeholder="e.g. 0300 1234567" />
                          </div>
                          <div>
                            <label className="block text-[10px] font-bold text-brand-800 uppercase tracking-widest mb-1.5 ml-1">Delivery Address</label>
                            <textarea required value={formData.address} onChange={e => setFormData({...formData, address: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-brand-200 focus:border-accent focus:ring-4 focus:ring-accent/10 outline-none transition-all text-brand-950 bg-white resize-none h-24 text-sm" placeholder="e.g. House #, Street, Area Phase..." />
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                )}
              </div>

              {/* Footer Actions */}
              {items.length > 0 && (
                <div className="shrink-0 p-6 bg-white border-t border-brand-100/50 shadow-[0_-10px_40px_-20px_rgba(0,0,0,0.1)] z-10">
                  <div className="flex justify-between items-end mb-4 pr-1">
                    <span className="font-bold text-brand-900/60 uppercase tracking-widest text-xs">Grand Total</span>
                    <span className="text-3xl font-bold font-serif text-accent tracking-tight">Rs. {cartTotal.toLocaleString()}</span>
                  </div>
                  <button 
                    type="submit"
                    form="checkout-form"
                    disabled={isSubmitting}
                    className="w-full py-4 text-white bg-accent font-bold uppercase tracking-widest rounded-xl hover:bg-accent/90 transition-all active:scale-[0.98] flex items-center justify-center gap-2 relative overflow-hidden group disabled:opacity-80 disabled:cursor-not-allowed"
                  >
                    {!isSubmitting && <div className="absolute inset-0 bg-white/20 w-full -translate-x-[110%] group-hover:translate-x-[110%] transition-transform duration-500 ease-in-out skew-x-12" />}
                    {isSubmitting ? <Loader2 size={18} className="animate-spin" /> : <ShoppingBag size={18} />}
                    <span>{isSubmitting ? "Processing..." : "Place Order Now"}</span>
                  </button>
                  <p className="mt-3 text-center text-[10px] text-brand-500 font-medium tracking-wide">
                    Order will be sent via WhatsApp & Email directly to the kitchen
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Success Modal */}
      <AnimatePresence>
        {showSuccessPopup && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowSuccessPopup(false)}
              className="absolute inset-0 bg-brand-950/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="relative w-full max-w-md bg-white rounded-3xl p-8 text-center shadow-2xl flex flex-col items-center border border-brand-100"
            >
              <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mb-6">
                <CheckCircle size={40} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-brand-900 mb-4 tracking-tight">
                Thank you for placing your order!
              </h3>
              <p className="text-brand-800/80 font-medium leading-relaxed mb-8">
                The restaurant will contact you shortly via WhatsApp or phone to confirm your order.
                <br />
                <span className="font-bold text-accent mt-2 block">Please Wait!</span>
              </p>
              <button
                onClick={() => setShowSuccessPopup(false)}
                className="w-full py-3.5 bg-brand-950 text-white font-bold uppercase tracking-widest text-sm rounded-xl hover:bg-brand-800 transition-colors shadow-lg active:scale-95"
              >
                Okay
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
