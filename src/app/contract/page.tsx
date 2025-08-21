// app/page.tsx
import Image from "next/image";
import Header from "../components/Header";
import { IoInformation } from "react-icons/io5";
import Information from "./components/Information";

// import AboutInfo from "@/components/AboutInfo"; // এখন ব্যবহার না করলে মন্তব্যে রাখো

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-rose-50 via-pink-50 to-white text-gray-900">
      <Header />

      <section id="about" className="relative">
       <div className="py-5 sm:flex sm:flex-row gap-16 items-center justify-center">
        <div className="sm:w-1/2 px-2 sm:px-0 hidden sm:block">
        <img src="/images/p1.jpg" alt=""/>
        </div><div className="relative w-full h-full sm:hidden">
           <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1579.845936009183!2d90.36981035429673!3d23.79872935440741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c1013025176f%3A0x9d59fa9abda1c024!2sRASNA%20722%2F3!5e0!3m2!1sen!2sbd!4v1734024615061!5m2!1sen!2sbd"
    width="100%"
    height="300"
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />



  
            </div>
           <Information/>
                            </div>


      </section>
    </main>
  );
}



