import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import {windowHeight, windowWidth} from '../utilities/Dimension';
import { Colours } from '../utilities/Colours';

const FormButton = ({buttonTitle, ...rest}) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} {...rest}>
      <Text style={styles.buttonText}>{buttonTitle}</Text>
    </TouchableOpacity>
  );
};

export default FormButton;

const styles = StyleSheet.create({
    buttonContainer: {
        marginTop: 10,
        width: '100%',
        height: windowHeight/15,
        backgroundColor: '#2e64e5',
        backgroundColor: Colours.PRIMARY,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ffffff',
        fontFamily: 'Lato-Regular',
    },
});
