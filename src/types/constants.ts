import { Genre } from "./models"
import { ImageLinkProps, NavbarProps, PageProps } from "./propsInterfaces"

export const authCredentials = {
	login: "",
	password: "",
	confirmPassword: "",
}

// УВАГА! Нові сторінки додаються в кінець масиву
export const pageLink: PageProps[] = [
	{ href: "/", label: "Головна" },
	{ href: "/catalog", label: "Каталог" },
	{ href: "/about", label: "Про нас" },
	{ href: "/blog", label: "Блог" },
	{ href: "/authors", label: "Автори" },
	{ href: "/bestsellers", label: "Бестселери" },
	{ href: "/delivery", label: "Доставка/Оплата" },
	{ href: "/return", label: "Повернення товару" },
	{ href: "/warranty", label: "Гарантійні умови" },
	{ href: "/offer", label: "Публічна оферта" },
	{ href: "/privacy-policy", label: "Політика конфіденційності" },
	{ href: "/cookie-policy", label: "Політика використання файлів cookie" },
	{ href: "/accessibility", label: "Декларація про доступність" },
	{ href: "/site-map", label: "Карта сайту" },
]

// УВАГА! Нові хеш-посилання додаються в кінець масиву
export const hashLink: PageProps[] = [
	{ href: "/#discounts", label: "Знижки" },
	{ href: "/#new-arrivals", label: "Новинки" },
	{ href: "/#contacts", label: "Контакти" },
]

export const headerNav: NavbarProps[] = [
	{ ...pageLink[2], headerType: "full" }, // about
	{ ...hashLink[0], headerType: "full" }, // discounts
	{ ...hashLink[1], headerType: "full" }, // new-arrivals
	{ ...pageLink[3], headerType: "full" }, // blog
	{ ...pageLink[6], headerType: "full" }, // delivery
	{ ...hashLink[2], headerType: "full" }, // contacts
]

export const footerMenu: PageProps[] = [
	pageLink[1], // catalog
	pageLink[2], // about
	hashLink[0], // discounts
	hashLink[1], //	new-arrivals
	pageLink[4], // authors
	pageLink[5], // bestsellers
]

export const footerForBuyers: PageProps[] = pageLink.slice(6, 14)

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

export const footerPaymentMethods: ImageLinkProps[] = [
	{ src: "/images/logo_visa.png", alt: "Visa" },
	{ src: "/images/logo_mastercard.png", alt: "MasterCard" },
	{ src: "/images/logo_applepay.png", alt: "Apple Pay" },
	{ src: "/images/logo_googlepay.png", alt: "Google Pay" },
]

export const footerSocialMedia: ImageLinkProps[] = [
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

export const genreLink = Object.keys(Genre).map(key => ({
	href: `/${key.toLowerCase()}`,
	label: Genre[key as keyof typeof Genre],
}))
