import React from 'react';
import {View, Text, Button} from 'react-native';
const Details = ({ route, navigation }) => {
    return(
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
          <Text>Details Screen</Text>
          <Text>{route.params.name}</Text>
          <Button title="Go to Back" onPress={()=> navigation.goBack()} />
      </View>
    )}
export default Details;