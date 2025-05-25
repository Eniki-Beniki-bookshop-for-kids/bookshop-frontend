// src/types/constants.tsx
import { Carrier, PaymentMethod, ShippingMethod } from "@/types/models"
import { formatDateToString, formatSegmentLabel } from "@/utils"
import { ComponentType, ReactNode } from "react"
import {
	BonusesContent,
	OrdersContent,
	PaymentContent,
	RecommendationsContent,
	SettingsContent,
	SupportContent,
	WishlistContent,
} from "../components/account/content"
import {
	BellIcon,
	ChatIcon,
	HeartIconBtn,
	LogoutIcon,
	OrderIcon,
	PaymentCashIcon,
	PigIcon,
	SettingIcon,
} from "../components/ui"
import {
	AccountSettingField,
	DynamicRoute,
	HomeSidebarMenuItem,
} from "./interfaces"
import { BookTypes, Categories, Genre, TargetAges } from "./models"
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

export const adaptiveFontSize = (fontSize: number) => ({
	base: `${fontSize - 8}px`,
	sm: `${fontSize - 8}px`,
	md: `${fontSize - 6}px`,
	lg: `${fontSize - 4}px`,
	xl: `${fontSize}px`,
	"2xl": `${fontSize}px`,
})

export const adaptiveHeigh = {
	base: "300px",
	sm: "300px",
	md: "300px",
	lg: "360px",
	xl: "477px",
	"2xl": "477px",
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
	{ href: "/error", label: "Оформлення замовлення" }, //16
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

export const homeSidebarMenu: HomeSidebarMenuItem[] = [
	{
		label: "Всі книги",
		filter: {},
		href: "/catalog/all",
	},
	{
		label: "Художня література",
		filter: { genre: Genre.Classics },
		href: "/catalog/classics",
	},
	{
		label: "Нехудожня література",
		filter: { genre: Genre.NonFiction },
		href: "/catalog/nonfiction",
	},
	{
		label: "Казки",
		filter: { genre: Genre.fairyTales },
		href: "/catalog/fairytales",
	},
	{
		label: "Підліткова література",
		filter: { categories: Categories.YoungAdult },
		href: "/catalog/youngadult",
	},
	{
		label: "Книги за віком",
		filter: {
			targetAges: [
				TargetAges["5-8"],
				TargetAges["8-12"],
				TargetAges.Teenager,
			].join(","),
		},
		href: "/catalog/kids",
	},
	{
		label: "Малюкам",
		filter: {
			targetAges: [TargetAges["1-3"], TargetAges["3-5"]].join(","),
		},
		href: "/catalog/babies",
	},
	{
		label: "Батькам",
		filter: { categories: Categories.Parents },
		href: "/catalog/parents",
	},
	{
		label: "Розмальовки",
		filter: { genre: Genre.Coloring },
		href: "/catalog/coloring",
	},
	{
		label: "Електронні книги",
		filter: { bookType: BookTypes.Ebook },
		href: "/catalog/ebook",
	},
]

export const dynamicRoutes: DynamicRoute[] = [
	{
		basePath: "/catalog",
		segmentIndex: 1,
		getLabel: (segment: string) => {
			// Спочатку шукаємо в homeSidebarMenu
			const catalogItem = homeSidebarMenu.find(
				item => item.href === `/catalog/${segment}`,
			)
			if (catalogItem) {
				return catalogItem.label
			}
			// Якщо не знайшли в homeSidebarMenu, шукаємо в genreLink
			const genreItem = genreLink.find(
				item => item.href === `/catalog/${segment}`,
			)
			if (genreItem) {
				return genreItem.label
			}
			// Якщо не знайшли ні в homeSidebarMenu, ні в genreLink, форматуємо сегмент
			return formatSegmentLabel(segment)
		},
	},
	{
		basePath: "/catalog/book",
		segmentIndex: 2, // Сегмент "[genre]"
		getLabel: (segment: string) => {
			// Шукаємо в genreLink
			const genreItem = genreLink.find(
				item => item.href === `/catalog/${segment}`,
			)
			if (genreItem) {
				return genreItem.label
			}
			if (segment === "search") {
				return "Пошук"
			}
			// Якщо не знайшли в genreLink, форматуємо сегмент
			return formatSegmentLabel(segment)
		},
	},
]

export const genreLink = Object.keys(Genre).map(key => ({
	href: `/catalog/${key.toLowerCase()}`,
	label: Genre[key as keyof typeof Genre],
}))

// Блок констант для рендеру та виконання фільтрів
export const statusOptions = [
	{ label: "Знижки", value: "discount", filter: { discount: { gt: 0 } } },
	{
		label: "Нові книги",
		value: "new",
		filter: {
			createdAt: { gte: new Date(Date.now() - 180 * 24 * 60 * 60 * 1000) },
		},
	},
	{
		label: "Популярні",
		value: "popular",
		filter: { totalSales: { gte: 1000 } },
	},
	{ label: "Передзамовлення", value: "preorder", filter: { stockQuantity: 0 } },
	{ label: "Скоро у продажу", value: "soon", filter: { isPublish: false } },
	{ label: "Бестселери", value: "bestseller", filter: { isBestseller: true } },
]

export const ageOptions = Object.entries(TargetAges).map(([value, label]) => ({
	value,
	label,
	filter: value as TargetAges,
}))

// Блок констант для рендеру сторінки книги
export const paymentSystems: ImageLinkProps[] = [
	{ src: "/images/logo_visa.png", alt: "Visa" },
	{ src: "/images/logo_mastercard.png", alt: "MasterCard" },
	{ src: "/images/logo_applepay.png", alt: "Apple Pay" },
	{ src: "/images/logo_googlepay.png", alt: "Google Pay" },
]

export const carriers: ImageLinkProps[] = [
	{ src: "/images/logo_nova_poshta.png", alt: Carrier.novaPost },
	{ src: "/images/logo_ukrposhta.png", alt: Carrier.ukrPost },
]

// Блок констант для футера
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
	[pageLink[16].href]: TypesHeader.Minimal, // error
}

