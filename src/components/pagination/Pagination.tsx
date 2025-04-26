// src/components/pagination/Pagination.tsx
"use client"

import { Button, HStack, IconButton, Text } from "@chakra-ui/react"
import { ArrowLeftIcon, ArrowRightIcon } from "../ui"

interface PaginationProps {
	currentPage: number
	totalPages: number
	pageNumbers: (number | string)[]
	onPageChange: (page: number) => void
}

export const Pagination = ({
	currentPage,
	totalPages,
	pageNumbers,
	onPageChange,
}: PaginationProps) => {
	return (
		<HStack justify="center" spacing={2} my={8}>
			{/* Кнопка "Попередня" */}
			<IconButton
				aria-label="Previous page"
				icon={<ArrowLeftIcon size={20} />}
				onClick={() => onPageChange(currentPage - 1)}
				isDisabled={currentPage === 1}
				variant="outline"
				borderRadius="full"
				bg="#FFF"
			/>

			{/* Номери сторінок */}
			{pageNumbers.map((page, idx) => {
				if (page === "...") {
					return (
						<Text key={`ellipsis-${idx}`} px={2}>
							...
						</Text>
					)
				}

				return (
					<Button
						key={page}
						onClick={() => onPageChange(Number(page))}
						variant={currentPage === page ? "solid" : "outline"}
						bg={currentPage === page ? "customViolet" : "#FFF"}
						color={currentPage === page ? "#FFF" : "customBlack"}
						borderRadius="full"
						fontSize="18px"
						fontWeight="400"
					>
						{page}
					</Button>
				)
			})}

			{/* Кнопка "Наступна" */}
			<IconButton
				aria-label="Next page"
				icon={<ArrowRightIcon size={20} />}
				onClick={() => onPageChange(currentPage + 1)}
				isDisabled={currentPage === totalPages}
				variant="outline"
				bg="#FFF"
				borderRadius="full"
			/>
		</HStack>
	)
}
