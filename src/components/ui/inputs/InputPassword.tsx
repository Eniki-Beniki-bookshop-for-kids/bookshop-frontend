import { InputRightElement } from "@chakra-ui/react"
import { FC } from "react"
import { EyeToggleIconBtn } from ".."

interface InputPasswordProps {
	togglePasswordVisibility: () => void
}

export const InputPassword: FC<InputPasswordProps> = ({
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
