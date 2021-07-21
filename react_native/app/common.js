
// 함수 camelCase()  
import 'react-native-gesture-handler';
import * as React from 'react';
import { useState, useEffect } from "react";


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import axios from 'axios';

export function getPost(saveData, setLoading, postNumber) {
  const url = 'http://3.36.112.194:5000/post?post_number=' + postNumber.toString();
  useEffect(() => {
    axios.get(url)
      .then(function (res) {
        console.log(res.data);
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

  }, [])
}

export function getComment(postNumber, setLoading, setComment) {
  const url = 'http://3.36.112.194:5000/comment?comment_number=' + postNumber.toString();
  console.log(url);
  useEffect(() => {
    setLoading(true);
    axios.get(url)
      .then(function (res) {
        setComment(res.data);
      })
      .catch((error) => console.error(error))
      .finally(() => console.log('last'))
  }, [])
}



export function getPostList(saveData, setLoading, BoardNumber) {

  const url = 'http://3.36.112.194:5000/board?board_number=' + BoardNumber;
  useEffect(() => {
    setLoading(true);
    axios.get(url)
      .then(function (res) {
        saveData(res.data);
        setLoading(false);
      })
      .catch((error) => console.error(error))
      .finally(() => console.log('done'))
  }, [])
}

export function writePost(postData) {
  const user_number = 1;
  const url = 'http://3.36.112.194:5000/post/write';
  const last_modified_date = '2021-01-01 15:00:00';

  const post=  {
    board_number : postData.board_number,
    title : postData.title,
    content : postData.content,
    user_number : user_number, //postData.user_number
    last_modified_date : last_modified_date,  //postData.last_modified_date,
  };
  console.log(post);

  axios.post(url,post)
  .then(function (res){
    console.log('response=',res)
  })
  .catch(function(error){
    console.log(error)
  })
}
