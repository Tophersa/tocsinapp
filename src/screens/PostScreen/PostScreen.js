import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import styles from './styles'
import Ionicons from 'react-native-vector-icons//Ionicons';
import EvilIcons from 'react-native-vector-icons//EvilIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import PostScreenComponent from '.';


const PostScreen = () => {



  return (
      <View style={styles.wrapper}>
        <PostScreenComponent/>
    </View>
  )
}

export default PostScreen