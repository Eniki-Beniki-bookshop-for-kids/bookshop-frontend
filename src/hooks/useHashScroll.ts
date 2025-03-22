import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { scroller } from "react-scroll"

export const useHashScroll = (offset = -258) => {
	const pathname = usePathname()
	const [hash, setHash] = useState("")

	useEffect(() => {
		// Функція для скролінгу
		const scrollToElement = (elementId: string) => {
			scroller.scrollTo(elementId, {
				duration: 800,
				delay: 0,
				smooth: "easeInOutCubic",
				offset,
			})
		}

		// Встановлюємо початковий hash
		const initialHash = window.location.hash
		setHash(initialHash)

		// Скролимо при завантаженні сторінки, якщо є hash
		if (initialHash) {
			const elementId = initialHash.replace("#", "")
			scrollToElement(elementId)
		}

		// Обробляємо зміну hash
		const handleHashChange = () => {
			const newHash = window.location.hash
			setHash(newHash)

			if (newHash) {
				const elementId = newHash.replace("#", "")
				scrollToElement(elementId)
			}
		}

		window.addEventListener("hashchange", handleHashChange)
		return () => window.removeEventListener("hashchange", handleHashChange)
	}, [pathname, offset])

	return { hash }
}
