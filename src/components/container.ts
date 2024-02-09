import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;

  padding: 30px 16px;

  background-color: ${({theme}) => theme.colors.background};
`;

export default Container;
