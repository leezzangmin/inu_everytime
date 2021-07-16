/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

// 변수 snake   asdf_asdf
// 함수 camelCase()  
import 'react-native-gesture-handler';

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';



import axios from 'axios';


const Stack = createStackNavigator();


import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
  } from 'react-native/Libraries/NewAppScreen';
import {
    Alert,
    Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';






const boardPage = () => {

  return (    
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen 
          name="Join" 
          component={Join}
          options={{
                headerShown: false,
          }} 
      />
      <Stack.Screen 
          name="Join2" 
          component={Join}
      />
    </Stack.Navigator>
</NavigationContainer>
  );
};

const styles = StyleSheet.create({

});

export default boardPage;
