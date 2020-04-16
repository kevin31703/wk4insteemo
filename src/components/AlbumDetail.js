import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, Linking} from "react-native";

const AlbumDetail = ({ album, navigation }) => {
   return (
      <View style={styles.cardContainerStyle}>
        <View style={[styles.thumbnailContainerStyle, styles.cardSectionStyle]}>

          <Image
            style={styles.thumbnailStyle}
            source={{
              uri: album.thumbnail_image
            }}
          />
          <View style={styles.headerContentStyle}>
            <Text style={styles.titlestyle}>{album.title}</Text>
            <Image source={{uri:"https://github.com/kevin31703/inspic/blob/master/img/more.png?raw=true"}}
            style={{width:28,height:28,marginRight:15}}/>
          </View>
        </View>
        <View style={styles.cardSectionStyle}>
            <Image
              style={styles.imageStyle}
              source={{
                uri: album.image
              }}
            />
        </View>
        <View style={styles.fouricons}>
              <Image source={{uri:"https://github.com/kevin31703/inspic/blob/master/img/heart_click.png?raw=true"}}
            style={{width:28,height:28,marginLeft:15}}/>
              <Image source={{uri:"https://github.com/kevin31703/inspic/blob/master/img/comment.png?raw=true"}}
            style={{width:28,height:28,marginLeft:15}}/>
            <Image source={{uri:"https://github.com/kevin31703/inspic/blob/master/img/share.png?raw=true"}}
            style={{width:28,height:28,marginLeft:15}}/>
            <Image source={{uri:"https://github.com/kevin31703/inspic/blob/master/img/save.png?raw=true"}}
            style={{width:27,height:27, left:180}}/>
        </View>
        <View style={styles.likesbox}>
          <Text style={styles.likestext}>{album.likes}</Text>
          <View style={styles.articlebox}>
            <Text style={styles.likestext}>{album.title}  <Text style={styles.articletext}>{album.article} <Text style={styles.hashtagtext}>{album.hashtag}</Text></Text></Text>
          </View>
          <View style={styles.articlebox2}>
          <Text style={styles.articletext2}>{album.article2}</Text>
          </View>
          <View style={styles.articlebox3}>
          <Text style={styles.articletext3}>{album.time}</Text>
          </View>
        </View>
      </View>
  )};

const styles = StyleSheet.create({
  thumbnailContainerStyle: {
    flexDirection: "row",
    justifyContent: "flex-start"
  },

  thumbnailStyle: {
    height: 35,
    width: 35,
    margin: 8
  },
  
  headerContentStyle: {
    alignItems:"center",
    flexDirection:"row",
    justifyContent:"space-between",
    paddingLeft: 8,
    flex:1
  },

  titlestyle:{
    fontSize:15,
    fontWeight:"bold",
    color:"#ffffff",
  },

  cardSectionStyle: {
    padding: 2,
    backgroundColor: "black",
    borderColor: "black",
    borderBottomWidth: 1
  },

  imageStyle: {
    height: 305,
    width: null
  },

  fouricons:{
    flexDirection:"row",
    alignItems:"center",
    flex:1,
    backgroundColor:"black",
    height:40
  },
  
  likesbox:{
    flex:1,
    height:120,
    backgroundColor:"black",
  },

  likestext:{
    fontWeight:"bold",
    marginLeft:16,
    marginTop:2,
    color:"#ffffff"
  },

  articlebox:{
    flexDirection:"row",
    width:358,
    height:38
  },

  articlebox2:{
    flexDirection:"row",
    width:358,
    height:25
  },

  articlebox3:{
    flexDirection:"row",
    width:358,
    height:30
  },
  
  articletext:{
    marginTop:5,
    marginLeft:8,
    fontWeight:"400"
  },

  hashtagtext:{
    marginTop:5,
    marginLeft:8,
    fontWeight:"400",
    color:'#E8FFFF'
  },

   articletext2:{
    marginTop:2,
    marginLeft:16,
    fontWeight:"400",
    color:'#9C9C9C'
  },

  articletext3:{
    marginTop:0,
    marginLeft:16,
    fontWeight:"400",
    color:'#9C9C9C',
    fontSize:10,
  }

});

export default AlbumDetail;