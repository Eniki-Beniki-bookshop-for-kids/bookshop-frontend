import { useSettingsForm } from "@/hooks"
import { Gender } from "@/types/models"
import { VStack } from "@chakra-ui/react"
import { AccountSelectTemplate, CustomInputTemplate } from "../../ui"

export const SettingsContent = () => {
	const { formData, errors, handleChange } = useSettingsForm()

	return (
		<VStack
			spacing={4}
			align="start"
			width="100%"
			sx={{ "& input": { border: "none", boxShadow: "none" } }}
		>
			<CustomInputTemplate
				type="text"
				placeholder="Введіть ім’я"
				value={formData.firstName}
				onChange={e => handleChange("firstName", e.target.value)}
				error={errors.firstName}
			/>
			<CustomInputTemplate
				type="text"
				placeholder="Введіть прізвище"
				value={formData.lastName}
				onChange={e => handleChange("lastName", e.target.value)}
				error={errors.lastName}
			/>
			<CustomInputTemplate
				type="tel"
				placeholder="+380XX XXX XX XX"
				value={formData.phoneNumber}
				onChange={e => handleChange("phoneNumber", e.target.value)}
				error={errors.phoneNumber}
			/>
			<CustomInputTemplate
				type="email"
				placeholder="Введіть email"
				value={formData.email}
				onChange={e => handleChange("email", e.target.value)}
				error={errors.email}
			/>
			<CustomInputTemplate
				type="date"
				placeholder="Виберіть дату"
				value={formData.dateOfBirth}
				onChange={e => handleChange("dateOfBirth", e.target.value)}
				error={errors.dateOfBirth}
			/>
			<AccountSelectTemplate
				value={formData.gender}
				onChange={e => handleChange("gender", e.target.value)}
				error={errors.gender}
			>
				<option value={Gender.male}>Чоловік</option>
				<option value={Gender.female}>Жінка</option>
				<option value={Gender.other}>Інше</option>
			</AccountSelectTemplate>
		</VStack>
	)
}
