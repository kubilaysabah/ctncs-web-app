import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  server: {
    port: 3000,
    host: '0.0.0.0',
    // Configure middleware to handle DevTools requests
    middlewareMode: false,
  },
  ssr: {
    noExternal: [
      '@apollo/client',
    ],
  },
  plugins: [
    tailwindcss(), 
    reactRouter(), 
    tsconfigPaths(),
    // Add custom plugin to handle DevTools requests
    {
      name: 'handle-devtools',
      configureServer(server) {
        server.middlewares.use('/.well-known', (req, res, next) => {
          // Return 404 for DevTools requests
          if (req.url?.includes('com.chrome.devtools.json')) {
            res.statusCode = 404;
            res.end('Not Found');
            return;
          }
          next();
        });
      },
    }
  ],
});
