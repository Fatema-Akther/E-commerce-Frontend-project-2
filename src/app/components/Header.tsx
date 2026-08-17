'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  FaSearch,
  FaUser,
  FaHeart,
  FaShoppingCart,
  FaGlobe,
  FaChevronRight,
} from 'react-icons/fa';
import { BsChevronDown } from 'react-icons/bs';
import { slugify } from '@/app/utils/slugify';
import { categories } from '@/app/data/categoryList';
import { usePathname, useRouter } from 'next/navigation';

import CartDrawer from './CartDrawer';

type CartProduct = {
  id: number;
  title: string;
  image: string[];
  price: string;
  oldPrice: string;
  discount: string;
  quantity: number;
};

type Props = {
  onSearchChange?: (value: string) => void;
};

export default function Header({ onSearchChange }: Props) {
  const [mobileCategoryOpen, setMobileCategoryOpen] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [dropdownFrozen, setDropdownFrozen] = useState(false);
  // const [hoveredCat, setHoveredCat] = useState<string | null>(null);
  const pathname = usePathname();
  const router = useRouter();

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const isCategoryPage = pathname.startsWith('/category/');
  const formatCategoryUrl = (name: string) => `/category/${slugify(name)}`;

  useEffect(() => {
    const handleDropdownVisibility = () => {
      if (isCategoryPage) {
        const isTrulyLargeScreen = window.innerWidth >= 1280;
        setDropdownVisible(isTrulyLargeScreen);
        setDropdownFrozen(isTrulyLargeScreen);
      } else {
        setDropdownVisible(false);
        setDropdownFrozen(false);
      }
    };

    setTimeout(handleDropdownVisibility, 0);
    window.addEventListener('resize', handleDropdownVisibility);
    return () => window.removeEventListener('resize', handleDropdownVisibility);
  }, [isCategoryPage]);

  useEffect(() => {
    const updateCartCount = () => {
      const cart = JSON.parse(localStorage.getItem('cart') || '[]') as CartProduct[];
      const total = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
      setCartCount(total);
    };

    updateCartCount();
    window.addEventListener('storage', updateCartCount);
    return () => window.removeEventListener('storage', updateCartCount);
  }, []);

  // ✅ Hover show (if not frozen)
  const showDropdown = () => {
    if (!dropdownFrozen && !dropdownVisible) {
      setDropdownVisible(true);
    }
  };

  // ✅ Hover leave (if not frozen)
  const hideDropdown = () => {
    if (!isCategoryPage && !dropdownFrozen && dropdownVisible) {
      setDropdownVisible(false);
    }
  };

  // ✅ Click toggle with freeze/unfreeze
  const toggleDropdown = () => {
    if (!isCategoryPage) {
      setDropdownVisible((prevVisible) => {
        const nextState = !prevVisible;
        setDropdownFrozen(nextState); // freeze when opened, unfreeze when closed
        return nextState;
      });
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    onSearchChange?.(value);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = searchQuery.trim();
    if (trimmed.length > 0) {
      router.push(`/search?query=${encodeURIComponent(trimmed)}`);
    }
  };

  return (
    <header className="bg-white border-b border-gray-200 text-sm">
    <div className="px-4 py-2">
  <div className="grid grid-cols-[auto_1fr_auto] items-center gap-3 md:flex md:justify-between">

    {/* Logo */}
    <Link
      href="/"
      className="text-xl md:text-[28px] font-extrabold tracking-wide text-[#9D4E75]"
    >
      Velora
    </Link>

    {/* Desktop Search */}
    <form
      onSubmit={handleSearchSubmit}
      className="hidden md:block w-full md:max-w-[500px]"
    >
      <div className="flex h-[36px] w-full border border-gray-400 text-black">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="flex-1 bg-white px-3 text-sm outline-none"
        />

        <button
          type="submit"
          className="bg-black px-3 text-white"
        >
          <FaSearch size={14} />
        </button>
      </div>
    </form>

    {/* Icons */}
   <div className="flex items-center justify-end gap-3 text-gray-700 md:mr-6 lg:mr-10 xl:mr-14">
     <FaUser className="flex-shrink-0 text-[18px]" />

      <button
        type="button"
        onClick={() => setIsCartOpen(true)}
        className="relative flex h-7 w-7 items-center justify-center overflow-visible"
      >
        <FaShoppingCart className="text-xl" />

        {cartCount > 0 && (
          <span
            className="
              absolute
              right-[-2px]
              top-[-1px]
              flex h-[14px] min-w-[14px]
              items-center justify-center
              rounded-full
              bg-[#9D4E75]
              px-[3px]
              text-[9px]
              font-bold
              leading-none
              text-white
            "
          >
            {cartCount}
          </span>
        )}
      </button>
    </div>
  </div>

  {/* Mobile Search */}
  <form
    onSubmit={handleSearchSubmit}
    className="mt-3 w-full md:hidden"
  >
    <div className="flex h-[38px] w-full border border-gray-400 text-black">
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleSearchChange}
        className="min-w-0 flex-1 bg-white px-3 text-sm outline-none"
      />


      <button
        type="submit"
        className="flex w-[46px] items-center justify-center bg-black text-white"
      >
        <FaSearch size={14} />
      </button>
    </div>
  </form>
</div>

      {/* Top navbar */}
      <div className="hidden md:flex w-full">
       <nav className="flex items-center justify-center gap-5 px-6 py-1 text-[13px] font-medium text-black w-full">
          {/* Dropdown menu */}
          <div
            className="relative"
            onMouseEnter={showDropdown}
            onMouseLeave={hideDropdown}
          >
           <div className="flex items-center gap-1 cursor-pointer" onClick={toggleDropdown}>
  Categories {dropdownVisible ? <BsChevronDown className="rotate-180 transition-transform" size={12} /> : <BsChevronDown size={12} />}
</div>


            {dropdownVisible && (
              <div className="absolute top-6 left-0 bg-white shadow-sm rounded w-64 max-h-[400px] overflow-y-auto z-50 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                <ul className="divide-y divide-gray-100">
                 {categories.map((cat) => (
  <li
    key={cat.label}
    className="flex items-center justify-between px-4 py-2 text-[14px] text-black hover:bg-gray-100 cursor-pointer"
  >
    <Link
      href={`/group/${slugify(cat.label)}`}
      className="flex-1 hover:text-blue-600"
    >
      {cat.label}
    </Link>

    <FaChevronRight className="text-gray-400 w-3 h-3 ml-2" />
  </li>
))}
                </ul>
              </div>
            )}
          </div>
         <Link
  href="/all-products"
  className="text-black cursor-pointer hover:text-[#e64b23] transition"
>
  All
</Link>



          {/* Top Navbar Group Links with Hover Preview */}
        {categories.slice(0, 5).map((cat) => (
  <Link
    key={cat.label}
    href={`/group/${slugify(cat.label)}`}
    className="cursor-pointer whitespace-nowrap hover:text-[#e64b23]"
  >
    {cat.label}
  </Link>
))}


 <Link
  href="/Offer"
  className="text-black cursor-pointer hover:text-[#e64b23] transition"
>
  Offer
</Link>
        </nav>
      </div>

      {/* Mobile Top Category Links */}
      <div className="md:hidden flex items-center gap-4 px-3 py-2 overflow-x-auto whitespace-nowrap scrollbar-hide text-[13px] font-medium text-black">
        <div
          onClick={() => setMobileCategoryOpen((prev) => !prev)}
          className="flex items-center gap-1 cursor-pointer flex-shrink-0"
        >
          Categories <BsChevronDown size={10} />
        </div>

       {categories.slice(0, 5).map((item) => (
  <Link
    key={item.label}
    href={`/group/${slugify(item.label)}`}
    className="cursor-pointer flex-shrink-0"
  >
    {item.label}
  </Link>
))}
      </div>

      {mobileCategoryOpen && (
        <div className="md:hidden px-4 pb-2">
          <ul className="grid grid-cols-2 gap-2 text-sm mt-1">
           {categories.map((cat) => (
  <li key={cat.label}>
    <Link
      href={formatCategoryUrl(cat.label)}
      className="hover:text-blue-600 block"
    >
      {cat.label}
    </Link>
  </li>
))}
          </ul>
        </div>
      )}

      {/* Cart Drawer */}
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </header>
  );
}

