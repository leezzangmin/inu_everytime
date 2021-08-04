import 'react-native-gesture-handler';
import * as React from 'react';

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
  TextInput,
} from 'react-native';
import _ from 'denodeify';
import * as common from '../common.js';

function RegisterScreen(){

    const [user_id,setUser_id] = React.useState(null);
    const [user_pw,setUser_pw] = React.useState(null);
    const [user_nickname,setUser_nickname] = React.useState(null);
    const [user_name,setUser_name] = React.useState(null);
    const [user_department_number,setUser_department_number] = React.useState(null);
    const [user_student_id,setUser_student_id] = React.useState(null);


    return(
        <View><Text>회원가입 페이지</Text>
        <TextInput
          placeholder={'아이디'}
          onChangeText={(user_id) => setUser_id(user_id)}
          autoCapitalize="none"
          returnKeyType="next"
          onSubmitEditing={() =>
            console.log('아이디작성끝', user_id)
          }
          underlineColorAndroid="#f000"
          blurOnSubmit={false}
        />
        <TextInput
          placeholder={'비밀번호'}
          onChangeText={
            (user_pw) => setUser_pw(user_pw)}
          autoCapitalize="none"
          returnKeyType="next"
          onSubmitEditing={() =>
            console.log('비번작성끝', user_pw)
          }
          underlineColorAndroid="#f000"
          blurOnSubmit={false}
        />
          <TextInput
          placeholder={'닉네임'}
          onChangeText={
            (user_nickname) => setUser_nickname(user_nickname)}
          autoCapitalize="none"
          returnKeyType="next"
          onSubmitEditing={() =>
            console.log('닉네임작성끝', user_nickname)
          }
          underlineColorAndroid="#f000"
          blurOnSubmit={false}
        />
        <TextInput
          placeholder={'이름'}
          onChangeText={
            (user_name) => setUser_name(user_name)}
          autoCapitalize="none"
          returnKeyType="next"
          onSubmitEditing={() =>
            console.log('이름작성끝', user_name)
          }
          underlineColorAndroid="#f000"
          blurOnSubmit={false}
        />
                <TextInput
          placeholder={'학과'}
          onChangeText={
            (user_department_number) => setUser_department_number(user_department_number)}
          autoCapitalize="none"
          returnKeyType="next"
          onSubmitEditing={() =>
            console.log('학과작성끝', user_department_number)
          }
          underlineColorAndroid="#f000"
          blurOnSubmit={false}
        />
                <TextInput
          placeholder={'학번'}
          onChangeText={
            (user_student_id) => setUser_student_id(user_student_id)}
          autoCapitalize="none"
          returnKeyType="next"
          onSubmitEditing={() =>
            console.log('학번작성끝', user_student_id)
          }
          underlineColorAndroid="#f000"
          blurOnSubmit={false}
        />
        <Button title="가입하기" onPress={() => {
          const userData = {
            user_id : user_id,
            user_pw : user_pw,
            user_nickname : user_nickname,
            created_date : common.getDate(),
            user_name : user_name,
            user_department_number : user_department_number,
            user_student_id : user_student_id,
          };
          common.register(userData);
        }}></Button>
      </View>


        )
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


  export default RegisterScreen;