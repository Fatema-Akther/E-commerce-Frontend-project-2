// // app/page.tsx
// import Image from "next/image";
// import AboutInfo from "./components/AboutInfo";
// import WhyChooseUs from "./components/WhyChooseUs";
// import Newsletter from "./components/Newsletter";
// import Footer from "../components/Footer";
// import Header from "../components/Header";
// // Portrait ব্যবহার না করলে ইমপোর্ট কেটে দাও
// // import Portrait from "@/components/Portrait";

// export default function Page() {
//   return (
//     <main className="min-h-screen bg-gradient-to-b from-rose-50 via-pink-50 to-white text-gray-900">
//       <Header/>
//       <section id="about" className="relative">
//         <div className="flex flex-col lg:flex-row gap-16 items-center">
//           {/* Left: Image */}
//           <div className="lg:w-1/2 relative mt-8">
//             <div className="relative overflow-hidden rounded-3xl shadow-2xl w-full">
//               <div className="absolute inset-0 bg-gradient-to-tr from-[#C43882]/20 to-transparent z-10" />
//               <Image
//                 src="/images/p1.jpg" // public/assets/... এর ভেতরে রাখো
//                 alt="G'lore"
//                 width={1600}
//                 height={1000}
//                 className="w-full md:h-[800px] h-[500px] transform hover:scale-105 transition-transform duration-700 object-cover"
//                 priority
//               />
//             </div>
//             <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#FFD5DF] rounded-full opacity-60" />
//             <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#FFEBF0] rounded-full opacity-80" />
//           </div>

//           {/* Right: Info */}
//           <div className="lg:w-1/2 space-y-8 ">
//             <div className="text-center lg:text-left ">
//               <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4 lg:pt-40">
//                 আমরা <span className="text-[#C43882]">কারা</span>
//               </h1>
//             </div>

//             <AboutInfo />
          
//           </div>

          
//         </div>
//            <WhyChooseUs />
//             <Newsletter />
//             <Footer/>
//       </section>
//     </main>
//   );
// }




// app/page.tsx
import Image from "next/image";
import Header from "../components/Header";
import AboutInfo from "./components/AboutInfo";
import WhyChooseUs from "./components/WhyChooseUs";
import Newsletter from "./components/Newsletter";
// import AboutInfo from "@/components/AboutInfo"; // এখন ব্যবহার না করলে মন্তব্যে রাখো

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-rose-50 via-pink-50 to-white text-gray-900">
      <Header />

      <section id="about" className="relative">
        <div className="flex flex-col lg:flex-row gap-16 items-start mt-16">
          {/* Left: Image */}
          <div className="lg:w-1/2 relative">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl w-full">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#C43882]/20 to-transparent z-10" />
              <Image
                src="/images/p1.jpg"
                alt="G'lore"
                width={1600}
                height={1000}
                priority
                className="w-full md:h-[800px] h-[500px] object-cover transform transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#FFD5DF] rounded-full opacity-60" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#FFEBF0] rounded-full opacity-80" />
          </div>

          {/* Right: Text blocks */}
         <AboutInfo/>


        </div>
        
<WhyChooseUs/>
<Newsletter/>
      </section>

      
    </main>
  );
}
