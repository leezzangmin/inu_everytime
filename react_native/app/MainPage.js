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
import BoardPage from './BoardPage';




const Stack = createStackNavigator();



const MainPage = () => {

    // axios.get('http://3.36.112.194:5000/board?board_number=1')
    // .then(function (response) {
    //   console.log('success');
    //   console.log(response);
    // })
    // .catch(function (error) {
    //   console.log(error);
    //   Alert.alert('fail');    
    // });

  return (    
      <BoardPage>

      </BoardPage>
  );
};

const styles = StyleSheet.create({

});

export default MainPage;
