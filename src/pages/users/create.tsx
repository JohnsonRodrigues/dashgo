import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  VStack,
} from '@chakra-ui/react';
import Link from 'next/link';
import { Input } from '../../components/form/Input';
import { Header } from '../../components/Header';
import { Sidebar } from '../../components/Sidebar';

export default function CreateUser() {
  return (
    <Box>
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px={['6', '8']}>
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p={['6', '8']}>
          <Heading size="lg" fontWeight="normal">
            Criar usuário
          </Heading>
          <Divider my="6" borderColor="gray.700" />
          <VStack spacing="8">
            <SimpleGrid minChildWidth="240px" spacing={['6', '8']} w="100%">
              <Input
                name="name"
                type="text"
                label="Nome completo"
                placeholder="informe seu nome completo"
              />
              <Input
                name="email"
                type="email"
                label="E-mail"
                placeholder="email@mail.com"
              />
            </SimpleGrid>

            <SimpleGrid minChildWidth="240px" spacing={['6', '8']} w="100%">
              <Input
                name="password"
                label="Senha"
                type="password"
                placeholder="******"
              />
              <Input
                name="password_confirmation"
                type="password"
                label="Confirmação de senha"
                placeholder="******"
              />
            </SimpleGrid>
          </VStack>
          <Flex mt="8" justify="flex-end">
            <HStack>
              <Link href="/users" passHref>
                <Button as="a" colorScheme="whiteAlpha">
                  Cancelar
                </Button>
              </Link>
              <Button colorScheme="pink">Salvar</Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
