import { useFilter } from "@/context/FilterContext"
import { useEffect } from "react"

export const FilterBookGrid = () => {
	const { filters } = useFilter()

	useEffect(() => {
		console.log("BookList received filters:", filters)
	}, [filters])

	return <div>Book List (to be implemented)</div>
}
