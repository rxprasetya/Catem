import React from 'react'
import { Dimensions, ScrollView, StyleSheet, TextInput, View, StatusBar, Text, Image} from 'react-native'
import { SearchNormal1, ShoppingCart, Location, BoxTime, DiscountShape, DiscountCircle, Car, Bookmark, More, MenuBoard, Add, Lovely } from 'iconsax-react-native';
import logo from './src/assets/images/image.png'
const win = Dimensions.get('window')

export default function App() {
  return (
    <ScrollView style={ styles.container }>
      <StatusBar translucent backgroundColor={'rgba(0,0,0,0)'}></StatusBar>
      <View style={ styles.header }></View>
      <Image style={ styles.logoHeader } source={ logo }/>
      <View style={ styles.searchContainer }>
        <SearchNormal1 variant='Linear' color='grey' style={{ marginLeft: 12, }} />
        <TextInput style={ styles.search } placeholder='What shall we deliver?' placeholderTextColor={'grey'}></TextInput>
      </View>
      <View style={ styles.categoryContainer }>
        <View style={ styles.categoryContainer2 }>
          <ShoppingCart size={16} variant='Linear' color='black' />
          <Text style={ styles.category }>Delivery</Text>
        </View>
        <View style={ styles.categoryContainer2 }>
          <DiscountShape size={16} variant='Linear' color='black' />
          <Text style={ styles.category }>Dine-In</Text>
        </View>
        <View style={ styles.categoryContainer2 }>
          <Car size={16} variant='Linear' color='black' />
          <Text style={ styles.category }>Self Pick-Up</Text>
        </View>
      </View>
      <View style={ styles.fiturContainer }>
        <View style={ styles.fiturContainer2 }>
          <Location size={54} variant='Linear' color='black' />
          <Text style={ styles.fiturText }>Location</Text>
        </View>
        <View style={ styles.fiturContainer2 }>
          <BoxTime size={54} variant='Linear' color='black' />
          <Text style={ styles.fiturText }>Dinner Time</Text>
        </View>
        <View style={ styles.fiturContainer2 }>
          <Bookmark size={54} variant='Linear' color='black' />
          <Text style={ styles.fiturText }>Best Rating</Text>
        </View>
        <View style={ styles.fiturContainer2 }>
          <DiscountCircle size={54} variant='Linear' color='black' />
          <Text style={ styles.fiturText }>Discount</Text>
        </View>
      </View>
      <View style={ styles.fiturContainer }>
        <View style={ styles.fiturContainer2 }>
          <MenuBoard size={50} variant='Linear' color='black' />
          <Text style={ styles.fiturText }>Menu</Text>
        </View>
        <View style={ styles.fiturContainer2 }>
          <Lovely size={50} variant='Linear' color='black' />
          <Text style={ styles.fiturText }>Wish List</Text>
        </View>
        <View style={ styles.fiturContainer2 }>
          <Add size={50} variant='Linear' color='black' />
          <Text style={ styles.fiturText }>Add Menu</Text>
        </View>
        <View style={ styles.fiturContainer2 }>
          <More size={50} variant='Linear' color='black' />
          <Text style={ styles.fiturText }>More</Text>
        </View>
      </View>
      <ScrollView horizontal style={ styles.iklanContainer }>
        <View style={ styles.iklanContainer2 }>
          <Text style={ styles.iklanHeader }>Pesan Sekarang</Text>
          <Image style={styles.iklanImage} source={{ uri: 'https://images.unsplash.com/photo-1611250188496-e966043a0629?auto=format&fit=crop&q=80&w=1450&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} />
          <Text style={ styles.iklanTextHeader }>Dapatkan lebih banyak, lebih murah</Text>
          <Text style={ styles.iklanTextSponsored }>Sponsored by Catering Semerbak</Text>
        </View>
        <View style={ styles.iklanContainer2 }>
          <Text style={ styles.iklanHeader }>Beli Sekarang</Text>
          <Image style={styles.iklanImage} source={{ uri: 'https://images.unsplash.com/photo-1610970878459-a0e464d7592b?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZvb2QlMjBhbmQlMjBkcmlua3xlbnwwfHwwfHx8MA%3D%3D' }} />
          <Text style={ styles.iklanTextHeader }>Dapatkan lebih banyak, lebih murah</Text>
          <Text style={ styles.iklanTextSponsored }>Sponsored by Catering Semerbak</Text>
        </View>
        <View style={ styles.iklanContainer2 }>
          <Text style={ styles.iklanHeader }>Dapatkan Sekarang</Text>
          <Image style={styles.iklanImage} source={{ uri: 'https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9vZCUyMGFuZCUyMGRyaW5rfGVufDB8fDB8fHww' }} />
          <Text style={ styles.iklanTextHeader }>Dapatkan lebih banyak, lebih murah</Text>
          <Text style={ styles.iklanTextSponsored }>Sponsored by Catering Semerbak</Text>
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
    height:128,
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
    width: win.width-112,
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
    padding: 6,
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
    height:300,
    // backgroundColor: 'pink',
    marginHorizontal: 8,
  },

  iklanContainer2: {
    marginTop: 2,
    marginHorizontal: 8,
  },

  iklanHeader: {
    color: 'black',
    fontWeight: '500',
    fontSize: 22,

  },

  iklanImage: {
    marginTop: 6,
    borderRadius: 15,
    width: win.width-64,
    height:212,
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