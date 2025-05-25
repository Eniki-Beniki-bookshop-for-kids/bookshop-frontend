// middleware.ts
import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"

export function middleware(request: NextRequest) {
	if (
		request.nextUrl.pathname ===
		"/.well-known/appspecific/com.chrome.devtools.json"
	) {
		return NextResponse.json({}, { status: 200 })
	}
	return NextResponse.next()
}

export const config = {
	matcher: ["/.well-known/appspecific/com.chrome.devtools.json"],
}
