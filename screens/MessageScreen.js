import React from 'react';
import { Image, View, Text, ScrollView } from 'react-native';

export default function MessageScreen() {
  return(
    <ScrollView style={{flex: 4, backgroundColor:"pink", flexDirection: 'column'}}>
      <View style={{flex: 1, justifyContent: "flex-end"}}>
        <Text style={{ color: "seagreen", fontSize: 40, fontWeight: 'bold', marginBottom: 20}}>赫海是真的！！！</Text>
      </View>
      <View style={{flex: 2, flexDirection: 'row'}}>
        <Image source={require('../assets/images/dh.jpg')} style={{ flex: 1, width: 150, height: 270 }}/>
        <Image source={require('../assets/images/hz.jpg')} style={{ flex: 1, width: 150, height: 270 }}/>
      </View>
    </ScrollView>
  );
}

MessageScreen.navigationOptions = {
  title: 'Message',
};
