import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import styles from './styles'
import Ionicons from 'react-native-vector-icons/Ionicons';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ImagePicker from 'react-native-image-crop-picker';

const AddPostScreen = () => {

    const [image, setImage] = useState(null);
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

  return (
      <View style={styles.container}>
        <View>
            <TextInput
                style={styles.locationInput}
                onChangeText={onChangeNumber}
                value={number}
                placeholder="Choose location..."
                multiline
                numberOfLines={2}
            />
        </View>
        <View>
            <TextInput
                style={styles.postInput}
                onChangeText={onChangeNumber}
                value={number}
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

        <TouchableOpacity style={styles.sendButton}>
            <Ionicons name="send-sharp" size={35} color="white" />
        </TouchableOpacity>
    </View>
  )
}

export default AddPostScreen