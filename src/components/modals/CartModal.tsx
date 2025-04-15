//src/components/modals/CartModal.tsx
"use client"

import {
	Button,
	FormControl,
	FormLabel,
	Input,
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
} from "@chakra-ui/react"
import { FC } from "react"
import { ModalTemplateProps } from "../../types/propsInterfaces"

export const CartModal: FC<ModalTemplateProps> = ({ isOpen, onClose }) => {
	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>CartModal</ModalHeader>
				<ModalBody>
					<FormControl>
						<FormLabel>CartModal</FormLabel>
						<Input type="text" placeholder="example@example.com" />
						<FormLabel mt={4}>Пароль</FormLabel>
						<Input type="password" placeholder="********" />
					</FormControl>
				</ModalBody>
				<ModalFooter>
					<Button colorScheme="purple" onClick={onClose}>
						CartModal
					</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	)
}
