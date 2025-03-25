import type { NextConfig } from "next"

const nextConfig: NextConfig = {
	experimental: {
		optimizePackageImports: ["@chakra-ui/react"],
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "lh3.googleusercontent.com",
				port: "",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "www.gravatar.com",
				port: "",
				pathname: "/**",
			},
		],
	},
}

export default nextConfig
