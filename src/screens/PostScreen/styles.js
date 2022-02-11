import { StyleSheet } from 'react-native';
import { Colours } from '../../utilities/Colours'

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#D6EAF8'
    },
    container: {
        backgroundColor: Colours.WHITE,
        paddingVertical: 5,
        marginHorizontal: 10,
        marginVertical: 5,
        borderRadius: 5
    },
    profileContainer: {
        paddingHorizontal: 10,
        display: 'flex',
        flexDirection: 'row',  
    },
    pictureContainer: {
        backgroundColor: '#2E86C1',
        height: 43,
        width: 43,
        borderRadius: 20
    },
    ppicture: {
        height: 40,
        width: 40,
        borderRadius: 20,
    },
    namesContainer: {
        paddingHorizontal: 10,
        width: '100%',
    },
    usernameText: {
        fontSize: 14,
        fontWeight: '700',
        color: '#000000',

    },
    postTime: {
        fontStyle: 'italic'
    },
    locationContainer: {
        paddingTop: 5,
        marginHorizontal: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#AED6F1',
    },

    locationText: {
        fontWeight: '500'
    },
    textContainer: {
        paddingHorizontal: 10,
        paddingBottom: 5,
        
    },
    postText: {
        color: '#000000'
    },
    imageContainer: {

    },
    postPicture: {
        width: '100%',
        height: 250,
    },
    reactionsContainer: {
        paddingVertical: 10,
        paddingHorizontal: 50,  
        display: 'flex',
        flexDirection: 'row', 
        justifyContent: 'space-between'
    },
    reactContainer1: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#AED6F1',
        padding: 3,
        borderRadius: 3 
        
    },
    reactContainer2: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        // backgroundColor: 'lightgray',
        padding: 5,
        borderRadius: 3 
        
    },
    reactText: {
        paddingHorizontal: 2,
        color: '#000000'
    },

  });
  
export default styles;