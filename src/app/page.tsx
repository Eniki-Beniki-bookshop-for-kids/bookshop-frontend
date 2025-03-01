import Image from "next/image"
import hero from "../../public/images/hero.png"

export default function Home() {
	return (
		<div className="text-center max-w-4xl mx-auto my-0">
			<h1>{"Книгарня Еники-Беники"}</h1>
			<Image
				src={hero}
				alt="Hero"
				width={400}
				height={200}
				layout="responsive"
				sizes="(max-width: 400px) 100vw, (max-width: 400px) 50vw, 400px"
			/>
		</div>
	)
}
