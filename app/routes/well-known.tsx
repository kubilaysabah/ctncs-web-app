import type { Route } from "./+types/well-known";

export function loader({ request }: Route.LoaderArgs) {
  const url = new URL(request.url);
  
  // Handle Chrome DevTools specific requests
  if (url.pathname.includes("com.chrome.devtools.json")) {
    return new Response("Not Found", { status: 404 });
  }
  
  // Handle other well-known paths
  return new Response("Not Found", { status: 404 });
}

export default function WellKnown() {
  // This component won't be rendered since we return responses in the loader
  return null;
}
