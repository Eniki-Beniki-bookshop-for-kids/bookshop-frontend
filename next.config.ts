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
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "www.gravatar.com",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "brskvxpqvofojrxoxxjb.supabase.co",
				pathname: "/**",
			},
		],
	},
}

export default nextConfig
