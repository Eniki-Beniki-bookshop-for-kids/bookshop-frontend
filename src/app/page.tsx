"use client"

import {
	BasketIconBtn,
	BellIcon,
	BookCatalogIcon,
	ChatIcon,
	HeartIconBtn,
	PigIcon,
	SearchIcon,
	SettingIcon,
	UserIconBtn,
	WalletIcon,
} from "../components/ui"

export default function Home() {
	return (
		<div className="mx-auto my-0 justify-center flex gap-20 py-5">
			<div className="text-center text-2xl items-center flex flex-col gap-2">
				<div className="text-2xl">BUTTONS</div>
				<BasketIconBtn onClick={() => console.log("Basket clicked")} />
				<UserIconBtn onClick={() => console.log("UserIcon clicked")} />
				<HeartIconBtn
					onToggle={() => console.log("HeartIcon Violet clicked")}
				/>
				<HeartIconBtn
					colorFill="transparent"
					colorStroke="customDarkGray"
					onToggle={() => console.log("HeartIcon Black clicked")}
				/>
			</div>
			<div className="text-center text-2xl items-center flex flex-col gap-2">
				<div className="text-2xl">NON-CLICKABLE ICONS</div>
				<BellIcon />
				<BookCatalogIcon />
				<ChatIcon />
				<WalletIcon size={40} color="customViolet" />
				<WalletIcon />
				<SettingIcon />
				<SearchIcon />
				<PigIcon />
			</div>
		</div>
	)
}
