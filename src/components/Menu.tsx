import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { UtensilsCrossed, X, ChevronLeft, ChevronRight } from 'lucide-react';

const menuCategories = [
  {
    title: "Signature Biryani Deals",
    description: "Value-packed biryani deals served with kabab and raita",
    items: [
      { name: "Signature Deal 1", price: "Rs.670", desc: "500-gm Beef Biryani, 1 Shami Kabab with Raita.", image: "https://cdn.jsdelivr.net/gh/fazeel0010/Baraka-Biryani-Restaurant-@main/Web-Assets/Baraka%20Beef%20Biryani%20-1.png?q=80&w=200&auto=format&fit=crop" },
      { name: "Signature Deal 2", price: "Rs.700", desc: "500-gm Chicken Biryani, 1 Shami Kabab with Raita.", image: "https://cdn.jsdelivr.net/gh/fazeel0010/Baraka-Biryani-Restaurant-@main/Web-Assets/Baraka%20Chicken%20Biryani%20-6.png?q=80&w=200&auto=format&fit=crop" },
      { name: "Signature Deal 3", price: "Rs.1,499", desc: "1-kg Beef Biryani 2 Shami Kabab, 2 Raita and 2 300-ml soft drink", image: "https://cdn.jsdelivr.net/gh/fazeel0010/Baraka-Biryani-Restaurant-@main/Web-Assets/Baraka%20Beef%20Biryani%20with%202%20soft%20drink.png?q=80&w=200&auto=format&fit=crop" },
      { name: "Signature Deal 4", price: "Rs.1,375", desc: "1-kg Chicken Biryani 2 Shami Kabab, 2 Raita and 2 300-ml soft drink", image: "https://cdn.jsdelivr.net/gh/fazeel0010/Baraka-Biryani-Restaurant-@main/Web-Assets/Baraka%20Chicken%20Biryani%20with%202%20soft%20drink.png?q=80&w=200&auto=format&fit=crop" }
    ]
  },
  {
    title: "Starters",
    description: "Perfect beginnings from our kitchen.",
    items: [
      { name: "Beef Resha Shami Kabab", price: "Rs.120", desc: "Authentic sil batta beef shami kababs made with hand ground beef and traditional spices for a rick flavor.", image: "https://cdn.jsdelivr.net/gh/fazeel0010/Baraka-Biryani-Restaurant-@main/Web-Assets/Baraka%20Kabab.png?q=80&w=200&auto=format&fit=crop" },
    ]
  },
  {
    title: "Baraka Biryani",
    description: "To complement your main course.",
    items: [
      { name: "Beef Biryani 500-gm", price: "Rs.540", desc: "Aromatic basmati rice cooked with rich spices. Juicy beef full of flavor in every bite!", image: "https://cdn.jsdelivr.net/gh/fazeel0010/Baraka-Biryani-Restaurant-@main/Web-Assets/Baraka%20Beef%20Biryani%20-5.png?q=80&w=200&auto=format&fit=crop" },
      { name: "Chicken Biryani 500-gm", price: "Rs.380", desc: "Fragrant basmati rice cooked with seasoned chicken and spices.", image: "https://cdn.jsdelivr.net/gh/fazeel0010/Baraka-Biryani-Restaurant-@main/Web-Assets/Baraka%20Chicken%20Biryani%20-4.png?q=80&w=200&auto=format&fit=crop" },
      { name: "Beef Biryani 1-kg", price: "Rs.1080", desc: "Aromatic basmati rice cooked with rich spices. Juicy beef full of flavor in every bite!", image: "https://cdn.jsdelivr.net/gh/fazeel0010/Baraka-Biryani-Restaurant-@main/Web-Assets/Baraka%20Beef%20Biryani%20-5.png?q=80&w=200&auto=format&fit=crop" },
      { name: "Chicken Biryani 1-kg", price: "Rs.880", desc: "Fragrant basmati rice cooked with seasoned chicken and spices.", image: "https://cdn.jsdelivr.net/gh/fazeel0010/Baraka-Biryani-Restaurant-@main/Web-Assets/Baraka%20Chicken%20Biryani%20-4.png?q=80&w=200&auto=format&fit=crop" },
    ]
  },
  {
    title: "Rolls & Wraps",
    description: "Freshly prepared rolls packed with delicious fillings.",
    items: [
      { name: "Chicken Roll", price: "Rs.540", desc: "Soft paratha filled with flavorful chicken and sauces.", image: "https://cdn.jsdelivr.net/gh/fazeel0010/Baraka-Biryani-Restaurant-@main/Web-Assets/Baraka%20Chicken%20Roll.png?q=80&w=200&auto=format&fit=crop" },
      { name: "Zinger Roll", price: "Rs.440", desc: "Crispy zinger chicken wrapped in a soft paratha with fresh sauces.", image: "https://cdn.jsdelivr.net/gh/fazeel0010/Baraka-Biryani-Restaurant-@main/Web-Assets/Baraka%20Zinger%20Roll.png?q=80&w=200&auto=format&fit=crop" }
    ]
  },
  {
    title: "Frozen Items",
    description: "Ready-to-cook frozen items made with Baraka’s authentic taste and quality.",
    items: [
      { name: "Frozen Beef Shami Kebab (6 Pieces)", price: "Rs.660", desc: "Hand-ground and handmade shami kebabs prepared with minced beef and traditional spices.", image: "https://cdn.jsdelivr.net/gh/fazeel0010/Baraka-Biryani-Restaurant-@main/Web-Assets/Baraka%20Frozen%20Kabab.png?q=80&w=200&auto=format&fit=crop" },
      { name: "Frozen Aloo Samosa (6 Pieces)", price: "Rs.225", desc: "Crispy samosas filled with spiced potato stuffing, ready to fry.", image: "https://cdn.jsdelivr.net/gh/fazeel0010/Baraka-Biryani-Restaurant-@main/Web-Assets/Baraka%20Frozen%20Aloo%20Samosa.png?q=80&w=200&auto=format&fit=crop" },
      { name: "Frozen Qeema Samosa (6 Pieces)", price: "Rs.275", desc: "Samosas stuffed with seasoned minced meat, easy to prepare and fry.", image: "https://cdn.jsdelivr.net/gh/fazeel0010/Baraka-Biryani-Restaurant-@main/Web-Assets/Baraka%20Frozen%20Qeema%20Samosa.png?q=80&w=200&auto=format&fit=crop" },
      { name: "Frozen Chicken Samosa (6 Pieces)", price: "Rs.255", desc: "Crispy samosas filled with chicken and traditional spices.", image: "https://cdn.jsdelivr.net/gh/fazeel0010/Baraka-Biryani-Restaurant-@main/Web-Assets/Baraka%20Frozen%20Chicken%20Samosa.png?q=80&w=200&auto=format&fit=crop" }
    ]
  },
  {
    title: "Side & Add ons",
    description: "Perfect sides to enhance your meal.",
    items: [
      { name: "Puri", price: "Rs.80", desc: "Soft and fluffy puri served fresh.", image: "https://cdn.jsdelivr.net/gh/fazeel0010/Baraka-Biryani-Restaurant-@main/Web-Assets/Baraka%20Puri.png?q=80&w=200&auto=format&fit=crop" },
      { name: "Raita", price: "Rs.70", desc: "Cool & creamy yogurt raita to balance the spices.", image: "https://cdn.jsdelivr.net/gh/fazeel0010/Baraka-Biryani-Restaurant-@main/Web-Assets/Baraka%20Raita.png?q=80&w=200&auto=format&fit=crop" },
      { name: "Special Imli Chutney", price: "Rs.80", desc: "Sweet and tangy tamarind chutney made with our special recipe.", image: "https://cdn.jsdelivr.net/gh/fazeel0010/Baraka-Biryani-Restaurant-@main/Web-Assets/Baraka%20Imli%20Chutni.png?q=80&w=200&auto=format&fit=crop" }
      
    ]
  },
    {
    title: "Baraka Fries",
    description: "Crispy golden fries served hot — the perfect snack or side.",
    items: [
      { name: "Plain Fries", price: "Rs.250", desc: "Classic crispy fries, perfect for one.", image: "https://cdn.jsdelivr.net/gh/fazeel0010/Baraka-Biryani-Restaurant-@main/Web-Assets/Baraka%20Plain%20Fries.png?q=80&w=200&auto=format&fit=crop" },
      { name: "Masala Fries", price: "Rs.280", desc: "Crispy fries tossed in flavorful masala seasoning.", image: "https://cdn.jsdelivr.net/gh/fazeel0010/Baraka-Biryani-Restaurant-@main/Web-Assets/Baraka%20Masala%20Fries.png?q=80&w=200&auto=format&fit=crop" },
    ]
  },
  {
    title: "Beverages",
    description: "Refreshing drinks to quench your thirst and pair perfectly with your meal.",
    items: [
      { name: "Fizup Next 500 ml", price: "Rs.150", desc: "Chilled fizzy soft drink for a refreshing taste.", image: "https://cdn.jsdelivr.net/gh/fazeel0010/Baraka-Biryani-Restaurant-@main/Web-Assets/Baraka%20Fizzup%20500%20ml.png?q=80&w=200&auto=format&fit=crop" },
      { name: "Cola Next 300 ml", price: "Rs.115", desc: "Classic cola flavor served chilled.", image: "https://cdn.jsdelivr.net/gh/fazeel0010/Baraka-Biryani-Restaurant-@main/Web-Assets/Baraka%20Cola%20Next.png?q=80&w=200&auto=format&fit=crop" },
      { name: "Fizup Next 300 ml", price: "Rs.99", desc: "Light and refreshing lemon-lime soft drink.", image: "https://cdn.jsdelivr.net/gh/fazeel0010/Baraka-Biryani-Restaurant-@main/Web-Assets/Baraka%20Fizzup%20up%20300%20ml.png?q=80&w=200&auto=format&fit=crop" },
      { name: "Pakola Cream Soda 300 ml", price: "Rs.99", desc: "Famous creamy soda with a unique flavor.", image: "https://cdn.jsdelivr.net/gh/fazeel0010/Baraka-Biryani-Restaurant-@main/Web-Assets/Baraka%20Pakola%20355%20ml.png?q=80&w=200&auto=format&fit=crop" },
      { name: "Gourmet Cola", price: "Rs.150", desc: "Rich cola drink served cold for maximum refreshment.", image: "https://cdn.jsdelivr.net/gh/fazeel0010/Baraka-Biryani-Restaurant-@main/Web-Assets/Baraka%20Gourmet%20cola%20300%20ml.png?q=80&w=200&auto=format&fit=crop" },
      { name: "7up 345 ml", price: "Rs.150", desc: "Crisp lemon-lime soda to refresh your palate.", image: "https://cdn.jsdelivr.net/gh/fazeel0010/Baraka-Biryani-Restaurant-@main/Web-Assets/Baraka%207up%20300%20ml.png?q=80&w=200&auto=format&fit=crop" },
      { name: "Pepsi 345 ml", price: "Rs.125", desc: "Bold and refreshing cola drink served chilled.", image: "https://cdn.jsdelivr.net/gh/fazeel0010/Baraka-Biryani-Restaurant-@main/Web-Assets/Baraka%20pepsi%20300%20ml.png?q=80&w=200&auto=format&fit=crop" },
      { name: "Mirinda 345 ml", price: "Rs.150", desc: "Sweet and tangy orange flavored soda.", image: "https://cdn.jsdelivr.net/gh/fazeel0010/Baraka-Biryani-Restaurant-@main/Web-Assets/Baraka%20Mirinda%20300%20ml.png?q=80&w=200&auto=format&fit=crop" },
      { name: "Slice 355 ml", price: "Rs.155", desc: "Delicious mango juice drink, sweet and refreshing.", image: "https://cdn.jsdelivr.net/gh/fazeel0010/Baraka-Biryani-Restaurant-@main/Web-Assets/Baraka%20Slice%20juice%20355%20ml.png?q=80&w=200&auto=format&fit=crop" },
    ]
  },
    {
    title: "Cutlery",
    description: "Utensils provided to help you enjoy your meal.",
    items: [
      { name: "Plastic spoon", price: "Rs.10", desc: "Convenient disposable spoon for eating.", image: "https://cdn.jsdelivr.net/gh/fazeel0010/Baraka-Biryani-Restaurant-@main/Web-Assets/Baraka%20Cutlery.png?q=80&w=200&auto=format&fit=crop" },
    ]
  }
];

