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


function BoardListScreen({ navigation }) {
    return (
      <View style={styles.container}>
        <FlatList
          data={DATA}
          keyExtractor={(item, index) => index}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => { navigation.navigate('PostList', { param: item.id }) }}>
                <Text style={styles.item}>
                  {item.title}</Text>
              </TouchableOpacity>
            );
          }}
        >
        </FlatList>
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


  export default BoardListScreen;