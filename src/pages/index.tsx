import { Button, Flex, Stack } from '@chakra-ui/react';
import type { NextPage } from 'next';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Input } from '../components/form/Input';

type SignInFormData = {
  email: string;
  password: string;
};

const signInFormSchema = yup.object().shape({
  email: yup.string().required().email(),
  password: yup.string().required(),
});

const SignIn: NextPage = () => {
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(signInFormSchema),
  });

  console.log(errors);

  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(values);
  };

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
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4">
          <Input
            name="email"
            type="email"
            label="E-mail"
            error={errors.email}
            placeholder="email@mail.com"
            // {...register('email', { required: 'Email obrigatório' })}
            {...register('email')}
          />
          <Input
            name="password"
            type="password"
            label="Senha"
            error={errors.password}
            placeholder="******"
            // {...register('password', { required: true })}
            {...register('password')}
          />
        </Stack>
        <Button
          type="submit"
          mt="6"
          colorScheme="pink"
          isLoading={isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
};

export default SignIn;
