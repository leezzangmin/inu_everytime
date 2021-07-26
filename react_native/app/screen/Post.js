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

function PostScreen({ navigation, route }) {
    const [refreshing, setRefreshing] = React.useState(false);
    const onRefresh = React.useCallback(() => {
      setRefreshing(true);
      wait(2000).then(() => setRefreshing(false));
    }, []);
  
    const postNumber = route.params.param.toString();
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({  });
    const [writeComment,setWriteComment] = useState();
    const [comment, setComment] = useState([{  }]);
    var commentData = {
      comment_user_number : undefined,
      comment_content : undefined,
      comment_depth : undefined,
      comment_ref : undefined,
      last_modified_date : undefined,
      post_number_ref : undefined,
    };
  
    common.getComment(postNumber, setLoading, setComment);
    common.getPost(setData, setLoading, postNumber);
  
    if (loading) {
      return (
        <View><Text>loading...</Text></View>
      )
    }
  
    return (
      <View style={styles.container}>
        
        <Text>{data.post_title}</Text>
        <Text>{data.post_content}</Text>
        <Text></Text>
        {
          comment.map((data) => (
            <Text>{data.comment_content}</Text>
          ))
        }
        <TextInput
          placeholder={'댓글작성'}
          onChangeText={
            (writeComment) => setWriteComment(writeComment)}
          autoCapitalize="none"
          returnKeyType="next"
          onSubmitEditing={() =>
            console.log('댓글작성끝', writeComment)
          }
          underlineColorAndroid="#f000"
          blurOnSubmit={false}
        />
        <Button title="댓글쓰기 완료" onPress={() => {
          commentData = {
            comment_user_number : 1,
            comment_content : writeComment,
            comment_depth : 0,
            comment_ref : null, 
            last_modified_date : '2021-01-01 15:00:00',
            post_number_ref : postNumber
          };
          common.makeComment(commentData);
  
        }}
        ></Button>
  
      </View>
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


  export default PostScreen;