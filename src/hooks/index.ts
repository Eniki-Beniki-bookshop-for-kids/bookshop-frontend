import { useUserAvatar } from "./useUserAvatar"
import { useAuthModal } from "./useAuthModal"
import { useEmailLoginMutation, useUserQuery } from "./useAuthQueries"
import { useFacebookSignIn } from "./useFacebookSignIn"
import { useGoogleSignIn } from "./useGoogleSignIn"
import { useHandleGoogleAuth } from "./useHandleGoogleAuth"
import { useTelegramSignIn } from "./useTelegramSignIn"

export {
	useAuthModal,
	useEmailLoginMutation,
	useFacebookSignIn,
	useGoogleSignIn,
	useHandleGoogleAuth,
	useTelegramSignIn,
	useUserQuery,
	useUserAvatar,
}
