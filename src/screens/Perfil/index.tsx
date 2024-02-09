import {Button, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {AppRoutesNavigationProps} from '@routes/index.routes';

export default function Perfil() {
  const navigation = useNavigation<AppRoutesNavigationProps>();

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Perfil</Text>

      <Button title="Login" onPress={() => navigation.navigate('SignIn')} />
    </View>
  );
}
