import Image from "next/image";
import About from "@/components/About";

import Work from "@/components/Work";
import Featured from "@/components/Featured";
import Background from "@/components/Background";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
export default function Home() {
  return (
    <>
     <Hero/>
      <About />
      <Work />
      <div className="text-center text-gray-900  text-5xl py-10 ">
          <p ><b>Featured Properties</b></p>
        </div>
      <Featured />
      <Background />

      <Contact />
      <Footer />

    </>
  );

}
