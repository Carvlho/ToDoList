import styled from 'styled-components/native';

export const ContainerButton = styled.TouchableOpacity`
  align-items: center;

  padding: 18px;

  border-radius: 8px;
  background-color: ${({theme}) => theme.colors.primary};
`;

export const TextButton = styled.Text`
  font-family: ${({theme}) => theme.fonts.medium};
  font-size: 16px;
  color: ${({theme}) => theme.colors.white};
`;
