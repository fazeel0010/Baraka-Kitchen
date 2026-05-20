import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { UtensilsCrossed, X, ChevronLeft, ChevronRight, Phone, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

const WhatsAppIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
    <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
  </svg>
);

const menuCategories = [
  {
    title: "Popular",
    description: "Most ordered right now.",
    items: [
      { name: "Beef Biryani", price: "from Rs. 530", desc: "Aromatic basmati rice cooked with rich spices. Juicy beef full of flavor in every bite!", image: "https://images.deliveryhero.io/image/fd-pk/Products/98715225.jpg?width=150&height=150" },
      { name: "Ashrafi Zarda", price: "from Rs. 250", desc: "250g serving — traditional sweet zarda with sela rice, rich sweetness, and asharfia pearls.", image: "https://images.deliveryhero.io/image/global-menu-service/FP_PK/vendor/jq2x/product/9aee0761-6b29-4085-9356-7a6008dd972e.jpg?width=150&height=150" },
      { name: "Chakki Atta Paratha", price: "Rs. 125", desc: "Freshly made paratha prepared with pure chakki atta, soft inside and crispy outside", image: "https://images.deliveryhero.io/image/global-menu-service/FP_PK/vendor/jq2x/product/c0f26ee6-93b5-4e3a-a177-a675a5def7e2.jpg?width=150&height=150" },
      { name: "Signature Deal 1", price: "from Rs. 895", desc: "500g. Beef biryani, 1 shami kabab with raita", image: "https://images.deliveryhero.io/image/global-menu-service/FP_PK/vendor/jq2x/product/101802948/a1f8d916-b9df-4907-b8ba-d28e073f017d.jpg?width=150&height=150" },
      { name: "Chicken Roll", price: "Rs. 350", desc: "Crispy puri wrapped with juicy chicken salad and sauces", image: "https://images.deliveryhero.io/image/global-menu-service/FP_PK/vendor/jq2x/product/7dbfc815-ec99-4320-b2e8-a9f81d5753e8.jpg?width=150&height=150" }
    ]
  },
  {
    title: "Signature Biryani Deals",
    description: "Value-packed biryani deals served with kabab and raita",
    items: [
      { name: "Signature Deal 1", price: "Rs.895", desc: "500-gm Beef Biryani, 1 Shami Kabab with Raita.", image: "https://cdn.jsdelivr.net/gh/fazeel0010/Baraka-Biryani-Restaurant-@main/Web-Assets/Baraka%20Beef%20Biryani%20-1.png?q=80&w=200&auto=format&fit=crop" },
      { name: "Signature Deal 2", price: "Rs.700", desc: "500-gm Chicken Biryani, 1 Shami Kabab with Raita.", image: "https://cdn.jsdelivr.net/gh/fazeel0010/Baraka-Biryani-Restaurant-@main/Web-Assets/Baraka%20Chicken%20Biryani%20-6.png?q=80&w=200&auto=format&fit=crop" },
      { name: "Signature Deal 3", price: "Rs.2,030", desc: "1-kg Beef Biryani 2 Shami Kabab, 2 Raita and 2 300-ml soft drink", image: "https://cdn.jsdelivr.net/gh/fazeel0010/Baraka-Biryani-Restaurant-@main/Web-Assets/Baraka%20Beef%20Biryani%20with%202%20soft%20drink.png?q=80&w=200&auto=format&fit=crop" },
      { name: "Signature Deal 4", price: "Rs.1,400", desc: "1-kg Chicken Biryani 2 Shami Kabab, 2 Raita and 2 300-ml soft drink", image: "https://cdn.jsdelivr.net/gh/fazeel0010/Baraka-Biryani-Restaurant-@main/Web-Assets/Baraka%20Chicken%20Biryani%20with%202%20soft%20drink.png?q=80&w=200&auto=format&fit=crop" }
    ]
  },
  {
    title: "Starters",
    description: "Perfect beginnings from our kitchen.",
    items: [
      { name: "Beef Resha Shami Kabab", price: "Rs.120", desc: "Authentic sil batta beef shami kababs made with hand ground beef and traditional spices for a rick flavor.", image: "https://cdn.jsdelivr.net/gh/fazeel0010/Baraka-Biryani-Restaurant-@main/Web-Assets/Baraka%20Kabab.png?q=80&w=200&auto=format&fit=crop" },
      { name: "Signature Chicken Roll", price: "Rs. 150", desc: "Big-sized crispy deep-fried spring roll filled with chicken, fresh vegetables, and flavorful spices.", image: "https://images.deliveryhero.io/image/global-menu-service/FP_PK/vendor/jq2x/product/eebf1896-2d16-48ba-ae2c-4ff2b1915876.jpg?width=150&height=150" },
      { name: "Crispy Bites", price: "Rs. 550", desc: "8 pieces served with fries", image: "https://images.deliveryhero.io/image/global-menu-service/FP_PK/vendor/jq2x/product/4be4c4fb-1406-43cf-84ac-9d1ef7d7402d.jpg?width=150&height=150" }
    ]
  },
  {
    title: "Baraka Kitchen",
    description: "To complement your main course.",
    items: [
      { name: "Beef Biryani 500-gm", price: "Rs.530", desc: "Aromatic basmati rice cooked with rich spices. Juicy beef full of flavor in every bite!", image: "https://cdn.jsdelivr.net/gh/fazeel0010/Baraka-Biryani-Restaurant-@main/Web-Assets/Baraka%20Beef%20Biryani%20-5.png?q=80&w=200&auto=format&fit=crop" },
      { name: "Chicken Biryani 500-gm", price: "Rs.440", desc: "Fragrant basmati rice cooked with seasoned chicken and spices.", image: "https://cdn.jsdelivr.net/gh/fazeel0010/Baraka-Biryani-Restaurant-@main/Web-Assets/Baraka%20Chicken%20Biryani%20-4.png?q=80&w=200&auto=format&fit=crop" },
      { name: "Beef Biryani 1-kg", price: "Rs.1060", desc: "Aromatic basmati rice cooked with rich spices. Juicy beef full of flavor in every bite!", image: "https://cdn.jsdelivr.net/gh/fazeel0010/Baraka-Biryani-Restaurant-@main/Web-Assets/Baraka%20Beef%20Biryani%20-5.png?q=80&w=200&auto=format&fit=crop" },
      { name: "Chicken Biryani 1-kg", price: "Rs.880", desc: "Fragrant basmati rice cooked with seasoned chicken and spices.", image: "https://cdn.jsdelivr.net/gh/fazeel0010/Baraka-Biryani-Restaurant-@main/Web-Assets/Baraka%20Chicken%20Biryani%20-4.png?q=80&w=200&auto=format&fit=crop" },
    ]
  },
  {
    title: "Chinese",
    description: "Delicious and flavorful Chinese dishes.",
    items: [
      { name: "Chicken Chowmein", price: "Rs. 785", desc: "Stir-fried noodles tossed with tender chicken, fresh vegetables, and flavorful sauces", image: "https://images.deliveryhero.io/image/global-menu-service/FP_PK/vendor/jq2x/product/abef1619-d9db-42fe-9d70-70847bb0f9d5.jpg?width=150&height=150" },
      { name: "Chicken Manchurian w/ Fried Rice", price: "Rs. 1,299", desc: "Chicken Manchurian in flavorful sauces with vegetable fried rice.", image: "https://images.deliveryhero.io/image/global-menu-service/FP_PK/vendor/jq2x/product/28bd5bf2-74d5-4f3a-a697-65afa7e13d0d.jpg?width=150&height=150" },
      { name: "Chicken Shashlik w/ Rice", price: "Rs. 1,150", desc: "Chicken cooked in flavorful sauce with capsicum and tomatoes, served with fried rice.", image: "https://images.deliveryhero.io/image/global-menu-service/FP_PK/vendor/jq2x/product/876cdeb5-05ff-45d8-90a6-efd4de300876.jpg?width=150&height=150" }
    ]
  },
  {
    title: "Rolls & Wraps",
    description: "Freshly prepared rolls packed with delicious fillings.",
    items: [
      { name: "Chicken Roll", price: "Rs. 350", desc: "Crispy puri wrapped with juicy chicken salad and sauces", image: "https://images.deliveryhero.io/image/global-menu-service/FP_PK/vendor/jq2x/product/7dbfc815-ec99-4320-b2e8-a9f81d5753e8.jpg?width=150&height=150" },
      { name: "Zinger Roll", price: "Rs. 480", desc: "Crunchy zinger fillet rolled in soft puri with fresh salad and creamy sauces.", image: "https://images.deliveryhero.io/image/global-menu-service/FP_PK/vendor/jq2x/product/184326aa-01b1-4b93-9de0-35c7dcbc52e7.jpg?width=150&height=150" }
    ]
  },
  {
    title: "Sandwiches",
    description: "Toasted sandwiches packed with flavor.",
    items: [
      { name: "Beef Shami Toast", price: "Rs. 285", desc: "Tender minced beef shami kebab served on toasted bread with fresh onions cilantro and tangy tamarind chutney for an authentic Pakistani sandwich experience", image: "https://images.deliveryhero.io/image/global-menu-service/FP_PK/vendor/jq2x/product/17a08f34-3df2-4099-816a-10231939bfcc.jpg?width=150&height=150" },
      { name: "Chicken Toast", price: "Rs. 360", desc: "Golden toasted bread stuffed with creamy, seasoned chicken — crispy outside and soft inside.", image: "https://images.deliveryhero.io/image/global-menu-service/FP_PK/vendor/jq2x/product/13d2e49c-eaf7-498b-8a42-82b7b9b739fd.jpg?width=150&height=150" }
    ]
  },
  {
    title: "Fast Food",
    description: "Quick and delightful fast food options.",
    items: [
      { name: "Chicken Macaroni", price: "Rs. 574", desc: "Delicious chicken macaroni with juicy chicken chunks creamy sauce and fresh vegetables", image: "https://images.deliveryhero.io/image/global-menu-service/FP_PK/vendor/jq2x/product/6fcdfda0-6a12-4eab-b531-c8f4f7be80ce.jpg?width=150&height=150" }
    ]
  },
  {
    title: "Fried & BBQ",
    description: "Delicious BBQ and fried items.",
    items: [
      { name: "Chicken Leg Tikka", price: "Rs. 550", desc: "Juicy and smoky chicken tikka leg.", image: "https://images.deliveryhero.io/image/global-menu-service/FP_PK/vendor/jq2x/product/4e18b749-cdd9-46b3-af04-b4ac0e22cb19.jpg?width=150&height=150" }
    ]
  },
  {
    title: "Breakfast",
    description: "Start your day right.",
    items: [
      { name: "Chakki Atta Paratha", price: "Rs. 125", desc: "Freshly made paratha prepared with pure chakki atta, soft inside and crispy outside", image: "https://images.deliveryhero.io/image/global-menu-service/FP_PK/vendor/jq2x/product/c0f26ee6-93b5-4e3a-a177-a675a5def7e2.jpg?width=150&height=150" },
      { name: "Crispy Paratha", price: "Rs. 115", desc: "Fluffy and crispy paratha, freshly cooked", image: "https://images.deliveryhero.io/image/global-menu-service/FP_PK/vendor/jq2x/product/567a367d-5242-4e49-aa97-5f02b5e26f4c.jpg?width=150&height=150" },
      { name: "Plain Omelette", price: "Rs. 100", desc: "One-egg omelette cooked with spices.", image: "https://images.deliveryhero.io/image/global-menu-service/FP_PK/vendor/jq2x/product/964c48ab-3e1f-4553-84a4-57b708c7ddf4.jpg?width=150&height=150" },
      { name: "Masala Omelette", price: "Rs. 120", desc: "One-egg omelette cooked with onions, chillies, and aromatic spices", image: "https://images.deliveryhero.io/image/global-menu-service/FP_PK/vendor/jq2x/product/edc71e55-e22b-48f2-bfa7-d9180a10dada.jpg?width=150&height=150" },
      { name: "Special Signature Chai", price: "Rs. 150", desc: "Rich, creamy elaichi chai with a smooth aroma and comforting taste.", image: "https://images.deliveryhero.io/image/global-menu-service/FP_PK/vendor/jq2x/product/148f5bc1-a65d-4808-9c1c-76f535b7d2b4.jpg?width=150&height=150" },
      { name: "Plain Chai", price: "Rs. 125", desc: "boiled water, tea, sugar, then milk.", image: "https://images.deliveryhero.io/image/global-menu-service/FP_PK/vendor/jq2x/product/86a24356-bfb6-421c-a6ea-0af54d864531.jpg?width=150&height=150" }
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
      { name: "Puri", price: "Rs. 80", desc: "Soft and fluffy puri served fresh.", image: "https://images.deliveryhero.io/image/global-menu-service/FP_PK/vendor/jq2x/product/ded40310-1889-433b-ba62-c4f6eb66d4b6.jpg?width=150&height=150" },
      { name: "Chakki Roti", price: "Rs. 60", desc: "Soft and wholesome wheat flour roti, perfect with your meal.", image: "https://images.deliveryhero.io/image/global-menu-service/FP_PK/vendor/jq2x/product/61fc2e54-bd88-4acb-8ecf-7a6aefa6c045.jpg?width=150&height=150" },
      { name: "Raita", price: "Rs.70", desc: "Cool & creamy yogurt raita to balance the spices.", image: "https://cdn.jsdelivr.net/gh/fazeel0010/Baraka-Biryani-Restaurant-@main/Web-Assets/Baraka%20Raita.png?q=80&w=200&auto=format&fit=crop" },
      { name: "Special Imli Chutney", price: "Rs. 80", desc: "Khatti meethi imli ki chatni, rich in flavor and irresistibly delicious — made our special way.", image: "https://images.deliveryhero.io/image/global-menu-service/FP_PK/vendor/jq2x/product/a8b3db17-b083-4bd0-8f4a-c10cd87921ac.jpg?width=150&height=150" },
      { name: "Salad", price: "Rs. 70", desc: "Fresh mixed salad.", image: "https://images.deliveryhero.io/image/fd-pk/Products/98715230.jpg?width=150&height=150" }
    ]
  },
  {
    title: "Desserts",
    description: "A sweet conclusion to your meal.",
    items: [
      { name: "Ashrafi Zarda", price: "from Rs. 250", desc: "250g serving — traditional sweet zarda with sela rice, rich sweetness, and asharfia pearls.", image: "https://images.deliveryhero.io/image/global-menu-service/FP_PK/vendor/jq2x/product/9aee0761-6b29-4085-9356-7a6008dd972e.jpg?width=150&height=150" }
    ]
  },
  {
    title: "Baraka Fries",
    description: "Crispy golden fries served hot — the perfect snack or side.",
    items: [
      { name: "Plain Fries", price: "Rs. 250", desc: "Classic crispy fries, perfect for one.", image: "https://images.deliveryhero.io/image/global-menu-service/FP_PK/vendor/jq2x/product/12c7d12e-d38d-47c2-9e75-4c1e8882c699.jpg?width=150&height=150" },
      { name: "Masala Fries", price: "Rs. 280", desc: "Crispy fries tossed in flavorful masala seasoning.", image: "https://images.deliveryhero.io/image/global-menu-service/FP_PK/vendor/jq2x/product/2aa71b50-00e7-4bf4-a248-da5d2ce5d603.jpg?width=150&height=150" },
    ]
  },
  {
    title: "Beverages",
    description: "Refreshing drinks to quench your thirst and pair perfectly with your meal.",
    items: [
      { name: "Fizup Next 500 ml", price: "Rs. 150", desc: "Soft drink", image: "https://images.deliveryhero.io/image/global-menu-service/FP_PK/vendor/jq2x/product/10fe2e9b-8ae1-4f9a-bf6e-1e6eb1c5a19d.jpg?width=150&height=150" },
      { name: "Cola Next 300 ml", price: "Rs. 115", desc: "Soft drink", image: "https://images.deliveryhero.io/image/global-menu-service/FP_PK/vendor/jq2x/product/ecdc9ff1-b4cb-4926-8a7d-e78e44657638.jpg?width=150&height=150" },
      { name: "Fizup Next 300 ml", price: "Rs. 115", desc: "Soft drink", image: "https://images.deliveryhero.io/image/global-menu-service/FP_PK/vendor/jq2x/product/4fbbebc7-f2b7-4daf-9a65-69946acd444b.jpg?width=150&height=150" },
      { name: "Pakola Cream Soda 300 ml", price: "Rs. 115", desc: "Soft drink", image: "https://images.deliveryhero.io/image/global-menu-service/FP_PK/vendor/jq2x/product/ec20d798-2a3e-4f25-961a-5846cdc159c5.jpg?width=150&height=150" },
      { name: "Gourmet Cola", price: "Rs. 150", desc: "Soft drink", image: "https://images.deliveryhero.io/image/global-menu-service/FP_PK/vendor/jq2x/product/b26540d5-e22b-4ea7-a554-53810611f0f0.jpg?width=150&height=150" },
      { name: "7up 345 ml", price: "Rs. 150", desc: "Refreshing soft drink to enjoy with your meal.", image: "https://images.deliveryhero.io/image/fd-pk/Products/98715233.jpg?width=150&height=150" },
      { name: "Pepsi 345 ml", price: "Rs. 150", desc: "Refreshing soft drink to enjoy with your meal.", image: "https://images.deliveryhero.io/image/fd-pk/Products/98715232.jpg?width=150&height=150" },
      { name: "Mirinda 345 ml", price: "Rs. 150", desc: "Refreshing soft drink to enjoy with your meal.", image: "https://images.deliveryhero.io/image/fd-pk/Products/98715231.jpg?width=150&height=150" },
      { name: "Slice 355 ml", price: "Rs. 155", desc: "Mango juice", image: "https://images.deliveryhero.io/image/global-menu-service/FP_PK/vendor/jq2x/product/f2b70f62-9b94-4ae6-ad0d-2d12da6da932.jpg?width=150&height=150" },
    ]
  },
  {
    title: "Cutlery",
    description: "Utensils provided to help you enjoy your meal.",
    items: [
      { name: "Plastic spoon", price: "Rs. 10", desc: "Plastic Spoon", image: "https://images.deliveryhero.io/image/fd-pk/Products/98715234.jpg?width=150&height=150" },
    ]
  }
];

