import { View, Text, TouchableOpacity, Platform, StyleSheet } from 'react-native';
import React, {useState, useContext} from 'react';
import { useNavigation } from '@react-navigation/native'
import FormButton from '../../components/FormButtom';
import FormInput from '../../components/FormInputs';
import SocialButton from '../../components/SocialButtom';
import { Colours } from '../../utilities/Colours';

const SignupScreen = () => {

    const navigation = useNavigation();

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
  
    //const {register} = useContext(AuthContext);
  
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Create an account</Text>
  
        <FormInput
          labelValue={email}
          onChangeText={(userEmail) => setEmail(userEmail)}
          placeholderText="Email"
          iconType="user"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />
  
        <FormInput
          labelValue={password}
          onChangeText={(userPassword) => setPassword(userPassword)}
          placeholderText="Password"
          iconType="lock"
          secureTextEntry={true}
        />
  
        <FormInput
          labelValue={confirmPassword}
          onChangeText={(userPassword) => setConfirmPassword(userPassword)}
          placeholderText="Confirm Password"
          iconType="lock"
          secureTextEntry={true}
        />
  
        <FormButton
          buttonTitle="Sign Up"
          onPress={() => register(email, password)}
        />
  
        <View style={styles.textPrivate}>
          <Text style={styles.color_textPrivate}>
            By registering, you confirm that you accept our{' '}
          </Text>
          <TouchableOpacity onPress={() => alert('Terms Clicked!')}>
            <Text style={[styles.color_textPrivate, {color: 'red'}]}>
              Terms of service
            </Text>
          </TouchableOpacity>
          <Text style={styles.color_textPrivate}> and </Text>
          <Text style={[styles.color_textPrivate, {color: 'red'}]}>
            Privacy Policy
          </Text>
        </View>
  
        {Platform.OS === 'android' ? (
          <View>
            <SocialButton
              buttonTitle="Sign Up with Facebook"
              btnType="facebook"
              color= {Colours.WHITE}
              backgroundColor="#2e64e5"
              onPress={() => {}}
            />
      
            <SocialButton
              buttonTitle="Sign Up with Google"
              btnType="google"
              color='red'
              backgroundColor="pink"
              onPress={() => {}}
            />
          </View>
        ) : null}
  
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate('LoginScreen')}>
          <Text style={styles.navButtonText}>Have an account? Sign In</Text>
        </TouchableOpacity>
      </View>
    );
  };
  
  export default SignupScreen;
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: Colours.SECONDARY,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    text: {
      fontFamily: 'Kufam-SemiBoldItalic',
      fontSize: 28,
      marginBottom: 10,
      color: '#051d5f',
    },
    navButton: {
      marginTop: 15,
    },
    navButtonText: {
      fontSize: 18,
      fontWeight: '700',
      color: '#2e64e5',
      fontFamily: 'Lato-Regular',
    },
    textPrivate: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginVertical: 35,
      justifyContent: 'center',
    },
    color_textPrivate: {
      fontSize: 13,
      fontWeight: '400',
      fontFamily: 'Lato-Regular',
      color: 'grey',
    },
  });
