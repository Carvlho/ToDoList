import styled from 'styled-components/native';

export const ContainerInput = styled.View`
  position: relative;

  width: 100%;

  margin-bottom: 10px;
`;

export const MyInput = styled.TextInput`
  width: 100%;

  color: ${({theme}) => theme.colors.black};

  padding: 12px;

  border-radius: 8px;
  background-color: ${({theme}) => theme.colors.background_secondary};
`;

export const ContainerMyInput = styled.View`
  position: relative;

  flex-direction: row;
  align-items: center;

  width: 100%;
`;

export const Icon = styled.TouchableOpacity`
  position: absolute;

  right: 16px;
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

export const MyInputMultiLine = styled(MyInput)`
  align-items: flex-start;
  justify-content: flex-start;
  
`;