export default function Menu() {
  const [selectedItem, setSelectedItem] = useState<any | null>(null);
  const [isDownloading, setIsDownloading] = useState(false);
  const { addToCart } = useCart();

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
      doc.text("Baraka Kitchen", 105, 62, { align: "center" });
      
      doc.setFontSize(12);
      doc.setTextColor(128, 0, 0); // elegant maroon
      doc.text("Authentic dum biryani and royal Pakistani cuisine", 105, 68, { align: "center" });

      // Add Contact Details
      doc.setFontSize(10);
      doc.setTextColor(100, 100, 100);
      doc.text("Nawab St, Model Colony Surti Housing Society, Karachi, 75080, Pakistan", 105, 74, { align: "center" });
      doc.text("Phone: +92 332 8799437  |  Email: order@barakakitchen.com", 105, 79, { align: "center" });

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
                    className="flex gap-4 items-stretch cursor-pointer group/item p-4 rounded-2xl hover:bg-brand-100 transition-colors border border-transparent hover:border-brand-200 h-full"
                    onClick={() => setSelectedItem(item)}
                  >
                    <div className="group flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 bg-brand-100 rounded-xl relative border border-brand-200 hover:z-50 cursor-pointer shadow-sm">
                      {item.image ? (
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-full h-full object-cover rounded-xl transition-all duration-300 origin-center group-hover:scale-[2.5] group-hover:shadow-2xl relative z-10 group-hover:z-50" 
                          referrerPolicy="no-referrer"
                          loading="lazy"
                          decoding="async"
                        />
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center text-brand-900/20 bg-brand-100 rounded-xl">
                          <UtensilsCrossed size={24} />
                        </div>
                      )}
                    </div>
                    <div className="flex-grow flex flex-col group-hover/item:opacity-80 transition-opacity pt-1">
                      <div className="flex flex-wrap sm:flex-nowrap justify-between items-baseline mb-2 gap-x-2">
                        <h4 className="text-base sm:text-lg md:text-xl font-serif text-brand-900 font-bold max-w-full sm:max-w-[70%] break-words">{item.name}</h4>
                        <div className="hidden sm:block flex-grow border-b-2 border-dotted border-brand-200 mx-4 relative top-[-6px] min-w-[20px]"></div>
                        <span className="text-base sm:text-lg font-bold text-accent whitespace-nowrap shrink-0">{item.price}</span>
                      </div>
                      <p className="text-brand-800/70 text-sm leading-relaxed">{item.desc}</p>
                      <div className="flex mt-auto pt-3 pb-1" onClick={(e) => e.stopPropagation()}>
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            addToCart(item.name, item.price);
                          }}
                          className="w-full inline-flex items-center justify-center px-4 py-2 sm:px-6 sm:py-2 bg-brand-900 text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider rounded-full hover:bg-accent transition-colors shadow-md hover:scale-[1.02] active:scale-[0.98]"
                        >
                          <ShoppingBag size={14} className="mr-1.5 shrink-0" />
                          <span>Add to Tray</span>
                        </button>
                      </div>
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
                  loading="lazy"
                  decoding="async"
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
                <div className="flex justify-center w-full mt-2">
                  <button 
                    onClick={() => {
                      addToCart(selectedItem.name, selectedItem.price);
                      setSelectedItem(null);
                    }}
                    className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-accent text-white text-sm font-bold uppercase tracking-widest rounded-full hover:bg-accent/90 transition-all sm:hover:scale-105 active:scale-95 shadow-lg shadow-accent/30"
                  >
                    <ShoppingBag size={18} className="mr-2 shrink-0" />
                    <span>Add to Tray</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
