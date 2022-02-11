import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import React, {useState} from 'react'
import { useNavigation } from '@react-navigation/native'
import MaterialIcons from 'react-native-vector-icons//MaterialIcons';
import EvilIcons from 'react-native-vector-icons//EvilIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import PostScreenComponent from '.';
import { DATA } from '../../../assets/data';

const PostScreen = () => {

    const navigation = useNavigation();

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
            <TouchableOpacity style={styles.createAlert} onPress={()=> navigation.navigate('AddPostScreen')}>
                <MaterialIcons name="add-box" size={25} color="#2E86C1" />
                <Text style={styles.createAlertText}>What's on your mind?</Text>
            </TouchableOpacity>

            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
                refreshing={true}
            />

            {/* <View style={styles.addPostButton}>
                <Text>+</Text>
            </View> */}

      {/* <View style={[{height: 80}]}></View> */}
    </View>
  )
}

export default PostScreen

const styles = StyleSheet.create({
    wrapper:{
        backgroundColor: '#D6EAF8',
        height: '100%',  
    },
    createAlert:{
        backgroundColor: 'white',
        height: 40,  
        margin: 10,
        padding: 5,
        borderRadius: 5,
        borderColor: '#AED6F1',
        borderWidth: 2,
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
    },
    createAlertText:{
        fontSize: 16,
        marginLeft: 5 
    },
    addPostButton:{
        backgroundColor: 'green',
        height: '100%',
        height: 60,
        width: 60,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        right: 20,
        bottom: 90,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.8,
        shadowRadius: 20,
        elevation: 4

    },
});