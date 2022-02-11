import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import styles from './styles'
import Ionicons from 'react-native-vector-icons/Ionicons';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


const AddPostScreen = () => {

    const [number, onChangeNumber] = React.useState(null);

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
          <ActionButton.Item buttonColor='#9b59b6' title="Take Photo" onPress={() => console.log("notes tapped!")}>
            <Icon name="camera" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#1abc9c' title="Choose Photo" onPress={() => {}}>
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