import React from "react";
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/HomeScreen";
import Details from "./screens/DetailsScreen";

const Stack = createNativeStackNavigator();

const App=()=> {
  return(
    <NavigationContainer>
       <Stack.Navigator>
           <Stack.Screen name="Home" component={Home} initialParams={{ id: 42 }} />
           <Stack.Screen name="Details" component={Details}/>
       </Stack.Navigator>
     </NavigationContainer>
  );
};
export default App;