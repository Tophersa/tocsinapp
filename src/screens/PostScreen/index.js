import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, {useContext, useState} from 'react'
import styles from './styles'
import Ionicons from 'react-native-vector-icons//Ionicons';
import EvilIcons from 'react-native-vector-icons//EvilIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { AuthContext } from '../../navigation/AuthProvider';
import moment from 'moment'

const PostScreenComponent = ({onDelete, id, userId, userName, userImage, location, post, postTime, postImg, liked, likes, comments}) => {
   const {user, logout} = useContext(AuthContext);
   
    let commentText
   let likeText
    
  if(postImg == 'none'){
      postImg = null
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
                <Text style={styles.postTime}>{moment(postTime.toDate()).fromNow()}</Text>
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
            {postImg?<Image style={styles.postPicture} source={{uri: postImg}}/>: null}
        </View>

        <View style={styles.reactionsContainer}>
            <TouchableOpacity style={[styles.reactContainer1, {backgroundColor: liked?'#AED6F1':'white'}]}>
                <FontAwesome5  name="heartbeat" size={18} color="#2E86C1" onPress={() => setComfort(!comfort)}/>
                <Text style={styles.reactText}>{likeText}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.reactContainer2} onPress={() => alert('comment clicked!')}>
                <EvilIcons name="comment" size={25} color="black" />
                <Text style={styles.reactText}>{commentText}</Text>
            </TouchableOpacity>
            {user.uid == userId?
            <TouchableOpacity style={styles.reactContainer2} onPress={() => onDelete(id)}>
                <EvilIcons name="trash" size={25} color="#900" />
            </TouchableOpacity>: null}


        </View>
    </View>
    </>
  )
}

export default PostScreenComponent