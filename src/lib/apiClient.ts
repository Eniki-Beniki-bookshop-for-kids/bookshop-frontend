// src/app/api/apiClient.ts
import axios from "axios"

const apiClient = axios.create({
	headers: {
		"Content-Type": "application/json",
	},
	validateStatus: function (status) {
		return status < 500 // статуси < 500 не викликають помилку в catch
	},
})

export default apiClient
