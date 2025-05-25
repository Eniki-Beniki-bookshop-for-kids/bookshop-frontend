// src/components/book/filters/FilterSidebar.tsx
import { CollapseBtn } from "../../CollapseBtn"

interface FilterTitleProps {
	toggleDescription: () => void
	isExpanded: boolean
	title: string
}

export const FilterTitle = ({
	toggleDescription,
	isExpanded,
	title,
}: FilterTitleProps) => {
	return (
		<CollapseBtn
			toggleDescription={toggleDescription}
			isExpanded={isExpanded}
			textForCollapse={title}
			textForShow={title}
			fontSize={{ base: "16px", lg: "18px" }}
			borderBottomWidth={0}
			justifyContent="space-between"
		/>
	)
}
