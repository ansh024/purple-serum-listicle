import Hero from "@/components/sections/Hero";
import MythVsFact from "@/components/sections/MythVsFact";
import ProductBanner from "@/components/sections/ProductBanner";
import TrustBar from "@/components/sections/TrustBar";
import HowItWorks from "@/components/sections/HowItWorks";
import RealResults from "@/components/sections/RealResults";
import Faq from "@/components/sections/Faq";
import StickyAddToCart from "@/components/sections/StickyAddToCart";

export default function Home() {
  return (
    <main className="min-h-screen bg-white pb-28 sm:pb-28">
      <Hero />
      <MythVsFact />
      <ProductBanner />
      <TrustBar />
      <HowItWorks />
      <RealResults />
      <Faq />
      <StickyAddToCart />
    </main>
  );
}
