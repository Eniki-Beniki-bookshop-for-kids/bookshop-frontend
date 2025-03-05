"use client"

import { HeartIcon } from "../components/svg"

export default function Home() {
	const handleToggleFavorite = (isFavoriteOn: boolean) => {
		console.log("Favorite status: ", isFavoriteOn)
	}

	return (
		<div className="text-center mx-auto my-0 justify-center items-center flex">
			<HeartIcon
				colorFill="customGray"
				colorStroke="customBlack"
				size={30}
				onToggle={handleToggleFavorite}
			/>
			<HeartIcon
				colorFill="customViolet"
				colorStroke="customLavender"
				onToggle={handleToggleFavorite}
			/>
			<HeartIcon size={20} isStatic />
		</div>
	)
}
