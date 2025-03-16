import { NavbarProps } from "./propsInterfaces"

export const headerNav: NavbarProps[] = [
	{ href: "/about", label: "Про нас", headerType: "full" },
	{ href: "/#discounts", label: "Знижки", headerType: "full" },
	{ href: "/#new-arrivals", label: "Новинки", headerType: "full" },
	{ href: "/blog", label: "Блог", headerType: "full" },
	{ href: "/delivery", label: "Доставка/Оплата", headerType: "full" },
	{ href: "/contacts", label: "Контакти", headerType: "full" },
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
