//src/components/pagination/LoadMore.tsx
"use client"

import { HStack } from "@chakra-ui/react"
import { ArrowDownIcon, ButtonTemplate } from "../ui"

interface LoadMoreProps {
	itemsPerPage: number
	remainingItems: number
	onLoadMore: () => void
	isDisabled: boolean
	itemsName?: string
}

export const LoadMore = ({
	itemsPerPage,
	remainingItems,
	onLoadMore,
	isDisabled,
	itemsName = "товарів",
}: LoadMoreProps) => {
	const isItemsMoreThanPerPage = remainingItems > itemsPerPage
	return (
		<HStack justify="center" my={8}>
			<ButtonTemplate
				paddingRight="30px"
				paddingLeft="30px"
				fontSize="18px"
				bg="#FFF"
				textColor="customBlack"
				hoverScale={1.02}
				onClick={onLoadMore}
				isDisabled={isDisabled}
				iconAfter={<ArrowDownIcon />}
			>
				{`Показати ще ${
					isItemsMoreThanPerPage ? itemsPerPage : remainingItems
				} ${itemsName}`}
			</ButtonTemplate>
		</HStack>
	)
}
