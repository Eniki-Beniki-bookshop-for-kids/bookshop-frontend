import { NavbarProps } from "@/types/propsInterfaces"
import { Link as ChakraLink } from "@chakra-ui/react"
import NextLink from "next/link"
import { FC } from "react"
import { Link as ScrollLink } from "react-scroll"

export const NavLink: FC<NavbarProps> = ({ href, label, isActive }) => {
	const linkStyles = {
		color: isActive ? "customViolet" : "inherit",
		fontWeight: isActive ? 600 : 400,
		_hover: {
			color: "customViolet",
			transform: "scale(1.05)",
			transition: "transform 0.2s ease-in-out",
		},
	}

	// Якщо це якірне посилання, використовуємо ScrollLink
	if (href.startsWith("/#")) {
		const elementId = href.replace("/#", "")
		return (
			<ScrollLink
				to={elementId}
				onClick={() => {
					window.location.hash = elementId
				}}
			>
				<ChakraLink as="span" {...linkStyles}>
					{label}
				</ChakraLink>
			</ScrollLink>
		)
	}

	// Для звичайних посилань використовуємо NextLink
	return (
		<ChakraLink as={NextLink} href={href} {...linkStyles}>
			{label}
		</ChakraLink>
	)
}