export default function Menu() {
  const [selectedItem, setSelectedItem] = useState<any | null>(null);
  const [isDownloading, setIsDownloading] = useState(false);

  const allItems = menuCategories.flatMap(category => category.items);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedItem) return;
    const currentIndex = allItems.findIndex(item => item.name === selectedItem.name);
    const nextIndex = (currentIndex + 1) % allItems.length;
    setSelectedItem(allItems[nextIndex]);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedItem) return;
    const currentIndex = allItems.findIndex(item => item.name === selectedItem.name);
    const prevIndex = (currentIndex - 1 + allItems.length) % allItems.length;
    setSelectedItem(allItems[prevIndex]);
  };

  const handleDownloadMenu = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (isDownloading) return;
    setIsDownloading(true);

    try {
      const jsPDFModule = await import('jspdf');
      const autoTableModule = await import('jspdf-autotable');
      const jsPDF = jsPDFModule.default || jsPDFModule.jsPDF;
      const autoTable = autoTableModule.default;

      const doc = new jsPDF();
      
      // Try to load the logo
      try {
        const img = new Image();
        img.crossOrigin = "Anonymous";
        img.src = "https://cdn.jsdelivr.net/gh/fazeel0010/Baraka-Biryani-Restaurant-@main/Web-Assets/Baraka-Biryani.png";
        
        await new Promise((resolve, reject) => {
          img.onload = resolve;
          img.onerror = reject;
        });

        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.drawImage(img, 0, 0);
          const imgData = canvas.toDataURL('image/png');
          // Add image centered. Width 120, height 60
          doc.addImage(imgData, 'PNG', 55, 10, 100, 50);
        }
      } catch (err) {
        console.warn("Could not load logo for PDF", err);
      }
      
      // Add Title
      doc.setFontSize(24);
      doc.setTextColor(23, 23, 23); // brand-900
      doc.text("Baraka Biryani", 105, 62, { align: "center" });
      
      doc.setFontSize(12);
      doc.setTextColor(128, 0, 0); // elegant maroon
      doc.text("Authentic dum biryani and royal Pakistani cuisine", 105, 68, { align: "center" });

      // Add Contact Details
      doc.setFontSize(10);
      doc.setTextColor(100, 100, 100);
      doc.text("H#61, Surti Muslim Society, Model Colony, Malir District, KHI 75100", 105, 74, { align: "center" });
      doc.text("Phone: +92 332 2011406  |  Email: reservations@barakabiryani.com", 105, 79, { align: "center" });

      let startY = 93;

      menuCategories.forEach((category) => {
        // Check if we need a new page for the category title
        if (startY > 250) {
          doc.addPage();
          startY = 20;
        }

        // Add Category Title
        doc.setFontSize(16);
        doc.setTextColor(23, 23, 23);
        doc.text(category.title, 14, startY);
        
        doc.setFontSize(10);
        doc.setTextColor(100, 100, 100);
        doc.text(category.description, 14, startY + 6);

        // Add Table
        const tableData = category.items.map(item => [
          item.name,
          item.desc,
          item.price
        ]);

        autoTable(doc, {
          startY: startY + 10,
          head: [['Item', 'Description', 'Price']],
          body: tableData,
          theme: 'striped',
          headStyles: { fillColor: [128, 0, 0] }, // elegant maroon
          columnStyles: {
            0: { cellWidth: 45, fontStyle: 'bold' },
            1: { cellWidth: 'auto' },
            2: { cellWidth: 25, halign: 'right', fontStyle: 'bold' }
          },
          margin: { top: 10, right: 14, bottom: 10, left: 14 },
        });

        startY = (doc as any).lastAutoTable.finalY + 15;
      });

      // Footer
      const pageCount = (doc as any).internal.getNumberOfPages();
      for (let i = 1; i <= pageCount; i++) {
        doc.setPage(i);
        doc.setFontSize(10);
        doc.setTextColor(150);
        doc.text(`Page ${i} of ${pageCount}`, 105, 290, { align: 'center' });
      }

      doc.save("Baraka_Biryani_Menu.pdf");
    } catch (error) {
      console.error("Error generating PDF:", error);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <section id="menu" className="py-24 md:py-32 bg-brand-50">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        
        <div className="text-center mb-20">
          <span className="text-accent uppercase tracking-widest text-sm font-bold mb-4 block">
            Culinary Offerings
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-900 mb-6 tracking-tight">
            Our Menu
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
        </div>

        <div className="space-y-24">
          {menuCategories.map((category, idx) => (
            <motion.div 
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <div className="text-center mb-12">
                <h3 className="text-3xl font-serif font-bold text-brand-900 mb-3">{category.title}</h3>
                <p className="text-brand-800/70 font-medium">{category.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
                {category.items.map((item) => (
                  <div 
                    key={item.name} 
                    className="flex gap-4 items-start cursor-pointer group/item p-4 rounded-2xl hover:bg-brand-100 transition-colors border border-transparent hover:border-brand-200"
                    onClick={() => setSelectedItem(item)}
                  >
                    <div className="group flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 bg-brand-100 rounded-xl relative border border-brand-200 hover:z-50 cursor-pointer shadow-sm">
                      {item.image ? (
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-full h-full object-cover rounded-xl transition-all duration-300 origin-center group-hover:scale-[2.5] group-hover:shadow-2xl relative z-10 group-hover:z-50" 
                          referrerPolicy="no-referrer" 
                        />
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center text-brand-900/20 bg-brand-100 rounded-xl">
                          <UtensilsCrossed size={24} />
                        </div>
                      )}
                    </div>
                    <div className="flex-grow flex flex-col group-hover/item:opacity-80 transition-opacity pt-1">
                      <div className="flex justify-between items-baseline mb-2">
                        <h4 className="text-lg sm:text-xl font-serif text-brand-900 font-bold">{item.name}</h4>
                        <div className="flex-grow border-b-2 border-dotted border-brand-200 mx-4 relative top-[-6px]"></div>
                        <span className="text-lg font-bold text-accent whitespace-nowrap">{item.price}</span>
                      </div>
                      <p className="text-brand-800/70 text-sm leading-relaxed">{item.desc}</p>
                      <a 
                        href="https://wa.me/923328799437" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="mt-3 inline-flex items-center justify-center px-4 py-1.5 bg-[#25D366] text-white text-xs font-bold uppercase tracking-wider rounded-full hover:bg-[#128C7E] transition-colors self-start shadow-md shadow-[#25D366]/20"
                      >
                        Order on WhatsApp
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button 
            onClick={handleDownloadMenu}
            disabled={isDownloading}
            className={`inline-block px-8 py-4 border-2 border-brand-900 text-brand-900 font-bold uppercase tracking-widest rounded-full transition-all ${isDownloading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-brand-900 hover:text-brand-50 hover:scale-105 cursor-pointer'}`}
          >
            {isDownloading ? 'Generating PDF...' : 'Download Full Menu'}
          </button>
        </div>

      </div>

      {/* Item Popup Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-sm"
            onClick={() => setSelectedItem(null)}
          >
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 z-[110] p-2 text-white/70 hover:text-white bg-black/50 hover:bg-black/80 rounded-full transition-colors"
            >
              <X size={28} />
            </button>
            
            <button
              onClick={handlePrev}
              className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-[110] p-2 sm:p-3 text-white/70 hover:text-white bg-black/50 hover:bg-black/80 rounded-full transition-colors"
            >
              <ChevronLeft size={28} className="sm:w-8 sm:h-8" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-[110] p-2 sm:p-3 text-white/70 hover:text-white bg-black/50 hover:bg-black/80 rounded-full transition-colors"
            >
              <ChevronRight size={28} className="sm:w-8 sm:h-8" />
            </button>
            
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative max-w-5xl w-full max-h-full flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {selectedItem.image ? (
                <img 
                  src={selectedItem.image} 
                  alt={selectedItem.name} 
                  className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-2xl" 
                  referrerPolicy="no-referrer" 
                />
              ) : (
                <div className="w-full max-w-md aspect-square flex items-center justify-center bg-brand-100 rounded-lg">
                  <UtensilsCrossed size={64} className="text-brand-900/20" />
                </div>
              )}
              <div className="mt-6 text-center bg-brand-950 p-6 rounded-2xl max-w-2xl w-full border border-white/10 shadow-2xl flex flex-col items-center">
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-2">
                  {selectedItem.name} <span className="text-accent ml-3">{selectedItem.price}</span>
                </h3>
                <p className="text-white/80 text-lg font-medium mb-6">{selectedItem.desc}</p>
                <a 
                  href="https://wa.me/923328799437" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-3 bg-[#25D366] text-white text-sm font-bold uppercase tracking-widest rounded-full hover:bg-[#128C7E] transition-all hover:scale-105 shadow-lg shadow-[#25D366]/20"
                >
                  Order on WhatsApp
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
