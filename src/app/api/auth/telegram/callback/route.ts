import crypto from "crypto"
import { NextResponse } from "next/server"

export async function GET(request: Request) {
	const url = new URL(request.url)
	const params = url.searchParams

	// Отримуємо дані користувача від Telegram
	const id = params.get("id")
	const firstName = params.get("first_name")
	const lastName = params.get("last_name")
	const username = params.get("username")
	const photoUrl = params.get("photo_url")
	const authDate = params.get("auth_date")
	const hash = params.get("hash")

	if (!id || !authDate || !hash) {
		return NextResponse.json(
			{ error: "Missing required Telegram parameters" },
			{ status: 400 },
		)
	}

	// Перевіряємо хеш для безпеки
	const botToken = process.env.TELEGRAM_BOT_TOKEN
	if (!botToken) {
		return NextResponse.json(
			{ error: "Telegram bot token not configured" },
			{ status: 500 },
		)
	}

	const dataCheckString = Array.from(params.entries())
		.filter(([key]) => key !== "hash")
		.sort(([a], [b]) => a.localeCompare(b))
		.map(([key, value]) => `${key}=${value}`)
		.join("\n")

	const secretKey = crypto.createHash("sha256").update(botToken).digest()
	const computedHash = crypto
		.createHmac("sha256", secretKey)
		.update(dataCheckString)
		.digest("hex")

	if (computedHash !== hash) {
		return NextResponse.json({ error: "Invalid hash" }, { status: 403 })
	}

	// Дані валідні, виводимо їх у консоль
	console.log("Telegram User Data:", {
		id,
		firstName,
		lastName,
		username,
		photoUrl,
		authDate,
	})

	// Використовуємо змінну середовища для базового URL
	const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
	const redirectUrl = new URL("/", baseUrl)
	redirectUrl.searchParams.set("telegram_id", id)
	redirectUrl.searchParams.set("first_name", firstName || "")
	redirectUrl.searchParams.set("last_name", lastName || "")
	redirectUrl.searchParams.set("username", username || "")
	redirectUrl.searchParams.set("photo_url", photoUrl || "")
	redirectUrl.searchParams.set("auth_date", authDate)

	return NextResponse.redirect(redirectUrl)
}
