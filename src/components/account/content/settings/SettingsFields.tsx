import { accountSettingFields } from "@/types/constants"
import { AccountFormData } from "@/types/interfaces"
import { Gender } from "@/types/models"
import { SimpleGrid } from "@chakra-ui/react"
import { FC } from "react"
import { cutPhoneNumber } from "@/utils"
import { AccountSelectTemplate, CustomInputTemplate } from "../../../ui"

interface SettingsFieldsProps {
	formData: AccountFormData
	handleChange: (field: keyof AccountFormData, value: string) => void
	errors: Partial<Record<keyof AccountFormData, string>>
}

export const SettingsFields: FC<SettingsFieldsProps> = ({
	formData,
	handleChange,
	errors,
}) => {
	return (
		<SimpleGrid columns={2} spacing={5} width="100%">
			{accountSettingFields.map(({ type, placeholder, field }) => {
				return (
					<CustomInputTemplate
						key={field}
						type={type}
						placeholder={placeholder}
						value={cutPhoneNumber(field, formData)}
						onChange={e => handleChange(field, e.target.value)}
						error={errors[field]}
					/>
				)
			})}
			<AccountSelectTemplate
				value={formData.gender || ""}
				onChange={e => handleChange("gender", e.target.value)}
				error={errors.gender}
			>
				<option value={Gender.male}>Чоловік</option>
				<option value={Gender.female}>Жінка</option>
				<option value={Gender.other}>Інше</option>
			</AccountSelectTemplate>
		</SimpleGrid>
	)
}
