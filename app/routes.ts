import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    layout("./layouts/main.tsx", [
        index("./routes/welcome.tsx"),
        route("/:slug", "./routes/landing-page.tsx"),
    ]),
    // Handle Chrome DevTools and other well-known paths
    route("/.well-known/*", "./routes/well-known.tsx")
] satisfies RouteConfig;
