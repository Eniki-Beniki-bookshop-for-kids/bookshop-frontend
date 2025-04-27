// src/utils/formatSegmentLabel.ts
export const formatSegmentLabel = (segment: string): string => {
	return segment
		.split("-")
		.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
		.join(" ")
}
