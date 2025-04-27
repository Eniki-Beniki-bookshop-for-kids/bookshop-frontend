//src/hooks/useBreadcrumbs.ts
"use client"

import { dynamicRoutes, pageLink } from "@/types/constants"
import { PageProps } from "@/types/propsInterfaces"
import { formatSegmentLabel } from "@/utils"
import { usePathname } from "next/navigation"

// Інтерфейс для елементів breadcrumbs
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

			// Шукаємо в pageLink для статичних сторінок
			const page = pageLink.find(p => p.href === currentPath)
			if (page) {
				items.push({
					label: page.label,
					href: currentPath,
					isCurrent: index === pathSegments.length - 1,
				})
				return // Переходимо до наступного сегменту
			}

			// Перевіряємо, чи це динамічний маршрут
			const dynamicRoute = dynamicRoutes.find(
				route =>
					currentPath.startsWith(route.basePath) &&
					index === route.segmentIndex,
			)

			if (dynamicRoute) {
				items.push({
					label: dynamicRoute.getLabel(segment),
					href: currentPath,
					isCurrent: index === pathSegments.length - 1,
				})
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
