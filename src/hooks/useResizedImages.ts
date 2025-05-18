// src/hooks/useResizedImages.ts
"use client"

import { useEffect, useState } from "react"
import Resizer from "react-image-file-resizer"

const resizeImage = (
	file: File,
	maxWidth: number,
	maxHeight: number,
): Promise<string> => {
	return new Promise(resolve => {
		Resizer.imageFileResizer(
			file,
			maxWidth,
			maxHeight,
			"JPEG",
			100, // Якість 100%
			0, // Без повороту
			uri => resolve(uri as string),
			"base64",
		)
	})
}

export const useResizedImages = (
	imageUrls: string[] = [],
	maxWidth = 345,
	maxHeight = 477,
) => {
	const [resizedImages, setResizedImages] = useState<string[]>([])

	useEffect(() => {
		const processImages = async () => {
			const resized = await Promise.all(
				imageUrls.map(async url => {
					try {
						const response = await fetch(url)
						const blob = await response.blob()
						const file = new File([blob], "image.jpg", { type: "image/jpeg" })
						return await resizeImage(file, maxWidth, maxHeight)
					} catch (error) {
						console.error("Помилка обробки зображення:", error)
						return url // У разі помилки повертаємо оригінальний URL
					}
				}),
			)
			setResizedImages(resized)
		}

		if (imageUrls.length > 0) {
			processImages()
		}
	}, [imageUrls, maxWidth, maxHeight])

	return resizedImages
}
