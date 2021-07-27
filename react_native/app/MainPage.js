import 'react-native-gesture-handler';
import * as React from 'react';
import { useState, useEffect } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RNRestart from 'react-native-restart';
import axios from 'axios';
import * as common from './common.js';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {
  RefreshControl,
  FlatList,
  Alert,
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Touchable,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { date } from 'joi';
import { json } from 'body-parser';
import _ from 'denodeify';

import BoardListScreen from './screen/BoardList';
import PostListScreen from './screen/PostList';
import PostScreen from './screen/Post';
import WriteScreen from './screen/Write';
import RegisterScreen from './screen/Register';




const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>react natvie 메인페이지</Text>
      <Button
        title="게시판목록"
        onPress={() => navigation.navigate('BoardList')}
      />
      <Button
        title="회원가입"
        onPress={() => navigation.navigate('Register')}
      />
      <Button
        title="로그인"
        onPress={() => navigation.navigate('BoardList')}
      />
    </View>
  );
}

const MainPage = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="BoardList" component={BoardListScreen} />
        <Stack.Screen name="PostList" component={PostListScreen} />
        <Stack.Screen name="Post" component={PostScreen} />
        <Stack.Screen name="Write" component={WriteScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({

});

export default MainPage;
