import { defineConfig } from "astro/config";
import AstroPWA from "@vite-pwa/astro";
import robotsTxt from "astro-robots-txt";

export default defineConfig({
    site: "https://nolimit.pages.dev/",
    integrations: [
        robotsTxt(),
        AstroPWA({
            manifest: {
                name: "NoLimit Stream",
                short_name: "NoLimit Stream",
                description: "NoLimit Stream",
                theme_color: "#111111",
                scope: "/",
                start_url: "/",
                icons: [
                    {
                        src: "/assets/icons/icon-72x72.png",
                        sizes: "72x72",
                        type: "image/png",
                    },
                    {
                        src: "/assets/icons/icon-96x96.png",
                        sizes: "96x96",
                        type: "image/png",
                    },
                    {
                        src: "/assets/icons/icon-128x128.png",
                        sizes: "128x128",
                        type: "image/png",
                    },
                    {
                        src: "/assets/icons/icon-144x144.png",
                        sizes: "144x144",
                        type: "image/png",
                    },
                    {
                        src: "/assets/icons/icon-152x152.png",
                        sizes: "152x152",
                        type: "image/png",
                    },
                    {
                        src: "/assets/icons/icon-192x192.png",
                        sizes: "192x192",
                        type: "image/png",
                    },
                    {
                        src: "/assets/icons/icon-384x384.png",
                        sizes: "384x384",
                        type: "image/png",
                    },
                    {
                        src: "/assets/icons/icon-512x512.png",
                        sizes: "512x512",
                        type: "image/png",
                    },
                ],
            },
        }),
    ],
});
