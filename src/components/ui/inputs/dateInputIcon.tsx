import { InputRightElement } from "@chakra-ui/react"
import { FC } from "react"
import { CalendarIcon } from ".."

interface DateInputIconProps {
	onClick: () => void
}

export const DateInputIcon: FC<DateInputIconProps> = ({ onClick }) => (
	<InputRightElement
		height="100%"
		display="flex"
		alignItems="center"
		right="18px"
	>
		<CalendarIcon onClick={onClick} />
	</InputRightElement>
)
