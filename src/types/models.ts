//src/types/models.ts

import { PrismaGender, PrismaUser } from "./interfaces"

// ВАЖЛИВО!!! При додаванні нових полів у моделі, не забувайте оновлювати типи в prisma/schema.prisma та оновлювати базу даних через prisma migrate dev --name [назва міграції]
export enum Genre {
	Classics = "Xудожня література",
	Fantasy = "Фентезі",
	ScienceFiction = "Наукова фантастика",
	Mystery = "Детектив",
	Romance = "Романтика",
	NonFiction = "Нехудожня література",
	Coloring = "Розмальовки",
	fairyTales = "Казки",
	Biography = "Біографія",
	History = "Історія",
	Poetry = "Поезія",
	SelfHelp = "Саморозвиток",
	Business = "Бізнес",
	Travel = "Подорожі",
	Cooking = "Кулінарія",
	Other = "Інший жанр",
}

export enum BookTypes {
	Paperback = "Паперова книга",
	Ebook = "Електронна книга",
	Audiobook = "Аудіокнига",
}

export enum Language {
	Ukrainian = "Українська",
	English = "Англійська",
	Russian = "Російська",
	German = "Німецька",
	French = "Французька",
	Spanish = "Іспанська",
	Italian = "Італійська",
	Polish = "Польська",
	Chinese = "Китайська",
	Japanese = "Японська",
	Arabic = "Арабська",
	Turkish = "Турецька",
	Portuguese = "Португальська",
	Dutch = "Голландська",
	Swedish = "Шведська",
	Latin = "Латинська",
	Greek = "Грецька",
	Hebrew = "Іврит",
	Other = "Інша мова",
}

export enum CoverType {
	Hardcover = "Тверда",
	Softcover = "М’яка",
	Spiral = "Спиральна",
}

export enum PaperType {
	Offset = "офсетний папір",
	Newsprint = "газетний папір",
	Writing = "письмовий папір",
	Coated = "крейдований папір",
	Vellum = "веленевий папір",
	Cardboard = "картон",
}

export enum Categories {
	ChildrensLiterature = "Дитяча література",
	AdultLiterature = "Для дорослих",
	YoungAdult = "Для підлітків",
	Parents = "Для батьків",
	Other = "Інша категорія",
}

export enum TargetAges {
	"1-3" = "1-3 роки",
	"3-5" = "3-5 років",
	"5-8" = "5-8 років",
	"8-12" = "8-12 років",
	Teenager = "Підліткам",
	AdultLiterature = "Дорослим",
	Other = "Інший вік",
}

export enum OrderStatus {
	Pending = "Очікує оплати", // Замовлення створене, але не оплачене
	Paid = "Оплачено", // Замовлення оплачене, але не доставлене
	Shipped = "Відправлено", // Замовлення відправлено, але не доставлене
	Delivered = "Доставлено", // Замовлення доставлено
	Cancelled = "Скасовано", // Замовлення скасовано
}

export enum ShippingMethod {
	Courier = "Кур’єр", // Доставка кур’єром поштового оператора
	Post = "Відділення", // Доставка на відділення поштового оператора
	Pickup = "Самовивіз", // Самовивіз із магазину
	Express = "Експрес-доставка", // Швидка доставка
}

export enum PaymentMethod {
	CreditCard = "Картками Visa, Mastercard",
	CashOnDelivery = "Післяплата",
	OnlineBanking = "Банківський переказ онлайн",
	GooglePay = "Google Pay",
	ApplePay = "Apple Pay",
	PaymentLegalEntities = "Оплата реквізитами для юр. осіб",
}

export enum Carrier {
	novaPost = "Нова пошта",
	ukrPost = "Укрпошта",
}

export enum UserRole {
	SuperAdmin = "Супер-адмін", // Адміністратор, який управляє адмінами
	Admin = "Адмін", // Адміністратор із повними правами
	User = "Користувач", // Звичайний користувач із обмеженими правами
}

export enum Gender {
	male = "чоловіча",
	female = "жіноча",
	other = "інша",
}

