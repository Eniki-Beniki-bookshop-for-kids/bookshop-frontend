import bcrypt from "bcryptjs"
import { User, UserRole } from "./models"

// Імітація бази даних (масив користувачів)
export const users: User[] = [
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
		avatar: null,
		isActive: true,
		favoriteBooks: [1, 2, 3],
		createdAt: "2024-01-01T12:00:00Z",
		updatedAt: "2024-01-01T12:00:00Z",
	},
]
