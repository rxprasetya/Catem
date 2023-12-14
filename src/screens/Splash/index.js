// Splash
import { StackActions, useNavigation } from '@react-navigation/native'
import React, {useEffect} from 'react'
import { StyleSheet, View, Image, StatusBar} from 'react-native'
import logo from '../../assets/images/image.png'
import auth from '@react-native-firebase/auth'


export default function Splash() {
  const nav = useNavigation()

  useEffect(() => {
    setTimeout(() => {
      if(auth().currentUser){
        nav.dispatch(StackActions.replace('BottomTab'))
      }  else {
        nav.dispatch(StackActions.replace('Login'))
      }
    }, 1000)
  }, [])
  
  return (
      <View style={ styles.container }>
        <StatusBar translucent backgroundColor={'rgba(0,0,0,0)'} />
        <Image style={ styles.logo } source={ logo }/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00AA13',
  },

  logo: {
    width: 256,
    height:256,
    resizeMode: 'contain',
  },
})
