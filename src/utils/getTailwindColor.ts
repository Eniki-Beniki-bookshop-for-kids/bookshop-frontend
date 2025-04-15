//src/utils/getTailwindColor.ts
import resolveConfig from "tailwindcss/resolveConfig"
import tailwindConfig from "../../tailwind.config"

const fullConfig = resolveConfig(tailwindConfig)

export function getTailwindColor(colorName: string) {
	return (
		(fullConfig.theme.colors as unknown as Record<string, string>)[colorName] ||
		null
	)
}
