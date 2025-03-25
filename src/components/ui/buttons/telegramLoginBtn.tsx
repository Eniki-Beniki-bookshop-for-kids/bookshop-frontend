"use client"

import { useTelegramSignIn } from "@/hooks"
import { FC, useEffect } from "react"

export const TelegramLoginButton: FC<{
	onClose: () => void
}> = ({ onClose }) => {
	useTelegramSignIn({ onClose })

	useEffect(() => {
		const interval = setInterval(() => {
			const button = document.querySelector("#telegram-login-container button")
			if (button) {
				button.textContent = "Продовжити з Telegram"
				clearInterval(interval)
			}
		}, 100)

		return () => clearInterval(interval)
	}, [])

	return (
		<div id="telegram-login-container" className="w-full mb-8 px-4">
			<style jsx global>{`
				#telegram-login-container iframe {
					width: 100% !important;
					height: 60px !important;
				}

				#telegram-login-container button {
					background-color: var(--chakra-colors-customWhite) !important;
					color: var(--chakra-colors-customBlack) !important;
					border: 1px solid var(--chakra-colors-gray-200) !important;
					border-radius: 8px !important;
					font-family: inherit !important;
					font-size: 16px !important;
					font-weight: 500 !important;
					display: flex !important;
					align-items: center !important;
					justify-content: center !important;
					padding: 18px !important;
					width: 100% !important;
					height: 100% !important;
					transition: transform 0.2s ease !important;
				}

				#telegram-login-container button:hover {
					transform: scale(1.02) !important;
				}

				#telegram-login-container button img {
					display: none !important;
				}

				#telegram-login-container button::before {
					content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='%23000000' d='M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.895 17.494c-.39 1.144-1.387 1.433-2.115.886l-3.12-2.297-1.92 1.848c-.336.324-.614.24-.614-.188l.12-3.614 6.614-6.614c.288-.288.144-.432-.288-.144l-8.162 5.162-3.494-1.094c-.816-.256-1.104-.816-.24-1.248l14.162-5.494c.672-.24 1.344.192 1.056 1.056l-1.999 6.742z'/%3E%3C/svg%3E");
					margin-right: 8px;
				}
			`}</style>
		</div>
	)
}
