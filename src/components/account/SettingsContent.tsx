import { User } from "@/types/models"
import { Box, Button, FormControl, FormLabel, Heading, Input, Select, VStack } from "@chakra-ui/react"

export const SettingsContent = ({ user }: { user: User }) => {
  return (
    <Box>
      <Heading as="h2" size="md" mb={6}>
        Особиста інформація
      </Heading>
      <VStack spacing={4} align="start">
        <FormControl>
          <FormLabel>Ім’я</FormLabel>
          <Input defaultValue={user.firstName} />
        </FormControl>
        <FormControl>
          <FormLabel>Прізвище</FormLabel>
          <Input defaultValue={user.lastName} />
        </FormControl>
        <FormControl>
          <FormLabel>Номер телефону</FormLabel>
          <Input defaultValue={user.phoneNumber} />
        </FormControl>
        <FormControl>
          <FormLabel>Електронна пошта</FormLabel>
          <Input defaultValue={user.email} />
        </FormControl>
        <FormControl>
          <FormLabel>Дата народження</FormLabel>
          <Input type="date" defaultValue={user.dateOfBirth} />
        </FormControl>
        <FormControl>
          <FormLabel>Стать</FormLabel>
          <Select defaultValue={user.gender}>
            <option value="male">Чоловік</option>
            <option value="female">Жінка</option>
          </Select>
        </FormControl>
        <Button colorScheme="blue">Зберегти зміни</Button>
      </VStack>
    </Box>
  )
}
