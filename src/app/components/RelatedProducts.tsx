'use client';

import { Product } from '@/app/data/products';
import ProductCardGrid from '@/app/components/ProductCardgrid';

type Props = {
  allProducts: Product[];
  currentId: number;
  currentCategory: string;
  onAddToCart?: (product: Product) => void;
};

const RelatedProducts = ({
  allProducts,
  currentId,
  currentCategory,
  onAddToCart,
}: Props) => {
  const relatedProducts = allProducts.filter(
    (product) =>
      product.category?.toLowerCase() === currentCategory?.toLowerCase() &&
      product.id !== currentId
  );

  if (!relatedProducts.length) return null;

  return (
    <section className="w-full bg-white py-10">
      <div className="mx-auto w-full max-w-[1450px] px-4 sm:px-6 lg:px-10">

        <h2 className="mb-6 text-center text-2xl font-bold text-black">
          You may also like
        </h2>

        <ProductCardGrid
          products={relatedProducts}
          onAddToCart={onAddToCart}
          showCartButton
        />

      </div>
    </section>
  );
};

export default RelatedProducts;