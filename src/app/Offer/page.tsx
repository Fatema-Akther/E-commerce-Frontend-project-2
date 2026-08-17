'use client';

import { useState } from 'react';
import { allProducts, type Product } from '@/app/data/products';

import ProductCardGrid from '../components/ProductCardgrid';
import Header from '../components/Header';
import FlashDeals2 from '../components/FlashDeals2';
import CartDrawer from '../components/CartDrawer';
import Footer from '../components/Footer';

import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

import { toast } from 'sonner';

type CartProduct = Product & {
  quantity: number;
};

export default function AllProductsPage() {
  const allCategories = Array.from(
    new Set(
      allProducts
        .map((product) => product.subcategory)
        .filter(
          (subcategory): subcategory is string =>
            Boolean(subcategory)
        )
    )
  );

  const [checkedCategories, setCheckedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000]);
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleAddToCart = (product: Product) => {
    const cart: CartProduct[] = JSON.parse(
      localStorage.getItem('cart') || '[]'
    );

    const existing = cart.find(
      (item) => item.id === product.id
    );

    let updatedCart: CartProduct[];

    if (existing) {
      updatedCart = cart.map((item) =>
        item.id === product.id
          ? {
              ...item,
              quantity: (item.quantity || 1) + 1,
            }
          : item
      );
    } else {
      updatedCart = [
        ...cart,
        {
          ...product,
          quantity: 1,
        },
      ];
    }

    localStorage.setItem(
      'cart',
      JSON.stringify(updatedCart)
    );

    setIsCartOpen(true);
    toast.success('Added to cart!');
  };

  const handleCategoryChange = (category: string) => {
    setCheckedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((item) => item !== category)
        : [...prev, category]
    );
  };

  const filteredProducts = allProducts

    // Only discounted / offer products
    .filter((product) => {
      return (
        Boolean(product.oldPrice?.trim()) &&
        Boolean(product.discount?.trim())
      );
    })

    // Search
    .filter((product) => {
      const q = searchQuery.trim().toLowerCase();

      if (!q) {
        return true;
      }

      return (
        product.title.toLowerCase().includes(q) ||
        product.category.toLowerCase().includes(q) ||
        product.subcategory?.toLowerCase().includes(q) ||
        product.brand.toLowerCase().includes(q)
      );
    })

    // Subcategory filter
    .filter((product) => {
      if (checkedCategories.length === 0) {
        return true;
      }

      return checkedCategories
        .map((category) => category.toLowerCase())
        .includes(
          product.subcategory?.toLowerCase() || ''
        );
    })

    // Price filter
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
    <div className="min-h-screen bg-white">
      <Header onSearchChange={setSearchQuery} />

      <div className="mx-auto w-full max-w-[1700px] px-2 sm:px-4">
        <FlashDeals2 />
      </div>

      {/* Mobile Filters */}
      <div className="hidden px-4 mt-4">
        <button
          type="button"
          className="flex items-center gap-1 font-semibold uppercase tracking-wide text-black"
          onClick={() =>
            setShowMobileFilters((prev) => !prev)
          }
        >
          <span>FILTERS</span>

          <span className="text-sm">
            {showMobileFilters ? '▲' : '▼'}
          </span>
        </button>

        {showMobileFilters && (
          <div className="mt-2 rounded border bg-pink-50 p-4">
            <h3 className="mb-2 text-sm font-bold text-black">
              Filter by Sub-Category
            </h3>

            <div className="mb-4 space-y-2">
              {allCategories.map((category) => (
                <label
                  key={category}
                  className="flex items-center gap-2 text-sm text-black"
                >
                  <input
                    type="checkbox"
                    checked={checkedCategories.includes(
                      category
                    )}
                    onChange={() =>
                      handleCategoryChange(category)
                    }
                    className="accent-rose-500"
                  />

                  {category}
                </label>
              ))}
            </div>

            <h3 className="mb-2 text-sm font-bold text-black">
              Filter by Price
            </h3>

            <Slider
              range
              min={0}
              max={10000}
              value={priceRange}
              onChange={(value) => {
                if (Array.isArray(value)) {
                  setPriceRange([
                    value[0],
                    value[1],
                  ]);
                }
              }}
            />

            <div className="mt-2 flex justify-between text-sm text-black">
              <span>৳ {priceRange[0]}</span>
              <span>৳ {priceRange[1]}</span>
            </div>
          </div>
        )}
      </div>

      {/* Products */}
      <div className="mx-auto mt-[-120px] flex w-full max-w-[1700px] items-start gap-6 px-4">
        <main className="min-w-0 flex-1">

          <h1 className="mb-4 mt-32 flex items-center justify-center gap-[6px] text-[16px] font-semibold lg:mt-40">
            <span className="text-[16px]">
              🌟
            </span>

            <span className="text-[#b32f6b]">
              Find What You Loves
            </span>
          </h1>

          <ProductCardGrid
            products={filteredProducts}
            isVertical
            showCartButton
            onAddToCart={handleAddToCart}
          />

        </main>
      </div>

      <div className="mt-6">
        <Footer />
      </div>

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      />
    </div>
  );
}