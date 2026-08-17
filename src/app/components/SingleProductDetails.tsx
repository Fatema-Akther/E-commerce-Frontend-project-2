'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import {
  FaChevronLeft,
  FaChevronRight,
  FaHeart,
  FaRegHeart,
  FaShieldAlt,
  FaShoppingBag,
  FaStar,
  FaTruck,
  FaUndoAlt,
} from 'react-icons/fa';
import { Product } from '../data/products';



type CartProduct = Product & {
  quantity: number;
};

type Props = {
  product: Product;
  onAddToCart: () => void;
};

export default function SingleProductDetails({
  product,
  onAddToCart,
}: Props) {
  const [cart, setCart] = useState<CartProduct[]>([]);
  const [quantity] = useState(1);

  const [selectedImage, setSelectedImage] = useState(
    product.image[0]
  );

 const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);

const selectedVariant =
  product.variants?.[selectedVariantIndex] ?? null;

const availableSizes =
  selectedVariant?.sizes ?? [];

const availableColors =
  product.variants
    ?.map((variant) => variant.color)
    .filter((color): color is string => Boolean(color)) ?? [];

const [selectedSize, setSelectedSize] = useState(
  product.variants?.[0]?.sizes?.[0] ?? ''
);
const [activeTab, setActiveTab] = useState('description');
  const currentImageIndex =
    product.image.indexOf(selectedImage);

  const handleVariantChange = (index: number) => {
    setSelectedVariantIndex(index);

    const firstSize =
      product.variants?.[index]?.sizes?.[0] ?? '';

    setSelectedSize(firstSize);
  };

  const showPreviousImage = () => {
    const previousIndex =
      currentImageIndex <= 0
        ? product.image.length - 1
        : currentImageIndex - 1;

    setSelectedImage(product.image[previousIndex]);
  };

  const showNextImage = () => {
    const nextIndex =
      currentImageIndex >= product.image.length - 1
        ? 0
        : currentImageIndex + 1;

    setSelectedImage(product.image[nextIndex]);
  };

  useEffect(() => {
    const saved = localStorage.getItem('cart');

    if (saved) {
      setCart(JSON.parse(saved));
    }
  }, []);

  const handleAddToCart = () => {
    const exists = cart.find(
      (item) => item.id === product.id
    );

    let updatedCart: CartProduct[];

    if (exists) {
      updatedCart = cart.map((item) =>
        item.id === product.id
          ? {
              ...item,
              quantity: item.quantity + quantity,
            }
          : item
      );
    } else {
      updatedCart = [
        ...cart,
        {
          ...product,
          quantity,
        },
      ];
    }

    setCart(updatedCart);

    localStorage.setItem(
      'cart',
      JSON.stringify(updatedCart)
    );

    onAddToCart();
  };

 

