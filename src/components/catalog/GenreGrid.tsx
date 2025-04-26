// src/components/catalog/GenreGrid.tsx
"use client"

import { Box, SimpleGrid, Text, VStack } from "@chakra-ui/react"
import Image from "next/image"
import Link from "next/link"

interface GenreGridProps {
	genres: Array<{ href: string; label: string }>
	catalogImages: string[]
	startIndex: number
}

export const GenreGrid = ({
	genres,
	catalogImages,
	startIndex,
}: GenreGridProps) => {
	return (
		<SimpleGrid
			columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
			spacing={6}
			alignItems="stretch"
		>
			{genres.map((item, idx) => {
				const imageIndex = (startIndex + idx) % catalogImages.length
				const selectedImage = catalogImages[imageIndex]

				return (
					<Link href={item.href} key={item.label} target="_self">
						<Box
							bg="customMediumGray"
							py={20}
							px={5}
							rounded="30px"
							borderWidth={1}
							borderColor="customViolet"
							textAlign="center"
							transition="all 0.3s ease-in-out"
							_hover={{ transform: "scale(1.02)" }}
							display="flex"
							flexDirection="column"
							h="100%"
						>
							<VStack spacing={3} flex="1" justify="center">
								<Text fontSize="24px" fontWeight="400">
									{item.label}
								</Text>
								<Image
									priority
									src={selectedImage}
									alt="Genre Image"
									width={80}
									height={80}
									style={{ objectFit: "cover", width: "auto", height: "60%" }}
								/>
							</VStack>
						</Box>
					</Link>
				)
			})}
		</SimpleGrid>
	)
}
