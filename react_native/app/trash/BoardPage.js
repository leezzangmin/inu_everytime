// // 변수 snake   asdf_asdf
// // 함수 camelCase()  
// import 'react-native-gesture-handler';
// import * as React from 'react';
// import { useState, useEffect } from "react";
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import RNRestart from 'react-native-restart';
// import axios from 'axios';
// import * as common from './common.js';
// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';
// import {
//   RefreshControl,
//   FlatList,
//   Alert,
//   Button,
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
//   Touchable,
//   TouchableOpacity,
//   TextInput,
// } from 'react-native';
// import { date } from 'joi';
// import { json } from 'body-parser';
// import _ from 'denodeify';





// const Stack = createStackNavigator();



// // function PostListScreen({ navigation, route }) {

// //   const BoardNumber = route.params.param.toString();
// //   const [data, setData] = useState([{
// //     board_number: undefined,
// //     last_modified_date: undefined,
// //     post_content: undefined,
// //     post_number: undefined,
// //     post_title: undefined,
// //     user_number: undefined
// //   }]);
// //   const [loading, setLoading] = useState(true);
// //   common.getPostList(setData, setLoading, BoardNumber);

// //   if (loading) {
// //     return (
// //       <View><Text>loading...</Text></View>
// //     )
// //   }
// //   console.log(data);

// //   return (
// //     <SafeAreaView style={styles.container}>
// //       <FlatList
// //         data={data}
// //         keyExtractor={(item, index) => index}
// //         renderItem={({ item }) => {
// //           return (
// //             <TouchableOpacity
// //               onPress={() => {
// //                 navigation.navigate('Post', { param: item.post_number });
// //               }}>
// //               <Text style={styles.item}>
// //                 {item.post_title}
// //               </Text>
// //             </TouchableOpacity>
// //           );
// //         }}>
// //       </FlatList>
// //       <TouchableOpacity style={styles.item}
// //         onPress={() => {
// //           navigation.navigate('Write', { param: data[0].board_number })
// //         }}>
// //         <Text>글쓰기</Text>
// //       </TouchableOpacity>
      
// //     </SafeAreaView>
// //   );
// // }

// // function commentWrite() {

// //   const [commentText, setComment] = useState();

// //   return (
// //       <TextInput
// //         placeholder={'댓글입력'}
// //         onChangeText={
// //           (commentText) => setComment(commentText)
// //         }
// //         autoCapitalize="none"
// //         returnKeyType="next"
// //         onSubmitEditing={() =>{
// //           console.log('작성완료', title);
// //         }}
// //         underlineColorAndroid="#f000"
// //         blurOnSubmit={false}
// //       />
// //   )
// // }


// // function WriteScreen({ route }) {
// //   const boardNumber = route.params.param.toString();

// //   const [titleText, setTitle] = useState();
// //   const [contentText, setContent] = useState();
// //   var postData = {
// //     board_number: undefined,
// //     title: undefined,
// //     content: undefined,
// //     user_number: undefined,
// //     last_modified_date: undefined,
// //   };

// //   return (
// //     <View><Text>글쓰는페이지 : {boardNumber}번게시판</Text>
// //       <TextInput
// //         placeholder={'제목'}
// //         onChangeText={(titleText) => setTitle(titleText)}
// //         autoCapitalize="none"
// //         returnKeyType="next"
// //         onSubmitEditing={() =>
// //           console.log('작성완료', title)
// //         }
// //         underlineColorAndroid="#f000"
// //         blurOnSubmit={false}
// //       />
// //       <TextInput
// //         placeholder={'내용'}
// //         onChangeText={
// //           (contentText) => setContent(contentText)}
// //         autoCapitalize="none"
// //         returnKeyType="next"
// //         onSubmitEditing={() =>
// //           console.log('내용작성끝', contentText)
// //         }
// //         underlineColorAndroid="#f000"
// //         blurOnSubmit={false}
// //       />

// //       <Button title="글쓰기 완료" onPress={() => {
// //         postData = {
// //           board_number: boardNumber,
// //           title: titleText,
// //           content: contentText,
// //           user_number: undefined,
// //           last_modified_date: undefined,
// //         };
// //         common.writePost(postData);
// //       }}></Button>
// //     </View>
// //   )
// // }


// // function PostScreen({ navigation, route }) {
// //   const [refreshing, setRefreshing] = React.useState(false);
// //   const onRefresh = React.useCallback(() => {
// //     setRefreshing(true);
// //     wait(2000).then(() => setRefreshing(false));
// //   }, []);

// //   const postNumber = route.params.param.toString();
// //   const [loading, setLoading] = useState(true);
// //   const [data, setData] = useState({  });
// //   const [writeComment,setWriteComment] = useState();
// //   const [comment, setComment] = useState([{  }]);
// //   var commentData = {
// //     comment_user_number : undefined,
// //     comment_content : undefined,
// //     comment_depth : undefined,
// //     comment_ref : undefined,
// //     last_modified_date : undefined,
// //     post_number_ref : undefined,
// //   };

// //   common.getComment(postNumber, setLoading, setComment);
// //   common.getPost(setData, setLoading, postNumber);

// //   if (loading) {
// //     return (
// //       <View><Text>loading...</Text></View>
// //     )
// //   }

// //   return (
// //     <View style={styles.container}>
      
// //       <Text>{data.post_title}</Text>
// //       <Text>{data.post_content}</Text>
// //       <Text></Text>
// //       {
// //         comment.map((data) => (
// //           <Text>{data.comment_content}</Text>
// //         ))
// //       }
// //       <TextInput
// //         placeholder={'댓글작성'}
// //         onChangeText={
// //           (writeComment) => setWriteComment(writeComment)}
// //         autoCapitalize="none"
// //         returnKeyType="next"
// //         onSubmitEditing={() =>
// //           console.log('댓글작성끝', writeComment)
// //         }
// //         underlineColorAndroid="#f000"
// //         blurOnSubmit={false}
// //       />
// //       <Button title="댓글쓰기 완료" onPress={() => {
// //         commentData = {
// //           comment_user_number : 1,
// //           comment_content : writeComment,
// //           comment_depth : 0,
// //           comment_ref : null, 
// //           last_modified_date : '2021-01-01 15:00:00',
// //           post_number_ref : postNumber
// //         };
// //         common.makeComment(commentData);

// //       }}
// //       ></Button>

// //     </View>
// //   );
// // }



// // function BoardListScreen({ navigation }) {
// //   return (
// //     <View style={styles.container}>
// //       <FlatList
// //         data={DATA}
// //         keyExtractor={(item, index) => index}
// //         renderItem={({ item }) => {
// //           return (
// //             <TouchableOpacity
// //               onPress={() => { navigation.navigate('PostList', { param: item.id }) }}>
// //               <Text style={styles.item}>
// //                 {item.title}</Text>
// //             </TouchableOpacity>
// //           );
// //         }}
// //       >
// //       </FlatList>
// //     </View>
// //   );
// // }

// const BoardPage = () => {
//   return (
    
//       // <Stack.Navigator initialRouteName="BoardList">
//       //   <Stack.Screen name="BoardList" component={BoardListScreen} />
//       //   <Stack.Screen name="PostList" component={PostListScreen} />
//       //   <Stack.Screen name="Post" component={PostScreen} />
//       //   <Stack.Screen name="Write" component={WriteScreen} />
//       // </Stack.Navigator>
    
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 22
//   },
//   item: {
//     flex: 1,
//     padding: 10,
//     fontSize: 18,
//     height: 44,
//   },
// });



// export default BoardPage;