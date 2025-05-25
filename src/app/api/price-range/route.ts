// src/app/api/price-range/route.ts
import { supabaseServer } from "@/lib/supabase/supabaseServer"
import { NextResponse } from "next/server"

export async function GET() {
	try {
		const { data, error } = await supabaseServer.rpc("get_price_range")
		if (error) throw error

		const minPrice = data?.[0]?.min_price ?? 0
		const maxPrice = data?.[0]?.max_price ?? 1000
		return NextResponse.json({ priceRange: [minPrice, maxPrice] })
	} catch {
		return NextResponse.json(
			{ error: "Failed to fetch price range" },
			{ status: 500 },
		)
	}
}
