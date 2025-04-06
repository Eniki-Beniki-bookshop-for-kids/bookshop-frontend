// import { User, UserRole } from "@/types/models"
import "server-only"

import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
	const url = new URL(request.url)
	const params = url.searchParams

	const code = params.get("code")

	if (!code) {
		return NextResponse.json(
			{ error: "Missing authorization code" },
			{ status: 400 },
		)
	}

	// Обмінюємо code на access_token
	const tokenUrl = "https://oauth2.googleapis.com/token"
	const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID
	const clientSecret = process.env.GOOGLE_CLIENT_SECRET
	const redirectUri = `${
		process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
	}/api/auth/google/callback`

	const tokenResponse = await fetch(tokenUrl, {
		method: "POST",
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
		},
		body: new URLSearchParams({
			code: code,
			client_id: clientId!,
			client_secret: clientSecret!,
			redirect_uri: redirectUri,
			grant_type: "authorization_code",
		}),
	})

	const tokenData = await tokenResponse.json()

	if (!tokenResponse.ok) {
		return NextResponse.json(
			{ error: "Failed to exchange code for token", details: tokenData },
			{ status: 400 },
		)
	}

	const accessToken = tokenData.access_token

	// Отримуємо дані користувача з Google
	const userInfoResponse = await fetch(
		"https://www.googleapis.com/oauth2/v3/userinfo",
		{
			headers: {
				Authorization: `Bearer ${accessToken}`,
			},
		},
	)

	const userInfo = await userInfoResponse.json()

	if (!userInfoResponse.ok) {
		return NextResponse.json(
			{ error: "Failed to fetch user info", details: userInfo },
			{ status: 400 },
		)
	}

	const googleId = userInfo.sub
	const email = userInfo.email
	const firstName = userInfo.given_name
	const lastName = userInfo.family_name
	const photoUrl = userInfo.picture

	// Шукаємо або створюємо/оновлюємо користувача
	// let user = findUserByGoogleId(googleId)

	// if (user) {
	// 	// Оновлюємо існуючого користувача
	// 	user = updateUser(user.userId, {
	// 		email,
	// 		firstName,
	// 		lastName,
	// 		googleAccessToken: accessToken,
	// 		avatar: photoUrl || undefined,
	// 		updatedAt: new Date().toISOString(),
	// 	})

	// 	if (!user) {
	// 		return NextResponse.json(
	// 			{ error: "Failed to update user" },
	// 			{ status: 500 },
	// 		)
	// 	}
	// } else {
	// 	// Створюємо нового користувача
	// 	const newUser: Omit<User, "userId" | "createdAt" | "updatedAt"> = {
	// 		email,
	// 		password: null,
	// 		firstName,
	// 		lastName,
	// 		phoneNumber: undefined,
	// 		dateOfBirth: undefined,
	// 		address: undefined,
	// 		city: undefined,
	// 		postalCode: undefined,
	// 		country: undefined,
	// 		role: UserRole.User,
	// 		googleId,
	// 		googleAccessToken: accessToken,
	// 		avatar: photoUrl || undefined,
	// 		isActive: true,
	// 		favoriteBooks: [],
	// 	}

	// 	user = createUser(newUser)
	// }

	// Перенаправляємо на головну сторінку з параметрами
	const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
	const redirectUrl = new URL("/", baseUrl)
	redirectUrl.searchParams.set("google_id", googleId)
	redirectUrl.searchParams.set("email", email)
	redirectUrl.searchParams.set("first_name", firstName || "")
	redirectUrl.searchParams.set("last_name", lastName || "")
	redirectUrl.searchParams.set("photo_url", photoUrl || "")
	redirectUrl.searchParams.set("access_token", accessToken)

	return NextResponse.redirect(redirectUrl)
}
