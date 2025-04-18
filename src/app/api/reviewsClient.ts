// src/app/api/reviewsClient.ts
import apiClient from "@/lib/apiClient"
import { ApiErrorResponse } from "@/types/interfaces"
import { Review } from "@/types/models"
import { AxiosError } from "axios"

const REVIEW_ENDPOINT = "/api/reviews"

export const getReviewsByBookId = async (bookId: number): Promise<Review[]> => {
	try {
		const response = await apiClient.get<Review[]>(
			`${REVIEW_ENDPOINT}/${bookId}`,
		)
		return response.data
	} catch (error) {
		const axiosError = error as AxiosError<ApiErrorResponse>
		throw new Error(
			axiosError.response?.data?.message || "Failed to fetch reviews",
		)
	}
}
