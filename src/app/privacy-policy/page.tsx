import { Box, Heading, Link, Text, VStack } from "@chakra-ui/react"
import NextLink from "next/link"

export default function PrivacyPolicy() {
	return (
		<Box>
			<Heading
				as="h1"
				fontSize={{ base: "2xl", md: "4xl" }}
				fontWeight="bold"
				color="customBlack"
				mb={6}
				textAlign={{ base: "center", md: "left" }}
			>
				Політика конфіденційності
			</Heading>
			<VStack spacing={8} align="start">
				<Text
					fontSize={{ base: "md", md: "lg" }}
					color="gray.700"
					lineHeight="tall"
				>
					Ласкаво просимо до книгарні &quot;Еники-Беники&quot;! Ми піклуємося
					про вашу конфіденційність і хочемо, щоб ви почувалися безпечно,
					використовуючи наш додаток.
				</Text>
				<Box>
					<Heading
						as="h2"
						fontSize={{ base: "xl", md: "2xl" }}
						fontWeight="semibold"
						color="customBlack"
						mb={3}
					>
						Які дані ми збираємо?
					</Heading>
					<Text fontSize="md" color="gray.600" lineHeight="tall">
						Якщо ви входите через Facebook Login або Google Sign-In, ми можемо
						отримати такі дані:
						<br />- Ваше ім’я
						<br />- Ваш email
						<br />- Ідентифікатор профілю
					</Text>
				</Box>
				<Box>
					<Heading
						as="h2"
						fontSize={{ base: "xl", md: "2xl" }}
						fontWeight="semibold"
						color="customBlack"
						mb={3}
					>
						Як ми використовуємо ваші дані?
					</Heading>
					<Text fontSize="md" color="gray.600" lineHeight="tall">
						Ми використовуємо ці дані для:
						<br />- Авторизації у нашому додатку.
						<br />- Персоналізації вашого досвіду (наприклад, рекомендації
						книг).
					</Text>
				</Box>
				<Box>
					<Heading
						as="h2"
						fontSize={{ base: "xl", md: "2xl" }}
						fontWeight="semibold"
						color="customBlack"
						mb={3}
					>
						Як видалити ваші дані?
					</Heading>
					<Text fontSize="md" color="gray.600" lineHeight="tall">
						Ви можете видалити свої дані, звернувшись до нас за адресою{" "}
						<Link
							as={NextLink}
							href="mailto:support@bookshopapp.com"
							color="customViolet"
							_hover={{ textDecoration: "underline" }}
						>
							support@bookshopapp.com
						</Link>
						.
					</Text>
				</Box>
				<Box>
					<Heading
						as="h2"
						fontSize={{ base: "xl", md: "2xl" }}
						fontWeight="semibold"
						color="customBlack"
						mb={3}
					>
						Зв’яжіться з нами
					</Heading>
					<Text fontSize="md" color="gray.600" lineHeight="tall">
						Якщо у вас є запитання щодо нашої політики конфіденційності, пишіть
						нам на{" "}
						<Link
							as={NextLink}
							href="mailto:support@bookshopapp.com"
							color="customViolet"
							_hover={{ textDecoration: "underline" }}
						>
							support@bookshopapp.com
						</Link>
						.
					</Text>
				</Box>
			</VStack>
		</Box>
	)
}
