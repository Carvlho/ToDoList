import {useCallback, useState} from 'react';
import {KeyboardAvoidingView, Platform, TouchableOpacity} from 'react-native';
import {useFocusEffect, useNavigation} from '@react-navigation/native';

import {useForm, Controller} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {z} from 'zod';

import {AppRoutesNavigationProps} from '@routes/index.routes';

import {useAuth} from '@hooks/auth';

import Container from '@components/container';
import Input from '@components/Input/input.index';
import Header from '@components/header';
import Button from '@components/Button/button.index';

import {TextBack} from './signUp.styles';

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

export default function SignUp() {
  const navigation = useNavigation<AppRoutesNavigationProps>();
  const {
    control,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm<signInUserFormData>({
    resolver: zodResolver(signInSchema),
  });

  const {signUp} = useAuth();

  const [passwordVisible, setPasswordVisible] = useState(false);

  const onSubmit = async (data: signInUserFormData) => {
    const response: any = await signUp(data);

    if (response.success) {
      navigation.navigate('Home');
    }
  };

  useFocusEffect(
    useCallback(() => {
      return () => {
        reset();
      };
    }, [reset]),
  );

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{
        flex: 1,
      }}>
      <Container>
        <Header>Cadastre-se</Header>

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
              secureTextEntry={!passwordVisible}
              isPassword
              isPasswordVisible={passwordVisible}
              setPasswordVisible={setPasswordVisible}
              errorMessage={errors.password?.message}
              onChangeText={text => {
                onChange(text);
              }}
            />
          )}
        />

        <Button
          title="Cadastrar"
          onPress={handleSubmit(onSubmit)}
          style={{marginTop: 14}}
        />

        <TouchableOpacity onPress={() => navigation.goBack()}>
          <TextBack>Voltar</TextBack>
        </TouchableOpacity>
      </Container>
    </KeyboardAvoidingView>
  );
}
