import { InputRightElement } from "@chakra-ui/react"
import { FC } from "react"
import { CalendarIcon } from ".."

interface InputDateProps {
	onClick: () => void
}

export const InputDate: FC<InputDateProps> = ({ onClick }) => (
	<InputRightElement
		height="100%"
		display="flex"
		alignItems="center"
		right="18px"
	>
		<CalendarIcon onClick={onClick} />
	</InputRightElement>
)
