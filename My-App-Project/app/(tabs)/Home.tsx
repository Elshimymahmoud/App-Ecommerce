import { View, Text,StyleSheet, TouchableOpacity ,Image,Pressable, TextInput} from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import color from '@/constans/color';
import  { useRef, useState } from "react";

import{useHeaderHeight} from'@react-navigation/elements'
import { AntDesign } from '@expo/vector-icons';
import CatogreyBtn from '@/component/CatogreyBtn';
import Listings from './Listings';
import listingData from "@/data/destinations.json";

export default function Home() {
  const headerHight=useHeaderHeight();
   const [category, setCategory] = useState("All");

  const onCatChanged = (category: string) => {
    console.log("Categpry: ", category);
    setCategory(category);
  };
  return (
  <>  <Stack.Screen options={{
      headerTransparent:true,
      headerTitle:"",
      headerLeft:()=>(
        <TouchableOpacity onPress={()=>{}} style={{marginLeft:1400}}>
          <Feather name="menu" size={24} color="black" style={{width:40,height:40,paddingLeft:20}} />
        
        </TouchableOpacity>
      ),
headerRight:()=>(
         <TouchableOpacity onPress={()=>{{}}} style={{marginRight:1400,backgroundColor:color.white,shadowColor:'#171717',width:35,height:35,paddingTop:5,borderRadius:5,shadowOffset:{width:2,height:4},shadowOpacity:0.2,shadowRadius:3}}>
              
             <Entypo name="login" size={26} color="black"  />
            </TouchableOpacity>
),


    }}
    />
    <View style={[styles.container,{paddingTop:headerHight}]}>
      <Text style={styles.headingText}>Explore The  Beatifaul App!</Text>
    <View style={styles.searchSectionWrapper}>
      <View style={styles.searchBar}>
        <AntDesign name="search1" style={{marginRight:18,paddingLeft:15,width:150}} size={24} color={color.black} />
<TextInput placeholder='Search....'></TextInput>
      </View>

    </View>
<CatogreyBtn onCagtegoryChanged={onCatChanged}/>  
<Listings listings={listingData} category={category} />

  </View>
    </>
  )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
       paddingHorizontal:20,
       backgroundColor:color.bgColor,
    },
    headingText:{
      fontSize:28,
      fontWeight:'800',
      color:color.black,
      marginTop:10,
    },
    searchSectionWrapper:{
flexDirection:'row',
marginVertical:20,
    },
    searchBar:{
      flexDirection:'row',
      backgroundColor:color.white,
      padding:16,
      borderRadius:10
    }
})