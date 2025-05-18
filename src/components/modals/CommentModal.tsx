//src/components/modals/CommentModal.tsx
"use client"

import { useModal } from "@/context/ModalContext"
import { Review } from "@/types/models"
import { ModalTemplateProps } from "@/types/propsInterfaces"
import {
	FormControl,
	FormLabel,
	HStack,
	Icon,
	Input,
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	VStack,
} from "@chakra-ui/react"
import { FC, useState } from "react"
import { FaStar } from "react-icons/fa"
import { ButtonTemplate } from "../ui"

export const CommentModal: FC<ModalTemplateProps> = ({ isOpen, onClose }) => {
	const { modalOptions } = useModal()
	const [reviewName, setReviewName] = useState("")
	const [reviewText, setReviewText] = useState("")
	const [rating, setRating] = useState(0)

	const handleSubmit = () => {
		const currentDate = new Date().toISOString()

		const maxReviewId = modalOptions?.book
			? (modalOptions.book.reviews || []).reduce(
					(max, review) => Math.max(max, review.reviewId),
					0,
			  )
			: 0

		const review: Review = {
			bookId: modalOptions?.book?.bookId || 0,
			reviewId: (modalOptions?.book?.reviews?.length ?? 0) + 1,
			reviewName,
			rating,
			reviewText,
			reviewDate: currentDate,
			source: undefined,
			avatar: undefined,
			createdAt: currentDate,
			updatedAt: currentDate,
		}

		console.log("Новий відгук:", review)
		onClose()
	}

	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>Залишити відгук</ModalHeader>
				<ModalBody>
					<VStack spacing={4}>
						<FormControl>
							<FormLabel>Ваше ім’я</FormLabel>
							<Input
								type="text"
								placeholder="Введіть ваше ім’я"
								value={reviewName}
								onChange={e => setReviewName(e.target.value)}
							/>
						</FormControl>

						<FormControl>
							<FormLabel>Оцінка</FormLabel>
							<HStack>
								{[1, 2, 3, 4, 5].map(star => (
									<Icon
										key={star}
										as={FaStar}
										boxSize={6}
										color={star <= rating ? "customYellow" : "customLightGray"}
										cursor="pointer"
										onClick={() => setRating(star)}
									/>
								))}
							</HStack>
						</FormControl>

						<FormControl>
							<FormLabel>Текст відгуку</FormLabel>
							<Input
								as="textarea"
								minH="100px"
								placeholder="Напишіть ваш відгук"
								value={reviewText}
								onChange={e => setReviewText(e.target.value)}
								style={{ resize: "vertical" }}
							/>
						</FormControl>
					</VStack>
				</ModalBody>
				<ModalFooter gap={4}>
					<ButtonTemplate
						width="100%"
						bgColor="customGray"
						hoverScale={1.02}
						onClick={() => onClose()}
					>
						Скасувати
					</ButtonTemplate>
					<ButtonTemplate
						width="100%"
						hoverScale={1.02}
						onClick={handleSubmit}
						isDisabled={!reviewName || !reviewText || rating === 0}
					>
						Відправити
					</ButtonTemplate>
				</ModalFooter>
			</ModalContent>
		</Modal>
	)
}
