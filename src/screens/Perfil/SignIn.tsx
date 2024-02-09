import {Button, KeyboardAvoidingView, Platform, Text} from 'react-native';

import {useForm, Controller} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {z} from 'zod';

import Container from '@components/container';
import Input from '@components/Input/input.index';

const signInSchema = z.object({
  email: z
    .string({
      required_error: 'Insira um email.',
    })
    .email('Insira um email válido.'),
  password: z
    .string({
      required_error: 'Insira uma senha.',
    })
    .min(3, {
      message: 'A senha deve ter pelo menos 3 caracteres.',
    }),
});

type signInUserFormData = z.infer<typeof signInSchema>;

export default function SignIn() {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<signInUserFormData>({
    resolver: zodResolver(signInSchema),
  });

  console.log(errors);

  const onSubmit = (data: any) => console.log(data);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{
        flex: 1,
      }}>
      <Container>
        <Text>SignIn</Text>

        <Controller
          control={control}
          name="email"
          rules={{
            required: true,
          }}
          render={({field: {onChange}}) => (
            <Input
              placeholder="Digite seu email"
              errorMessage={errors.email?.message}
              onChangeText={text => {
                onChange(text);
              }}
            />
          )}
        />

        <Controller
          control={control}
          name="password"
          rules={{
            required: true,
          }}
          render={({field: {onChange}}) => (
            <Input
              placeholder="Digite sua senha"
              errorMessage={errors.password?.message}
              onChangeText={text => {
                onChange(text);
              }}
            />
          )}
        />

        <Button title="Entrar" onPress={handleSubmit(onSubmit)} />
      </Container>
    </KeyboardAvoidingView>
  );
}
