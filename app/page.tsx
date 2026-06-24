import { ContactCta } from "@/components/sections/contact-cta";
import { Hero } from "@/components/sections/hero";
import { Process } from "@/components/sections/process";
import { ProblemSolution } from "@/components/sections/problem-solution";
import { Services } from "@/components/sections/services";
import { Trust } from "@/components/sections/trust";
import { WhyLumikon } from "@/components/sections/why-lumikon";

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemSolution />
      <Services />
      <WhyLumikon />
      <Process />
      <Trust />
      <ContactCta />
    </>
  );
}
