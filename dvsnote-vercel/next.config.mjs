import { rmSync } from "fs";

/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        optimizeCss: true,
    },
};

if (process.env.NODE_ENV === "production") {
    rmSync(".next/static/css", { recursive: true, force: true });
    console.log("🔥 Deleted _next/static/css/ after build!");
}

export default nextConfig;
