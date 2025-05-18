// src/components/book/bookDetails/BookDetailsImages.tsx
"use client"

import { adaptiveHeigh, whiteBoxSrc } from "@/types/constants"
import { Book } from "@/types/models"
import { Box, Image, VStack } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import "swiper/css"
import "swiper/css/pagination"
import { Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { BookFallback } from "../BookFallback"

interface BookDetailsImagesProps {
	book: Book | null
}

export const BookDetailsImages = ({ book }: BookDetailsImagesProps) => {
	const allImages = book?.images || []
	const [selectedImage, setSelectedImage] = useState<string>(whiteBoxSrc)

	useEffect(() => {
		if (book && book.images.length > 0) {
			setSelectedImage(book.images[0])
		}
	}, [book])

	const handleImageSelect = (image: string) => {
		if (image !== selectedImage && allImages.includes(image)) {
			setSelectedImage(image)
		}
	}

	const thumbnailImages = allImages.filter(image => image !== selectedImage)

	return (
		<VStack px={8} pt={8} pb={6} w="full">
			{/* Велике зображення */}
			<Box overflow="hidden" position="relative" w="100%" h={adaptiveHeigh}>
				<Image
					src={selectedImage}
					alt={book?.title || "Book image"}
					objectFit="cover"
					w="100%"
					h="100%"
					fallback={<BookFallback type="whiteBox" />}
				/>
			</Box>

			{/* Свайпер з маленькими картинками */}
			<Box w="full">
				{thumbnailImages.length > 0 && (
					<Swiper
						modules={[Pagination]}
						spaceBetween={16}
						breakpoints={{
							0: { slidesPerView: 2 },
							425: { slidesPerView: 3 },
							768: { slidesPerView: 4 },
							1280: { slidesPerView: 5 },
						}}
						pagination={{
							clickable: true,
							dynamicBullets: true,
						}}
						style={{ marginTop: "20px", paddingBottom: "24px" }}
					>
						{thumbnailImages.map((image, idx) => (
							<SwiperSlide key={image + idx}>
								<Box w="full" h="72px" cursor="pointer">
									<Image
										src={image}
										alt={`Book ${book?.title} image #${idx + 1}`}
										objectFit="cover"
										w="full"
										h="full"
										onClick={() => handleImageSelect(image)}
										fallback={<BookFallback type="whiteBox" />}
										transition="all 0.2s ease-in-out"
										_hover={{ transform: "scale(1.05)" }}
									/>
								</Box>
							</SwiperSlide>
						))}
					</Swiper>
				)}
			</Box>
		</VStack>
	)
}
