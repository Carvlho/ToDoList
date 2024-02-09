import {TextInputProps, View} from 'react-native';

import {ContainerInfo, ContainerInput, MyInput, TextInfo} from './input.styles';

import {AlertCircle} from 'lucide-react-native';

import {useTheme} from 'styled-components';

interface IInput extends TextInputProps {
  errorMessage?: string;
}

export default function Input({errorMessage, ...props}: IInput) {
  const theme = useTheme();

  return (
    <ContainerInput>
      <MyInput {...props} />

      {errorMessage && (
        <ContainerInfo>
          <AlertCircle color={theme.colors.danger} size={16} />
          <TextInfo>{errorMessage}</TextInfo>
        </ContainerInfo>
      )}
    </ContainerInput>
  );
}
