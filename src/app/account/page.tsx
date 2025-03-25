"use client"

import { HeaderPage } from "@/components"
import { AccountSidebar } from "@/components/account"
import { useAuthStore } from "@/stores/authStore"
import {
	Box,
	Button,
	FormControl,
	FormLabel,
	Grid,
	GridItem,
	Heading,
	Input,
	Select,
	VStack,
} from "@chakra-ui/react"

export default function AccountPage() {
	const { user } = useAuthStore()

	if (!user) {
		return null
	}

	return (
		<Box pb={12}>
			<Grid
				templateAreas={{
					base: `"title" "sidebar" "main"`, // На мобільних: вертикально
					md: `"title title" "sidebar main"`, // На десктопі: заголовок на всю ширину, потім сайдбар і контент
				}}
				gridTemplateRows={{ base: "auto auto auto", md: "auto 1fr" }}
				gridTemplateColumns={{ base: "1fr", md: "auto 1fr" }}
			>
				<HeaderPage title="Особистий кабінет" />
				<AccountSidebar />
				{/* Основний контент */}
				<GridItem area="main" ml={8}>
					<Box p={6} bg="white" borderRadius="lg" boxShadow="sm">
						<Heading as="h2" size="md" mb={6}>
							Особиста інформація
						</Heading>
						<VStack spacing={4} align="start">
							<FormControl>
								<FormLabel>Ім’я</FormLabel>
								<Input defaultValue={user.firstName} />
							</FormControl>
							<FormControl>
								<FormLabel>Прізвище</FormLabel>
								<Input defaultValue={user.lastName} />
							</FormControl>
							<FormControl>
								<FormLabel>Номер телефону</FormLabel>
								<Input defaultValue={user.phoneNumber} />
							</FormControl>
							<FormControl>
								<FormLabel>Електронна пошта</FormLabel>
								<Input defaultValue={user.email} />
							</FormControl>
							<FormControl>
								<FormLabel>Дата народження</FormLabel>
								<Input type="date" defaultValue={user.dateOfBirth} />
							</FormControl>
							<FormControl>
								<FormLabel>Стать</FormLabel>
								<Select defaultValue={user.gender}>
									<option value="male">Чоловік</option>
									<option value="female">Жінка</option>
								</Select>
							</FormControl>
							<Button colorScheme="blue">Зберегти зміни</Button>
						</VStack>
					</Box>
				</GridItem>
			</Grid>
		</Box>
	)
}
