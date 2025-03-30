import { useSettingsForm } from "@/hooks"
import { Box, VStack } from "@chakra-ui/react"
import { ChangeAvatar } from "./ChangeAvatar"
import { SettingSubmitBtn } from "./SettingSubmitBtn"
import { SettingsFields } from "./SettingsFields"

export const SettingsContent = () => {
	const {
		formData,
		errors,
		handleChange,
		handleSubmit,
		handleAvatarChange,
		isAvatarUpdating, isUserUpdating
	} = useSettingsForm()

	return (
		<VStack spacing={6} align="start" width="100%">
			<ChangeAvatar
				handleAvatarChange={handleAvatarChange}
				isUpdating={isAvatarUpdating}
			/>
			<SettingsFields
				formData={formData}
				handleChange={handleChange}
				errors={errors}
			/>
			<Box
				display="flex"
				width="100%"
				justifyContent="right"
				alignItems="center"
			>
				<SettingSubmitBtn onSubmit={handleSubmit} isUpdating={isUserUpdating} />
			</Box>
		</VStack>
	)
}
