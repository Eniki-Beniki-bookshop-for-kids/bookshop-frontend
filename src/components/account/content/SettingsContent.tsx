"use client"

import { useAuthStore } from "@/stores/authStore"
import {
	Button,
	FormControl,
	FormLabel,
	Input,
	Select,
	VStack,
} from "@chakra-ui/react"

export const SettingsContent = () => {
	const { user } = useAuthStore()

	if (!user) {
		return null
	}

	return (
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
	)
}
