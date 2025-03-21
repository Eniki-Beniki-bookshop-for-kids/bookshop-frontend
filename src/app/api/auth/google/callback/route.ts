import { createUser, findUserByGoogleId } from "@/app/api/db"
import { User, UserRole } from "@/types/models"
import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
	const url = new URL(request.url)
	const params = url.searchParams

	const googleId = params.get("id")
	const email = params.get("email")
	const firstName = params.get("first_name")
	const lastName = params.get("last_name")
	const photoUrl = params.get("photo_url")
	const accessToken = params.get("access_token")

	if (!googleId || !email || !firstName || !lastName || !accessToken) {
		return NextResponse.json(
			{ error: "Missing required Google parameters" },
			{ status: 400 },
		)
	}

	let user = findUserByGoogleId(googleId)

	if (!user) {
		const newUser: Omit<User, "userId" | "createdAt" | "updatedAt"> = {
			email,
			password: null,
			firstName,
			lastName,
			phoneNumber: undefined,
			dateOfBirth: undefined,
			address: undefined,
			city: undefined,
			postalCode: undefined,
			country: undefined,
			role: UserRole.User,
			googleId,
			googleAccessToken: accessToken,
			avatar: photoUrl || undefined,
			isActive: true,
			favoriteBooks: [],
		}

		user = createUser(newUser)
	}

	const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
	const redirectUrl = new URL("/", baseUrl)
	redirectUrl.searchParams.set("google_id", googleId)
	redirectUrl.searchParams.set("email", email)
	redirectUrl.searchParams.set("first_name", firstName)
	redirectUrl.searchParams.set("last_name", lastName)
	redirectUrl.searchParams.set("photo_url", photoUrl || "")
	redirectUrl.searchParams.set("access_token", accessToken)

	return NextResponse.redirect(redirectUrl)
}
