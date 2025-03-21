// src/app/api/user/route.ts

import { findUserByEmail } from "@/app/api/db"
import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
	const url = new URL(request.url)
	const email = url.searchParams.get("email")

	if (!email) {
		return NextResponse.json({ error: "Email is required" }, { status: 400 })
	}

	const user = findUserByEmail(email)
	if (!user) {
		return NextResponse.json({ error: "User not found" }, { status: 404 })
	}

	return NextResponse.json(user, { status: 200 })
}
