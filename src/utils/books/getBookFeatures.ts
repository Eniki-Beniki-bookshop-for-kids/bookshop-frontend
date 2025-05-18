//src/utils/books/getBookFeatures.ts
import { Book } from "@/types/models"

// Функція для отримання визначених характеристик книги
export const getBookFeatures = (book: Book) => {
	const {
		author,
		title,
		originalTitle,
		genre,
		series,
		publisher,
		publicationYear,
		pageCount,
		language,
		originalLanguage,
		translator,
		dimensions,
		weight,
		coverType,
		articleNumber,
		isbn,
	} = book

	const features = [
		{ key: "Автор", value: author },
		{ key: "Назва книги", value: title },
		{ key: "Оригінальна назва", value: originalTitle },
		{ key: "Жанр", value: genre },
		{ key: "Серія", value: series },
		{ key: "Видавництво", value: publisher },
		{ key: "Рік видання", value: publicationYear },
		{ key: "Кількість сторінок", value: pageCount },
		{ key: "Мова", value: language },
		{ key: "Оригінальна мова", value: originalLanguage },
		{ key: "Перекладач", value: translator },
		{ key: "Розміри", value: dimensions },
		{ key: "Вага", value: weight },
		{ key: "Тип обкладинки", value: coverType },
		{ key: "Артикул", value: articleNumber },
		{ key: "ISBN", value: isbn },
	]
	// .filter(item => item.value !== undefined && item.value !== null)

	return features
}
