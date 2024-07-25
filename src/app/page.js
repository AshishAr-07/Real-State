import Image from "next/image";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Work from "@/components/Work";
import Featured from "@/components/Featured";
import Background from "@/components/Background";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <>
      {/* banner section */}
      <div className=" bg-[url('/tailbanner.png')] bg-no-repeat bg-cover pt-10 pb-20">
        <Navbar />
        <div className="flex justify-center items-center text-white font-bold text-5xl mt-[18vh]">
          Easy way to find your

        </div>
        <div className="flex justify-center items-center text-white text-5xl pt-4 font-bold">
          dream property

        </div>
        <div className="flex justify-center items-center text-white  pt-4 mb-[18vh] ">
          A great plateform to buy, sell and rent your properties without any agent or commisions.

        </div>
      </div>

      {/* bn end */}
      <Hero />
      <Work />
      <Featured />
      <Background />

      <Contact />
      <Footer />

    </>
  );

}
