// constants.tsx
import { ComponentType } from "react"
import {
	BellIcon,
	CommentIcon,
	HeartIconBtn,
	LogoutIcon,
	OrderIcon,
	PaymentCardIcon,
	PigIcon,
	SettingIcon,
} from "../components/ui"
import { Genre } from "./models"
import {
	IButtonProps,
	ImageLinkProps,
	NavbarProps,
	PageProps,
} from "./propsInterfaces"

export const authCredentials = {
	login: "",
	password: "",
	confirmPassword: "",
}

// УВАГА! Нові сторінки додаються в кінець масиву
export const pageLink: PageProps[] = [
	{ href: "/", label: "Головна" }, //0
	{ href: "/catalog", label: "Каталог" }, //1
	{ href: "/about", label: "Про нас" }, //2
	{ href: "/blog", label: "Блог" }, //3
	{ href: "/authors", label: "Автори" }, //4
	{ href: "/bestsellers", label: "Бестселери" }, //5
	{ href: "/delivery", label: "Доставка/Оплата" }, //6
	{ href: "/return", label: "Повернення товару" }, //7
	{ href: "/warranty", label: "Гарантійні умови" }, //8
	{ href: "/offer", label: "Публічна оферта" }, //9
	{ href: "/privacy-policy", label: "Політика конфіденційності" }, //10
	{ href: "/cookie-policy", label: "Політика використання файлів cookie" }, //11
	{ href: "/accessibility", label: "Декларація про доступність" }, //12
	{ href: "/site-map", label: "Карта сайту" }, //13
	{ href: "/account", label: "Особистий кабінет" }, //14
	{ href: "/checkout", label: "Оформлення замовлення" }, //15
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

export enum TypesHeader {
	Full = "full",
	Minimal = "minimal",
}
const minimalPaths: { [key: string]: TypesHeader.Minimal } = {
	[pageLink[15].href]: TypesHeader.Minimal, // checkout
}

export const pageHeaderTypes = new Proxy(minimalPaths, {
	get(target, key: string) {
		if (key in target) {
			return target[key]
		}
		return TypesHeader.Full
	},
}) as { [key: string]: TypesHeader.Full | TypesHeader.Minimal }

export const genreLink = Object.keys(Genre).map(key => ({
	href: `/${key.toLowerCase()}`,
	label: Genre[key as keyof typeof Genre],
}))

interface SidebarLink {
	id: string
	label: string
	icon: ComponentType<IButtonProps>
	defaultProps?: IButtonProps
}

export const sidebarLinks: SidebarLink[] = [
	{ id: "bonuses", label: "Бонуси", icon: PigIcon },
	{
		id: "wishlist",
		label: "Список бажань",
		icon: HeartIconBtn,
		defaultProps: { isStatic: true, size: 20 },
	},
	{ id: "orders", label: "Замовлення", icon: OrderIcon },
	{ id: "recommendations", label: "Персональні рекомендації", icon: BellIcon },
	{ id: "support", label: "Служба підтримки", icon: CommentIcon },
	{ id: "payment", label: "Оплата", icon: PaymentCardIcon },
	{ id: "settings", label: "Налаштування профілю", icon: SettingIcon },
	{ id: "logout", label: "Вихід", icon: LogoutIcon },
]
