import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { Benefits } from "@/components/Benefits";

import { benefitOne, benefitTwo } from "@/components/data";
export default function Home() {
  return (
    <Container>
      <Hero />
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <Benefits data={benefitTwo} />
      <Benefits imgPos="right" data={benefitTwo} />
      <Benefits data={benefitTwo} />
      <Benefits imgPos="right" data={benefitTwo} />
      <Benefits data={benefitTwo} />
      <Benefits imgPos="right" data={benefitTwo} />
      <Benefits data={benefitTwo} />
    </Container>
  );
}
