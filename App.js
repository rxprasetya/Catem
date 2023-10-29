import React from 'react'
import {Splash} from './src/screens'
import {Home} from './src/screens'
import {Discover} from './src/screens'
import {Account} from './src/screens'

export default function App() {
  return <Discover/>
}

// import { NavigationContainer } from '@react-navigation/native'
// import { createNativeStackNavigator } from '@react-navigation/native-stack'
// import React from 'react'
// import Home from './src/screens/Home'


// export default function App() {


//     const Stack = createNativeStackNavigator()

//     return (
//         <NavigationContainer>
//             <Stack.Navigator>
//                 <Stack.Screen name='Home' component={Home} />
//             </Stack.Navigator>
//         </NavigationContainer>
//     )
// }