export const pageHeaderTypes = new Proxy(minimalPaths, {
	get(target, key: string) {
		if (key in target) {
			return target[key]
		}
		return TypesHeader.Full
	},
}) as { [key: string]: TypesHeader.Full | TypesHeader.Minimal }

interface SidebarLink {
	id: string
	label: string
	icon: ComponentType<IButtonProps>
	defaultProps?: IButtonProps
}

export const sidebarAccountLinks: SidebarLink[] = [
	{ id: "bonuses", label: "Бонуси", icon: PigIcon },
	{
		id: "wishlist",
		label: "Список бажань",
		icon: HeartIconBtn,
		defaultProps: { isStatic: true, size: 20 },
	},
	{ id: "orders", label: "Замовлення", icon: OrderIcon },
	{ id: "recommendations", label: "Персональні рекомендації", icon: BellIcon },
	{ id: "support", label: "Служба підтримки", icon: ChatIcon },
	{ id: "payment", label: "Оплата", icon: PaymentCashIcon },
	{ id: "settings", label: "Налаштування профілю", icon: SettingIcon },
	{ id: "logout", label: "Вихід", icon: LogoutIcon },
]

export const accountContentMap: Record<
	string,
	{ title: string; component: ReactNode }
> = {
	bonuses: { title: "Бонуси", component: <BonusesContent /> },
	wishlist: { title: "Список бажань", component: <WishlistContent /> },
	orders: { title: "Мої замовлення", component: <OrdersContent /> },
	recommendations: {
		title: "Рекомендації",
		component: <RecommendationsContent />,
	},
	support: { title: "Підтримка", component: <SupportContent /> },
	payment: { title: "Оплата", component: <PaymentContent /> },
	settings: { title: "Особиста інформація", component: <SettingsContent /> },
}

export const accountSettingFields: AccountSettingField[] = [
	{
		type: "text",
		placeholder: "Введіть ім’я",
		field: "firstName",
	},
	{
		type: "text",
		placeholder: "Введіть прізвище",
		field: "lastName",
	},
	{
		type: "tel",
		placeholder: "Номер телефону",
		field: "phoneNumber",
	},
	{
		type: "email",
		placeholder: "Введіть email",
		field: "email",
		isDisabled: true,
	},
	{
		type: "date",
		placeholder: "Виберіть дату",
		field: "dateOfBirth",
	},
]

export const deliveryOptions: {
	carrier?: Carrier
	method: ShippingMethod
	description: string
	estimatedDeliveryDate: string
	shippingCost: number
}[] = [
	{
		carrier: Carrier.novaPost,
		method: ShippingMethod.Courier,
		description: "(1-3 дні)",
		estimatedDeliveryDate: formatDateToString(3),
		shippingCost: 90,
	},
	{
		carrier: Carrier.novaPost,
		method: ShippingMethod.Post,
		description: "(1-3 дні)",
		estimatedDeliveryDate: formatDateToString(3),
		shippingCost: 70,
	},
	{
		carrier: Carrier.novaPost,
		method: ShippingMethod.Express,
		description: "(1 день)",
		estimatedDeliveryDate: formatDateToString(1),
		shippingCost: 120,
	},
	{
		carrier: Carrier.ukrPost,
		method: ShippingMethod.Courier,
		description: "(4-5 днів)",
		estimatedDeliveryDate: formatDateToString(5),
		shippingCost: 60,
	},
	{
		carrier: Carrier.ukrPost,
		method: ShippingMethod.Post,
		description: "(3-5 днів)",
		estimatedDeliveryDate: formatDateToString(5),
		shippingCost: 40,
	},
	{
		carrier: Carrier.ukrPost,
		method: ShippingMethod.Express,
		description: "(2-3 дні)",
		estimatedDeliveryDate: formatDateToString(3),
		shippingCost: 80,
	},
	{
		method: ShippingMethod.Pickup,
		description: "",
		estimatedDeliveryDate: formatDateToString(0),
		shippingCost: 0,
	},
]

export const paymentMethods: PaymentMethod[] = [
	PaymentMethod.CreditCard,
	PaymentMethod.CashOnDelivery,
	PaymentMethod.OnlineBanking,
	PaymentMethod.GooglePay,
	PaymentMethod.ApplePay,
	PaymentMethod.PaymentLegalEntities,
]

export const noImageSrc =
	"https://dummyimage.com/300x400/9c9c9c/FFFFFF.png&text=No+photo"
export const whiteBoxSrc = "https://dummyimage.com/300x400/FFFFFF/FFFFFF.png"
