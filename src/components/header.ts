import styled from 'styled-components/native';

const Header = styled.Text`
  position: relative;

  font-family: ${({theme}) => theme.fonts.bold};
  font-size: 32px;
  color: ${({theme}) => theme.colors.primary};

  text-align: center;

  margin-bottom: 24px;
`;

export default Header;
