import { Gender as PrismaGender } from "../../prisma/generated/client"

// Мапінг із локальних значень на значення Prisma
const genderToPrismaMap: Record<string, PrismaGender> = {
	чоловіча: PrismaGender.male,
	жіноча: PrismaGender.female,
	інша: PrismaGender.other,
}

// Мапінг із значень Prisma на локальні (для відображення)
const prismaToGenderMap: Record<PrismaGender, string> = {
	[PrismaGender.male]: "чоловіча",
	[PrismaGender.female]: "жіноча",
	[PrismaGender.other]: "інша",
}

export const toPrismaGender = (
	gender: string | null | undefined,
): PrismaGender | null => {
	if (!gender) return null
	return genderToPrismaMap[gender] || null
}

export const fromPrismaGender = (
	gender: PrismaGender | null | undefined,
): string | null => {
	if (!gender) return null
	return prismaToGenderMap[gender] || null
}
