// Discover
import  React from 'react'
import { StyleSheet, TextInput, View, StatusBar, Text, TouchableOpacity, ScrollView, Image } from 'react-native'
import { SearchNormal1, ArrowLeft2, Location, Star1 } from 'iconsax-react-native'

export default function Discover() {
  return (
    <ScrollView style={ styles.container }>
      <StatusBar translucent backgroundColor={'rgba(0,0,0,0)'}></StatusBar>
      <View style={ styles.headerContainer }>
        <TouchableOpacity style={ styles.backContainer }>
          <ArrowLeft2 size={24} variant='Linear' color='black' />
        </TouchableOpacity>
        <TouchableOpacity style={ styles.locContainer }>
          <Text style={ styles.locationHeader }>Your Location</Text>
          <View style={ styles.locNow }>
            <Location size={16} variant='Bold' color='salmon' />
            <Text style={ styles.locationText }>Tasikmadu</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={ styles.searchContainer }>
        <SearchNormal1 size={18} variant='Linear' color='grey' style={{ marginLeft: 12, }} />
        <TextInput style={ styles.search } placeholder='Search the Catering Semerbak app' placeholderTextColor={'#d3d3d3'}></TextInput>
      </View>
      <View style={ styles.recContainer }>
        <Text style={ styles.recHeader }>Recommended</Text>
        <View style={ styles.recContentContainer }>
          <View style={ styles.recContent }>
            <Image style={ styles.recImage } source={{ uri: 'https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9vZCUyMGFuZCUyMGRyaW5rfGVufDB8fDB8fHww' }} />
            <Text style={ styles.recTitle }>Mie Setang</Text>
            <View style={ styles.recRating }>
              <Text style={ styles.recRatingText }>Rp40.000</Text>
              <Star1 size={12} variant='Bold' color='#fcba03' style={{ marginLeft: 12, marginRight: 4, }} />
              <Text style={ styles.recRatingText }>5.0</Text>
            </View>
          </View>
          <View style={ styles.recContent }>
            <Image style={ styles.recImage } source={{ uri: 'https://images.unsplash.com/photo-1611250188496-e966043a0629?auto=format&fit=crop&q=80&w=1450&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} />
            <Text style={ styles.recTitle }>Salad Tortilla</Text>
            <View style={ styles.recRating }>
              <Text style={ styles.recRatingText }>Rp40.000</Text>
              <Star1 size={12} variant='Bold' color='#fcba03' style={{ marginLeft: 12, marginRight: 4, }} />
              <Text style={ styles.recRatingText }>5.0</Text>
            </View>
          </View>
          <View style={ styles.recContent }>
            <Image style={ styles.recImage } source={{ uri: 'https://asset.kompas.com/crops/fg4dcsuOwno9i-8N4jHx-X0oo5g=/0x0:1000x667/1200x800/data/photo/2023/06/28/649b17cabdb74.jpg' }} />
            <Text style={ styles.recTitle }>Burger Bangor</Text>
            <View style={ styles.recRating }>
              <Text style={ styles.recRatingText }>Rp40.000</Text>
              <Star1 size={12} variant='Bold' color='#fcba03' style={{ marginLeft: 12, marginRight: 4, }} />
              <Text style={ styles.recRatingText }>5.0</Text>
            </View>
          </View>
        </View>
        <View style={ styles.recContentContainer }>
          <View style={ styles.recContent }>
            <Image style={ styles.recImage } source={{ uri: 'https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9vZCUyMGFuZCUyMGRyaW5rfGVufDB8fDB8fHww' }} />
            <Text style={ styles.recTitle }>Mie Setang</Text>
            <View style={ styles.recRating }>
              <Text style={ styles.recRatingText }>Rp40.000</Text>
              <Star1 size={12} variant='Bold' color='#fcba03' style={{ marginLeft: 12, marginRight: 4, }} />
              <Text style={ styles.recRatingText }>5.0</Text>
            </View>
          </View>
          <View style={ styles.recContent }>
            <Image style={ styles.recImage } source={{ uri: 'https://images.unsplash.com/photo-1611250188496-e966043a0629?auto=format&fit=crop&q=80&w=1450&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} />
            <Text style={ styles.recTitle }>Salad Tortilla</Text>
            <View style={ styles.recRating }>
              <Text style={ styles.recRatingText }>Rp40.000</Text>
              <Star1 size={12} variant='Bold' color='#fcba03' style={{ marginLeft: 12, marginRight: 4, }} />
              <Text style={ styles.recRatingText }>5.0</Text>
            </View>
          </View>
          <View style={ styles.recContent }>
            <Image style={ styles.recImage } source={{ uri: 'https://asset.kompas.com/crops/fg4dcsuOwno9i-8N4jHx-X0oo5g=/0x0:1000x667/1200x800/data/photo/2023/06/28/649b17cabdb74.jpg' }} />
            <Text style={ styles.recTitle }>Burger Bangor</Text>
            <View style={ styles.recRating }>
              <Text style={ styles.recRatingText }>Rp40.000</Text>
              <Star1 size={12} variant='Bold' color='#fcba03' style={{ marginLeft: 12, marginRight: 4, }} />
              <Text style={ styles.recRatingText }>5.0</Text>
            </View>
          </View>
        </View>
        <View style={ styles.recContentContainer }>
          <View style={ styles.recContent }>
            <Image style={ styles.recImage } source={{ uri: 'https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9vZCUyMGFuZCUyMGRyaW5rfGVufDB8fDB8fHww' }} />
            <Text style={ styles.recTitle }>Mie Setang</Text>
            <View style={ styles.recRating }>
              <Text style={ styles.recRatingText }>Rp40.000</Text>
              <Star1 size={12} variant='Bold' color='#fcba03' style={{ marginLeft: 12, marginRight: 4, }} />
              <Text style={ styles.recRatingText }>5.0</Text>
            </View>
          </View>
          <View style={ styles.recContent }>
            <Image style={ styles.recImage } source={{ uri: 'https://images.unsplash.com/photo-1611250188496-e966043a0629?auto=format&fit=crop&q=80&w=1450&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} />
            <Text style={ styles.recTitle }>Salad Tortilla</Text>
            <View style={ styles.recRating }>
              <Text style={ styles.recRatingText }>Rp40.000</Text>
              <Star1 size={12} variant='Bold' color='#fcba03' style={{ marginLeft: 12, marginRight: 4, }} />
              <Text style={ styles.recRatingText }>5.0</Text>
            </View>
          </View>
          <View style={ styles.recContent }>
            <Image style={ styles.recImage } source={{ uri: 'https://asset.kompas.com/crops/fg4dcsuOwno9i-8N4jHx-X0oo5g=/0x0:1000x667/1200x800/data/photo/2023/06/28/649b17cabdb74.jpg' }} />
            <Text style={ styles.recTitle }>Burger Bangor</Text>
            <View style={ styles.recRating }>
              <Text style={ styles.recRatingText }>Rp40.000</Text>
              <Star1 size={12} variant='Bold' color='#fcba03' style={{ marginLeft: 12, marginRight: 4, }} />
              <Text style={ styles.recRatingText }>5.0</Text>
            </View>
          </View>
        </View>
        <View style={ styles.recContentContainer }>
          <View style={ styles.recContent }>
            <Image style={ styles.recImage } source={{ uri: 'https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9vZCUyMGFuZCUyMGRyaW5rfGVufDB8fDB8fHww' }} />
            <Text style={ styles.recTitle }>Mie Setang</Text>
            <View style={ styles.recRating }>
              <Text style={ styles.recRatingText }>Rp40.000</Text>
              <Star1 size={12} variant='Bold' color='#fcba03' style={{ marginLeft: 12, marginRight: 4, }} />
              <Text style={ styles.recRatingText }>5.0</Text>
            </View>
          </View>
          <View style={ styles.recContent }>
            <Image style={ styles.recImage } source={{ uri: 'https://images.unsplash.com/photo-1611250188496-e966043a0629?auto=format&fit=crop&q=80&w=1450&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} />
            <Text style={ styles.recTitle }>Salad Tortilla</Text>
            <View style={ styles.recRating }>
              <Text style={ styles.recRatingText }>Rp40.000</Text>
              <Star1 size={12} variant='Bold' color='#fcba03' style={{ marginLeft: 12, marginRight: 4, }} />
              <Text style={ styles.recRatingText }>5.0</Text>
            </View>
          </View>
          <View style={ styles.recContent }>
            <Image style={ styles.recImage } source={{ uri: 'https://asset.kompas.com/crops/fg4dcsuOwno9i-8N4jHx-X0oo5g=/0x0:1000x667/1200x800/data/photo/2023/06/28/649b17cabdb74.jpg' }} />
            <Text style={ styles.recTitle }>Burger Bangor</Text>
            <View style={ styles.recRating }>
              <Text style={ styles.recRatingText }>Rp40.000</Text>
              <Star1 size={12} variant='Bold' color='#fcba03' style={{ marginLeft: 12, marginRight: 4, }} />
              <Text style={ styles.recRatingText }>5.0</Text>
            </View>
          </View>
        </View>
        <View style={ styles.recContentContainer }>
          <View style={ styles.recContent }>
            <Image style={ styles.recImage } source={{ uri: 'https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9vZCUyMGFuZCUyMGRyaW5rfGVufDB8fDB8fHww' }} />
            <Text style={ styles.recTitle }>Mie Setang</Text>
            <View style={ styles.recRating }>
              <Text style={ styles.recRatingText }>Rp40.000</Text>
              <Star1 size={12} variant='Bold' color='#fcba03' style={{ marginLeft: 12, marginRight: 4, }} />
              <Text style={ styles.recRatingText }>5.0</Text>
            </View>
          </View>
          <View style={ styles.recContent }>
            <Image style={ styles.recImage } source={{ uri: 'https://images.unsplash.com/photo-1611250188496-e966043a0629?auto=format&fit=crop&q=80&w=1450&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} />
            <Text style={ styles.recTitle }>Salad Tortilla</Text>
            <View style={ styles.recRating }>
              <Text style={ styles.recRatingText }>Rp40.000</Text>
              <Star1 size={12} variant='Bold' color='#fcba03' style={{ marginLeft: 12, marginRight: 4, }} />
              <Text style={ styles.recRatingText }>5.0</Text>
            </View>
          </View>
          <View style={ styles.recContent }>
            <Image style={ styles.recImage } source={{ uri: 'https://asset.kompas.com/crops/fg4dcsuOwno9i-8N4jHx-X0oo5g=/0x0:1000x667/1200x800/data/photo/2023/06/28/649b17cabdb74.jpg' }} />
            <Text style={ styles.recTitle }>Burger Bangor</Text>
            <View style={ styles.recRating }>
              <Text style={ styles.recRatingText }>Rp40.000</Text>
              <Star1 size={12} variant='Bold' color='#fcba03' style={{ marginLeft: 12, marginRight: 4, }} />
              <Text style={ styles.recRatingText }>5.0</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  headerContainer: {
    padding: 12,
    alignItems: 'center',
    flexDirection: 'row',
    position: 'absolute',
    top: 40,
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
    marginTop: 106,
  },

  search: {
    marginHorizontal: 8,
    color: 'black',
    width: '85%',
  },

  recContainer: {
    paddingHorizontal: 8,
    marginTop: 16,
    height: 'auto',
  },

   recHeader: {
    color: 'black',
    fontSize: 18,
    fontWeight: '600',
    marginHorizontal: 8,
    letterSpacing: 0.2,
   },

   recContentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
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