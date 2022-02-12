import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import styles from './styles'
import Ionicons from 'react-native-vector-icons//Ionicons';
import EvilIcons from 'react-native-vector-icons//EvilIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const PostScreenComponent = ({userName, userImage, location, post, postTime, postImage, liked, likes, comments}) => {
   let commentText
   let likeText
    
  if(postImage == 'none'){
      postImage = null
  }

  if(likes == '1'){
    likeText = '1 Comfort'
  }else if(likes>1){
    likeText = likes + ' Comforts'
  }else{
    likeText = 'Comfort'
  }

  if(comments == '1'){
    commentText = '1 Comment'
  }else if(comments>1){
      commentText = comments + ' Comments'
  }else{
      commentText = 'Comment'
  }

  
    return (
    <>
    <View style={styles.container}>
        <View style={styles.profileContainer}>
            <View style={styles.pictureContainer}>
                <Image style={styles.ppicture} source={{uri: userImage}}/>
            </View>
            <View style={styles.namesContainer}>
                <Text style={styles.usernameText}>{userName}</Text>
                <Text style={styles.postTime}>{postTime.toString()}</Text>
            </View>
        </View>

        <View style={styles.locationContainer}>
            <Ionicons name="location-sharp" size={20} color="green" />
            <Text style={styles.locationText}>{location}</Text>
        </View>

        <View style={styles.textContainer}>
            <Text style={styles.postText}>{post}</Text>
        </View>

        <View style={styles.imageContainer}>
            {postImage?<Image style={styles.postPicture} source={{uri: postImage}}/>: null}
        </View>

        <View style={styles.reactionsContainer}>
            <TouchableOpacity style={[styles.reactContainer1, {backgroundColor: liked?'#AED6F1':'white'}]}>
                <FontAwesome5  name="heartbeat" size={18} color="#2E86C1" onPress={() => setComfort(!comfort)}/>
                <Text style={styles.reactText}>{likeText}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.reactContainer2} onPress={() => alert('comment clicked!')}>
                <EvilIcons name="comment" size={25} color="#900" />
                <Text style={styles.reactText}>{commentText}</Text>
            </TouchableOpacity>

        </View>
    </View>
    </>
  )
}

export default PostScreenComponent