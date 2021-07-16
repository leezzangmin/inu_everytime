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
import boardPage from './boardPage';







const MainPage = () => {

    axios.get('http://3.36.112.194:5000/board?board_number=1')
    .then(function (response) {
        console.log('success!');
      const temp=response;
      console.log(temp);
    })
    .catch(function (error) {
      Alert.alert('fail!');    
    });

  return (    

    <SafeAreaView>

        <Button 
        title="게시판"
        onPress={() => Alert.alert("게시판으로 이동")}></Button>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

});

export default MainPage;
