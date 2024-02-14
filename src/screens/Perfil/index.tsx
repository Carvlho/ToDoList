import {useNavigation} from '@react-navigation/native';

import {useAuth} from '@hooks/auth';

import {AppRoutesNavigationProps} from '@routes/index.routes';

import Container from '@components/container';
import Header from '@components/header';
import Button from '@components/Button/button.index';

export default function Perfil() {
  const navigation = useNavigation<AppRoutesNavigationProps>();

  const {logout} = useAuth();

  const handleLogout = async () => {
    const response: any = await logout();

    if (response.success) {
      navigation.navigate('SignIn');
    }
  };

  return (
    <Container>
      <Header>Perfil</Header>

      <Button title="Logout" onPress={handleLogout} />
    </Container>
  );
}
