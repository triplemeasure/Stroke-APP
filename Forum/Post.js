import React,{Component} from 'react';
import { ScrollView, StyleSheet, Text, FlatList, Dimensions, View,Image,Button } from 'react-native';

const deviceWidthDp = Dimensions.get('window').width; // 设备宽度，单位 dp
const uiWidthPx = 640;  // 设计稿宽度（这里为640px），单位 px
const pTd = (uiElePx) => { // px 转 dp（设计稿中的 px 转 rn 中的 dp）
    return uiElePx * deviceWidthDp / uiWidthPx;
}

var Bmob = require('../Bmob-1.6.1.min.js');
Bmob.initialize("5bedaf6b532f404de61d8c075000d4a3", "153b96c2baee1794992736f4764bee2d");

const itemId = 1001;
const Posts = Bmob.Query('Posts');
Posts.equalTo('postNum','==',itemId);
Posts.find().then(res => {
  title = res[0].title;
  content = res[0].content;
  poster_ID = res[0].poster_ID;
  date = res[0].createdAt;
  console.log(res)
});

const Comments = Bmob.Query('Comments');
Comments.equalTo('postNum','==',itemId);
Comments.find().then(res => {
  result = res;
  console.log(res)
});


export default class Post extends Component {
  // constructor(props) {
  //   super(props);
  //   const { navigation } = this.props;
  //   const itemId = navigation.getParam('itemId');

  // }

  render(){
      return (
        <ScrollView style={styles.container}>
          <Text style={styles.title}>{title}</Text>
          <View style={{flexDirection:'row', alignItems:"center"}}>
            <Image source={require('../assets/images/dh.jpg')} style={styles.icon}/>
            <Text style={styles.user_ID}>{poster_ID}</Text>
            <Text style={styles.date}>{date}</Text>
          </View>
          <Text style={styles.content}>{content}</Text>
  
          <View style={{height: pTd(20), backgroundColor:'rgba(0,0,0,0.05)'}} />
          <Text style={styles.comments}>Comments</Text>
  
          <FlatList
            data = {result}
            renderItem={({item}) => 
            <View style={{marginVertical: pTd(20)}}>
              <View style={{flexDirection:'row', alignItems:"center"}}>
                <Image source={require('../assets/images/hz.jpg')} style={styles.icon}/>
                <Text style={styles.user_ID}>{item.commenter_ID}</Text>
                <Text style={styles.date}>{item.createdAt}</Text>
              </View>
              <Text style={styles.content}>{item.commentCon}</Text>
            </View>}
          />
  
        </ScrollView>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', 
  },
  title: {
    fontSize: pTd(40), 
    fontWeight: 'bold', 
    marginTop:pTd(15),
    marginHorizontal: pTd(20), 
    marginVertical: pTd(20) 
  },
  icon:{
    width:pTd(80), 
    height:pTd(80),
    marginHorizontal: pTd(20), 
  },
  user_ID: {
    fontSize:pTd(30),
    fontWeight: 'bold', 
  },
  date:{
    flex:1,
    fontSize:pTd(25),
    color:"grey",
    marginHorizontal: pTd(20), 
    justifyContent: 'flex-end',
    textAlign:'right',
  },
  content: {
    fontSize:pTd(30),
    marginVertical:pTd(20), 
    marginHorizontal: pTd(20), 
  },
  comments:{
    fontSize: pTd(35), 
    fontWeight: 'bold', 
    color:"grey",
    marginTop:pTd(15),
    marginHorizontal: pTd(20), 
    marginVertical: pTd(30)
  },
  
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
});