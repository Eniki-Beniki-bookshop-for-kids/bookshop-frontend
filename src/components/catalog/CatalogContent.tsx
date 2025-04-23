"use client"

import { catalogMenu } from "@/types/constants"
import { Box, SimpleGrid, Text, VStack } from "@chakra-ui/react"
import { random } from "lodash"
import Image from "next/image"
import Link from "next/link"

export const CatalogContent = () => {
	const catalogImages = [
		"/images/book_with_heart.png",
		"/images/book_smile.png",
		"/images/book_teacher.png",
	]

	return (
		<SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={6}>
			{catalogMenu.map(item => (
				<Link href={item.href} key={item.label}>
					<Box
						bg="customMediumGray"
						py={20}
						px={5}
						rounded="30px"
						borderWidth="1px solid"
						borderColor="customViolet"
						textAlign="center"
						transition="all 0.3s ease-in-out"
						_hover={{ transform: "scale(1.02)" }}
					>
						<VStack spacing={13}>
							<Text fontSize="24px" fontWeight="400">
								{item.label}
							</Text>
							<Image
								priority
								src={catalogImages[random(0, 2)]}
								alt="User Avatar"
								width={142}
								height={158}
								style={{ objectFit: "cover", width: "100%", height: "100%" }}
							/>
						</VStack>
					</Box>
				</Link>
			))}
		</SimpleGrid>
	)
}
