'use client';

import { useEffect, useState } from 'react';

const banners = [
  '/images/4.jpg',
  '/images/1.jpg',
  '/images/2.jpg',
];

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + banners.length) % banners.length
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 2500);

    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
   <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start mt-2 mx-auto w-full max-w-[1220px] gap-2 px-2">


  {/* Left side boxes */}
   <div className="hidden lg:flex flex-col gap-4 p-2 w-[600px]">
  {/* Box 1 */}
  <div className="w-full h-[70px] bg-white rounded-xl overflow-hidden shadow">
    <img
      src="/images/small4.jpg"
      alt="Image 1"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Box 2 */}
  <div className="w-full h-[70px] bg-white rounded-xl overflow-hidden shadow">
    <img
      src="/images/small2.jpg"
      alt="Image 2"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Box 3 */}
  <div className="w-full h-[70px] bg-white rounded-xl overflow-hidden shadow">
    <img
      src="/images/small3.jpg"
      alt="Image 3"
      className="w-full h-full object-cover"
    />
  </div>
</div>

  {/* Main Slider */}
 <div
  className="relative overflow-hidden w-full h-[180px] sm:h-[220px] md:h-[250px] lg:w-[1000px] lg:h-[250px] rounded-xl shadow-lg"
  style={{ background: 'linear-gradient(135deg, #f56a79, #f2c94c)' }}
>

    <div
      className="flex transition-transform duration-300 ease-in-out"
      style={{ transform: `translateX(-${currentIndex * 100}%)` }}
    >
      {banners.map((banner, index) => (
        <div key={index} className="flex-shrink-0 w-full h-full relative">
          <img
            src={banner}
            alt={`Banner ${index + 1}`}
            className="object-cover w-full h-full rounded-xl"
          />
        </div>
      ))}
    </div>

   
    <div className="absolute top-[45%] left-[30%] transform -translate-x-1/2 -translate-y-1/2 text-left pl-4 z-10">
      

      <div className="mt-4">
       
        <div className="relative w-[150px] sm:w-[180px] h-[45px] sm:h-[50px] [perspective:1000px]">
          <div className="relative w-full h-full animate-flipX [transform-style:preserve-3d]">

        
            


          </div>
        </div>
      </div>
    </div>


    <button
      onClick={prevSlide}
      className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
    >
      &#10094;
    </button>
    <button
      onClick={nextSlide}
      className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
    >
      &#10095;
    </button>

    
    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
      {banners.map((_, index) => (
        <div
          key={index}
          onClick={() => handleDotClick(index)}
         className={`w-3 h-3 rounded-full cursor-pointer ${
  currentIndex === index ? 'bg-white' : 'bg-[rgb(160,160,160)]'
}`}

        ></div>
      ))}
    </div>
  </div>

  
      

 {/* Right side boxes */}
   <div className="hidden lg:flex flex-col gap-4 p-2 w-[600px]">
  {/* Box 1 */}
  <div className="w-full h-[70px] bg-white rounded-xl overflow-hidden shadow">
    <img
      src="/images/small4.jpg"
      alt="Image 1"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Box 2 */}
  <div className="w-full h-[70px] bg-white rounded-xl overflow-hidden shadow">
    <img
      src="/images/small2.jpg"
      alt="Image 2"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Box 3 */}
  <div className="w-full h-[70px] bg-white rounded-xl overflow-hidden shadow">
    <img
      src="/images/small3.jpg"
      alt="Image 3"
      className="w-full h-full object-cover"
    />
  </div>
</div>

    
    </div>
  );
}