// src/components/hero/VideoSeries.tsx
"use client"

import { Box, Image, Icon } from "@chakra-ui/react"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { FaPlay } from "react-icons/fa"
import Link from "next/link"

// Список відео з YouTube (ID відео)
const videos = [
	{ id: "VKIjoHFyVic", title: "Три круті українських книжки для дітей" },
	{ id: "MgNGMX4Ae_4", title: "Online BookShop Advert" },
	{ id: "6Fp9KofWq9I", title: "Amazon Books | That Reading Feeling Awaits" },
	{ id: "hhLqaWgfBsw", title: "Creative Advertising for Bookstore CHYTAYKA" },
]

export const VideoSeries = () => {
	return (
		<Box
			w={{ base: "100%", md: "70%", lg: "calc(100% - 296px)" }}
			h={{ base: "300px", md: "400px", lg: "500px" }}
			overflow="hidden"
			rounded="30px"
		>
			<Swiper
				modules={[Autoplay, Navigation, Pagination]}
				spaceBetween={0}
				slidesPerView={1}
				loop={true}
				autoplay={{
					delay: 8000,
					disableOnInteraction: false, // не припиняти прокрутку після взаємодії
				}}
				navigation
				pagination={{ clickable: true }}
				style={{ height: "100%", width: "100%" }}
			>
				{videos.map(video => (
					<SwiperSlide key={video.id}>
						<Box position="relative" w="full" h="full">
							<Link
								href={`https://www.youtube.com/watch?v=${video.id}`}
								target="_blank"
								rel="noopener noreferrer"
								style={{ display: "block", width: "100%", height: "100%" }}
							>
								<Image
									src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
									alt={video.title}
									objectFit="cover"
									w="100%"
									h="100%"
									rounded="30px"
								/>
								{/* Іконка Play */}
								<Box
									position="absolute"
									top="50%"
									left="50%"
									transform="translate(-50%, -50%)"
									bg="rgba(0, 0, 0, 0.5)"
									borderRadius="50%"
									p={4}
									display="flex"
									alignItems="center"
									justifyContent="center"
								>
									<Icon as={FaPlay} color="white" boxSize={8} />
								</Box>
							</Link>
						</Box>
					</SwiperSlide>
				))}
			</Swiper>
		</Box>
	)
}
