import styled from 'styled-components/native';

const ButtonAddTask = styled.View`
  color: ${({theme}) => theme.colors.white};

  padding: 14px;

  border-radius: 50px;
  background-color: ${({theme}) => theme.colors.primary};
`;

export default ButtonAddTask;
