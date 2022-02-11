import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import styles from './styles'
import Ionicons from 'react-native-vector-icons/Ionicons';


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
        <TouchableOpacity style={styles.sendButton}>
            <Ionicons name="send-sharp" size={35} color="white" />
        </TouchableOpacity>
    </View>
  )
}

export default AddPostScreen