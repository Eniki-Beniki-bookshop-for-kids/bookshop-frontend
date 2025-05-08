"use client"

import { dynamicRoutes, pageLink } from "@/types/constants"
import { PageProps } from "@/types/propsInterfaces"
import { formatSegmentLabel } from "@/utils"
import { usePathname } from "next/navigation"

interface BreadcrumbItem extends PageProps {
	isCurrent?: boolean
}

export const useBreadcrumbs = () => {
	const pathname = usePathname()

	// Не показуємо Breadcrumbs на головній сторінці
	if (pathname === "/") return { breadcrumbs: [] }

	// Формуємо масив breadcrumbs
	const breadcrumbs: BreadcrumbItem[] = (() => {
		const items: BreadcrumbItem[] = [pageLink[0]] // Додаємо "Головна"
		const pathSegments = pathname.split("/").filter(segment => segment)

		let currentPath = ""
		pathSegments.forEach((segment, index) => {
			currentPath += `/${segment}`

			// Пропускаємо сегмент "book" у /catalog/book
			if (currentPath === "/catalog/book") {
				return // Пропускаємо "book"
			}

			// Пропускаємо сегмент "[bookId]" у /catalog/book/[genre]/[bookId]
			if (
				currentPath.startsWith("/catalog/book/") &&
				pathSegments.length === 4 && // Переконуємося, що це повний шлях із 4 сегментами
				index === 3 // Сегмент "[bookId]"
			) {
				return // Пропускаємо "[bookId]"
			}

			// Шукаємо в pageLink для статичних сторінок
			const page = pageLink.find(p => p.href === currentPath)
			if (page) {
				items.push({
					label: page.label,
					href: currentPath,
					isCurrent: index === pathSegments.length - 1,
				})
				return
			}

			// Перевіряємо, чи це динамічний маршрут
			const dynamicRoute = dynamicRoutes.find(
				route =>
					currentPath.startsWith(route.basePath) &&
					index === route.segmentIndex,
			)

			if (dynamicRoute) {
				// Спеціальна обробка для жанру в маршруті /catalog/book/[genre]/[bookId]
				if (dynamicRoute.basePath === "/catalog/book" && index === 2) {
					const genreSegment = pathSegments[2] // Сегмент genre
					const correctPath = `/catalog/${genreSegment}` // Формуємо правильний шлях для жанру
					items.push({
						label: dynamicRoute.getLabel(segment),
						href: correctPath,
						isCurrent: index === pathSegments.length - 1,
					})
				} else {
					items.push({
						label: dynamicRoute.getLabel(segment),
						href: currentPath,
						isCurrent: index === pathSegments.length - 1,
					})
				}
			} else {
				// Для невідомих маршрутів використовуємо форматований сегмент як label
				items.push({
					label: formatSegmentLabel(segment),
					href: currentPath,
					isCurrent: index === pathSegments.length - 1,
				})
			}
		})

		return items
	})()

	return { breadcrumbs }
}
