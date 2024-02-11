import React from 'react';
import {View, Text, Button} from 'react-native';
import Details from "./DetailsScreen";
const Home = ({ route, navigation }) => {
    return(
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
          <Text>Home Screen</Text>
          <Text>{route.params.id}</Text>
          <Button title="Go to Details Screen" onPress={()=>{navigation.navigate('Details',{name:'Ali'})}} />
      </View>
    )}
export default Home;