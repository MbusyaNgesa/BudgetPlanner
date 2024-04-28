import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import loginBg from './../../assets/images/loginbg.jpg'
import colors from '../../utils/colors'

export default function LoginScreen() {
  return (
    <View style={{
        display:'flex',
        alignItems: 'center'
    }}>
      <Image source={loginBg}
      style={styles.bgImage}
      />

      <View style={style.text}>
        <Text style={{
            fontSize:25,
            fontWeight:'bold',
            textAlign: 'center',
            color:colors.WHITE,
        }}> Personal Budget Planner</Text>

        <Text style={{
            fontSize: 18,
            textAlign: 'center',
            color:colors.WHITE,
            marginTop: 20,
        }}>
            Stay on Track
        </Text>

        <TouchableOpacity style={styles.button} onPress={()=>console.log('button clicked')}>
            <Text style={{
                color:colors.BLACK,
                textAlign: 'center'
            }}>Login/SignUp</Text>
        </TouchableOpacity>
        <Text style={{
            color:colors.GRAY,
            marginTop: 10,
            fontSize: 13

        }}> By login/signup you will agree to our terms and conditions</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    bgImage:{
        width: 200,
        height: 400,
        marginTop: 70,
        borderWidth: 5,
        borderRadius: 20,
        borderColor: colors.BLACK
    },
    button:{
        backgroundColor:colors.WHITE,
        padding: 15,
        paddingHorizontal: 5,
        borderRadius:99,
        marginTop: 30

    }
})
const style = StyleSheet.create({
    text:{
        backgroundColor: colors.PRIMARY,
        width:'100%',
        height: '100%',
        padding: 20,
        marginTop: -30,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30
    }
})