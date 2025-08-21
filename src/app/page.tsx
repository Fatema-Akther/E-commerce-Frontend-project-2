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
    product.group?.toLowerCase().includes(q) ||
    product.subcategory?.toLowerCase().includes(q) ||
    product.category1?.toLowerCase().includes(q)
  );
});


  return (
    <div className="bg-white">
      <Header onSearchChange={setSearchQuery} /> {/* ✅ Pass search setter */}

<div className="  hidden sm:flex w-full lg:w-[1200px] mx-auto bg-[#E7E7E7] py-1 px-2 flex flex-wrap justify-center items-center rounded-sm mt-1">

  <div className="text-center px-2 border-r border-gray-400 my-1 w-1/2 sm:w-1/3 md:w-auto">
    <h2 className="text-black font-bold text-[10px] sm:text-xs uppercase">SHIPPING INFO</h2>
    <p className="text-red-500 font-semibold text-[8px] sm:text-[10px]">Free Shipping Conditions*</p>
  </div>

  <div className="text-center px-2 border-r border-gray-400 my-1 w-1/2 sm:w-1/3 md:w-auto">
    <h2 className="text-black font-bold text-[10px] sm:text-xs uppercase">FREE RETURN</h2>
    <p className="text-red-500 font-semibold text-[8px] sm:text-[10px]">WITHIN 45 DAYS*</p>
  </div>

  <div className="text-center px-2 border-r border-gray-400 my-1 w-1/2 sm:w-1/3 md:w-auto">
    <h2 className="text-black font-bold text-[10px] sm:text-xs uppercase">STUDENT DISCOUNT</h2>
    <p className="text-red-500 font-semibold text-[8px] sm:text-[10px]">15% OFF*</p>
  </div>

  <div className="text-center px-2 border-r border-gray-400 my-1 w-1/2 sm:w-1/2 md:w-auto">
    <h2 className="text-black font-bold text-[10px] sm:text-xs uppercase">SHEIN CLUB</h2>
    <p className="text-red-500 font-semibold text-[8px] sm:text-[10px]">15x FREE Shipping Vouchers*</p>
  </div>

  <div className="text-center px-2 my-1 w-full sm:w-1/2 md:w-auto">
    <h2 className="text-black font-bold text-[10px] sm:text-xs uppercase">JOIN EMAIL LIST</h2>
    <p className="text-red-500 font-semibold text-[8px] sm:text-[10px]">+100 Points</p>
  </div>

</div>






<div className="flex flex-col lg:flex-row justify-center items-center lg:items-start mt-2 mx-auto w-full max-w-[1220px] gap-2 px-2">


  {/* Left side boxes */}
   <div className="hidden lg:flex flex-col gap-4 p-2 w-[600px]">
  {/* Box 1 */}
  <div className="w-full h-[70px] bg-white rounded-xl overflow-hidden shadow">
    <img
      src="/images/small4.jpg"
      alt="Image 1"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Box 2 */}
  <div className="w-full h-[70px] bg-white rounded-xl overflow-hidden shadow">
    <img
      src="/images/small2.jpg"
      alt="Image 2"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Box 3 */}
  <div className="w-full h-[70px] bg-white rounded-xl overflow-hidden shadow">
    <img
      src="/images/small3.jpg"
      alt="Image 3"
      className="w-full h-full object-cover"
    />
  </div>
</div>

  {/* Main Slider */}
 <div
  className="relative overflow-hidden w-full h-[180px] sm:h-[220px] md:h-[250px] lg:w-[1000px] lg:h-[250px] rounded-xl shadow-lg"
  style={{ background: 'linear-gradient(135deg, #f56a79, #f2c94c)' }}
>

    <div
      className="flex transition-transform duration-300 ease-in-out"
      style={{ transform: `translateX(-${currentIndex * 100}%)` }}
    >
      {banners.map((banner, index) => (
        <div key={index} className="flex-shrink-0 w-full h-full relative">
          <img
            src={banner}
            alt={`Banner ${index + 1}`}
            className="object-cover w-full h-full rounded-xl"
          />
        </div>
      ))}
    </div>

    {/* ✅ Text Overlay */}
    <div className="absolute top-[45%] left-[30%] transform -translate-x-1/2 -translate-y-1/2 text-left pl-4 z-10">
      

      <div className="mt-4">
        {/* Flip SHOP NOW Button */}
        <div className="relative w-[150px] sm:w-[180px] h-[45px] sm:h-[50px] [perspective:1000px]">
          <div className="relative w-full h-full animate-flipX [transform-style:preserve-3d]">

        
            


          </div>
        </div>
      </div>
    </div>

    {/* Slider Arrows */}
    <button
      onClick={prevSlide}
      className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
    >
      &#10094;
    </button>
    <button
      onClick={nextSlide}
      className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
    >
      &#10095;
    </button>

    {/* Dot Navigation */}
    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
      {banners.map((_, index) => (
        <div
          key={index}
          onClick={() => handleDotClick(index)}
         className={`w-3 h-3 rounded-full cursor-pointer ${
  currentIndex === index ? 'bg-white' : 'bg-[rgb(160,160,160)]'
}`}

        ></div>
      ))}
    </div>
  </div>

  
      

 {/* Right side boxes */}
   <div className="hidden lg:flex flex-col gap-4 p-2 w-[600px]">
  {/* Box 1 */}
  <div className="w-full h-[70px] bg-white rounded-xl overflow-hidden shadow">
    <img
      src="/images/small4.jpg"
      alt="Image 1"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Box 2 */}
  <div className="w-full h-[70px] bg-white rounded-xl overflow-hidden shadow">
    <img
      src="/images/small2.jpg"
      alt="Image 2"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Box 3 */}
  <div className="w-full h-[70px] bg-white rounded-xl overflow-hidden shadow">
    <img
      src="/images/small3.jpg"
      alt="Image 3"
      className="w-full h-full object-cover"
    />
  </div>
</div>

    
    </div>














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
  <span className="bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">
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
