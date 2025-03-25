import { useModal } from "@/context/ModalContext"
import { useAuthStore } from "@/stores/authStore"
import { formatPhoneNumber } from "@/utils"
import { Box, HStack, Text } from "@chakra-ui/react"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { HeaderUserIcon } from "../../header"

export const SidebarHeader = () => {
	const { user } = useAuthStore()
	const { openModal } = useModal()
	const router = useRouter()

	useEffect(() => {
		if (!user) {
			openModal("login")
			router.push("/")
		}
	}, [user, openModal, router])

	if (!user) {
		return null
	}

	return (
		<HStack spacing="10px">
			<HeaderUserIcon size={54} isStatic />
			<Box
				display="flex"
				flexDirection="column"
				justifyContent="space-between"
				minH="54px"
			>
				{user.firstName && user.lastName && (
					<Text fontWeight={600}>
						{user.firstName} {user.lastName}
					</Text>
				)}
				{user.phoneNumber && <Text>{formatPhoneNumber(user.phoneNumber)}</Text>}
			</Box>
		</HStack>
	)
}
