import { Hero } from "@/components/sections/Hero";
import { LogoCloud } from "@/components/sections/LogoCloud";
import { Features } from "@/components/sections/Features";
import { Products } from "@/components/sections/Products";
import { Specs } from "@/components/sections/Specs";
import { Benefits } from "@/components/sections/Benefits";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { Newsletter } from "@/components/sections/Newsletter";

export default function Home() {
  return (
    <>
      <Hero />
      <LogoCloud />
      <Features />
      <Products />
      <Specs />
      <Benefits />
      <Testimonials />
      <FAQ />
      <Newsletter />
    </>
  );
}
