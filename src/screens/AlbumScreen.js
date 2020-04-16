import React from "react";
import { StyleSheet,View, FlatList, TouchableOpacity,Image } from 'react-native';
import AlbumDetail from "../components/AlbumDetail";
import albumData from "../json/albums.json";
import headerData from "../json/header.json";

const AlbumScreen = ({ navigation }) => {
  return (
<View style={{flex:1,backgroundColor:"black"}}>
            <View style={styles.headerContentStyle}>
            <Image source={{uri: headerData.HomePage.HeaderLeftUrl}} style={styles.headerLeft}/>
            <Image source={{uri: headerData.HomePage.HeaderMid}} style={styles.headermid}/>
                <TouchableOpacity
                    onPress={() => navigation.push('DetailScreen')}>
                    <Image source={{uri: headerData.HomePage.HeaderRightUrl}}
                            style={styles.headerRight}/>
                </TouchableOpacity>
            </View>
            <FlatList
            data={albumData.albumList}
            renderItem={({item}) => 
            <AlbumDetail 
            album={item} 
                navigation={navigation}
                keyExtractor={item=>item.title}
                />}
            />
            <View style={styles.bottomStyle}> 
                <Image  source={{uri: headerData.HomePage.bottomImage1}} style={styles.bottom1}/>
                <Image  source={{uri: headerData.HomePage.bottomImage2}} style={styles.bottom2}/>
                <Image  source={{uri: headerData.HomePage.bottomImage3}} style={styles.bottom3}/>
                <Image  source={{uri: headerData.HomePage.bottomImage4}} style={styles.bottom4}/>
                <Image  source={{uri: headerData.HomePage.bottomImage5}} style={styles.bottom5}/>
            </View>
        </View>
      );
  };
    const styles = StyleSheet.create({
      headerLeft:{
          marginTop:10,
          marginLeft:15,
          width: 28,
          height: 28
        },
        headermid:{
          marginTop:8,
          left:-65,
          width: 110,
          height: 35
        },
        headerRight:{
          marginTop:10,
          marginRight:15,
          width: 28,
          height: 28
        },
        headerContentStyle:{
          flexDirection:"row",
          justifyContent:"flex-start",
          justifyContent:"space-between",
          width:null,
          height:50,
          marginTop:20,
          backgroundColor:'#171717',
          elevation:4
      },
        bottom1:{
          width: 23,
          height: 28,
          marginLeft:25
        },
        bottom2:{
          width: 26,
          height: 26,
          marginLeft:8,
        },
        bottom3:{
          width: 30,
          height: 30,
          marginLeft:8
        },
        bottom4:{
          width: 28,
          height: 28,
          marginLeft:10
        },
        bottom5:{
          width: 32,
          height: 32,
          marginRight:20
        },

      bottomStyle:{
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"row",
        justifyContent:"flex-start",
        justifyContent:"space-between",
        height:50,
        backgroundColor:'#171717',
      }
  });
export default AlbumScreen;