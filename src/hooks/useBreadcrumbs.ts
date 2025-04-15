//src/hooks/useBreadcrumbs.ts
"use client"

import { genreLink, pageLink } from "@/types/constants"
import { PageProps } from "@/types/propsInterfaces"
import { usePathname } from "next/navigation"
interface BreadcrumbItem extends PageProps {
	isCurrent?: boolean
}

export const useBreadcrumbs = () => {
	const pathname = usePathname()

	// Не показуємо Breadcrumbs на головній сторінці
	if (pathname === "/") {
		return { breadcrumbs: [] }
	}

	// Формуємо масив breadcrumbs
	const breadcrumbs: BreadcrumbItem[] = (() => {
		const items: BreadcrumbItem[] = [pageLink[0]] // Головна
		const pathSegments = pathname.split("/").filter(segment => segment) // ["catalog", "poetry"]

		let currentPath = ""
		pathSegments.forEach((segment, index) => {
			currentPath += `/${segment}`

			// Якщо це /catalog, шукаємо в pageLink
			if (currentPath === "/catalog") {
				const page = pageLink.find(p => p.href === currentPath)
				if (page) {
					items.push({
						label: page.label,
						href: currentPath,
						isCurrent: index === pathSegments.length - 1,
					})
				}
			}
			// Якщо це жанр, шукаємо в genreLink
			else if (pathSegments[0] === "catalog") {
				const genre = genreLink.find(g => g.href === `/${segment}`)
				if (genre) {
					items.push({
						label: genre.label,
						href: currentPath,
						isCurrent: index === pathSegments.length - 1,
					})
				} else {
					items.push({
						label: segment, // Показуємо сам сегмент, якщо жанр не знайдено
						href: currentPath,
						isCurrent: index === pathSegments.length - 1,
					})
				}
			}
			// Для інших сторінок шукаємо в pageLink
			else {
				const page = pageLink.find(p => p.href === currentPath)
				if (page) {
					items.push({
						label: page.label,
						href: currentPath,
						isCurrent: index === pathSegments.length - 1,
					})
				}
			}
		})

		return items
	})()

	return { breadcrumbs }
}
