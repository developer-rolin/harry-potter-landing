import { Header } from "@/components/layout/Header";
import { Characters } from "@/components/sections/Characters";
import { Hero } from "@/components/sections/Hero";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Characters />
      </main>
    </>
  );
}
