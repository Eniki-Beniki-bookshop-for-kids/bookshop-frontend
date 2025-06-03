// src/utils/mapping/mapBookModels.ts

// Мапа для Genre
const genreClientToServer: Record<string, string> = {
	Класика: "Classics",
	Фентезі: "Fantasy",
	"Наукова фантастика": "ScienceFiction",
	Детектив: "Mystery",
	Романтика: "Romance",
	"Нехудожня література": "NonFiction",
	Розмальовки: "Coloring",
	Казки: "fairyTales",
	Біографія: "Biography",
	Історія: "History",
	Поезія: "Poetry",
	Саморозвиток: "SelfHelp",
	Бізнес: "Business",
	Подорожі: "Travel",
	Кулінарія: "Cooking",
	"Інший жанр": "Other",
}

const genreServerToClient: Record<string, string> = Object.fromEntries(
	Object.entries(genreClientToServer).map(([key, value]) => [value, key]),
)

// Мапа для BookTypes
const bookTypesClientToServer: Record<string, string> = {
	"Паперова книга": "Paperback",
	"Електронна книга": "Ebook",
	Аудіокнига: "Audiobook",
}

const bookTypesServerToClient: Record<string, string> = Object.fromEntries(
	Object.entries(bookTypesClientToServer).map(([key, value]) => [value, key]),
)

// Мапа для Language
const languageClientToServer: Record<string, string> = {
	Українська: "Ukrainian",
	Англійська: "English",
	Російська: "Russian",
	Німецька: "German",
	Французька: "French",
	Іспанська: "Spanish",
	Італійська: "Italian",
	Польська: "Polish",
	Китайська: "Chinese",
	Японська: "Japanese",
	Арабська: "Arabic",
	Турецька: "Turkish",
	Португальська: "Portuguese",
	Голландська: "Dutch",
	Шведська: "Swedish",
	Латинська: "Latin",
	Грецька: "Greek",
	Іврит: "Hebrew",
	"Інша мова": "Other",
}

const languageServerToClient: Record<string, string> = Object.fromEntries(
	Object.entries(languageClientToServer).map(([key, value]) => [value, key]),
)

// Мапа для CoverType
const coverTypeClientToServer: Record<string, string> = {
	Тверда: "Hardcover",
	"М’яка": "Softcover",
	Спиральна: "Spiral",
}

const coverTypeServerToClient: Record<string, string> = Object.fromEntries(
	Object.entries(coverTypeClientToServer).map(([key, value]) => [value, key]),
)

// Мапа для PaperType
const paperTypeClientToServer: Record<string, string> = {
	"офсетний папір": "Offset",
	"газетний папір": "Newsprint",
	"письмовий папір": "Writing",
	"крейдований папір": "Coated",
	"веленевий папір": "Vellum",
	картон: "Cardboard",
}

const paperTypeServerToClient: Record<string, string> = Object.fromEntries(
	Object.entries(paperTypeClientToServer).map(([key, value]) => [value, key]),
)

// Мапа для Categories
const categoriesClientToServer: Record<string, string> = {
	"Дитяча література": "ChildrensLiterature",
	"Для дорослих": "AdultLiterature",
	"Для підлітків": "YoungAdult",
	"Для батьків": "Parents",
	"Інша категорія": "Other",
}

const categoriesServerToClient: Record<string, string> = Object.fromEntries(
	Object.entries(categoriesClientToServer).map(([key, value]) => [value, key]),
)

// Мапа для TargetAges
const targetAgesClientToServer: Record<string, string> = {
	"1-3 роки": "Age1_3",
	"3-5 років": "Age3_5",
	"5-8 років": "Age5_8",
	"8-12 років": "Age8_12",
	Підліткам: "Teenager",
	Дорослим: "AdultLiterature",
	"Інший вік": "Other",
}

const targetAgesServerToClient: Record<string, string> = Object.fromEntries(
	Object.entries(targetAgesClientToServer).map(([key, value]) => [value, key]),
)

// Функція для перетворення масивів змаплених енумів
export const mapArray = (
	values: string[] | undefined,
	map: Record<string, string>,
): string[] | undefined => {
	if (!values || values.length === 0) return undefined
	return values.map(value => map[value] || value)
}

interface MapBooks {
	targetAgesClientToServer: Record<string, string>
	targetAgesServerToClient: Record<string, string>
	categoriesClientToServer: Record<string, string>
	categoriesServerToClient: Record<string, string>
	paperTypeClientToServer: Record<string, string>
	paperTypeServerToClient: Record<string, string>
	coverTypeClientToServer: Record<string, string>
	coverTypeServerToClient: Record<string, string>
	languageClientToServer: Record<string, string>
	languageServerToClient: Record<string, string>
	bookTypesClientToServer: Record<string, string>
	bookTypesServerToClient: Record<string, string>
	genreClientToServer: Record<string, string>
	genreServerToClient: Record<string, string>
}

export const mapBooks: MapBooks = {
	targetAgesClientToServer,
	targetAgesServerToClient,
	categoriesClientToServer,
	categoriesServerToClient,
	paperTypeClientToServer,
	paperTypeServerToClient,
	coverTypeClientToServer,
	coverTypeServerToClient,
	languageClientToServer,
	languageServerToClient,
	bookTypesClientToServer,
	bookTypesServerToClient,
	genreClientToServer,
	genreServerToClient,
}
