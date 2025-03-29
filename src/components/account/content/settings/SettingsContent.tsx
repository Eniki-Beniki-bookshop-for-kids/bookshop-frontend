import { FormData, useSettingsForm } from "@/hooks/useSettingsForm"
import { Gender } from "@/types/models"
import { Box, SimpleGrid, VStack } from "@chakra-ui/react"
import { AccountSelectTemplate, CustomInputTemplate } from "../../../ui"
import { ChangeAvatar } from "./ChangeAvatar"
import { SettingSubmitBtn } from "./SettingSubmitBtn"

type InputField = {
	type: string
	placeholder: string
	field: keyof FormData
}

export const SettingsContent = () => {
	const { formData, errors, handleChange, handleSubmit, handleAvatarChange } =
		useSettingsForm()

	const inputFields: InputField[] = [
		{ type: "text", placeholder: "Введіть ім’я", field: "firstName" },
		{ type: "text", placeholder: "Введіть прізвище", field: "lastName" },
		{ type: "tel", placeholder: "+380XX XXX XX XX", field: "phoneNumber" },
		{ type: "email", placeholder: "Введіть email", field: "email" },
		{ type: "date", placeholder: "Виберіть дату", field: "dateOfBirth" },
	]

	return (
		<VStack spacing={6} align="start" width="100%">
			<ChangeAvatar handleAvatarChange={handleAvatarChange} />
			<SimpleGrid columns={2} spacing={5} width="100%">
				{inputFields.map(({ type, placeholder, field }) => (
					<CustomInputTemplate
						key={field}
						type={type}
						placeholder={placeholder}
						value={formData[field] || ""}
						onChange={e => handleChange(field, e.target.value)}
						error={errors[field]}
					/>
				))}
				<AccountSelectTemplate
					value={formData.gender}
					onChange={e => handleChange("gender", e.target.value)}
					error={errors.gender}
				>
					<option value={Gender.male}>Чоловік</option>
					<option value={Gender.female}>Жінка</option>
					<option value={Gender.other}>Інше</option>
				</AccountSelectTemplate>
			</SimpleGrid>
			<Box
				display="flex"
				width="100%"
				justifyContent="right"
				alignItems="center"
			>
				<SettingSubmitBtn onSubmit={handleSubmit} />
			</Box>
		</VStack>
	)
}
