import {Button, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {useAuth} from '@hooks/auth';

import {AppRoutesNavigationProps} from '@routes/index.routes';

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
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Perfil</Text>

      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
}
