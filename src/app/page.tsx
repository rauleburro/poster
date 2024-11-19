import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { Benefits } from "@/components/Benefits";

import {
  exerciseOne,
  exerciseTwo,
  exerciseThree,
  exerciseFour,
  exerciseFive,
  exerciseSix,
  exerciseSeven,
  exerciseEight,
  exerciseNine,
} from "@/components/data";

export default function Home() {
  return (
    <Container>
      <Hero />
      <Benefits data={exerciseOne} />
      <Benefits imgPos="right" data={exerciseTwo} />
      <Benefits data={exerciseThree} />
      <Benefits imgPos="right" data={exerciseFour} />
      <Benefits data={exerciseFive} />
      <Benefits imgPos="right" data={exerciseSix} />
      <Benefits data={exerciseSeven} />
      <Benefits imgPos="right" data={exerciseEight} />
      <Benefits data={exerciseNine} />
    </Container>
  );
}
