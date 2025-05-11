// src/components/book/bookDetails/BookDetailsImages.tsx
"use client"

import { whiteBoxSrc } from "@/types/constants"
import { Book } from "@/types/models"
import { Box, Image } from "@chakra-ui/react"
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
	const [selectedImage, setSelectedImage] = useState<string>(whiteBoxSrc)
	const allImages = book?.images || []

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
		<Box w="400px" paddingX={8} pt={8} pb={6} bg="#FFF" borderRadius="30px">
			{/* Велике зображення */}
			<Box
				w="full"
				h={{ base: "300px", md: "477px" }}
				overflow="hidden"
				position="relative"
			>
				<Image
					key={selectedImage} // важливо для коректного transition
					src={selectedImage}
					alt={book?.title || "Book image"}
					objectFit="cover"
					w="full"
					h="full"
					fallback={<BookFallback type="whiteBox" />}
					transition="opacity 0.3s ease-in-out"
					style={{ opacity: 1 }}
				/>
			</Box>

			{/* Свайпер з маленькими картинками */}
			{thumbnailImages.length > 0 && (
				<Swiper
					modules={[Pagination]}
					spaceBetween={16}
					slidesPerView={4}
					pagination={{
						clickable: true,
						dynamicBullets: true,
					}}
					style={{ width: "100%", marginTop: "20px", paddingBottom: "24px" }}
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
	)
}
