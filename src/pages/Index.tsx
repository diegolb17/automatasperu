import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Cases } from "@/components/Cases";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ProgressBar } from "@/components/ProgressBar";
import { CustomCursor } from "@/components/CustomCursor";

const Index = () => {
  return (
    <div className="relative noise">
      <CustomCursor />
      <ProgressBar />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Services />
        <Cases />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
