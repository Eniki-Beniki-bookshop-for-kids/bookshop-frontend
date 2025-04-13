// src/app/api/auth/logout/route.ts
import "server-only"

import { supabaseServer as supabase } from "@/lib/supabase/supabaseServer"
import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
	const authHeader = request.headers.get("Authorization")

	if (!authHeader) {
		return NextResponse.json(
			{ error: "Missing Authorization header" },
			{ status: 401 },
		)
	}

	const [tokenType, accessToken] = authHeader.split(" ")

	if (!tokenType || !accessToken || tokenType.toLowerCase() !== "bearer") {
		return NextResponse.json(
			{ error: "Invalid Authorization header" },
			{ status: 401 },
		)
	}

	// Встановлюємо сесію для Supabase
	const { error: sessionError } = await supabase.auth.setSession({
		access_token: accessToken,
		refresh_token: "", // refresh_token не потрібен для signOut
	})

	if (sessionError) {
		console.error("Error setting session:", sessionError.message)
		return NextResponse.json(
			{ error: "Failed to set session", details: sessionError.message },
			{ status: 401 },
		)
	}

	// Завершуємо сесію в Supabase
	const { error } = await supabase.auth.signOut()

	if (error) {
		console.error("Error signing out:", error.message)
		return NextResponse.json(
			{ error: "Failed to sign out", details: error.message },
			{ status: 500 },
		)
	}

	return NextResponse.json({ message: "Successfully signed out" })
}
