import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native'
import React, {useState} from 'react'
import styles from './styles'
import Ionicons from 'react-native-vector-icons//Ionicons';
import EvilIcons from 'react-native-vector-icons//EvilIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import PostScreenComponent from '.';
import { DATA } from '../../../assets/data';

const PostScreen = () => {

    const renderItem = ({ item }) => (
        <PostScreenComponent 
        userName={item.userName} 
        userImage={item.userImage} 
        location={item.location}
        post={item.post}
        postTime={item.postTime}
        postImage={item.postImage}
        liked={item.liked}
        likes={item.likes}
        comments={item.comments}
        />
      );


  return (
      <View style={styles.wrapper}>
        <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        refreshing={true}
      />
      <View style={[{height: 80}]}></View>
    </View>
  )
}

export default PostScreen