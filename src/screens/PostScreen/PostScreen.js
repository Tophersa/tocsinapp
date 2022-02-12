import { View, Text, StyleSheet, TouchableOpacity, FlatList, Alert } from 'react-native'
import React, {useState, useEffect} from 'react'
import { useNavigation } from '@react-navigation/native'
import MaterialIcons from 'react-native-vector-icons//MaterialIcons';
import EvilIcons from 'react-native-vector-icons//EvilIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import PostScreenComponent from '.';
import { DATA } from '../../../assets/data';

import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
import ShimmerEffect from '../../components/ShimmerEffect';

const PostScreen = () => {

    const [posts, setPosts] = useState(null);
    const [loading, setLoading] = useState(true);
    const [deleted, setDeleted] = useState(false);

    const navigation = useNavigation();

    const renderItem = ({ item }) => (
        <PostScreenComponent
        id = {item.id}
        userId={item.userId}
        userName={item.userName} 
        userImage={item.userImage} 
        location={item.location}
        post={item.post}
        postTime={item.postTime}
        postImg={item.postImg}
        liked={item.liked}
        likes={item.likes}
        comments={item.comments}

        onDelete = {handleDelete}
        />
      );

      const fetchPosts = async () => {
        try {
          const list = [];
    
          await firestore()
            .collection('posts')
            .orderBy('postTime', 'desc')
            .get()
            .then((querySnapshot) => {
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
                    postImg: postImg,
                    liked: false,
                    likes: likes,
                    comments: comments
                });
              });
            });
    
          setPosts(list);
    
          if (loading) {
            setLoading(false);
          }
    
          console.log('Posts: ', posts);
        } catch (e) {
          console.log(e);
        }
      };

      useEffect(() => {
        fetchPosts();
      }, []);
    
      useEffect(() => {
        fetchPosts();
        setDeleted(false);
      }, [deleted]);

      const handleDelete = (postId) => {
        Alert.alert(
          'Delete post',
          'Are you sure?',
          [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed!'),
              style: 'cancel',
            },
            {
              text: 'Confirm',
              onPress: () => deletePost(postId),
            },
          ],
          {cancelable: false},
        );
      };

      const deletePost = (postId) => {
        console.log('Current Post Id: ', postId);
    
        firestore()
          .collection('posts')
          .doc(postId)
          .get()
          .then((documentSnapshot) => {
            if (documentSnapshot.exists) {
              const {postImg} = documentSnapshot.data();
    
              if (postImg != null) {
                const storageRef = storage().refFromURL(postImg);
                const imageRef = storage().ref(storageRef.fullPath);
    
                imageRef
                  .delete()
                  .then(() => {
                    console.log(`${postImg} has been deleted successfully.`);
                    deleteFirestoreData(postId);
                  })
                  .catch((e) => {
                    console.log('Error while deleting the image. ', e);
                  });
                // If the post image is not available
              } else {
                deleteFirestoreData(postId);
              }
            }
          });
      };

      const deleteFirestoreData = (postId) => {
        firestore()
          .collection('posts')
          .doc(postId)
          .delete()
          .then(() => {
            Alert.alert(
              'Post deleted!',
              'Your post has been deleted successfully!',
            );
            setDeleted(true);
          })
          .catch((e) => console.log('Error deleting post.', e));
      };

    const ListHeader = () =>{
        return null;
    };

  return (
      <View style={styles.wrapper}>
        {loading?<ShimmerEffect/>:
          <>
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

            <TouchableOpacity style={styles.addPostButton} onPress={()=> navigation.navigate('AddPostScreen')}>
                <Text style={styles.addPostButtonText}>+</Text>
            </TouchableOpacity>

            <View style={[{height: 80}]}></View>
        </>}
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
        height: 40,
        width: 40,
        borderRadius: 20,
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
    addPostButtonText: {
        color: 'white',
        fontSize: 25
    }
});