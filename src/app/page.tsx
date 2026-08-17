'use client';

import {   useEffect, useState } from 'react';

import CategoryCircleSection from "./components/CategoryCircleSection";
import FlashDeals from "./components/FlashDeals";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProductCardGrid from "./components/ProductCardgrid";
import CartDrawer from "./components/CartDrawer";
import { allProducts, Product } from "./data/products";
import { toast } from 'sonner';
import HeroSlider from './components/HeroSlider';
import InfoFeatures from './components/InfoFeatures';

// ✅ Define CartProduct type (Product + quantity)
type CartProduct = Product & { quantity: number };

export default function HomePage() {


  
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState(''); // ✅ Search input state

 const [currentIndex, setCurrentIndex] = useState(0);

  const banners = [
    "/images/4.jpg",
    "/images/1.jpg",
    "/images/2.jpg",
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + banners.length) % banners.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 2500);
    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };


  
  // ✅ Add to cart
  const handleAddToCart = (product: Product) => {
    const cart: CartProduct[] = JSON.parse(localStorage.getItem('cart') || '[]');
    const existing = cart.find((item) => item.id === product.id);

    let updatedCart: CartProduct[];

    if (existing) {
      updatedCart = cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: (item.quantity || 1) + 1 }
          : item
      );
    } else {
      updatedCart = [...cart, { ...product, quantity: 1 }];
    }

    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setIsCartOpen(true);
    toast.success('Added to cart!');
  };

  // ✅ Filter products based on search query
  const filteredProducts = allProducts.filter((product) => {
  const q = searchQuery.toLowerCase();
  return (
   product.title?.toLowerCase().includes(q) ||
product.category?.toLowerCase().includes(q) ||
product.subcategory?.toLowerCase().includes(q) ||
product.brand?.toLowerCase().includes(q)
  );
});


  return (
    <div className="bg-white">
      <Header onSearchChange={setSearchQuery} /> {/* ✅ Pass search setter */}

<div className="  hidden sm:flex w-full lg:w-[1200px] mx-auto bg-[#F3E4EC] py-1 px-2 flex-wrap justify-center items-center rounded-sm mt-1">

  <div className="text-center px-2 border-r border-gray-400 my-1 w-1/2 sm:w-1/3 md:w-auto">
    <h2 className="text-[#70224a] font-bold text-[10px] sm:text-xs uppercase">SHIPPING INFO</h2>
    <p className="text-[#e77295] font-semibold text-[8px] sm:text-[10px]">Free Shipping Conditions*</p>
  </div>

  <div className="text-center px-2 border-r border-gray-400 my-1 w-1/2 sm:w-1/3 md:w-auto">
    <h2 className="text-[#70224a] font-bold text-[10px] sm:text-xs uppercase">FREE RETURN</h2>
    <p className="text-[#e77295] font-semibold text-[8px] sm:text-[10px]">WITHIN 45 DAYS*</p>
  </div>

  <div className="text-center px-2 border-r border-gray-400 my-1 w-1/2 sm:w-1/3 md:w-auto">
    <h2 className="text-[#70224a] font-bold text-[10px] sm:text-xs uppercase">STUDENT DISCOUNT</h2>
    <p className="text-[#e77295] font-semibold text-[8px] sm:text-[10px]">15% OFF*</p>
  </div>

  <div className="text-center px-2 border-r border-gray-400 my-1 w-1/2 sm:w-1/2 md:w-auto">
    <h2 className="text-[#70224a] font-bold text-[10px] sm:text-xs uppercase">SHEIN CLUB</h2>
    <p className="text-[#e77295] font-semibold text-[8px] sm:text-[10px]">15x FREE Shipping Vouchers*</p>
  </div>

  <div className="text-center px-2 my-1 w-full sm:w-1/2 md:w-auto">
    <h2 className="text-[#70224a] font-bold text-[10px] sm:text-xs uppercase">JOIN EMAIL LIST</h2>
    <p className="text-[#e77295] font-semibold text-[8px] sm:text-[10px]">+100 Points</p>
  </div>

</div>








<HeroSlider />












{/*other*/}



      <CategoryCircleSection />




    <div className="w-full px-2 sm:px-4 mb-8 sm:mb-16 md:mb-28">
  <div className="max-w-[1280px] mx-auto">
    <FlashDeals />
  </div>
</div>



      {/* 🛒 Recommended Products */}
      <section className="w-full flex justify-center  mt-4 sm:mt-[-80px]">
        <div className="w-full max-w-[1280px] px-2">
        <h2 className="text-2xl font-bold mb-4 text-center flex items-center justify-center gap-2">
  <img src="/icons/shopping-bag.png" alt="icon" className="w-6 h-6" />
  <span className="text-[#8B2E5C]">
    Explore Our Collection
  </span>
</h2>


          <ProductCardGrid
            products={filteredProducts} // ✅ Use filtered list
            showCartButton={true}
            onAddToCart={handleAddToCart}
            maxRows={5}
          />
        </div>
      </section>
      
<div className="mt-6">


      <Footer />
</div>
      
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
    
    
  );
}
