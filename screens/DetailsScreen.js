import React from 'react';
import {View, Text, Button} from 'react-native';
const Details = ({ route }) => {
    return(
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
          <Text>Details Screen</Text>
          <Text>{route.params.name}</Text>
      </View>
    )}
export default Details;