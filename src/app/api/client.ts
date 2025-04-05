// src/app/api/client.ts
import apiClient from "@/lib/apiClient"
import { ApiErrorResponse, AuthResponse } from "@/types/interfaces"
import { User } from "@/types/models"
import { AxiosError } from "axios"

const base_url = "/api/auth"

// Загальна функція для аутентифікації (реєстрація або логін)
export const authWithEmail = async (
	email: string,
	password: string,
	endpoint: "signup" | "login",
): Promise<AuthResponse> => {
	try {
		const response = await apiClient.post<AuthResponse>(`${base_url}/email`, {
			email,
			password,
			endpoint,
		})
		return response.data
	} catch (error: unknown) {
		const axiosError = error as AxiosError<ApiErrorResponse>
		// Логуємо деталі помилки, включаючи статус
		console.error(
			`Error in ${endpoint} (Status: ${axiosError.response?.status || "N/A"}):`,
			axiosError.toJSON?.() || axiosError,
		)

		if (axiosError.response) {
			// Сервер відповів із статусом поза 2xx (але < 500 через validateStatus)
			const message =
				axiosError.response.data?.message ||
				`Failed to ${endpoint} with email (Status: ${axiosError.response.status})`
			throw new Error(message)
		} else if (axiosError.request) {
			// Запит був зроблений, але відповіді не отримано
			throw new Error(
				`No response received during ${endpoint}. Please check your network.`,
			)
		} else {
			// Помилка налаштування запиту
			throw new Error(
				`Error setting up ${endpoint} request: ${
					axiosError.message || "Unknown error"
				}`,
			)
		}
	}
}

// Отримання даних користувача
export const fetchUser = async (
	accessToken: string,
	tokenType: string,
): Promise<User> => {
	try {
		const response = await apiClient.get<User>(`${base_url}/user/me`, {
			headers: {
				Authorization: `${tokenType} ${accessToken}`,
			},
		})
		return response.data
	} catch (error: unknown) {
		const axiosError = error as AxiosError<ApiErrorResponse>
		console.error(
			`Error fetching user (Status: ${axiosError.response?.status || "N/A"}):`,
			axiosError.toJSON?.() || axiosError,
		)

		if (axiosError.response) {
			const message =
				axiosError.response.data?.message ||
				`Failed to fetch user (Status: ${axiosError.response.status})`
			throw new Error(message)
		} else if (axiosError.request) {
			throw new Error(
				"No response received while fetching user. Please check your network.",
			)
		} else {
			throw new Error(
				`Error setting up fetch user request: ${
					axiosError.message || "Unknown error"
				}`,
			)
		}
	}
}
