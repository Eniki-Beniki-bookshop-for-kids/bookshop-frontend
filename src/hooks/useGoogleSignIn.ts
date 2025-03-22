"use client"

export const useGoogleSignIn = () => {
	const login = () => {
		const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
		const redirectUri = `${baseUrl}/api/auth/google/callback`
		const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID

		if (!clientId) {
			throw new Error("Google Client ID is not defined")
		}

		const googleAuthUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=profile email&prompt=select_account`
		window.location.href = googleAuthUrl
	}

	return { login }
}
