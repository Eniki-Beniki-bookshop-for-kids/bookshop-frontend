import { InputRightElement } from "@chakra-ui/react"
import { FC } from "react"
import { EyeToggleIconBtn } from ".."

interface PasswordInputIconProps {
	togglePasswordVisibility: () => void
}

export const PasswordInputIcon: FC<PasswordInputIconProps> = ({
	togglePasswordVisibility,
}) => (
	<InputRightElement
		height="100%"
		display="flex"
		alignItems="center"
		right="18px"
	>
		<EyeToggleIconBtn onClick={togglePasswordVisibility} />
	</InputRightElement>
)
