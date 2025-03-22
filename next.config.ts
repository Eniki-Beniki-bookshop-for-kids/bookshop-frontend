import type { NextConfig } from "next"

const nextConfig: NextConfig = {
	experimental: {
		optimizePackageImports: ["@chakra-ui/react"],
	},
	images: {
		domains: ["lh3.googleusercontent.com", "www.gravatar.com"],
	},
}

export default nextConfig
