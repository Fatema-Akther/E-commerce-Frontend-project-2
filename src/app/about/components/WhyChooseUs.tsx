// components/WhyChooseUs.tsx
export default function WhyChooseUs() {
  const items = [
    {
      title: "গুণগত মান নিশ্চিতকরণ:",
      description:
        "আমরা প্রতিটি পণ্য সাবধানে নির্বাচন ও যাচাই করি, যাতে এটি আমাদের কঠোর মান নিয়ন্ত্রণের মাপকাঠি পূরণ করে।",
    },
    {
      title: "সুবিধা:",
      description:
        "আমাদের ব্যবহারকারী-বান্ধব ইন্টারফেস এবং ঝামেলামুক্ত অর্ডার প্রক্রিয়ার মাধ্যমে কেনাকাটা এখন আগের যেকোনো সময়ের চেয়ে সহজ।",
    },
    {
      title: "অসাধারণ গ্রাহক সেবা:",
      description:
        "আমাদের নিবেদিত পেশাদারদের দল সর্বদা আপনার পাশে রয়েছে। আপনার সন্তুষ্টি নিশ্চিত করাই আমাদের সর্বোচ্চ অগ্রাধিকার।",
    },
  ];

  return (
    <section className="bg-pink-50 py-16">
     <div className="md:py-6 py-2"><div className="text-xl py-4 px-2 lg:px-0">
        <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">কেন <span className="text-[#C43882]">আমাদের বেছে নিবেন</span>
            </h2><div className="w-24 h-1 bg-[#C43882] mx-auto mt-3 rounded-full"></div></div></div><div className="flex flex-col lg:flex-row text-sm mb-20 px-2 lg:px-0">
                <div className="border border-[#FFD5DF]/50 bg-white/60 backdrop-blur-sm px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 hover:shadow-lg transition-all duration-300 rounded-l-2xl lg:rounded-r-none rounded-r-2xl"><b className="text-[#C43882] text-lg">গুণগত মান নিশ্চিতকরণ:</b>
                <p className="text-gray-600 leading-relaxed">আমরা প্রতিটি পণ্য সাবধানে নির্বাচন ও যাচাই করি, যাতে এটি আমাদের কঠোর মান নিয়ন্ত্রণের মাপকাঠি পূরণ করে।</p>
                </div>
                <div className="border border-[#FFD5DF]/50 bg-gradient-to-br from-[#FFD5DF]/40 to-[#FFEBF0]/40 backdrop-blur-sm px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 hover:shadow-lg transition-all duration-300 rounded-none">
                <b className="text-[#C43882] text-lg">সুবিধা:</b><p className="text-gray-600 leading-relaxed">আমাদের ব্যবহারকারী-বান্ধব ইন্টারফেস এবং ঝামেলামুক্ত অর্ডার প্রক্রিয়ার মাধ্যমে কেনাকাটা এখন আগের যেকোনো সময়ের চেয়ে সহজ।</p>
                </div>
                <div className="border border-[#FFD5DF]/50 bg-white/60 backdrop-blur-sm px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 hover:shadow-lg transition-all duration-300 rounded-r-2xl lg:rounded-l-none rounded-l-2xl">
                <b className="text-[#C43882] text-lg">অসাধারণ গ্রাহক সেবা:</b>
                <p className="text-gray-600 leading-relaxed">আমাদের নিবেদিত পেশাদারদের দল সবসময় আপনার পাশে রয়েছে। আপনার সন্তুষ্টি নিশ্চিত করাই আমাদের সর্বোচ্চ অগ্রাধিকার।</p>
                </div>
                </div>
                </div>
    </section>
  );
}

// উদাহরণ ব্যবহার app/page.tsx এর মধ্যে:
// <Portrait />
// <WhyChooseUs />
