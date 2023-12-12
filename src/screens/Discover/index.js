// Discover
import React, { useEffect, useRef, useState } from 'react'
import { StyleSheet, TextInput, View, StatusBar, Text, TouchableOpacity, ScrollView, Image, Animated, FlatList, Alert } from 'react-native'
import { SearchNormal1, ArrowLeft2, Location, Star1 } from 'iconsax-react-native'
import { useIsFocused, useNavigation, useRoute, } from '@react-navigation/native'
import storage from '@react-native-firebase/storage'
import firestore from '@react-native-firebase/firestore'

export default function Discover() {

  const navigation = useNavigation()
  // const route = useRoute()
  const isFocused = useIsFocused()

  const ScrollY = useRef(new Animated.Value(0)).current
  const [menuData, setMenuData] = useState([])
  const DiffClampY = Animated.diffClamp(ScrollY, 0, 192)
  const HeaderY = DiffClampY.interpolate({
    inputRange: [0, 142],
    outputRange: [0, -124]
  })
  const RecommendedY = DiffClampY.interpolate({
    inputRange: [0, 128],
    outputRange: [0, -72]
  })

  useEffect(() => {
    fetchData()
    // Ketika beranjak ke layar selanjutnya
    // return () => {
    //   fetchData()
    // }
    // [route.params?.isLoading]
  }, [isFocused])

  // Tampil Data
  async function fetchData() {
    try {
      const data = await firestore().collection('menu').get()
      setMenuData(data.docs)
      // console.log(data.docs[0].id);
      // const data = await fetch('https://656f45af6529ec1c6237aa2a.mockapi.io/catem/menu/')
      // const res = await data.json()
    } catch (e) {
      console.log(e);
    }
  }

  function onConfirmDelete(id) {
    Alert.alert('Confirm', 'Are you sure want to delete this item?', [
      { text: 'Yes, sure', onPress: () => deleteData(id) },
      { text: 'Nope bruh' },
    ])
  }

  async function deleteData(id) {
    try {
      const data = await firestore().collection('menu').doc(id).delete()
      const filter = menuData.filter((item) => item.id != id)
      setMenuData(filter)
      console.log(data)
      // console.log(id)
      // const data = await fetch('https://656f45af6529ec1c6237aa2a.mockapi.io/catem/menu/' + id, {
      //   method: 'DELETE',
      //   headers: {
      //     'Accept': 'application/json',
      //     'Content-type': 'application/json',
      //   },
      // })
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor={'rgba(0,0,0,0)'}></StatusBar>
      <Animated.View style={[styles.cardHeader, { transform: [{ translateY: HeaderY }] }]}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backContainer} onPress={() => navigation.navigate('Home')}>
            <ArrowLeft2 size={24} variant='Linear' color='black' />
          </TouchableOpacity>
          <TouchableOpacity style={styles.locContainer}>
            <Text style={styles.locationHeader}>Your Location</Text>
            <View style={styles.locNow}>
              <Location size={16} variant='Bold' color='salmon' />
              <Text style={styles.locationText}>Tasikmadu</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.searchContainer}>
          <SearchNormal1 size={18} variant='Linear' color='grey' style={{ marginLeft: 12, }} />
          <TextInput style={styles.search} placeholder='Search the Catering Semerbak app' placeholderTextColor={'#d3d3d3'}></TextInput>
        </View>
      </Animated.View>
      <Animated.View style={{ transform: [{ translateY: RecommendedY }] }}>
        <Text style={styles.recHeader}>Recommended</Text>

        <Animated.ScrollView
          style={styles.recContainer}
          onScroll={
            Animated.event(
              [{
                nativeEvent: {
                  contentOffset: {
                    y: ScrollY
                  }
                }
              }],
              {
                useNativeDriver: true
              },
            )}
          contentContainerStyle={{ paddingBottom: 64 }}
        >
          <View style={styles.recContentContainer}>
            {menuData.map((item) => (
              <TouchableOpacity style={styles.recContent}
                onPress={() => navigation.navigate('EditMenu', { data: item._data, id : item.id })}
                onLongPress={() => onConfirmDelete(item.id)}
              >
                <Image style={styles.recImage} source={{ uri: item._data.image }} />
                <Text style={styles.recTitle}>{item._data.title}</Text>
                <View style={styles.recRating}>
                  <Text style={styles.recRatingText}>Rp{item._data.price}</Text>
                  <Star1 size={12} variant='Bold' color='#fcba03' style={{ marginLeft: 12, marginRight: 4, }} />
                  <Text style={styles.recRatingText}>5.0</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </Animated.ScrollView>
      </Animated.View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 32,
  },

  header: {
    padding: 12,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'white',
  },

  backContainer: {
    padding: 8,
  },

  locContainer: {
    width: '87%',
  },

  locationHeader: {
    color: 'grey',
    fontSize: 12,
    marginBottom: 3,
  },

  locNow: {
    flexDirection: 'row',
  },

  locationText: {
    color: 'black',
    marginLeft: 4,
    fontSize: 15,
    fontWeight: '600',
  },

  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 46,
    backgroundColor: '#f9f9f9',
    marginHorizontal: 16,
    borderRadius: 10,
  },

  search: {
    marginHorizontal: 8,
    color: 'black',
    width: '85%',
  },

  recHeader: {
    color: 'black',
    fontSize: 18,
    fontWeight: '600',
    marginHorizontal: 16,
    marginTop: 8,
    letterSpacing: 0.2,
  },

  recContainer: {
    paddingHorizontal: 8,
    marginTop: 8,
    height: 'auto',
  },

  recContentContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  recContent: {
    marginTop: 4,
    padding: 6,
    width: 141,
    borderRadius: 12,
    marginHorizontal: 2,
  },

  recImage: {
    width: 128,
    height: 128,
    resizeMode: 'contain',
    borderRadius: 8,
  },

  recTitle: {
    marginTop: 4,
    color: 'black',
    fontWeight: '700',
  },

  recRating: {
    marginTop: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },

  recRatingText: {
    color: 'grey',
    fontSize: 12,
  },

})