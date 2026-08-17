



'use client';

import Image from 'next/image';
import Link from 'next/link';
import { slugify } from '@/app/utils/slugify';
import { categories } from '@/app/data/categoryList';

export default function CategoryCircleSection() {
  return (
  <section className="py-6 bg-white">

<div className="max-w-6xl mx-auto px-4">
<div className="
  grid
  grid-cols-5
  sm:grid-cols-5
  md:grid-cols-6
  lg:grid-cols-7
  gap-x-4
  gap-y-5
  place-items-center
">


  {categories.slice(5).map((cat, i) => (
            <Link
              href={`/group/${slugify(cat.label)}`}
              key={i}
              className="flex flex-col items-center justify-start text-center text-black text-[10px] sm:text-xs min-h-[90px]"
            >
              <div className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] lg:w-[130px] lg:h-[130px] rounded-full bg-[#EDE9E6] overflow-hidden shadow-sm">
                <Image
                  src={cat.image}
                  alt={cat.label}
                  width={130}
                  height={130}
                  className="object-cover w-full h-full"
                />
              </div>

              <span className="mt-1 leading-tight break-words text-[#9D4E75] font-semibold">
                {cat.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}