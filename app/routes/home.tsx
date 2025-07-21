import type { Route } from "./+types/home";
import Slider from "~/components/slider"
import Tools from '~/components/tools'
import About from "~/components/about";
import Testimonials from "~/components/testimonials";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <main>
      <Slider />
      <Tools />
      <About />
      <Testimonials />
    </main>
  );
}
