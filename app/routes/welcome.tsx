import type { Route } from "./+types/home";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Hoş Geldiniz!" },
    { name: "description", content: "React Router'a Hoş Geldiniz!" },
  ];
}

export default function Welcome() {
  return (
    <main>
      <nav>
      
      </nav>
    </main>
  );
}
