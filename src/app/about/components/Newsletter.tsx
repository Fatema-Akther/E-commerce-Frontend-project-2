// components/Newsletter.tsx
export default function Newsletter() {
  return (
    <section className="bg-pink-100 py-16">
    <div className="py-6 md:py-10">
        <div className="bg-gradient-to-r from-[#FFD5DF] to-[#FFEBF0] p-8 rounded-2xl shadow-lg">
            <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">নিউজলেটার সাবস্ক্রাইব করুন</h3>
                <p className="text-gray-600 mb-6">আমাদের নতুন কালেকশন এবং বিশেষ অফারের খবর পেতে সাবস্ক্রাইব করুন</p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                    <input type="email" placeholder="আপনার ইমেইল ঠিকানা" className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#C43882] focus:border-transparent"/>
                    <button className="bg-[#C43882] text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-all duration-300 font-medium">সাবস্ক্রাইব</button>
                    </div>
                    </div>
                    </div>
                    </div>
    </section>
  );
}

// উদাহরণ ব্যবহার app/page.tsx এর মধ্যে:
// <WhyChooseUs />
// <Newsletter />