// модель книги
export interface Book {
	bookId: number // Унікальний ідентифікатор книги в базі даних або системі. Автоматичне створення
	title: string // Назва книги
	author: string // Ім’я автора книги
	originalTitle: string // Оригінальна назва книги
	genre: Genre // Жанр книги
	categories: Categories[] // Масив цільових аудиторій книги
	targetAges: TargetAges[] // Масив цільових вікових груп
	series?: string // Назва серії, до якої належить книга (необов’язкове)
	publisher: string // Видавництво, що випустило книгу
	publicationYear: number // Рік видання книги
	bookType: BookTypes[] // Типи книги в наявності
	pageCount: number // Кількість сторінок у книзі
	paperType?: PaperType // тип паперу
	language: Language // Мова перекладу або тексту книги
	originalLanguage: Language // Мова оригіналу книги
	translator?: string // Особа, яка перекладала
	coverType: CoverType // Тип обкладинки книги
	weight?: number // Вага книги в грамах
	dimensions?: string // Розміри книги у форматі "ширина x висота" в міліметрах
	isbn: string // Міжнародний стандартний номер книги
	articleNumber: string // Артикул або внутрішній ідентифікатор книги
	price: number // Ціна книги в гривні
	discount: number // Знижка на книгу (коефіцієнт)
	stockQuantity: number // Кількість книг на складі, доступних для продажу
	description?: string // Опис книги, короткий або детальний текст (необов’язкове).
	images: string[] // Масив URL-адрес до фотографій книги
	reviews: Review[] // Масив відгуків юзерів і критиків про книгу
	isBestseller: boolean // чи є книга бестселером?
	isPublish: boolean // чи книга вже продається?
	isGifted: boolean // чи подарункове видання?
	totalSales?: number // Кількість проданих книг за весь час продажів (необов’язкове)
	orderBook: OrderBook[] // Масив замовлень, де присутня ця книга
	createdAt: string // Дата створення запису про книгу у форматі ISO ("2024-01-01T12:00:00Z").
	updatedAt: string // Дата останнього оновлення запису про книгу у форматі ISO ("2024-09-01T15:30:00Z")
}

// модель відгуку критика
export interface Review {
	bookId: number
	reviewId: number // Унікальний ідентифікатор відгуку  (автоматичне створення)
	reviewName: string // Ім’я, хто залишив відгук
	rating: number // Оцінка відгуку від 0 до 5 (ціле значення)
	reviewText: string // Текст відгуку
	reviewDate: string // Дата публікації відгуку у форматі ISO ("2024-01-01T12:00:00Z")
	source?: string // Джерело відгуку
	avatar?: string // URL-адреса аватара критика (аватар можна генерувати автоматично)
	createdAt: string // Дата створення відгуку про книгу у форматі ISO ("2024-01-01T12:00:00Z")
	updatedAt: string // Дата останнього оновлення відгуку про книгу у форматі ISO ("2024-09-01T15:30:00Z")
}

export interface OrderBook {
	orderId: number
	bookId: number
	quantity: number
}

// моделі користувача

// Тип для серверної сторони (Prisma)
export type ServerUser = PrismaUser

// Тип для фронтенду
export interface User {
	userId: number // Унікальний ідентифікатор користувача, автоматично генерується
	supabaseId?: string | null // Унікальний ідентифікатор користувача в Supabase
	email: string // Електронна пошта (унікальна)
	password?: string | null
	firstName?: string | null // Ім’я
	lastName?: string | null // Прізвище
	phoneNumber?: string | null // Номер телефону (унікальна)
	dateOfBirth?: string | null // Дата народження у форматі ISO (необов’язкове, "2024-01-01T12:00:00Z")
	gender?: PrismaGender | null // Стать користувача
	address?: string | null // Адреса доставки (необов’язкове)
	city?: string | null // Місто (необов’язкове)
	postalCode?: string | null // Поштовий індекс (необов’язкове)
	country?: string | null // Країна (необов’язкове)
	role: UserRole // Роль користувача
	googleId?: string | null // Унікальний ID від Google
	avatar?: string | null // Аватар клієнта
	isActive: boolean // для активації/деактивації покупця адмінами
	favoriteBooks: number[] // Масив ID улюблених книг
	createdAt: string // Дата створення профілю у форматі ISO ("2024-01-01T12:00:00Z")
	updatedAt: string // Дата оновлення профілю у форматі ISO ("2024-09-01T15:30:00Z")
}

// модель замовлення
export interface Order {
	orderId: number // Унікальний ідентифікатор замовлення, автоматично генерується
	userId: number // Ідентифікатор користувача, який зробив замовлення (зв’язок із User)
	booksId: { bookId: number; quantity: number }[] // Масив книг з їх кількістю у замовленні (зв’язок із моделлю Book)
	totalAmount: number // Загальна сума замовлення в гривнях
	orderDate: string // Дата створення замовлення у форматі ISO ("2024-09-01T12:00:00Z")
	shippingAddress: string // Адреса доставки для цього замовлення
	shippingMethod: ShippingMethod // Спосіб доставки
	shippingDetails?: Shipping // Додаткові деталі доставки (необов’язкове)
	paymentMethod: PaymentMethod // Спосіб оплати
	status: OrderStatus // Статус замовлення (Очікує оплати, Оплачено, Відправлено, Доставлено, Скасовано)
}

// модель деталей доставки
export interface Shipping {
	shippingId: number // Унікальний ідентифікатор доставки, автоматично генерується
	orderId: number // Ідентифікатор замовлення, до якого належить доставка (зв’язок із Order)
	trackingNumber?: string // Номер відстеження доставки (необов’язкове)
	estimatedDeliveryDate: string // Очікувана дата доставки у форматі ISO ("2024-09-10T12:00:00Z")
	actualDeliveryDate?: string // Фактична дата доставки у форматі ISO (необов’язкове)
	carrier: Carrier // Назва перевізника
	shippingCost: number // Вартість доставки в гривнях
}
