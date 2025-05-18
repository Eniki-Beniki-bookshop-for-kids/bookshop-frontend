// src/components/book/bookDetails/bookDetailsContent/BookDetailsActionBadge.tsx
"use client"

import { useModal } from "@/context/ModalContext"
import { Book } from "@/types/models"
import { HStack, Text, VStack } from "@chakra-ui/react"
import { IoIosCloseCircleOutline } from "react-icons/io"
import { ButtonTemplate, SuccessCircleIcon } from "../../../ui"
import { BookPrice } from "../../bookCard"

interface BookDetailsActionBadgeProps {
	price: Book["price"]
	stockQuantity: Book["stockQuantity"]
	discount: Book["discount"]
}

export const BookDetailsActionBadge = ({
	price,
	stockQuantity,
	discount,
}: BookDetailsActionBadgeProps) => {
	const { openModal } = useModal()

	return (
		<VStack
			align="start"
			spacing={4}
			p={5}
			w={{ base: "150px", lg: "200px", xl: "266px" }}
			bg="customBgGray"
			borderRadius="30px"
		>
			<VStack align="start" spacing={0}>
				<BookPrice price={price} discount={discount} fontSize={28} />
				{stockQuantity > 0 ? (
					<HStack p={0} m={0}>
						<SuccessCircleIcon />
						<Text
							color="customGreen"
							fontSize={{ base: "12px", lg: "14px", xl: "16px" }}
						>
							В наявності
						</Text>
					</HStack>
				) : (
					<HStack>
						<IoIosCloseCircleOutline color="red" size="18px" />
						<Text
							color="red"
							fontSize={{ base: "12px", lg: "14px", xl: "16px" }}
						>
							Немає в наявності
						</Text>
					</HStack>
				)}
			</VStack>
			<Text
				fontSize={{ base: "12px", lg: "14px", xl: "16px" }}
				color="customDarkGray"
				bg="#FFF"
				borderRadius="20px"
				p="10px"
			>
				Зареєструйтесь, щоб отримати <strong>10 ₴</strong> бонусів після
				покупки.
			</Text>
			<ButtonTemplate
				width="100%"
				padding="12px"
				fontSize="18px"
				hoverScale={1.02}
				onClick={() => openModal("cart")}
			>
				Купити
			</ButtonTemplate>
		</VStack>
	)
}
