import { StyleSheet } from 'react-native';
import { Colours } from '../../utilities/Colours'

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: 'white'
    },
    locationInput: {
        // backgroundColor: '#D6EAF8',
        backgroundColor: 'white',
        margin: 10,
        paddingHorizontal: 10,
        borderRadius: 5,
        borderBottomWidth: 3,
        borderColor: 'grey'

    },
    postInput: {
        backgroundColor: 'white',
        margin: 10,
        height: '80%',
        // alignItems: 'center',
        // justifyContent: 'center',
        fontSize: 18,
        textAlign: 'center',
        borderRadius: 5,
    },
    sendButton: {
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: '#AED6F1',
        backgroundColor: '#2E86C1',
        position: 'absolute',
        bottom: 0,
        height: 50,
        width: '95%',
        borderRadius: 10,
        margin: 10
    }

  });
  
export default styles;