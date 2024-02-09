import styled from 'styled-components/native';

export const ContainerInput = styled.View`
  margin-bottom: 10px;
`;

export const MyInput = styled.TextInput`
  color: ${({theme}) => theme.colors.black};

  padding: 12px;

  border-radius: 8px;
  background-color: ${({theme}) => theme.colors.background_secondary};
`;

export const ContainerInfo = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 4px;

  margin-top: 5px;
`;

export const TextInfo = styled.Text`
  font-size: 12px;
  color: ${({theme}) => theme.colors.danger};
`;
