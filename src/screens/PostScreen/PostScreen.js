import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import React, {useState, useEffect} from 'react'
import { useNavigation } from '@react-navigation/native'
import MaterialIcons from 'react-native-vector-icons//MaterialIcons';
import EvilIcons from 'react-native-vector-icons//EvilIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import PostScreenComponent from '.';
import { DATA } from '../../../assets/data';

import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';

const PostScreen = () => {

    const [posts, setPosts] = useState(null);
    const [loading, setLoading] = useState(true);
    const [deleted, setDeleted] = useState(false);

    const navigation = useNavigation();

    const renderItem = ({ item }) => (
        <PostScreenComponent 
        userId={item.userId}
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

      useEffect(()=>{
        const fetchPosts = async()=>{
            try{

                const list = [];

                 await firestore()
                .collection('posts')
                .orderBy('postTime', 'desc')
                .get()
                .then((querySnapshot)=>{
                    // console.log('Total Posts: ', querySnapshot.size);
                    querySnapshot.forEach((doc) => {
                        const {userId, location, post, postImg, postTime, likes,comments,}=doc.data();
                        list.push({
                            id: doc.id,
                            userId: userId,
                            userName: 'Test Name',
                            userImage: 'https://lh5.googleusercontent.com/-b0PKyNuQv5s/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclxAM4M1SCBGAO7Rp-QP6zgBEUkOQ/s96-c/photo.jpg',
                            location: location,
                            post: post,
                            postTime: postTime,
                            postImage: postImg,
                            liked: false,
                            likes: likes,
                            comments: comments
                        });
                    })
                })

            setPosts(list);

            if(loading){
                setLoading(false);
            }

            console.log('Posts :', list);

            } catch(e){
                console.log(e);
            }
        }
        fetchPosts();
      },[]);

  return (
      <View style={styles.wrapper}>
            <TouchableOpacity style={styles.createAlert} onPress={()=> navigation.navigate('AddPostScreen')}>
                <MaterialIcons name="add-box" size={25} color="#2E86C1" />
                <Text style={styles.createAlertText}>What's on your mind?</Text>
            </TouchableOpacity>

            <FlatList
                data={posts}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
                refreshing={true}
            />

            {/* <View style={styles.addPostButton}>
                <Text>+</Text>
            </View> */}

      <View style={[{height: 80}]}></View>
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