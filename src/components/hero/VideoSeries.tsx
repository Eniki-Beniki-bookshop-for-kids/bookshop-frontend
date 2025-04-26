// src/components/hero/VideoSeries.tsx
"use client"

import { Box } from "@chakra-ui/react"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

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
				modules={[Autoplay, Navigation, Pagination]} // Додаємо модулі Swiper
				spaceBetween={0}
				slidesPerView={1}
				loop={true} // Безкінечна прокрутка
				autoplay={{
					delay: 8000, // Інтервал автопрокрутки
					disableOnInteraction: false, // Не продовжувати автопрокрутку після взаємодії
				}}
				navigation // Увімкнути стрілки навігації
				pagination={{ clickable: true }} // Увімкнути пагінацію (крапки)
				style={{ height: "100%", width: "100%" }}
			>
				{videos.map(video => (
					<SwiperSlide key={video.id}>
						<Box position="relative" w="full" h="full">
							<iframe
								width="100%"
								height="100%"
								src={`https://www.youtube-nocookie.com/embed/${video.id}`}
								title={video.title}
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowFullScreen
								style={{ borderRadius: "30px" }}
							/>
						</Box>
					</SwiperSlide>
				))}
			</Swiper>
		</Box>
	)
}
