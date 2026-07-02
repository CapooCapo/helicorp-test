import dynamic from "next/dynamic";
import { Hero } from "@/components/sections/Hero";

const LogoCloud = dynamic(() => import("@/components/sections/LogoCloud").then(mod => mod.LogoCloud));
const Features = dynamic(() => import("@/components/sections/Features").then(mod => mod.Features));
const Products = dynamic(() => import("@/components/sections/Products").then(mod => mod.Products));
const Specs = dynamic(() => import("@/components/sections/Specs").then(mod => mod.Specs));
const Benefits = dynamic(() => import("@/components/sections/Benefits").then(mod => mod.Benefits));
const Testimonials = dynamic(() => import("@/components/sections/Testimonials").then(mod => mod.Testimonials));
const FAQ = dynamic(() => import("@/components/sections/FAQ").then(mod => mod.FAQ));
const Newsletter = dynamic(() => import("@/components/sections/Newsletter").then(mod => mod.Newsletter));

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
