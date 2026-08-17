'use client';

import { useParams } from 'next/navigation';
import { allProducts, Product } from '@/app/data/products';

import Header from '@/app/components/Header';
import { slugify } from '@/app/utils/slugify';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Footer from '@/app/components/Footer';

export default function CategoryPage() {
  const { category } = useParams();

  const categorySlug = decodeURIComponent(category as string);

  const [searchQuery, setSearchQuery] = useState('');

  // Filter by main category
  const categoryMatched = allProducts.filter(
    (product) => slugify(product.category) === categorySlug
  );

  // Search only inside matched category
  const filtered = categoryMatched.filter((product) => {
    const q = searchQuery.trim().toLowerCase();

    if (!q) return true;

    return (
      product.title.toLowerCase().includes(q) ||
      product.category.toLowerCase().includes(q) ||
      product.subcategory?.toLowerCase().includes(q) ||
      product.brand.toLowerCase().includes(q)
    );
  });

  // Invalid category
  if (categoryMatched.length === 0) {
    return (
      <div className="flex min-h-screen flex-col bg-white text-center text-red-600">
        <Header onSearchChange={setSearchQuery} />

        <div className="flex flex-grow items-center justify-center">
          <p>Category not found: {categorySlug}</p>
        </div>

        <Footer />
      </div>
    );
  }

  // Shop by Category
  const categoryItems = filtered.filter(
    (product) => product.section === 'Shop by Category'
  );

  // Shop by Trends
  const trendItems = filtered.filter(
    (product) => product.section === 'Shop by Trends'
  );

  // Products without section
  const otherItems = filtered.filter(
    (product) => !product.section
  );

  const renderCircleGrid = (
    products: Product[],
    gapClasses = 'gap-x-6 gap-y-6',
    columnClasses = 'grid-cols-4 sm:grid-cols-5 md:grid-cols-6 xl:grid-cols-7'
  ) => (
    <div
      className={`grid ${columnClasses} ${gapClasses} place-items-center`}
    >
      {products.map((product) => (
        <Link
          key={product.id}
          href={`/product/${product.id}`}
          className="flex flex-col items-center text-center text-xs text-black"
        >
          <div className="h-[60px] w-[60px] overflow-hidden rounded-full bg-gray-100 shadow-sm sm:h-[80px] sm:w-[80px] lg:h-[100px] lg:w-[100px]">
            <Image
              src={product.image[0]}
              alt={product.title}
              width={100}
              height={100}
              className="h-full w-full object-cover"
            />
          </div>

          <span className="mt-1 line-clamp-2 leading-tight">
            {product.title}
          </span>
        </Link>
      ))}
    </div>
  );

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header onSearchChange={setSearchQuery} />

      <div className="mx-auto w-full max-w-[1500px] flex-grow px-4 py-8">
        <div className="relative grid grid-cols-1 gap-10 md:grid-cols-2">

          {/* Divider */}
          <div className="absolute bottom-0 left-1/2 top-0 hidden w-px bg-gray-300 md:block" />

          {/* Left side */}
          <div className="pl-2 md:pl-10 lg:pl-12 xl:pl-20">
            {categoryItems.length > 0 && (
              <div>
                <h3 className="mb-4 text-sm font-bold uppercase text-[#8c3606]">
                  Shop by Category
                </h3>

                {renderCircleGrid(
                  categoryItems,
                  'gap-x-12 gap-y-10',
                  'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5'
                )}
              </div>
            )}
          </div>

          {/* Right side */}
          <div className="space-y-14 px-2 md:px-10">
            {trendItems.length > 0 && (
              <div>
                <h3 className="mb-4 text-sm font-bold uppercase text-[#123659]">
                  Shop by Trends
                </h3>

                {renderCircleGrid(
                  trendItems,
                  'gap-x-12 gap-y-10',
                  'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5'
                )}
              </div>
            )}

            {otherItems.length > 0 && (
              <div>
                <h3 className="mb-4 text-sm font-bold uppercase text-[#123659]">
                  More Products
                </h3>

                {renderCircleGrid(
                  otherItems,
                  'gap-x-12 gap-y-10',
                  'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5'
                )}
              </div>
            )}
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}