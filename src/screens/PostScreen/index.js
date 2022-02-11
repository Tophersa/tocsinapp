import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import styles from './styles'
import Ionicons from 'react-native-vector-icons//Ionicons';
import EvilIcons from 'react-native-vector-icons//EvilIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const PostScreenComponent = () => {
  return (
    <>
    <View style={styles.container}>
        <View style={styles.profileContainer}>
            <View style={styles.pictureContainer}>
                <Image style={styles.ppicture} source={{uri: 'https://randomuser.me/api/portraits/men/31.jpg',}}/>
            </View>
            <View style={styles.namesContainer}>
                <Text style={styles.usernameText}>Shandukani Kharavho</Text>
                <Text style={styles.postTime}>34 minutes ago</Text>
            </View>
        </View>

        <View style={styles.locationContainer}>
            <Ionicons name="location-sharp" size={20} color="green" />
            <Text style={styles.locationText}>Cape Town, Woodstock</Text>
        </View>

        <View style={styles.textContainer}>
            <Text style={styles.postText}>Hello this is a test. To all the people that try to be smart ,your not,use tour guides, stay away from no go zones don`t go out after dark,if your driving keep space between cars at stops and red lights ,high jacking is a crazy problem here,stay in the tourist zones and u should be fine</Text>
        </View>

        <View style={styles.imageContainer}>
            <Image style={styles.postPicture} 
            source={{uri: 'https://www.groundup.org.za/media/_versions/images/photographers/Ashraf%20Hendricks/transport-20210720-img_9394hr_extra_large.jpg',}}
            />
        </View>

        <View style={styles.reactionsContainer}>
            <TouchableOpacity style={styles.reactContainer1}>
                <FontAwesome5  name="heartbeat" size={18} color="#2E86C1" onPress={() => setComfort(!comfort)}/>
                <Text style={styles.reactText}>759 Comforts</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.reactContainer2} onPress={() => alert('comment clicked!')}>
                <EvilIcons name="comment" size={25} color="#900" />
                <Text style={styles.reactText}>5 Comments</Text>
            </TouchableOpacity>

        </View>
    </View>
    <View style={styles.container}>
        <View style={styles.profileContainer}>
            <View style={styles.pictureContainer}>
                <Image style={styles.ppicture} source={{uri: 'https://randomuser.me/api/portraits/men/80.jpg',}}/>
            </View>
            <View style={styles.namesContainer}>
                <Text style={styles.usernameText}>Chara SLT</Text>
                <Text style={styles.postTime}>4 hours ago</Text>
            </View>
        </View>

        <View style={styles.locationContainer}>
            <Ionicons name="location-sharp" size={20} color="green" />
            <Text style={styles.locationText}>Polokwane, Makweng</Text>
        </View>

        <View style={styles.textContainer}>
            <Text style={styles.postText}>My wife and I had a knife pulled on us last night</Text>
        </View>

        <View style={styles.imageContainer}>
            {/* <Image style={styles.postPicture} 
            source={{uri: 'https://www.groundup.org.za/media/_versions/images/photographers/Ashraf%20Hendricks/Police-9885HR_extra_large.jpg',}}
            /> */}
        </View>

        <View style={styles.reactionsContainer}>
            <TouchableOpacity style={styles.reactContainer1}>
                <FontAwesome5  name="heartbeat" size={18} color="#2E86C1" onPress={() => setComfort(!comfort)}/>
                <Text style={styles.reactText}>759 Comforts</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.reactContainer2} onPress={() => alert('comment clicked!')}>
                <EvilIcons name="comment" size={25} color="#900" />
                <Text style={styles.reactText}>5 Comments</Text>
            </TouchableOpacity>

        </View>
    </View>
    </>
  )
}

export default PostScreenComponent