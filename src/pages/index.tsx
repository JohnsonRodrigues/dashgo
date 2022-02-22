import { Button, Flex, Stack } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { Input } from '../components/form/Input';

const SignIn: NextPage = () => {
  return (
    <Flex w="100vw" height="100vh" alignItems="center" justify="center">
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
      >
        <Stack spacing="4">
          <Input
            name="email"
            type="email"
            label="E-mail"
            placeholder="email@mail.com"
          />
          <Input
            name="password"
            type="password"
            label="Senha"
            placeholder="******"
          />

          {/* 

          <FormControl>
            <FormLabel htmlFor="email">E-mail</FormLabel>
            <Input
              name="email"
              type="email"
              focusBorderColor="pink.500"
              bgColor="gray.900"
              variant="filled"
              _hover={{
                bgColor: 'gray.900',
              }}
              size="lg"
              placeholder="email@mail.com"
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="password">Senha</FormLabel>
            <Input
              name="password"
              type="password"
              focusBorderColor="pink.500"
              bgColor="gray.900"
              variant="filled"
              _hover={{
                bgColor: 'gray.900',
              }}
              size="lg"
              placeholder="***********"
            />
          </FormControl> */}
        </Stack>
        <Button type="submit" mt="6" colorScheme="pink">
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
};

export default SignIn;
