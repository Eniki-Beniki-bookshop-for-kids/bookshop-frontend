// src/app/api/db.ts
// фейкова БД

import { users } from "../../types/fakeData"
import { User } from "../../types/models"

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
