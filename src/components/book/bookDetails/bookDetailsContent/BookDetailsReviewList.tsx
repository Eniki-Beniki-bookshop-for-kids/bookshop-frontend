// src/components/book/bookDetails/bookDetailsContent/BookDetailsReviewList.tsx

import { Review } from "@/types/models"
import { formatDate } from "@/utils"
import { HStack, Icon, Text, VStack } from "@chakra-ui/react"
import { FaStar } from "react-icons/fa"
import "swiper/css"
import "swiper/css/autoplay"
import { Swiper, SwiperSlide } from "swiper/react"

interface BookDetailsReviewListProps {
	reviews: Review[]
}

export const BookDetailsReviewList = ({
	reviews,
}: BookDetailsReviewListProps) => {
	return (
		<Swiper
			direction="vertical"
			slidesPerView={2} // Одночасно видно 2 відгуки
			spaceBetween={16}
			style={{ width: "100%", height: "260px", overflowY: "auto" }} // Висота для 2 відгуків
		>
			{reviews.map(
				({ reviewId, reviewName, rating, reviewDate, reviewText }) => (
					<SwiperSlide key={reviewId}>
						<VStack
							align="start"
							spacing={1}
							pr={4}
							borderBottomWidth={1}
							borderColor="customStroke"
						>
							<HStack w="full" justify="space-between">
								<Text
									fontSize={{ base: "14px", lg: "16px" }}
									fontWeight="bold"
									color="customBlack"
								>
									{reviewName}
								</Text>
								<HStack>
									{[1, 2, 3, 4, 5].map(star => (
										<Icon
											key={star}
											as={FaStar}
											boxSize={4}
											color={
												star <= rating ? "customYellow" : "customLightGray"
											}
										/>
									))}
								</HStack>
							</HStack>
							<Text
								fontSize={{ base: "10px", lg: "12px" }}
								color="customDarkGray"
							>
								{formatDate(reviewDate)}
							</Text>
							<Text
								fontSize={{ base: "14px", lg: "16px" }}
								color="customBlack"
								whiteSpace="normal"
							>
								{reviewText}
							</Text>
						</VStack>
					</SwiperSlide>
				),
			)}
		</Swiper>
	)
}
