import {TextInputProps} from 'react-native';

import {useTheme} from 'styled-components';

import {
  ContainerInfo,
  ContainerInput,
  ContainerMyInput,
  Icon,
  MyInput,
  TextInfo,
} from './input.styles';

import {AlertCircle, Eye, EyeOff} from 'lucide-react-native';

interface IInput extends TextInputProps {
  isPassword?: boolean;
  errorMessage?: string;
  isPasswordVisible?: boolean;
  setPasswordVisible?: any;
}

export default function Input({
  errorMessage,
  isPassword,
  isPasswordVisible,
  setPasswordVisible,
  ...props
}: IInput) {
  const theme = useTheme();

  const handlePassword = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  return (
    <ContainerInput>
      <ContainerMyInput>
        <MyInput {...props} />

        {isPassword && (
          <Icon onPress={handlePassword}>
            {isPasswordVisible ? (
              <EyeOff color={theme.colors.gray} />
            ) : (
              <Eye color={theme.colors.gray} />
            )}
          </Icon>
        )}
      </ContainerMyInput>

      {errorMessage && (
        <ContainerInfo>
          <AlertCircle color={theme.colors.danger} size={16} />
          <TextInfo>{errorMessage}</TextInfo>
        </ContainerInfo>
      )}
    </ContainerInput>
  );
}
