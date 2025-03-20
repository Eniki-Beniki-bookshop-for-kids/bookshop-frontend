import { IButtonProps } from "@/types/propsInterfaces"
import { FC } from "react"

export const LogoTelegram: FC<IButtonProps> = ({ size = 24 }) => {
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 32 32"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z"
				fill="url(#paint0_linear_226_5055)"
			/>
			<path
				d="M23.7875 9.20648L20.9312 23.6127C20.9312 23.6127 20.5312 24.6127 19.4312 24.1315L12.8375 19.0752L10.4375 17.919L6.39998 16.5627C6.39998 16.5627 5.78123 16.344 5.71873 15.8627C5.65623 15.3815 6.41873 15.1252 6.41873 15.1252L22.4687 8.83148C22.4687 8.82523 23.7875 8.24398 23.7875 9.20648Z"
				fill="white"
			/>
			<path
				d="M12.325 23.4503C12.325 23.4503 12.1313 23.4315 11.8938 22.6753C11.6563 21.919 10.4375 17.919 10.4375 17.919L20.1313 11.7628C20.1313 11.7628 20.6938 11.4253 20.6688 11.7628C20.6688 11.7628 20.7688 11.8253 20.4688 12.1003C20.1687 12.3815 12.8562 18.9565 12.8562 18.9565"
				fill="#D2E4F0"
			/>
			<path
				d="M15.3625 21.0125L12.7563 23.3937C12.7563 23.3937 12.55 23.55 12.3313 23.45L12.8313 19.0312"
				fill="#B5CFE4"
			/>
			<defs>
				<linearGradient
					id="paint0_linear_226_5055"
					x1="16"
					y1="0"
					x2="16"
					y2="31.8833"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#41BCE7" />
					<stop offset="1" stopColor="#22A6DC" />
				</linearGradient>
			</defs>
		</svg>
	)
}
