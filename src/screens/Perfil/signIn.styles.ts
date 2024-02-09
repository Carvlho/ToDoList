import styled from 'styled-components/native';

export const TextRegister = styled.Text`
  font-family: ${({theme}) => theme.fonts.medium};
  font-size: 14px;
  color: ${({theme}) => theme.colors.black};

  text-align: center;

  margin-top: 12px;
`;
