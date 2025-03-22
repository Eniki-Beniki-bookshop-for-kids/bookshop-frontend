import { NavbarProps } from "./propsInterfaces"

export const headerNav: NavbarProps[] = [
	{ href: "/about", label: "Про нас", headerType: "full" },
	{ href: "/#discounts", label: "Знижки", headerType: "full" },
	{ href: "/#new-arrivals", label: "Новинки", headerType: "full" },
	{ href: "/blog", label: "Блог", headerType: "full" },
	{ href: "/delivery", label: "Доставка/Оплата", headerType: "full" },
	{ href: "/#contacts", label: "Контакти", headerType: "full" },
]

export const footerMenu: NavbarProps[] = [
	{ href: "/catalog", label: "Каталог" },
	{ href: "/about", label: "Про нас" },
	{ href: "/#discounts", label: "Знижки" },
	{ href: "/#new-arrivals", label: "Новинки" },
	{ href: "/authors", label: "Автори" },
	{ href: "/bestsellers", label: "Бестселери" },
]

export const footerForBuyers: NavbarProps[] = [
	{ href: "/contacts", label: "Контакти" },
	{ href: "/delivery", label: "Доставка/Оплата" },
	{ href: "/return", label: "Повернення товару" },
	{ href: "/warranty", label: "Гарантійні умови" },
	{ href: "/offer", label: "Публічна оферта" },
	{ href: "/privacy-policy", label: "Політика конфіденційності" },
	{ href: "/cookie-policy", label: "Політика використання файлів cookie" },
	{ href: "/accessibility", label: "Декларація про доступність" },
	{ href: "/site-map", label: "Карта сайту" },
]

export const footerContacts: {
	label: string
	isEmail?: boolean
}[] = [
	{ label: "0-600-705-809" },
	{ label: "Безкоштовно по Україні" },
	{ label: "Графік роботи CALL-CENTER" },
	{ label: "Без вихідних 9:00 - 18:00" },
	{ label: "ishop@eniki-beniki-factor.ua", isEmail: true },
]

interface ImageLink {
	src: string
	alt: string
	href?: string
}

export const footerPaymentMethods: ImageLink[] = [
	{ src: "/images/logo_visa.png", alt: "Visa" },
	{ src: "/images/logo_mastercard.png", alt: "MasterCard" },
	{ src: "/images/logo_applepay.png", alt: "Apple Pay" },
	{ src: "/images/logo_googlepay.png", alt: "Google Pay" },
]

export const footerSocialMedia: ImageLink[] = [
	{ src: "/images/logo_instagram.png", alt: "Instagram", href: "#" },
	{ src: "/images/logo_telegram.png", alt: "Telegram", href: "#" },
	{ src: "/images/logo_fb.png", alt: "Facebook", href: "#" },
	{ src: "/images/logo_youtube.png", alt: "YouTube", href: "#" },
	{ src: "/images/logo_tiktok.png", alt: "TikTok", href: "#" },
]

export const pageHeaderTypes: { [key: string]: "full" | "minimal" } = {
	"/": "full",
	"/catalog": "full",
	"/category": "full",
	"/product": "full",
	"/checkout": "minimal",
	"/account": "full",
}

export const authCredentials = {
	login: "",
	password: "",
	confirmPassword: "",
}
