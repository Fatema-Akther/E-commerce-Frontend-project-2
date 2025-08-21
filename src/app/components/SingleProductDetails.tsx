'use client';

import { useState, useEffect, JSX } from 'react';
import Image from 'next/image';
import {
  FaCheckCircle,
  FaShippingFast,
  FaMoneyBillAlt,
  FaUndoAlt,
  FaStar,
  FaCaretDown,
  FaAngleDown, // Importing the dropdown icon
} from 'react-icons/fa';

type Product = {
  id: number;
  image: string[];
  title: string;
  price: string;
  oldPrice: string;
  discount: string;
  category1: string;
  brand: string;
  features: string[];
  ShortDescription: string[];
  LongDescription: string[];
};

type CartProduct = Product & { quantity: number };

const SingleProductDetails = ({
  product,
  onAddToCart,
}: {
  product: Product;
  onAddToCart: () => void;
}) => {
  const [cart, setCart] = useState<CartProduct[]>([]);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(product.image[0]);
  const [showLongDescription, setShowLongDescription] = useState(false); // For toggling description

  useEffect(() => {
    const saved = localStorage.getItem('cart');
    if (saved) setCart(JSON.parse(saved));
  }, []);

  const handleAddToCart = () => {
    const exists = cart.find((item) => item.id === product.id);
    let updatedCart: CartProduct[];

    if (exists) {
      updatedCart = cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + quantity }
          : item
      );
    } else {
      updatedCart = [...cart, { ...product, quantity }];
    }

    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    onAddToCart();
  };

  const featureIconMap: { [key: string]: JSX.Element } = {
    '100% Original Product': <FaCheckCircle className="text-black mr-2" />,
    'Express Shipping': <FaShippingFast className="text-black mr-2" />,
    'Cash on Delivery Available': <FaMoneyBillAlt className="text-black mr-2" />,
    'Easy return and exchange within 3 days': <FaUndoAlt className="text-black mr-2" />,
  };

  return (
    <div className="flex flex-col gap-8">
      {/* ✅ Top Section: Image + Info, Same Height */}
      <div className="flex flex-col md:flex-row gap-8 md:h-[600px]">
        {/* ✅ LEFT SIDE: Thumbnails + Main Image */}
        <div className="w-full md:w-1/2 flex flex-row gap-4">
          {/* Thumbnails */}
          <div className="hidden md:flex flex-col gap-2 overflow-y-auto max-h-[600px] w-[100px]">
            {product.image.map((img, idx) => (
              <Image
                key={idx}
                src={img}
                alt={`Thumbnail ${idx}`}
                width={100}
                height={200}
                onClick={() => setSelectedImage(img)}
                className={`cursor-pointer rounded-md border-2 object-cover ${
                  selectedImage === img ? 'border-black' : 'border-transparent'
                }`}
              />
            ))}
          </div>

          {/* Main Image */}
          <div className="relative w-[600px] h-[600px] rounded-lg overflow-hidden">
            <Image
              src={selectedImage}
              alt={product.title}
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* ✅ RIGHT SIDE: Product Info */}
        <div className="w-full md:w-1/2 h-full overflow-y-auto pr-2 hide-scrollbar">
          <label className="text-3xl font-bold text-black mb-4">name:</label>
          <h1 className="text-xl font-base text-black mb-4">{product.ShortDescription}</h1>
          <p className="text-black text-2xl font-base mb-1">{product.price}</p>
          <p className="line-through text-gray-500 mb-3">{product.oldPrice}</p>

          <div className="flex items-center gap-1 text-black mb-2">
            {[...Array(4)].map((_, i) => (
              <FaStar key={i} className="w-5 h-5" />
            ))}
          </div>
          <p className="mb-2 text-sm text-gray-600">Category: {product.category1}</p>

          {/* Quantity Controls */}
          <div className="flex items-center mb-4">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="border px-3 py-1 text-black"
            >
              -
            </button>
            <span className="border-t border-b px-4 py-1 text-black">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="border px-3 py-1 text-black"
            >
              +
            </button>
          </div>

          {/* Add to Cart */}
          <button
            onClick={handleAddToCart}
            className="w-full bg-black text-white py-2 rounded mb-4"
          >
            অর্ডার করুন
          </button>

          {/* Payment Options */}
          <div className="border rounded-md p-4 w-full max-w-md bg-white">
            <h3 className="font-semibold text-black mb-2">Flexible payment options available</h3>
            <div className="flex gap-2 mb-2">
              <Image src="/images/pay1.png" alt="Pay" width={40} height={24} />
              <Image src="/images/pay2.png" alt="Klarna" width={40} height={24} />
              <Image src="/images/pay3.png" alt="Clearpay" width={40} height={24} />
              <Image src="/images/pay5.png" alt="PayPal" width={40} height={24} />
            </div>
            <p className="text-sm text-gray-500">18+, T&amp;C apply. Credit subject to status</p>
          </div>

          {/* Features */}
          <div className="space-y-2 mb-4">
            {product.features.map((feature) => (
              <div key={feature} className="flex items-center text-gray-700 text-sm">
                {featureIconMap[feature]}
                {feature}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ✅ Long Description Full Width */}
      <div className="w-full border-t pt-6">
        <div className="flex justify-between items-center">
          <summary className="font-semibold cursor-pointer text-black text-lg">
       Description
          </summary>


// Inside your component:
<FaAngleDown
  className={`w-16 cursor-pointer text-black ${showLongDescription ? 'rotate-180' : ''}outline-none focus:outline-none`}
  onClick={() => setShowLongDescription(!showLongDescription)}
/>

        </div>

  {showLongDescription && (
  <ul className="mt-2 text-sm text-gray-700 space-y-1" style={{ listStyleType: 'none !important', paddingLeft: '0 !important', margin: '0 !important' }}>
    {product.LongDescription?.map((item, index) => (
      <li key={index} style={{ listStyleType: 'none !important', margin: '0 !important' }}>{item}</li>
    ))}
  </ul>
)}



        {product.ShortDescription?.[0] && (
          <p className="text-sm text-gray-500 mt-2 ml-1 italic">
            {product.ShortDescription[0].slice(0, 80)}...
          </p>
        )}
      </div>
    </div>
  );
};

export default SingleProductDetails;
