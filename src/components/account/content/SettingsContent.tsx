import { useSettingsForm } from "@/hooks"
import { Gender } from "@/types/models"
import { VStack } from "@chakra-ui/react"
import { CustomSelectTemplate, InputTemplate } from "../../ui"

export const SettingsContent = () => {
	const { formData, errors, handleChange } = useSettingsForm()

	return (
		<VStack
			spacing={4}
			align="start"
			width="100%"
			sx={{ "& input": { border: "none", boxShadow: "none" } }}
		>
			<InputTemplate
				type="text"
				placeholder="Введіть ім’я"
				value={formData.firstName}
				onChange={e => handleChange("firstName", e.target.value)}
				error={errors.firstName}
			/>
			<InputTemplate
				type="text"
				placeholder="Введіть прізвище"
				value={formData.lastName}
				onChange={e => handleChange("lastName", e.target.value)}
				error={errors.lastName}
			/>
			<InputTemplate
				type="tel"
				placeholder="+380XX XXX XX XX"
				value={formData.phoneNumber}
				onChange={e => handleChange("phoneNumber", e.target.value)}
				error={errors.phoneNumber}
			/>
			<InputTemplate
				type="email"
				placeholder="Введіть email"
				value={formData.email}
				onChange={e => handleChange("email", e.target.value)}
				error={errors.email}
			/>
			<InputTemplate
				type="date"
				placeholder="Виберіть дату"
				value={formData.dateOfBirth}
				onChange={e => handleChange("dateOfBirth", e.target.value)}
				error={errors.dateOfBirth}
			/>
			<CustomSelectTemplate
				value={formData.gender}
				onChange={e => handleChange("gender", e.target.value)}
				error={errors.gender}
			>
				<option value={Gender.male}>Чоловік</option>
				<option value={Gender.female}>Жінка</option>
				<option value={Gender.other}>Інше</option>
			</CustomSelectTemplate>
		</VStack>
	)
}
