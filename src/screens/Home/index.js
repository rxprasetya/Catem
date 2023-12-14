// Home
import React, { useState } from 'react'
import { Dimensions, ScrollView, StyleSheet, View, StatusBar, Text, Image, TouchableOpacity, LogBox, TouchableHighlight } from 'react-native'
import { SearchNormal1, ShoppingCart, Location, BoxTime, DiscountShape, DiscountCircle, Car, Bookmark, More, MenuBoard, Add, Lovely } from 'iconsax-react-native'
import logo from '../../assets/images/image.png'
import { useNavigation } from '@react-navigation/native'

const win = Dimensions.get('window')

export default function Home() {

  const navigation = useNavigation()
  const [choose, setChoose] = useState(1)

  return (
    <ScrollView style={styles.container}>
      <StatusBar translucent backgroundColor={'rgba(0,0,0,0)'} />
      <View style={styles.header}></View>
      <Image style={styles.logoHeader} source={logo} />
      <TouchableOpacity style={styles.searchContainer} onPress={() => { navigation.navigate('Discover') }}>
        <SearchNormal1 variant='Linear' color='grey' style={{ marginLeft: 12, }} />
        <Text style={styles.search}> What shall we deliver? </Text>
      </TouchableOpacity>
      <View style={styles.categoryContainer}>
        <TouchableOpacity style={[styles.categoryContainer2, { backgroundColor: choose == 1 ? '#e8fee4' : '#f3f3f3' }]} onPress={() => setChoose(1)}>
          <ShoppingCart size={16} variant='Linear' color={choose == 1 ? '#005D17' : 'black'} />
          <Text style={[styles.category, { fontWeight: choose == 1 ? '600' : 'normal', color: choose == 1 ? '#005D17' : 'black' }]}>Delivery</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.categoryContainer2, { backgroundColor: choose == 2 ? '#e8fee4' : '#f3f3f3' }]} onPress={() => setChoose(2)}>
          <DiscountShape size={16} variant='Linear' color={choose == 2 ? '#005D17' : 'black'} />
          <Text style={[styles.category, { fontWeight: choose == 2 ? '600' : 'normal', color: choose == 2 ? '#005D17' : 'black' }]}>Dine-In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.categoryContainer2, { backgroundColor: choose == 3 ? '#e8fee4' : '#f3f3f3' }]} onPress={() => setChoose(3)}>
          <Car size={16} variant='Linear' color={choose == 3 ? '#005D17' : 'black'} />
          <Text style={[styles.category, { fontWeight: choose == 3 ? '600' : 'normal', color: choose == 3 ? '#005D17' : 'black' }]}>Self Pick-Up</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.fiturContainer}>
        <TouchableOpacity style={styles.fiturContainer2}>
          <Location size={54} variant='Linear' color='black' />
          <Text style={styles.fiturText}>Location</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.fiturContainer2}>
          <BoxTime size={54} variant='Linear' color='black' />
          <Text style={styles.fiturText}>Dinner Time</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.fiturContainer2}>
          <Bookmark size={54} variant='Linear' color='black' />
          <Text style={styles.fiturText}>Best Rating</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.fiturContainer2}>
          <DiscountCircle size={54} variant='Linear' color='black' />
          <Text style={styles.fiturText}>Discount</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.fiturContainer}>
        <TouchableOpacity style={styles.fiturContainer2}>
          <MenuBoard size={50} variant='Linear' color='black' />
          <Text style={styles.fiturText}>Menu</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.fiturContainer2}>
          <Lovely size={50} variant='Linear' color='black' />
          <Text style={styles.fiturText}>Favorite</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.fiturContainer2}>
          <Add size={50} variant='Linear' color='black' />
          <Text style={styles.fiturText}>Add Menu</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.fiturContainer2}>
          <More size={50} variant='Linear' color='black' />
          <Text style={styles.fiturText}>More</Text>
        </TouchableOpacity>
      </View>
      <ScrollView pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.iklanContainer}>
        <View style={styles.iklanContainer2}>
          <Text style={styles.iklanHeader}>Pesan Sekarang</Text>
          <Image style={styles.iklanImage} source={{ uri: 'https://images.unsplash.com/photo-1611250188496-e966043a0629?auto=format&fit=crop&q=80&w=1450&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} />
          <Text style={styles.iklanTextHeader}>Dapatkan lebih banyak, lebih murah</Text>
          <Text style={styles.iklanTextSponsored}>Sponsored by Catering Semerbak</Text>
        </View>
        <View style={styles.iklanContainer2}>
          <Text style={styles.iklanHeader}>Beli Sekarang</Text>
          <Image style={styles.iklanImage} source={{ uri: 'https://images.unsplash.com/photo-1610970878459-a0e464d7592b?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZvb2QlMjBhbmQlMjBkcmlua3xlbnwwfHwwfHx8MA%3D%3D' }} />
          <Text style={styles.iklanTextHeader}>Dapatkan lebih banyak, lebih murah</Text>
          <Text style={styles.iklanTextSponsored}>Sponsored by Catering Semerbak</Text>
        </View>
        <View style={styles.iklanContainer2}>
          <Text style={styles.iklanHeader}>Dapatkan Sekarang</Text>
          <Image style={styles.iklanImage} source={{ uri: 'https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9vZCUyMGFuZCUyMGRyaW5rfGVufDB8fDB8fHww' }} />
          <Text style={styles.iklanTextHeader}>Dapatkan lebih banyak, lebih murah</Text>
          <Text style={styles.iklanTextSponsored}>Sponsored by Catering Semerbak</Text>
        </View>
      </ScrollView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  header: {
    height: 136,
    backgroundColor: '#00AA13',
  },

  logoHeader: {
    width: win.width,
    height: 128,
    resizeMode: 'contain',
    position: 'absolute',
    alignSelf: 'center',
    top: 8,
  },

  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
    backgroundColor: 'white',
    elevation: 3,
    marginHorizontal: 32,
    borderRadius: 10,
    marginTop: -28,
  },

  search: {
    marginHorizontal: 8,
    color: 'grey',
    width: win.width - 112,
  },

  categoryContainer: {
    marginHorizontal: 32,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },

  categoryContainer2: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f3f3f3',
    borderRadius: 16,
    padding: 8,
    marginHorizontal: 4,
  },

  category: {
    marginHorizontal: 4,
    color: 'black',
    fontSize: 12,
  },

  fiturContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 112,
    marginHorizontal: 32,
  },

  fiturContainer2: {
    padding: 16,
    alignItems: 'center',
    marginTop: 14,
  },

  fiturText: {
    color: 'black',
    marginTop: 6,
    fontSize: 12,
  },

  iklanContainer: {
    marginTop: 16,
    height: 300,
    marginHorizontal: 8,
  },

  iklanContainer2: {
    marginTop: 2,
    marginHorizontal: 8,
  },

  iklanHeader: {
    color: 'black',
    fontWeight: '600',
    fontSize: 22,
  },

  iklanImage: {
    marginTop: 6,
    borderRadius: 15,
    width: win.width - 32,
    height: 212,
  },

  iklanTextHeader: {
    fontSize: 16,
    marginTop: 6,
    color: 'black',
    fontWeight: 'bold',
  },

  iklanTextSponsored: {
    marginTop: 2,
    color: 'grey',
  },
})