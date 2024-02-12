import styled from 'styled-components/native';

const ButtonAddTask = styled.TouchableOpacity`
  position: absolute;
  right: 0;

  color: ${({theme}) => theme.colors.white};

  padding: 10px;

  border-radius: 8px;
  background-color: ${({theme}) => theme.colors.primary};
`;

export default ButtonAddTask;