return (
  <section className="w-full bg-white">
    <div className="mx-auto w-full max-w-[1450px] px-4 sm:px-6 lg:px-10 py-8 lg:py-10">

      {/* ================= PRODUCT TOP ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 xl:gap-16 items-start">

        {/* ================= LEFT GALLERY ================= */}
        <div className="w-full">

          {/* Main Image */}
         <div className="relative w-full h-[380px] sm:h-[450px] lg:h-[500px] overflow-hidden rounded-[24px] bg-[#f4f1ec]">

            <Image
              src={selectedImage}
              alt={product.title}
              fill
              priority
              className="object-cover"
            />

            {/* Wishlist */}
           <button
  type="button"
  className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-md transition hover:scale-105"
>
  <FaRegHeart className="text-[14px] text-gray-500" />
</button>

            {/* Previous */}
            {product.image.length > 1 && (
              <button
                type="button"
                onClick={showPreviousImage}
                className="absolute left-5 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-md transition hover:scale-105"
              >
                <FaChevronLeft className="text-gray-800" />
              </button>
            )}

            {/* Next */}
            {product.image.length > 1 && (
              <button
                type="button"
                onClick={showNextImage}
                className="absolute right-5 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-md transition hover:scale-105"
              >
                <FaChevronRight className="text-gray-800" />
              </button>
            )}
          </div>

          {/* Thumbnails */}
          {product.image.length > 1 && (
            <div className="mt-5 flex gap-4 overflow-x-auto pb-1">
              {product.image.slice(0, 4).map((img, index) => (
                <button
                  key={`${img}-${index}`}
                  type="button"
                  onClick={() => setSelectedImage(img)}
                 className={`relative flex-shrink-0 h-[90px] w-[90px] sm:h-[100px] sm:w-[100px] overflow-hidden rounded-xl border-2 transition ${
  selectedImage === img
    ? 'border-black'
    : 'border-transparent hover:border-gray-300'
}`}
                >
                  <Image
                    src={img}
                    alt={`${product.title} ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* ================= RIGHT PRODUCT INFO ================= */}
        <div className="w-full pt-1 lg:pt-2">

          {/* Badge */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-[#9D4E75] px-4 py-2 text-sm font-semibold text-white">
              <FaHeart className="text-xs" />
              your Favourite
            </span>
          </div>

          {/* Title */}
         <h1 className="mt-4 text-[20px] sm:text-[32px] lg:text-[36px] xl:text-[36px] leading-[1.15] font-bold text-[#111827]">
  {product.title}
</h1>

          {/* Rating */}
         <div className="mt-4 flex items-center gap-3">
            <div className="flex items-center">
              {[0, 1, 2, 3].map((star) => (
                <FaStar
                  key={star}
                  className="h-[18px] w-[18px] text-[#9D4E75]"
                />
              ))}

              <FaStar className="h-[19px] w-[19px] text-gray-300" />
            </div>

            <span className="text-sm text-gray-400">
              (214)
            </span>
          </div>

          {/* Price */}
          <div className="mt-5 flex flex-wrap items-end gap-4">
            <span className="text-[32px] sm:text-[28px] font-bold text-[#9D4E75]">
              {product.price}
            </span>

            {product.oldPrice && (
              <span className="mb-1 text-base text-gray-400 line-through">
                {product.oldPrice}
              </span>
            )}
          </div>

          {/* Divider */}
          <div className="my-6 border-t border-gray-200" />

          {/* Size Header */}
         {/* ================= DYNAMIC VARIANTS ================= */}

{/* COLOR - only show if product has color */}
{/* ================= DYNAMIC VARIANTS ================= */}

{/* COLOR SWATCHES */}
{availableColors.length > 0 && (
  <div className="mt-2">
    <div className="mb-3 flex items-center gap-2">
      <h3 className="text-sm font-medium text-gray-700">
        Color:
      </h3>

      <span className="text-sm font-semibold text-gray-900">
        {selectedVariant?.color}
      </span>
    </div>

    <div className="flex flex-wrap gap-3">
      {product.variants.map((variant, index) => {
        if (!variant.color) return null;

        const colorMap: Record<string, string> = {
          Black: '#111827',
          White: '#ffffff',
          Red: '#ef4444',
          Blue: '#3b82f6',
          Navy: '#1e3a8a',
          Pink: '#ec4899',
          Yellow: '#eab308',
          Brown: '#6b4423',
          Gold: '#d4af37',
          Silver: '#c0c0c0',
          Green: '#15803d',
          Purple: '#7e22ce',
          Orange: '#f97316',
          Peach: '#f6b89e',
          Cream: '#fffdd0',
          Lavender: '#c4b5fd',
          Maroon: '#7f1d1d',
          Rose: '#fb7185',
          Natural: '#d6c2a1',
          Mustard: '#b8860b',
        };

        const swatchColor =
          colorMap[variant.color] ?? variant.color.toLowerCase();

        return (
          <button
            key={`${variant.color}-${index}`}
            type="button"
            onClick={() => handleVariantChange(index)}
            title={variant.color}
            aria-label={`Select ${variant.color}`}
            className={`flex h-8 w-14 items-center justify-center rounded-md border-2 bg-white transition ${
              selectedVariantIndex === index
                ? 'border-black'
                : 'border-gray-300 hover:border-gray-500'
            }`}
          >
            <span
              className="block h-6 w-12 rounded"
              style={{
                backgroundColor: swatchColor,
                border:
                  variant.color.toLowerCase() === 'white'
                    ? '1px solid #d1d5db'
                    : 'none',
              }}
            />
          </button>
        );
      })}
    </div>
  </div>
)}

{/* SIZE */}
{availableSizes.length > 0 && (
  <div className={availableColors.length > 0 ? 'mt-6' : 'mt-2'}>
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <h3 className="text-sm font-medium text-gray-700">
          Size:
        </h3>

        <span className="text-sm font-semibold text-gray-900">
          {selectedSize}
        </span>
      </div>

      {/* <button
        type="button"
        className="text-xs text-gray-600 underline underline-offset-2 hover:text-black"
      >
        View Size Chart
      </button> */}
    </div>

    <div className="mt-3 flex flex-wrap gap-3">
      {availableSizes.map((size) => (
        <button
          key={size}
          type="button"
          onClick={() => setSelectedSize(size)}
          className={`min-w-[48px] h-9 rounded-md border px-3 text-sm font-medium transition ${
            selectedSize === size
              ? 'border-black bg-gray-100 text-black shadow-sm'
              : 'border-gray-200 bg-white text-gray-700 hover:border-gray-400'
          }`}
        >
          {size}
        </button>
      ))}
    </div>
  </div>
)}

          {/* Add to Cart */}
          <button
  type="button"
  onClick={handleAddToCart}
  className="mt-6 flex w-full items-center justify-center gap-3 rounded-xl bg-[#9D4E75] px-6 py-2 text-base font-bold uppercase tracking-wide text-white transition duration-300 hover:bg-[#441a2f]"
>
  <FaShoppingBag />
  Add to Cart
</button>

          {/* Benefits */}
         <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 rounded-2xl border border-gray-200 bg-white shadow-sm">

            {/* Cash */}
          <div className="flex items-center gap-3 px-4 py-4">
              <FaTruck className="flex-shrink-0 text-2xl text-[#9D4E75]" />

              <span className="text-sm font-semibold leading-5 text-gray-700">
                Cash on delivery
                <br />
                available
              </span>
            </div>

            {/* Return */}
         <div className="flex items-center gap-3 border-t sm:border-t-0 sm:border-l border-gray-200 px-4 py-4">
              <FaUndoAlt className="flex-shrink-0 text-2xl text-[#9D4E75]" />

              <span className="text-sm leading-5 text-gray-700 font-semibold">
                Easy return and
                <br />
                exchange
              </span>
            </div>

            {/* Shipping */}
           <div className="flex items-center gap-3 border-t sm:border-t-0 sm:border-l border-gray-200 px-4 py-4">
              <FaShieldAlt className="flex-shrink-0 text-2xl text-[#9D4E75]" />

              <span className="text-sm leading-5 text-gray-700 font-semibold">
                Fast delivery
                <br />
                available
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ================= PRODUCT TABS ================= */}
      <div className="mt-10 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">

        {/* Tab Buttons */}
        <div className="flex overflow-x-auto border-b border-gray-200">

          <button
            type="button"
            onClick={() => setActiveTab('description')}
            className={`relative min-w-[170px] flex-1 px-5 py-5 text-sm font-semibold uppercase transition ${
              activeTab === 'description'
                ? 'text-black'
                : 'text-gray-500'
            }`}
          >
            Description

            {activeTab === 'description' && (
              <span className="absolute bottom-0 left-0 h-[2px] w-full bg-[#e64b23]" />
            )}
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('details')}
            className={`relative min-w-[150px] flex-1 px-5 py-5 text-sm font-semibold uppercase transition ${
              activeTab === 'details'
                ? 'text-black'
                : 'text-gray-500'
            }`}
          >
            Details

            {activeTab === 'details' && (
              <span className="absolute bottom-0 left-0 h-[2px] w-full bg-[#e64b23]" />
            )}
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('fabric')}
            className={`relative min-w-[170px] flex-1 px-5 py-5 text-sm font-semibold uppercase transition ${
              activeTab === 'fabric'
                ? 'text-black'
                : 'text-gray-500'
            }`}
          >
            Fabric & Care

            {activeTab === 'fabric' && (
              <span className="absolute bottom-0 left-0 h-[2px] w-full bg-[#e64b23]" />
            )}
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('size')}
            className={`relative min-w-[150px] flex-1 px-5 py-5 text-sm font-semibold uppercase transition ${
              activeTab === 'size'
                ? 'text-black'
                : 'text-gray-500'
            }`}
          >
            Size & Fit

            {activeTab === 'size' && (
              <span className="absolute bottom-0 left-0 h-[2px] w-full bg-[#e64b23]" />
            )}
          </button>
        </div>

        {/* Tab Content */}
        <div className="px-6 sm:px-8 py-6">

          {activeTab === 'description' && (
            <div className="text-sm sm:text-base leading-7 text-gray-600">
              {product.ShortDescription?.length > 0 ? (
                product.ShortDescription.map((text, index) => (
                  <p key={index} className="mb-2">
                    {text}
                  </p>
                ))
              ) : (
                <p>No description available.</p>
              )}
            </div>
          )}

          {activeTab === 'details' && (
            <div className="space-y-3 text-sm sm:text-base text-gray-600">
              <p>
                <span className="font-semibold text-gray-900">
                  Category:
                </span>{' '}
               {product.category}
              </p>

              <p>
                <span className="font-semibold text-gray-900">
                  Brand:
                </span>{' '}
                {product.brand || 'Velora'}
              </p>

              {product.discount && (
                <p>
                  <span className="font-semibold text-gray-900">
                    Discount:
                  </span>{' '}
                  {product.discount}
                </p>
              )}
            </div>
          )}

          {activeTab === 'fabric' && (
            <div className="text-sm sm:text-base leading-7 text-gray-600">
              <p>
                Gentle machine wash recommended. Wash with similar
                colors and avoid strong bleach.
              </p>
            </div>
          )}

          {activeTab === 'size' && (
            <div className="text-sm sm:text-base leading-7 text-gray-600">
              <p>
                Choose your usual size. For a relaxed fit, select
                one size larger.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  </section>
);
}