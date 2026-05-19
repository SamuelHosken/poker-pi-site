import { Nav } from "@/components/layout/nav";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { AlertBar } from "@/components/sections/alert-bar";
import { About } from "@/components/sections/about";
import { WhenWhere } from "@/components/sections/when-where";
import { Structure } from "@/components/sections/structure";
import { Tournament } from "@/components/sections/tournament";
import { MidCta } from "@/components/sections/mid-cta";
import { HowToRegister } from "@/components/sections/how-to-register";
import { FinalCta } from "@/components/sections/final-cta";
import { EventJsonLd } from "@/components/ui/event-json-ld";

export default function Home() {
  return (
    <>
      <EventJsonLd />
      <Nav />
      <main>
        <Hero />
        <AlertBar />
        <About />
        <WhenWhere />
        <Structure />
        <Tournament />
        <MidCta />
        <HowToRegister />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
