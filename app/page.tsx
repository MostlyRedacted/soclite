import { Backdrop } from "@/components/sections/backdrop";
import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { ProblemStrip } from "@/components/sections/problem-strip";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Features } from "@/components/sections/features";
import { ProductPreview } from "@/components/sections/product-preview";
import { Audience } from "@/components/sections/audience";
import { FinalCta } from "@/components/sections/final-cta";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Backdrop />
      <Navbar />
      <main>
        <Hero />
        <ProblemStrip />
        <HowItWorks />
        <Features />
        <ProductPreview />
        <Audience />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
