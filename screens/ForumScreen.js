import React,{Component} from 'react';
import { ScrollView, StyleSheet, View, Text, Button  } from 'react-native';

export default class ForumScreen extends Component{
  render(){
  return (
    <ScrollView style={styles.container}>
      <Button
          title="帖子"
          onPress={() => {
            this.props.navigation.navigate('Post', {
              itemId: 1001,//传递帖子的ID
              otherParam: '云次方是真的！',//先留着，暂时没想到有什么用
            });
          }}
        />    
    </ScrollView>
  );
  }
}

ForumScreen.navigationOptions = {
  title: 'Forum',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
