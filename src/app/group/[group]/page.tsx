'use client';

import 'rc-slider/assets/index.css';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Slider from 'rc-slider';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

import Header from '@/app/components/Header';
import CartDrawer from '@/app/components/CartDrawer';
import ProductCardGrid from '@/app/components/ProductCardgrid';
import Footer from '@/app/components/Footer';

import { allProducts, Product } from '@/app/data/products';
import { slugify } from '@/app/utils/slugify';

export default function GroupPage() {
  const { group } = useParams();

  const groupSlug = decodeURIComponent(group as string);

  const matchedProducts = allProducts.filter(
    (product) => slugify(product.category) === groupSlug
  );



  const productPrices = matchedProducts
  .map((product) =>
    parseFloat(product.price.replace(/[^\d.]/g, ''))
  )
  .filter((price) => !Number.isNaN(price));

const minPrice =
  productPrices.length > 0
    ? Math.floor(Math.min(...productPrices))
    : 0;

const maxPrice =
  productPrices.length > 0
    ? Math.ceil(Math.max(...productPrices))
    : 0;
  const allCategories = Array.from(
    new Set(
      matchedProducts
        .map((product) => product.subcategory)
        .filter((subcategory): subcategory is string => Boolean(subcategory))
    )
  );




  const [checkedCategories, setCheckedCategories] = useState<string[]>([]);
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [priceRange, setPriceRange] = useState([minPrice, maxPrice])
  const [searchQuery, setSearchQuery] = useState('');

  const handleAddToCart = (product: Product) => {
    const existingCart = JSON.parse(
      localStorage.getItem('cart') || '[]'
    );

    const updatedCart = [
      ...existingCart,
      {
        ...product,
        quantity: 1,
      },
    ];

    localStorage.setItem('cart', JSON.stringify(updatedCart));

    setDrawerOpen(true);
  };

  const handleCategoryChange = (category: string) => {
    setCheckedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((item) => item !== category)
        : [...prev, category]
    );
  };

  const filteredProducts = matchedProducts
    .filter((product) => {
      if (checkedCategories.length === 0) {
        return true;
      }

      return checkedCategories
        .map((category) => category.toLowerCase())
        .includes(product.subcategory?.toLowerCase() || '');
    })

    .filter((product) => {
      const price = parseFloat(
        product.price.replace(/[^\d.]/g, '')
      );

      return (
        price >= priceRange[0] &&
        price <= priceRange[1]
      );
    })

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
    });
useEffect(() => {
  setPriceRange([minPrice, maxPrice]);
}, [minPrice, maxPrice]);
  return (
    <div className="flex min-h-screen flex-col justify-between bg-white">
      <Header onSearchChange={setSearchQuery} />

      {/* Mobile filter */}
      <div className="px-4 pt-3 lg:hidden">
        <button
          type="button"
          className="flex items-center gap-1 font-semibold uppercase tracking-wide text-black"
          onClick={() =>
            setShowMobileFilters((prev) => !prev)
          }
        >
          <span>FILTERS</span>

          {showMobileFilters ? (
            <FiChevronUp size={16} />
          ) : (
            <FiChevronDown size={16} />
          )}
        </button>

        {showMobileFilters && (
          <div className="mt-3 rounded border bg-pink-50 p-4">
            <h3 className="mb-3 text-sm font-medium text-black">
              Filter by Sub-Category
            </h3>

            <div className="max-h-[180px] space-y-3 overflow-y-auto pr-1">
              {allCategories.map((category) => (
                <label
                  key={category}
                  className="flex cursor-pointer items-center gap-2 text-sm text-black"
                >
                  <input
                    type="checkbox"
                    checked={checkedCategories.includes(
                      category
                    )}
                    onChange={() =>
                      handleCategoryChange(category)
                    }
                    className="h-4 w-4 accent-black"
                  />

                  <span>{category}</span>
                </label>
              ))}
            </div>

            <div className="mt-6">
              <h3 className="mb-3 text-sm font-bold text-black">
                Filter by Price
              </h3>

              <Slider
                range
                 min={minPrice}
                 max={maxPrice}
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
          </div>
        )}
      </div>

      <div className="flex w-full flex-1 flex-col gap-6 px-4 py-4 md:flex-row">
        {/* Desktop Sidebar */}
        <aside className="hidden h-fit w-[250px] shrink-0 md:block">
          <h3 className="mb-4 text-lg font-bold text-black">
            Filter
          </h3>

          <div className="max-h-[250px] space-y-3 overflow-y-auto pr-2">
            {allCategories.map((category) => (
              <label
                key={category}
                className="group flex cursor-pointer items-center justify-between gap-2 text-sm text-black"
              >
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={checkedCategories.includes(
                      category
                    )}
                    onChange={() =>
                      handleCategoryChange(category)
                    }
                    className="h-4 w-4 accent-black"
                  />

                  <span>{category}</span>
                </div>

                <span className="text-base text-gray-400 group-hover:text-black">
                  +
                </span>
              </label>
            ))}
          </div>

          <div className="mt-6">
            {/* <h3 className="mb-3 text-lg font-bold text-black">
              Filter by Price
            </h3> */}

            <Slider
              range
                min={minPrice}
                max={maxPrice}
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
        </aside>

        {/* Product Grid */}
        <main className="min-w-0 flex-1">
          <ProductCardGrid
            products={filteredProducts}
            onAddToCart={handleAddToCart}
            showCartButton
            isVertical
          />
        </main>
      </div>

      <Footer />

      <CartDrawer
        isOpen={isDrawerOpen}
        onClose={() => setDrawerOpen(false)}
      />
    </div>
  );
}