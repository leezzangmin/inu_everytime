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
import { useState, useEffect } from "react";


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
} from 'react-native';
import { date } from 'joi';
import { json } from 'body-parser';
import _ from 'denodeify';


const Stack = createStackNavigator();

const DATA = [
    {
      id: '1',
      title: 'HOT 게시판',
    },
    {
      id: '2',
      title: 'BEST 게시판',
    },
    {
      id: '3',
      title: '자유게시판',
    },
    {
      id: '4',
      title: 'Q&A',
    },
    {
      id: '5',
      title: '동아리게시판',
    },
    {
      id: '6',
      title: '전시게시판',
    },
    {
      id: '7',
      title: '총학게시판',
    },
    {
      id: '8',
      title: '홍보게시판',
    },
    {
      id: '9',
      title: '정보게시판',
    },
    {
      id: '10',
      title: '기숙사게시판',
    },
  ];

function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>react natvie navigation 테스트</Text>
        <Button
          title="게시판목록"
          onPress={() => navigation.navigate('BoardList')}
        />
      </View>
    );
  }

function getPostList(saveData,setLoading){
  useEffect(() => {
    setLoading(true);
    axios.get('http://3.36.112.194:5000/board?board_number=1')
    .then(function( res ) {
      saveData(res.data);
      // saveData({
      //   board_number: res.data[0].board_number,
      //   last_modified_date: res.data[0].last_modified_date,
      //   post_content: res.data[0].post_content,
      //   post_number: res.data[0].post_number,
      //   post_title: res.data[0].post_title,
      //   user_number: res.data[0].user_number,
      // });
      setLoading(false);
    })
    .catch((error) => console.error(error))
    .finally(() => console.log('done'))
  }, [])
}


  function PostListScreen({ navigation }){

    const [data, setData] = useState([{
      board_number: undefined,
      last_modified_date: undefined,
      post_content: undefined,
      post_number: undefined,
      post_title: undefined,
      user_number: undefined
    }]);

    const [loading, setLoading] = useState(true);

    getPostList(setData,setLoading);

    if (loading)
    {
      return (
        <View><Text>loading...</Text></View>
      )
    }

    console.log(data[1].post_content);  

    return (
      <SafeAreaView style={styles.container}>
          <FlatList
            data={data}
            renderItem={({item}) => {
                return(
                    <TouchableOpacity 
                      onPress={ () => {
                        navigation.navigate('Post',{param:item.post_number});
                        }
                      }>
                      <Text style={styles.item}>
                          {item.post_title}
                      </Text>
                    </TouchableOpacity>
                );
            }}>
          </FlatList>
      </SafeAreaView>
    );
  }

  function getPost(saveData,setLoading,postNumber){
    const url='http://3.36.112.194:5000/post?post_number='+postNumber.toString();
    //const url='http://3.36.112.194:5000/post?post_number=1';
    useEffect(() => {
      setLoading(true);
      axios.get(url)
      .then(function( res ) {
        //saveData(res.data);
        saveData({
          board_number: res.data.board_number,
          last_modified_date: res.data.last_modified_date,
          post_content: res.data.post_content,
          post_number: res.data.post_number,
          post_title: res.data.post_title,
          user_number: res.data.user_number,
          //comments: res.data.comments,
        });
        setLoading(false);
      })
      .catch((error) => console.error(error))
      .finally(() => console.log('last'))
      //componentWillUnmount

  }, [])
  }

  function CommentsView(postnum){
    return(
      <Text>댓글창</Text>
    )
  }


  function PostScreen({ navigation,route }) {
    
    const [loading, setLoading] = useState();
    const [data,setData] = useState({
      board_number: undefined,
      last_modified_date: undefined,
      post_content: undefined,
      post_number: undefined,
      post_title: undefined,
      user_number: undefined,
      //comments: undefined,
    });
    const postNumber = route.params;
    CommentsView(postNumber);

    getPost(setData,setLoading,postNumber.param);

    if (loading)
    {
      return (
      <View><Text>loading...</Text></View>
      )
    }
    
    console.log(data[0]);

    return (
      <View style={styles.container}>
        {/* <Text>{data.comments['0']}</Text> */}
        <Text>{data.post_title}</Text>
        <Text>{data.post_content}</Text>

        <CommentsView></CommentsView>

      </View>



    );
  }


  
  function BoardListScreen({ navigation }) {
    return (
      <View style={styles.container}>
          <FlatList
            data={DATA}
            renderItem={({item}) => {
                return(
                    <TouchableOpacity 
                    onPress={ () => {navigation.navigate('PostList')} }>
                        <Text style={styles.item}>
                        {item.title}</Text>
                    </TouchableOpacity>
                );
            }}>
          </FlatList>
      </View>
    );
  }

const BoardPage = () => {
  return (    
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="BoardList" component={BoardListScreen} />
            <Stack.Screen name="PostList" component={PostListScreen} />
            <Stack.Screen name="Post" component={PostScreen} />

        </Stack.Navigator>

    </NavigationContainer>
 );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
       },
       item: {
         padding: 10,
         fontSize: 18,
         height: 44,
       },
});



export default BoardPage;