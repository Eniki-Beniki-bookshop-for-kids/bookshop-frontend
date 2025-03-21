// src/app/api/db.ts
// фейкова БД

import bcrypt from "bcryptjs"
import { User, UserRole } from "../../types/models"

// Імітація бази даних (масив користувачів)
const users: User[] = [
	{
		userId: 1,
		email: "admin@example.com",
		password: bcrypt.hashSync("admin123", 10), // захешований пароль
		firstName: "Admin",
		lastName: "User",
		phoneNumber: "+380123456789",
		dateOfBirth: "1990-01-01T00:00:00Z",
		address: "123 Admin Street",
		city: "Kyiv",
		postalCode: "01001",
		country: "Ukraine",
		role: UserRole.Admin,
		googleId: null,
		googleAccessToken: null,
		avatar: null,
		isActive: true,
		favoriteBooks: [1, 2, 3],
		createdAt: "2024-01-01T12:00:00Z",
		updatedAt: "2024-01-01T12:00:00Z",
	},
]

// Функція для пошуку користувача за email
export const findUserByEmail = (email: string): User | undefined => {
	return users.find(user => user.email === email)
}

// Функція для пошуку користувача за googleId
export const findUserByGoogleId = (googleId: string): User | undefined => {
	return users.find(user => user.googleId === googleId)
}

// Функція для створення нового користувача
export const createUser = (
	user: Omit<User, "userId" | "createdAt" | "updatedAt">,
): User => {
	const newUser: User = {
		...user,
		userId: users.length + 1,
		createdAt: new Date().toISOString(),
		updatedAt: new Date().toISOString(),
	}
	users.push(newUser)
	return newUser
}

// Функція для оновлення користувача
export const updateUser = (
	userId: number,
	updates: Partial<User>,
): User | undefined => {
	const userIndex = users.findIndex(user => user.userId === userId)
	if (userIndex === -1) return undefined

	const updatedUser = {
		...users[userIndex],
		...updates,
		updatedAt: new Date().toISOString(),
	}
	users[userIndex] = updatedUser
	return updatedUser
}
