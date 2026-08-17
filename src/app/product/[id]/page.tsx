'use client';

import { useState } from 'react';
import { notFound } from 'next/navigation';


import Header from '@/app/components/Header';

import Footer from '@/app/components/Footer';
import RelatedProducts from '@/app/components/RelatedProducts';

import SingleProductDetails from '@/app/components/SingleProductDetails';
import CartDrawer from '@/app/components/CartDrawer';
import React from 'react';
import { allProducts } from '@/app/data/products';

export default function ProductPage(props: { params: Promise<{ id: string }> }) {
  const params = React.use(props.params); // 👈 unwrap the promise

  const id = parseInt(params.id);
  const product = allProducts.find((p) => p.id === id);

  const [drawerOpen, setDrawerOpen] = useState(false); // ✅ moved above conditional return

  if (!product) return notFound();

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <main className="w-full">
  <SingleProductDetails
    product={product}
    onAddToCart={() => setDrawerOpen(true)}
  />
</main>

    <RelatedProducts
  allProducts={allProducts}
  currentId={product.id}
  currentCategory={product.category}
/>

      <Footer />

      <CartDrawer
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      />
    </div>
  );
}
