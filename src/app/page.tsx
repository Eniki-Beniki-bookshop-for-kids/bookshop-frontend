import Image from "next/image"
import hero from "../../public/images/hero.png"

export default function Home() {
	return (
		<div className="text-center mx-auto my-0">
			<h1>{"Книгарня Еники-Беники"}</h1>
			<Image
				src={hero}
				alt="Hero"
				width={1280}
				height={760}
				layout="responsive"
			/>
		</div>
	)
}
