"use client"

import {
	HeartCardIcon,
	HeartHeaderIcon,
	HeartUserIcon,
} from "../components/svg"

export default function Home() {
	const handleToggleFavorite = (isFavorite: boolean) => {
		console.log("Favorite status: ", isFavorite)
	}

	return (
		<div className="text-center mx-auto my-0 justify-center items-center flex">
			<HeartCardIcon onToggle={handleToggleFavorite} />
			<HeartHeaderIcon />
			<HeartUserIcon />
		</div>
	)
}
