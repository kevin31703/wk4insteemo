import React from 'react';
import { StyleSheet,View, TouchableOpacity,Image,ScrollView,Text} from 'react-native';
import headerData from "../json/header.json";

const DetailScreen = ({navigation}) => {
  return(
        
    <View style={{flex:1,backgroundColor:"black"}}>
               <View style={styles.headerContentStyle}>
                   <TouchableOpacity
                       onPress={() => navigation.goBack()}>
                       <Image source={{uri: headerData.MessagePage.HeaderLeftUrl}}
                               style={styles.headerLeft}/>
                   </TouchableOpacity>
                   <Text style={styles.midtextstyle}>sillyelephant_se</Text>
                   <Image source={{uri: headerData.MessagePage.HeaderDownUrl}} style={styles.headerDown}/>
                   <Image source={{uri: headerData.MessagePage.HeaderMidUrl}} style={styles.headerMid}/>         
                   <Image source={{uri: headerData.MessagePage.HeaderRightUrl}} style={styles.headerRight}/>      
               </View>
               <ScrollView>
               <Image source={{uri:"https://github.com/kevin31703/inspic/blob/master/img/mes_search.png?raw=true"}}
              style={{width:350,height:100,marginRight:15,top:12,marginBottom:25}}/>
               <View  style={styles.headermidStyle}>
               <Image source={{uri: headerData.Friends.thumbnail_image}} style={styles.chatpicture}/>      
                  <View style={styles.talkbox}>
                  <Text style={styles.midfontstyle}>{headerData.Friends.name}</Text>
                  <Text style={styles.talk}>{headerData.Friends.chat}</Text>
                  </View>
                  <Image source={{uri: headerData.Friends.camera}} style={styles.camera}/>
               </View>

               <View  style={styles.headermidStyle}>
               <Image source={{uri: headerData.Friends2.thumbnail_image}} style={styles.chatpicture}/>      
                  <View style={styles.talkbox}>
                  <Text style={styles.midfontstyle}>{headerData.Friends2.name}</Text>
                  <Text style={styles.talk}>{headerData.Friends2.chat}</Text>
                  </View>
                  <Image source={{uri: headerData.Friends2.camera}} style={styles.camera}/>
               </View>

               <View  style={styles.headermidStyle}>
               <Image source={{uri: headerData.Friends3.thumbnail_image}} style={styles.chatpicture}/>      
                  <View style={styles.talkbox}>
                  <Text style={styles.midfontstyle}>{headerData.Friends3.name}</Text>
                  <Text style={styles.talk}>{headerData.Friends3.chat}</Text>
                  </View>
                  <Image source={{uri: headerData.Friends3.camera}} style={styles.camera}/>
               </View>

               <View  style={styles.headermidStyle}>
               <Image source={{uri: headerData.Friends4.thumbnail_image}} style={styles.chatpicture}/>      
                  <View style={styles.talkbox}>
                  <Text style={styles.midfontstyle}>{headerData.Friends4.name}</Text>
                  <Text style={styles.talk}>{headerData.Friends4.chat}</Text>
                  </View>
                  <Image source={{uri: headerData.Friends4.camera}} style={styles.camera}/>
               </View>

               <View  style={styles.headermidStyle}>
               <Image source={{uri: headerData.Friends5.thumbnail_image}} style={styles.chatpicture}/>      
                  <View style={styles.talkbox}>
                  <Text style={styles.midfontstyle}>{headerData.Friends5.name}</Text>
                  <Text style={styles.talk}>{headerData.Friends5.chat}</Text>
                  </View>
                  <Image source={{uri: headerData.Friends5.camera}} style={styles.camera}/>
               </View>
               </ScrollView>
               
           </View>
           
          
       );
   };
   const styles = StyleSheet.create({
       headerRight:{
           width: 28,
           height: 28,
           marginRight:10,
         },
         headerMid:{
          width: 30,
          height: 30,
          marginLeft:20,
         },
         midtextstyle:{
           marginLeft:0,
           fontSize:18,
           fontWeight:"700",
           color:"#FFFFFF"
         },
         headerLeft:{
           marginLeft:10,
           width: 35,
           height: 35
         },

         headerDown:{
          left:-15,
          width: 35,
          height: 35
        },
         headerContentStyle:{
          justifyContent:"center",
          alignItems:"center",
          flexDirection:"row",
          justifyContent:"flex-start",
          justifyContent:"space-between",
           width:null,
           height:60,
           backgroundColor:'#212121',
           marginTop:20,
           elevation:4
       },
       
       headermidStyle:{

        height:90,
       },

       chatpicture:{
         height:60,
         width:60,
         marginLeft:15
       },

       midfontstyle:{
        left:120,
        top:-50,
        fontSize:15,
        marginLeft:-25,
        color:"#FFFFFF",
       },

       talkbox:{
        justifyContent:"flex-start",
       },

       camera:{
         width:26,
         height:26,
         left:305,
         top:-84,
       },

       talk:{
        left:254,
        top:-49,
        fontSize:14,
        color:"#888888",
        marginLeft:-160
       },

       bottom:{
           width: 360,
           height: 45,
         },
       mesList:{
           marginTop:20,
           width:340,
           height:550,
           marginLeft:10,
           marginRight:10,
           
       },
   });

export default DetailScreen;