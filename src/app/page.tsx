import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { AudienceFit } from "@/components/AudienceFit";
import { HowItWorks } from "@/components/HowItWorks";
import { SuccessCases } from "@/components/SuccessCases";
import { Thermometer } from "@/components/Thermometer";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AudienceFit />
        <HowItWorks />
        <SuccessCases />
        <Thermometer />
      </main>
      <Footer />
    </>
  );
}
