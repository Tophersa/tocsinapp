import { View, Text, TextInput, TouchableOpacity, Platform, Image, ActivityIndicator, Alert } from 'react-native'
import React, {useState, useContext} from 'react'
import styles from './styles'
import Ionicons from 'react-native-vector-icons/Ionicons';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ImagePicker from 'react-native-image-crop-picker';
import { AuthContext } from '../../navigation/AuthProvider';

import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';

const AddPostScreen = () => {

    const {user, logout} = useContext(AuthContext);

    const [image, setImage] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [transferred, setTransferred] = useState(0);
    const [post, setPost] = useState(null);
    const [location, setLocation] = useState(null);
    const [number, onChangeNumber] = React.useState(null);

    const takePhotoFromCamera = () => {
        ImagePicker.openCamera({
          width: 1200,
          height: 780,
          cropping: true,
        }).then((image) => {
          console.log(image);
          const imageUri = Platform.OS === 'ios' ? image.sourceURL : image.path;
          setImage(imageUri);
        });
      };
    
      const choosePhotoFromLibrary = () => {
        ImagePicker.openPicker({
          width: 1200,
          height: 780,
          cropping: true,
        }).then((image) => {
          console.log(image);
          const imageUri = Platform.OS === 'ios' ? image.sourceURL : image.path;
          setImage(imageUri);
        });
      };

      const submitPost = async () => {
        const imageUrl = await uploadImage();
        console.log('User Id: ', user.uid);
        console.log('Image Url: ', imageUrl);
        console.log('Location: ', location);
        console.log('Post: ', post);
    
        firestore()
        .collection('posts')
        .add({
          userId: user.uid,
          location: location,
          post: post,
          postImg: imageUrl,
          postTime: firestore.Timestamp.fromDate(new Date()),
          likes: null,
          comments: null,
        })
        .then(() => {
          console.log('Post Added!');
          Alert.alert(
            'Post published!',
            'Your post has been published Successfully!',
          );
          setPost(null);
          setLocation(null);
        })
        .catch((error) => {
          console.log('Something went wrong with added post to firestore.', error);
        });
      }
    

      const uploadImage = async () => {
        if( image == null ) {
          return null;
        }
        const uploadUri = image;
        let filename = uploadUri.substring(uploadUri.lastIndexOf('/') + 1);
    
        // Add timestamp to File Name
        const extension = filename.split('.').pop(); 
        const name = filename.split('.').slice(0, -1).join('.');
        filename = name + Date.now() + '.' + extension;
    
        setUploading(true);
        setTransferred(0);
    
        const storageRef = storage().ref(`photos/${filename}`);
        const task = storageRef.putFile(uploadUri);
    
        // Set transferred state
        task.on('state_changed', (taskSnapshot) => {
          console.log(
            `${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`,
          );
    
          setTransferred(
            Math.round(taskSnapshot.bytesTransferred / taskSnapshot.totalBytes) *
              100,
          );
        });
    
        try {
          await task;
    
          const url = await storageRef.getDownloadURL();
    
          setUploading(false);
          setImage(null);
    
          // Alert.alert(
          //   'Image uploaded!',
          //   'Your image has been uploaded to the Firebase Cloud Storage Successfully!',
          // );
          return url;
    
        } catch (e) {
          console.log(e);
          return null;
        }
    
      };

  return (
      <View style={styles.container}>
        <View>
            <TextInput
                style={styles.locationInput}
                onChangeText={(content)=> setLocation(content)}
                value={location}
                placeholder="Choose location..."
                multiline
                numberOfLines={2}
            />
        </View>
        <View>
            {image != null ? <Image source={{uri: image}} style={styles.imagePreview}/> : null}
            <TextInput
                style={styles.postInput}
                onChangeText={(content)=> setPost(content)}
                value={post}
                placeholder="What's on your mind?"
                multiline
                numberOfLines={10}
            />
        </View>

        <ActionButton buttonColor="rgba(231,76,60,1)" style={[{bottom: 50}]}>
          <ActionButton.Item buttonColor='#9b59b6' title="Take Photo" onPress={takePhotoFromCamera}>
            <Icon name="camera" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#1abc9c' title="Choose Photo" onPress={choosePhotoFromLibrary}>
            <MaterialIcons name="photo-library" style={styles.actionButtonIcon} />
          </ActionButton.Item>
        </ActionButton>

        {uploading?
        (<View style={styles.indicator}>
            <Text>{transferred} % Completed!</Text>
            <ActivityIndicator size={'large'} color="#0000ff"/>
        </View>):
        (<TouchableOpacity style={styles.sendButton} onPress={submitPost}>
            <Ionicons name="send-sharp" size={35} color="white" />
        </TouchableOpacity>)
        }
    </View>
  )
}

export default AddPostScreen