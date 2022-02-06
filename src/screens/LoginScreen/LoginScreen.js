import { View, Text, TouchableOpacity,Image, StyleSheet, Platform } from 'react-native';
import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native'
import AntDesign from 'react-native-vector-icons';
import FormButton from '../../components/FormButtom';
import FormInput from '../../components/FormInputs';
import SocialButton from '../../components/SocialButtom';
import { Colours } from '../../utilities/Colours';


const LoginScreen = () => {

    const navigation = useNavigation();

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

  return (
    <View style={styles.container}>
        <Image
            source={require('../../../assets/images/board2.png')}
            style={styles.logo}
        />
      <Text style={styles.text}>TOCSIN</Text>
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

       <FormButton
        buttonTitle="Sign In"
        onPress={() => alert("email, password")}
        />

       <TouchableOpacity style={styles.forgotButton} onPress={() => {}}>
            <Text style={styles.navButtonText}>Forgot Password?</Text>
       </TouchableOpacity>

       {Platform.OS === 'android' ? (
        <View>
          <SocialButton
            buttonTitle="Sign In with Facebook"
            btnType="facebook"
            color='white'
            backgroundColor="#2e64e5"
            onPress={() => {}}
          />

          <SocialButton
            buttonTitle="Sign In with Google"
            btnType="google"
            color='red'
            backgroundColor="pink"
            onPress={() => {}}
          />
        </View>
        ) : null}

       <TouchableOpacity
        style={styles.forgotButton}
        onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.navButtonText}>
                Don't have an acount? Create here
            </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      paddingTop: 50,
      backgroundColor: Colours.SECONDARY
    },
    logo: {
      height: 150,
      width: 150,
      resizeMode: 'cover',
    },
    text: {
      fontFamily: 'Kufam-SemiBoldItalic',
      fontSize: 35,
      fontWeight: '900',
      marginBottom: 10,
      color: '#051d5f',
    },
    navButton: {
      marginTop: 15,
    },
    forgotButton: {
      marginVertical: 35,
    },
    navButtonText: {
      fontSize: 18,
      fontWeight: '700',
      color: '#2e64e5',
      fontFamily: 'Lato-Regular',
    },
  });