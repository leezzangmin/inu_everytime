import 'react-native-gesture-handler';
import * as React from 'react';
import { useState, useEffect } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RNRestart from 'react-native-restart';
import axios from 'axios';
import * as common from '../common.js';
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

function PostListScreen({ navigation, route}) {

    const BoardNumber = route.params.param.toString();
    const [data, setData] = useState([{
      board_number: undefined,
      last_modified_date: undefined,
      post_content: undefined,
      post_number: undefined,
      post_title: undefined,
      user_number: undefined
    }]);
    const [loading, setLoading] = useState(true);
    common.getPostList(setData, setLoading, BoardNumber);

    if (loading) {
      return (
        <View><Text>loading...</Text></View>
      )
    }
    console.log(data);
    console.log(data.post_number);
  
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={data}
          keyExtractor={(item, index) => index}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Post', { param: item.post_number });
                }}>
                <Text style={styles.item}>
                  {item.post_title}
                </Text>
              </TouchableOpacity>
            );
          }}>
        </FlatList>
        <TouchableOpacity style={styles.item}
          onPress={() => {
            navigation.navigate('Write', { param: data[0].board_number })
          }}>
          <Text>글쓰기</Text>
        </TouchableOpacity>
        
      </SafeAreaView>
    );
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


  export default PostListScreen;