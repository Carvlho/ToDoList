import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {SafeAreaView, ScrollView, StatusBar, Text, View} from 'react-native';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <SafeAreaView>
        <StatusBar barStyle="dark-content" backgroundColor="transparent" />
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <View>
            <Text style={{color: '#000'}}>Dale</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </NavigationContainer>
  );
}

export default App;
