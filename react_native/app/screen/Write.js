import 'react-native-gesture-handler';
import * as React from 'react';
import { useState, useEffect } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RNRestart from 'react-native-restart';
import axios from 'axios';
import * as common from '../common.js';
import {CommonActions} from '@react-navigation/native';

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


function WriteScreen({ navigation,route }) {

    const boardNumber = route.params.param.toString();

    const [titleText, setTitle] = useState();
    const [contentText, setContent] = useState();
    var postData = {
      board_number: undefined,
      title: undefined,
      content: undefined,
      user_number: undefined,
      last_modified_date: undefined,
    };
    return (
      <View><Text>글쓰는페이지 : {boardNumber}번게시판</Text>
        <TextInput
          placeholder={'제목'}
          onChangeText={(titleText) => setTitle(titleText)}
          autoCapitalize="none"
          returnKeyType="next"
          onSubmitEditing={() =>
            console.log('작성완료', title)
          }
          underlineColorAndroid="#f000"
          blurOnSubmit={false}
        />
        <TextInput
          placeholder={'내용'}
          onChangeText={
            (contentText) => setContent(contentText)}
          autoCapitalize="none"
          returnKeyType="next"
          onSubmitEditing={() =>
            console.log('내용작성끝', contentText)
          }
          underlineColorAndroid="#f000"
          blurOnSubmit={false}
        />
  
        <Button title="글쓰기 완료" onPress={() => {
          postData = {
            board_number: boardNumber,
            title: titleText,
            content: contentText,
            user_number: undefined,
            last_modified_date: undefined,
          };
          common.writePost(postData);
          alert('완료');


          navigation.navigate('PostList', { param: boardNumber });
        }}></Button>
      </View>
    )
            // do something
  }
  
  

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 22
    },
    item: {
      flex: 1,
      padding: 10,
      fontSize: 18,
      height: 44,
    },
  });


  export default WriteScreen;