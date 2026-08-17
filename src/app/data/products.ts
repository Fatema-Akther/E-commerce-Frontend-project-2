export type ProductVariant = {
  color?: string;
  sizes?: string[];
};

export type Product = {
  id: number;

  category: string;
  subcategory?: string;

  image: string[];
  title: string;

  price: string;
  oldPrice?: string;
  discount?: string;

  brand: string;

  features: string[];
  ShortDescription: string[];
  LongDescription: string[];

  section?: string;

  variants: ProductVariant[];
};

export const allProducts: Product[] = [
  {
    id: 1,
    category: 'Kids',
    subcategory: 'Party Dress',
    brand: 'Velora Kids',
    section: 'Shop by Category',

    image: [
      '/images/p21.jpg',
      '/images/p22.jpg',
      '/images/p23.jpg',
    ],

    title: 'Floaty Lavender Floral Print Maxi Dress',

    price: 'Tk 2,149.02',
    oldPrice: 'Tk 3,152.57',
    discount: 'SAVE 32%',

    variants: [
      {
        color: 'Pink',
        sizes: ['3-4Y', '5-6Y', '7-8Y', '9-10Y'],
      },
      {
        color: 'Blue',
        sizes: ['3-4Y', '5-6Y', '7-8Y'],
      },
    ],

    features: [
      '100% Original Product',
      'Express Shipping',
      'Cash on Delivery Available',
      'Easy return and exchange within 4 days',
    ],

    ShortDescription: [
      'High quality kids party dress',
      'Soft and comfortable fabric',
    ],

    LongDescription: [
      'New & Fashionable Collection',
      'Premium finishing',
      'Comfortable for kids',
    ],
  },

  {
    id: 2,
    category: 'Women',
    subcategory: 'Top',
    brand: 'Aarong',
    section: 'Shop by Category',

    image: [
      '/images/p24.jpg',
      '/images/p25.jpg',
      '/images/p26.jpg',
    ],

    title: 'Casual Chic Rayon Mustard A-Line Top',

    price: 'Tk 1,002.11',
    oldPrice: 'Tk 1,432.20',
    discount: 'SAVE 30%',

    variants: [
      {
        color: 'Mustard',
        sizes: ['S', 'M', 'L', 'XL'],
      },
      {
        color: 'Black',
        sizes: ['S', 'M', 'L'],
      },
    ],

    features: [
      '100% Original Product',
      'Express Shipping',
      'Cash on Delivery Available',
    ],

    ShortDescription: [
      'Stylish rayon A-line top',
      'Comfortable casual wear',
    ],

    LongDescription: [
      'Premium rayon fabric',
      'Modern everyday design',
    ],
  },

   {
    id: 3,
    category: 'Watches',
    subcategory: 'Smart Watch',
    brand: 'Velora Watch',

    image: [
      '/images/new/11.jpg',
      '/images/new/10.jpg',
      '/images/new/12.jpg',
    ],

    title: 'Modern Smart Watch',

    price: 'Tk 3,250.00',
    oldPrice: 'Tk 4,100.00',
    discount: 'SAVE 21%',

    variants: [
      {
        color: 'Black',
      },
      {
        color: 'Silver',
      },
      {
        color: 'Gold',
      },
    ],

    features: [
      'Smart Notifications',
      'Fitness Tracking',
      'Rechargeable Battery',
    ],

    ShortDescription: [
      'Modern smartwatch for everyday use',
    ],

    LongDescription: [
      'Track activity and receive smart notifications',
    ],
  },

  {
    id: 4,
    category: 'Kids',
    subcategory: 'Party Dress',
    brand: 'Aarong Kids',

    image: [
      '/images/p70.jpg',
      '/images/p71.jpg',
      '/images/p72.jpg',
    ],

    title: 'Kids Mustard Party Dress',

    price: 'Tk 1,002.11',
    oldPrice: 'Tk 1,432.20',
    discount: 'SAVE 30%',

    variants: [
      {
        color: 'Yellow',
        sizes: ['3-4Y', '5-6Y', '7-8Y'],
      },
      {
        color: 'Blue',
        sizes: ['3-4Y', '5-6Y'],
      },
    ],

    features: [
      'Original Product',
      'Soft Fabric',
      'Easy Exchange',
    ],

    ShortDescription: [
      'Stylish kids party collection',
    ],

    LongDescription: [
      'Comfortable design for special occasions',
    ],
  },

  {
    id: 5,
    category: 'Shoes',
    subcategory: 'Shoes',
    brand: 'Velora',
    section: 'Shop by Category',

    image: [
      '/images/new/17.jpg',
      '/images/new/18.jpg',
      '/images/new/19.jpg',
    ],

    title: 'Shoes',

    price: 'Tk 4,729.57',
    oldPrice: 'Tk 5,999.00',
    discount: 'SAVE 21%',

    variants: [
      {
        color: 'Orange',
        sizes: ['S', 'M', 'L', 'XL'],
      },
      {
        color: 'Peach',
        sizes: ['M', 'L', 'XL'],
      },
    ],

    features: [
      'Premium Fabric',
      'Express Shipping',
      'Cash on Delivery',
    ],

    ShortDescription: [
      'Elegant traditional salwar set',
    ],

    LongDescription: [
      'Suitable for festive and casual occasions',
    ],
  },

  {
    id: 6,
    category: 'Women',
    subcategory: 'Saree',
    brand: 'Velora',
    section: 'Shop by Category',

    image: [
      '/images/product3.jpg',
      '/images/product1.jpg',
      '/images/product1.jpg',
    ],

    title: 'Leaf Motif Premium Saree',

    price: 'Tk 3,152.57',

    variants: [
      {
        color: 'Green',
      },
      {
        color: 'Red',
      },
      {
        color: 'Black',
      },
    ],

    features: [
      'Premium Quality',
      'Elegant Design',
      'Cash on Delivery',
    ],

    ShortDescription: [
      'Elegant leaf motif saree',
    ],

    LongDescription: [
      'Premium saree suitable for special occasions',
    ],
  },

  {
    id: 7,
    category: 'Women',
    subcategory: 'Party Saree',
    brand: 'Aarong',

    image: [
      '/images/product17.jpg',
      '/images/product1.jpg',
      '/images/product1.jpg',
    ],

    title: 'Graceful Party Saree',

    price: 'Tk 4,729.57',
    oldPrice: 'Tk 7,166.76',
    discount: 'SAVE 34%',

    variants: [
      {
        color: 'Maroon',
      },
      {
        color: 'Navy',
      },
    ],

    features: [
      'Original Product',
      'Premium Finish',
      'Easy Exchange',
    ],

    ShortDescription: [
      'Elegant party saree',
    ],

    LongDescription: [
      'Premium finish with fashionable styling',
    ],
  },

 {
    id: 8,
    category: 'Bag',
    subcategory: 'ladis Bag',
    brand: 'Velora Home',
    section: 'Shop by Trends',

    image: [
      '/images/new/14.jpg',
      '/images/new/13.jpg',
      '/images/new/15.jpg',
    ],

    title: 'Modern Bag',

    price: 'Tk 1,250.00',
    oldPrice: 'Tk 1,650.00',
    discount: 'SAVE 24%',

    variants: [
      {
        color: 'White',
      },
      {
        color: 'Black',
      },
    ],

    features: [
      'Durable Material',
      'Space Saving',
      'Modern Design',
    ],

    ShortDescription: [
      'Useful kitchen organizer',
    ],

    LongDescription: [
      'Keeps your kitchen clean and organized',
    ],
  },

  {
    id: 9,
    category: 'Women',
    subcategory: 'Saree',
    brand: 'Velora',

    image: [
      '/images/p97.jpg',
      '/images/p98.jpg',
      '/images/p99.jpg',
    ],

    title: 'Floaty Elegant Saree',

    price: 'Tk 2,149.02',

    variants: [
      {
        color: 'Purple',
      },
      {
        color: 'Cream',
      },
    ],

    features: [
      'Premium Fabric',
      'Stylish Design',
      'Cash on Delivery',
    ],

    ShortDescription: [
      'Elegant modern saree',
    ],

    LongDescription: [
      'Suitable for casual and festive wear',
    ],
  },

  {
    id: 10,
    category: 'Watches',
    subcategory: 'Smart Watch',
    brand: 'Velora Watch',

    image: [
      '/images//new/12.jpg',
      '/images/new/10.jpg',
      '/images/new/11.jpg',
    ],

    title: 'Modern Smart Watch',

    price: 'Tk 3,250.00',
    oldPrice: 'Tk 4,100.00',
    discount: 'SAVE 21%',

    variants: [
      {
        color: 'Black',
      },
      {
        color: 'Silver',
      },
      {
        color: 'Gold',
      },
    ],

    features: [
      'Smart Notifications',
      'Fitness Tracking',
      'Rechargeable Battery',
    ],

    ShortDescription: [
      'Modern smartwatch for everyday use',
    ],

    LongDescription: [
      'Track activity and receive smart notifications',
    ],
  },

  {
    id: 11,
    category: 'Men Shirt',
    subcategory: 'Casual Shirt',
    brand: 'Velora Men',

    image: [
      '/images/p36.jpg',
      '/images/p37.jpg',
      '/images/p38.jpg',
    ],

    title: 'Classic Men Casual Shirt',

    price: 'Tk 1,499.00',

    variants: [
      {
        color: 'White',
        sizes: ['M', 'L', 'XL', 'XXL'],
      },
      {
        color: 'Blue',
        sizes: ['M', 'L', 'XL'],
      },
    ],

    features: [
      'Premium Cotton',
      'Comfort Fit',
      'Easy Care',
    ],

    ShortDescription: [
      'Classic everyday shirt',
    ],

    LongDescription: [
      'Designed for comfort and modern style',
    ],
  },

  {
    id: 12,
    category: 'Kids',
    subcategory: 'Party Dress',
    brand: 'Aarong Kids',

    image: [
      '/images/p73.jpg',
      '/images/p74.jpg',
      '/images/p75.jpg',
    ],

    title: 'Casual Chic Kids Party Dress',

    price: 'Tk 1,002.11',

    variants: [
      {
        sizes: ['3-4Y', '5-6Y', '7-8Y'],
      },
    ],

    features: [
      'Comfortable',
      'Original Product',
      'Easy Exchange',
    ],

    ShortDescription: [
      'Cute kids party dress',
    ],

    LongDescription: [
      'Fashionable design for special occasions',
    ],
  },

  {
    id: 13,
    category: 'Accessories',
    subcategory: 'Kids Accessories',
    brand: 'Velora Kids',

    image: [
      '/images/p76.jpg',
      '/images/p77.jpg',
      '/images/p78.jpg',
    ],

    title: 'Kids Fashion Accessories Set',

    price: 'Tk 799.00',

    variants: [
      {
        color: 'Pink',
      },
      {
        color: 'Blue',
      },
    ],

    features: [
      'Kids Friendly',
      'Stylish Design',
      'Lightweight',
    ],

    ShortDescription: [
      'Cute accessories set for kids',
    ],

    LongDescription: [
      'Perfect for parties and everyday use',
    ],
  },

  {
    id: 14,
    category: 'Accessories',
    subcategory: 'Kids Accessories',
    brand: 'Aarong',

    image: [
      '/images/p62.jpg',
      '/images/p61.jpg',
      '/images/p63.jpg',
    ],

    title: 'Premium Kids Accessories',

    price: 'Tk 899.00',
    oldPrice: 'Tk 1,099.00',
    discount: 'SAVE 18%',

    variants: [
      {
        color: 'White',
      },
      {
        color: 'Pink',
      },
    ],

    features: [
      'Premium Quality',
      'Safe Materials',
      'Modern Design',
    ],

    ShortDescription: [
      'Stylish accessories for kids',
    ],

    LongDescription: [
      'Comfortable and easy to use',
    ],
  },

  {
    id: 15,
    category: 'Kids',
    subcategory: 'Tween Clothing',
    brand: 'Velora Kids',

    image: [
      '/images/p82.jpg',
      '/images/p83.jpg',
      '/images/p83.jpg',
    ],

    title: 'Tween Girls Casual Dress',

    price: 'Tk 1,899.00',

    variants: [
      {
        color: 'Pink',
        sizes: ['8-9Y', '10-11Y', '11-12Y'],
      },
      {
        color: 'Blue',
        sizes: ['8-9Y', '10-11Y'],
      },
    ],

    features: [
      'Soft Material',
      'Comfort Fit',
      'Modern Look',
    ],

    ShortDescription: [
      'Comfortable tween girls dress',
    ],

    LongDescription: [
      'Perfect for casual and outing wear',
    ],
  },

  {
    id: 16,
    category: 'Kids',
    subcategory: 'Tween Clothing',
    brand: 'Velora Kids',

    image: [
      '/images/p85.jpg',
      '/images/p86.jpg',
      '/images/p87.jpg',
    ],

    title: 'Lavender Tween Girls Dress',

    price: 'Tk 2,149.02',

    variants: [
      {
        sizes: ['8-9Y', '10-11Y', '11-12Y'],
      },
    ],

    features: [
      'Premium Fabric',
      'Comfortable',
      'Stylish',
    ],

    ShortDescription: [
      'Elegant lavender tween dress',
    ],

    LongDescription: [
      'Perfect for everyday fashion',
    ],
  },

  {
    id: 17,
    category: 'Beauty & Health',
    subcategory: 'Beauty',
    brand: 'Velora Beauty',
    section: 'Shop by Trends',

    image: [
      '/images/p48.jpg',
      '/images/p49.jpg',
      '/images/p50.jpg',
    ],

    title: 'Beauty Essentials Collection',

    price: 'Tk 1,250.00',
    oldPrice: 'Tk 1,650.00',
    discount: 'SAVE 24%',

    variants: [
      {
        color: 'Rose',
      },
      {
        color: 'Natural',
      },
    ],

    features: [
      'Quality Tested',
      'Premium Collection',
      'Easy Delivery',
    ],

    ShortDescription: [
      'Daily beauty essentials',
    ],

    LongDescription: [
      'A modern beauty collection for everyday use',
    ],
  },

  {
    id: 18,
    category: 'Kids',
    subcategory: 'Party Dress',
    brand: 'Velora Kids',

    image: [
      '/images/p88.jpg',
      '/images/p89.jpg',
      '/images/p90.jpg',
    ],

    title: 'Lavender Tween Party Dress',

    price: 'Tk 2,149.02',

    variants: [
      {
        color: 'Lavender',
        sizes: ['8-9Y', '10-11Y', '11-12Y'],
      },
    ],

    features: [
      'Premium Design',
      'Comfort Fit',
      'Easy Exchange',
    ],

    ShortDescription: [
      'Elegant tween party dress',
    ],

    LongDescription: [
      'Designed for birthdays and special occasions',
    ],
  },

  {
    id: 19,
    category: 'Kids',
    subcategory: 'Party Dress',
    brand: 'Velora Kids',

    image: [
      '/images/p91.jpg',
      '/images/p92.jpg',
      '/images/p93.jpg',
    ],

    title: 'Purple Girls Party Dress',

    price: 'Tk 2,149.02',
    oldPrice: 'Tk 2,799.00',
    discount: 'SAVE 23%',

    variants: [
      {
        color: 'Purple',
        sizes: ['8-9Y', '10-11Y'],
      },
      {
        color: 'Pink',
        sizes: ['8-9Y', '10-11Y', '11-12Y'],
      },
    ],

    features: [
      'Premium Fabric',
      'Comfortable Fit',
      'Party Ready',
    ],

    ShortDescription: [
      'Stylish party dress for girls',
    ],

    LongDescription: [
      'Elegant design with premium finishing',
    ],
  },

   {
    id: 20,
    category: 'Electronics',
    subcategory: 'Smart Gadget',
    brand: 'Velora Tech',

    image: [
      '/images/new/7.jpg',
      '/images/new/8.jpg',
      '/images/new/9.jpg',
    ],

    title: 'Iphone 16',

    price: 'Tk 2,799.00',

    variants: [
      {
        color: 'Black',
      },
      {
        color: 'White',
      },
    ],

    features: [
      'Smart Connectivity',
      'Compact Design',
      'Rechargeable',
    ],

    ShortDescription: [
      'Compact smart electronic gadget',
    ],

    LongDescription: [
      'Modern portable gadget for everyday use',
    ],
  },
  {
    id: 21,
    category: 'Curve',
    subcategory: 'Curve Top',
    brand: 'Velora Curve',

    image: [
      '/images/product3.jpg',
      '/images/product1.jpg',
      '/images/product1.jpg',
    ],

    title: 'Modern Curve Casual Top',

    price: 'Tk 1,599.00',

    variants: [
      {
        color: 'Blue',
        sizes: ['XL', 'XXL', '3XL'],
      },
    ],

    features: [
      'Relaxed Fit',
      'Soft Fabric',
      'Easy Care',
    ],

    ShortDescription: [
      'Comfortable curve casual top',
    ],

    LongDescription: [
      'Modern everyday fashion for curve sizes',
    ],
  },

  {
    id: 22,
    category: 'Men Clothing',
    subcategory: 'Polo Shirt',
    brand: 'Velora Men',

    image: [
      '/images/product3.jpg',
      '/images/product1.jpg',
      '/images/product1.jpg',
    ],

    title: 'Men Premium Polo Shirt',

    price: 'Tk 1,299.00',
    oldPrice: 'Tk 1,699.00',
    discount: 'SAVE 24%',

    variants: [
      {
        color: 'Black',
        sizes: ['M', 'L', 'XL', 'XXL'],
      },
      {
        color: 'Navy',
        sizes: ['M', 'L', 'XL'],
      },
    ],

    features: [
      'Premium Cotton',
      'Modern Fit',
      'Breathable',
    ],

    ShortDescription: [
      'Premium men polo shirt',
    ],

    LongDescription: [
      'Perfect for casual and semi-formal wear',
    ],
  },

  {
    id: 23,
    category: 'Men Clothing',
    subcategory: 'T-Shirt',
    brand: 'Velora Men',

    image: [
      '/images/product3.jpg',
      '/images/product1.jpg',
      '/images/product1.jpg',
    ],

    title: 'Men Essential Cotton T-Shirt',

    price: 'Tk 799.00',

    variants: [
      {
        color: 'White',
        sizes: ['S', 'M', 'L', 'XL'],
      },
      {
        color: 'Black',
        sizes: ['M', 'L', 'XL', 'XXL'],
      },
    ],

    features: [
      '100% Cotton',
      'Comfort Fit',
      'Easy Wash',
    ],

    ShortDescription: [
      'Everyday cotton t-shirt',
    ],

    LongDescription: [
      'Simple and comfortable everyday wear',
    ],
  },

  {
    id: 24,
    category: 'Men Shirt',
    subcategory: 'Formal Shirt',
    brand: 'Velora Men',

    image: [
      '/images/product3.jpg',
      '/images/product1.jpg',
      '/images/product1.jpg',
    ],

    title: 'Classic Men Formal Shirt',

    price: 'Tk 1,499.00',
    oldPrice: 'Tk 1,999.00',
    discount: 'SAVE 25%',

    variants: [
      {
        color: 'White',
        sizes: ['M', 'L', 'XL', 'XXL'],
      },
      {
        color: 'Blue',
        sizes: ['M', 'L', 'XL'],
      },
    ],

    features: [
      'Formal Fit',
      'Premium Fabric',
      'Easy Iron',
    ],

    ShortDescription: [
      'Classic formal shirt',
    ],

    LongDescription: [
      'Suitable for office and formal occasions',
    ],
  },

  {
    id: 25,
    category: 'Shoes',
    subcategory: 'Kids Shoes',
    brand: 'Velora Shoes',

    image: [
      '/images/p79.jpg',
      '/images/p80.jpg',
      '/images/p81.jpg',
    ],

    title: 'Comfort Kids Shoes',

    price: 'Tk 1,599.00',

    variants: [
      {
        color: 'White',
        sizes: ['28', '29', '30', '31'],
      },
      {
        color: 'Pink',
        sizes: ['28', '29', '30'],
      },
    ],

    features: [
      'Comfort Sole',
      'Lightweight',
      'Kids Friendly',
    ],

    ShortDescription: [
      'Comfortable everyday kids shoes',
    ],

    LongDescription: [
      'Designed for comfort and daily movement',
    ],
  },

  {
    id: 26,
    category: 'Beachwear',
    subcategory: 'Beach Dress',
    brand: 'Velora Beach',

    image: [
      '/images/product3.jpg',
      '/images/product1.jpg',
      '/images/product1.jpg',
    ],

    title: 'Women Summer Beach Dress',

    price: 'Tk 1,899.00',

    variants: [
      {
        color: 'White',
        sizes: ['S', 'M', 'L'],
      },
      {
        color: 'Blue',
        sizes: ['S', 'M', 'L', 'XL'],
      },
    ],

    features: [
      'Lightweight',
      'Breathable Fabric',
      'Summer Ready',
    ],

    ShortDescription: [
      'Stylish summer beach dress',
    ],

    LongDescription: [
      'Light and comfortable for summer outings',
    ],
  },

  {
    id: 27,
    category: 'Shoes',
    subcategory: 'Women Shoes',
    brand: 'Velora Shoes',

    image: [
      '/images/new/20.jpg',
      '/images/new/19.jpg',
      '/images/new/18.jpg',
    ],

    title: 'Women Classic Casual Shoes',

    price: 'Tk 2,299.00',
    oldPrice: 'Tk 2,999.00',
    discount: 'SAVE 23%',

    variants: [
      {
        color: 'Black',
        sizes: ['36', '37', '38', '39', '40'],
      },
      {
        color: 'White',
        sizes: ['36', '37', '38', '39'],
      },
    ],

    features: [
      'Comfortable Sole',
      'Premium Finish',
      'Lightweight',
    ],

    ShortDescription: [
      'Stylish women casual shoes',
    ],

    LongDescription: [
      'Perfect for daily and casual wear',
    ],
  },

  {
    id: 28,
    category: 'Women',
    subcategory: 'Saree',
    brand: 'Aarong',

    image: [
      '/images/product3.jpg',
      '/images/product1.jpg',
      '/images/product1.jpg',
    ],

    title: 'Traditional Printed Saree',

    price: 'Tk 3,152.57',
    oldPrice: 'Tk 4,586.21',
    discount: 'SAVE 31%',

    variants: [
      {
        color: 'Green',
      },
      {
        color: 'Red',
      },
    ],

    features: [
      'Premium Fabric',
      'Traditional Design',
      'Original Product',
    ],

    ShortDescription: [
      'Traditional printed saree',
    ],

    LongDescription: [
      'Elegant saree suitable for festive occasions',
    ],
  },

  {
    id: 29,
    category: 'Women Shirt',
    subcategory: 'Kurta',
    brand: 'Velora',

    image: [
      '/images/product3.jpg',
      '/images/product1.jpg',
      '/images/product1.jpg',
    ],

    title: 'Leaf Motif Pure Cotton Kurta',

    price: 'Tk 1,699.00',

    variants: [
      {
        color: 'White',
        sizes: ['S', 'M', 'L'],
      },
      {
        color: 'Blue',
        sizes: ['M', 'L', 'XL'],
      },
    ],

    features: [
      'Pure Cotton',
      'Comfort Fit',
      'Premium Stitching',
    ],

    ShortDescription: [
      'Comfortable cotton kurta',
    ],

    LongDescription: [
      'Perfect for everyday traditional wear',
    ],
  },

  {
    id: 30,
    category: 'Sleepwear',
    subcategory: 'Night Dress',
    brand: 'Velora',

    image: [
      '/images/product3.jpg',
      '/images/product1.jpg',
      '/images/product1.jpg',
    ],

    title: 'Women Soft Cotton Night Dress',

    price: 'Tk 1,299.00',

    variants: [
      {
        color: 'Pink',
        sizes: ['S', 'M', 'L', 'XL'],
      },
      {
        color: 'Blue',
        sizes: ['M', 'L', 'XL'],
      },
    ],

    features: [
      'Soft Cotton',
      'Comfort Fit',
      'Breathable',
    ],

    ShortDescription: [
      'Soft and comfortable sleepwear',
    ],

    LongDescription: [
      'Designed for comfortable sleeping and relaxing',
    ],
  },

  {
    id: 31,
    category: 'Jewelry',
    subcategory: 'Necklace',
    brand: 'Velora Jewelry',

    image: [
      '/images/product3.jpg',
      '/images/product1.jpg',
      '/images/product1.jpg',
    ],

    title: 'Elegant Gold Tone Necklace',

    price: 'Tk 1,099.00',

    variants: [
      {
        color: 'Gold',
      },
      {
        color: 'Silver',
      },
    ],

    features: [
      'Elegant Design',
      'Premium Finish',
      'Gift Ready',
    ],

    ShortDescription: [
      'Elegant fashion necklace',
    ],

    LongDescription: [
      'Perfect for party and festive styling',
    ],
  },

  {
    id: 32,
    category: 'Bag',
    subcategory: 'ladis Bag',
    brand: 'Velora Home',
    section: 'Shop by Trends',

    image: [
      '/images/new/13.jpg',
      '/images/new/14.jpg',
      '/images/new/15.jpg',
    ],

    title: 'Modern Bag',

    price: 'Tk 1,250.00',
    oldPrice: 'Tk 1,650.00',
    discount: 'SAVE 24%',

    variants: [
      {
        color: 'White',
      },
      {
        color: 'Black',
      },
    ],

    features: [
      'Durable Material',
      'Space Saving',
      'Modern Design',
    ],

    ShortDescription: [
      'Useful kitchen organizer',
    ],

    LongDescription: [
      'Keeps your kitchen clean and organized',
    ],
  },

  {
    id: 33,
    category: 'Sports & Outdoor',
    subcategory: 'Sports Shoes',
    brand: 'Velora Active',
    section: 'Shop by Trends',

    image: [
      '/images/product3.jpg',
      '/images/product1.jpg',
      '/images/product1.jpg',
    ],

    title: 'Lightweight Running Shoes',

    price: 'Tk 2,499.00',

    variants: [
      {
        color: 'Black',
        sizes: ['39', '40', '41', '42'],
      },
      {
        color: 'White',
        sizes: ['39', '40', '41'],
      },
    ],

    features: [
      'Lightweight',
      'Comfort Sole',
      'Breathable',
    ],

    ShortDescription: [
      'Comfortable running shoes',
    ],

    LongDescription: [
      'Ideal for running and outdoor activities',
    ],
  },

  {
    id: 34,
    category: 'Electronics',
    subcategory: 'Smart Gadget',
    brand: 'Velora Tech',

    image: [
      '/images/new/7.jpg',
      '/images/new/8.jpg',
      '/images/new/9.jpg',
    ],

    title: 'Iphone 16',

    price: 'Tk 2,799.00',

    variants: [
      {
        color: 'Black',
      },
      {
        color: 'White',
      },
    ],

    features: [
      'Smart Connectivity',
      'Compact Design',
      'Rechargeable',
    ],

    ShortDescription: [
      'Compact smart electronic gadget',
    ],

    LongDescription: [
      'Modern portable gadget for everyday use',
    ],
  },

  {
    id: 35,
    category: 'Kids',
    subcategory: 'Casual Dress',
    brand: 'Velora Kids',

    image: [
      '/images/p40.jpg',
      '/images/p39.jpg',
      '/images/p41.jpg',
    ],

    title: 'Kids Casual Printed Dress',

    price: 'Tk 1,399.00',

    variants: [
      {
        color: 'Pink',
        sizes: ['3-4Y', '5-6Y', '7-8Y'],
      },
    ],

    features: [
      'Soft Fabric',
      'Comfortable Fit',
      'Cute Design',
    ],

    ShortDescription: [
      'Cute everyday kids dress',
    ],

    LongDescription: [
      'Comfortable for everyday use',
    ],
  },

  {
    id: 36,
    category: 'Kids',
    subcategory: 'Tween Clothing',
    brand: 'Velora Kids',

    image: [
      '/images/p42.jpg',
      '/images/p43.jpg',
      '/images/p44.jpg',
    ],

    title: 'Tween Girls Printed Outfit',

    price: 'Tk 1,699.00',

    variants: [
      {
        sizes: ['8-9Y', '10-11Y', '11-12Y'],
      },
    ],

    features: [
      'Premium Fabric',
      'Modern Design',
      'Comfort Fit',
    ],

    ShortDescription: [
      'Stylish tween girls outfit',
    ],

    LongDescription: [
      'Suitable for casual and outing wear',
    ],
  },

  {
    id: 37,
    category: 'Kids',
    subcategory: 'Tween Clothing',
    brand: 'Velora Kids',

    image: [
      '/images/p51.jpg',
      '/images/p52.jpg',
      '/images/p53.jpg',
    ],

    title: 'Tween Girls Casual Set',

    price: 'Tk 1,899.00',
    oldPrice: 'Tk 2,299.00',
    discount: 'SAVE 17%',

    variants: [
      {
        color: 'Blue',
        sizes: ['8-9Y', '10-11Y'],
      },
      {
        color: 'Black',
        sizes: ['8-9Y', '10-11Y', '11-12Y'],
      },
    ],

    features: [
      'Comfort Fit',
      'Modern Look',
      'Premium Quality',
    ],

    ShortDescription: [
      'Modern casual set for tween girls',
    ],

    LongDescription: [
      'Perfect for everyday fashion',
    ],
  },

  {
    id: 38,
    category: 'HeadPhones',
    subcategory: 'Wireless Headphones',
    brand: 'Velora Audio',

    image: [
      '/images/new/1.jpg',
      '/images/new/2.jpg',
      '/images/new/3.jpg',
    ],

    title: 'Wireless Bluetooth Headphones',

    price: 'Tk 2,999.00',
    oldPrice: 'Tk 3,699.00',
    discount: 'SAVE 19%',

    variants: [
      {
        color: 'Black',
      },
      {
        color: 'White',
      },
    ],

    features: [
      'Bluetooth Connectivity',
      'Long Battery Life',
      'Fast Charging',
    ],

    ShortDescription: [
      'Wireless Bluetooth headphones',
    ],

    LongDescription: [
      'Premium sound with long battery performance',
    ],
  },

  {
    id: 39,
    category: 'Accessories',
    subcategory: 'Fashion Accessories',
    brand: 'Velora Accessories',
    section: 'Shop by Trends',

    image: [
      '/images/p64.jpg',
      '/images/p65.jpg',
      '/images/p66.jpg',
    ],

    title: 'Fashion Accessories Collection',

    price: 'Tk 899.00',

    variants: [
      {
        color: 'Pink',
      },
      {
        color: 'Blue',
      },
      {
        color: 'White',
      },
    ],

    features: [
      'Stylish Design',
      'Premium Quality',
      'Gift Friendly',
    ],

    ShortDescription: [
      'Modern fashion accessories',
    ],

    LongDescription: [
      'Suitable for everyday styling',
    ],
  },

  {
    id: 40,
    category: 'Watches',
    subcategory: 'Smart Watch',
    brand: 'Velora Watch',

    image: [
      '/images/new/10.jpg',
      '/images//new/11.jpg',
      '/images/new/12.jpg',
    ],

    title: 'Modern Smart Watch',

    price: 'Tk 3,250.00',
    oldPrice: 'Tk 4,100.00',
    discount: 'SAVE 21%',

    variants: [
      {
        color: 'Black',
      },
      {
        color: 'Silver',
      },
      {
        color: 'Gold',
      },
    ],

    features: [
      'Smart Notifications',
      'Fitness Tracking',
      'Rechargeable Battery',
    ],

    ShortDescription: [
      'Modern smartwatch for everyday use',
    ],

    LongDescription: [
      'Track activity and receive smart notifications',
    ],
  },






   {
    id: 41,
    category: 'HeadPhones',
    subcategory: 'Wireless Headphones',
    brand: 'Velora Audio',

    image: [
      '/images/new/4.jpg',
      '/images/new/5.jpg',
      '/images/new/6.jpg',
    ],

    title: 'Wireless Bluetooth Headphones',

    price: 'Tk 2,999.00',
    oldPrice: 'Tk 3,699.00',
    discount: 'SAVE 19%',

    variants: [
      {
        color: 'Black',
      },
      {
        color: 'White',
      },
    ],

    features: [
      'Bluetooth Connectivity',
      'Long Battery Life',
      'Fast Charging',
    ],

    ShortDescription: [
      'Wireless Bluetooth headphones',
    ],

    LongDescription: [
      'Premium sound with long battery performance',
    ],
  },
];


