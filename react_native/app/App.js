import 'react-native-gesture-handler';
import * as React from 'react';
import { useState, useEffect } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainSTackNavigator from '@react-navigation/native';
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



import MainPage from './MainPage';


const App: () => Node = () => {

  return (
    
      <MainPage></MainPage>   
  );
};

const styles = StyleSheet.create({

});

export default App;
