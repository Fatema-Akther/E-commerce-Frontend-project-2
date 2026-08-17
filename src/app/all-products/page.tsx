'use client';

import { useState } from 'react';
import { allProducts, type Product } from '@/app/data/products';
import ProductCardGrid from '../components/ProductCardgrid';
import Header from '../components/Header';
import FlashDeals2 from '../components/FlashDeals2';
import CartDrawer from '../components/CartDrawer';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { toast } from 'sonner';
import Footer from '../components/Footer';

type CartProduct = Product & { quantity: number };

export default function AllProductsPage() {
  const allCategories = Array.from(
  new Set(
    allProducts
      .map((p) => p.subcategory)
      .filter((cat): cat is string => Boolean(cat))
  )
);

  const [checkedCategories, setCheckedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000]);
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

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

  const handleCategoryChange = (cat: string) => {
    setCheckedCategories((prev) =>
      prev.includes(cat)
        ? prev.filter((c) => c !== cat)
        : [...prev, cat]
    );
  };

 const filteredProducts = allProducts
  .filter((product) => {
    const q = searchQuery.toLowerCase();

    return (
      product.title?.toLowerCase().includes(q) ||
      product.category?.toLowerCase().includes(q) ||
      product.subcategory?.toLowerCase().includes(q) ||
     product.brand?.toLowerCase().includes(q)
    );
  })
  .filter((product) => {
    if (checkedCategories.length === 0) return true;

    return checkedCategories
      .map((c) => c.toLowerCase())
      .includes((product.subcategory || '').toLowerCase());
  })
  .filter((product) => {
    const price = parseFloat(
      product.price.replace(/[^\d.]/g, '')
    );

    return (
      price >= priceRange[0] &&
      price <= priceRange[1]
    );
  });

  return (
    <div className="bg-white">
<Header onSearchChange={setSearchQuery} />

      
      {/* 🔧 Mobile FILTERS button */}
      <div className=" hidden px-4 mt-4">
        <button
          className="flex items-center gap-1 text-black font-semibold uppercase tracking-wide"
          onClick={() => setShowMobileFilters((prev) => !prev)}
        >
          <span>FILTERS</span>
          <span className="text-sm">{showMobileFilters ? '▲' : '▼'}</span>
        </button>

        {showMobileFilters && (
          <div className="bg-pink-50 border rounded mt-2 p-4">
            <h3 className="text-sm font-bold mb-2 text-black mt-80">Filter by Sub-Category</h3>
            <div className="space-y-2 mb-4">
              {allCategories.map((cat) => (
                <label key={cat} className="flex items-center gap-2 text-sm text-black">
                  <input
                    type="checkbox"
                    checked={checkedCategories.includes(cat)}
                    onChange={() => handleCategoryChange(cat)}
                    className="accent-rose-500"
                  />
                  {cat}
                </label>
              ))}
            </div>

            <h3 className="text-sm font-bold mb-2 text-black">Filter by Price</h3>
            <Slider
              range
              min={0}
              max={5000}
              value={priceRange}
              onChange={(value: number | number[]) => {
                if (Array.isArray(value)) setPriceRange([value[0], value[1]]);
              }}
            />
            <div className="flex justify-between mt-2 text-sm text-black">
              <span>৳ {priceRange[0]}</span>
              <span>৳ {priceRange[1]}</span>
            </div>
          </div>
        )}
      </div>

      {/* 🔧 Desktop layout */}
    <div className="flex flex-col md:flex-row w-full max-w-[1700px] mx-auto px-4 gap-6 items-start">
        {/* Sidebar */}
        <aside className="hidden md:block w-[250px] pt-[26px]">
          <h3 className="text-lg font-bold mb-4 text-black mt-8">
  Category
</h3>
          <div className="max-h-[300px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent space-y-3">
            {allCategories.map((cat) => (
              <label
                key={cat}
                className="flex justify-between items-center gap-2 text-sm text-black cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="category"
                    checked={checkedCategories.includes(cat)}
                    onChange={() => handleCategoryChange(cat)}
                    
                className="w-4 h-4 border border-gray-400 rounded bg-white checked:bg-black accent-black"
                  />
                  {cat}
                </div>
                <span className="text-gray-400 text-base">+</span>
              </label>
            ))}
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-bold mb-2 text-black">Filter by Price</h3>
            <Slider
              range
              min={0}
              max={5000}
              value={priceRange}
              onChange={(value: number | number[]) => {
                if (Array.isArray(value)) setPriceRange([value[0], value[1]]);
              }}
            />
            <div className="flex justify-between mt-2 text-sm text-black">
              <span>৳ {priceRange[0]}</span>
              <span>৳ {priceRange[1]}</span>
            </div>
          </div>
        </aside>

        {/* Products */}
        <main className="flex-1">
       

<h1
  className="
    mt-8 mb-4
    flex items-center justify-center gap-2
    text-center text-2xl font-semibold
    bg-[#9D4E75]
    bg-clip-text text-transparent
  "
>
  <img
    src="/icons/rate.png"
    alt="Bag"
    className="w-6 h-6 object-contain"
  />
  <span>Find What You Loves</span>
</h1>

          <ProductCardGrid
            products={filteredProducts}
            isVertical
            showCartButton={true}
            onAddToCart={handleAddToCart}
          />
        </main>
      </div> 

      
<div className="mt-6">
      <Footer />
</div>
      
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
}
