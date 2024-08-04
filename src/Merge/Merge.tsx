import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

type Props = {}
const user1={
    name:'rizwan',
    age:25,
    traits:{
        hair:'black'
    }
}
const user1_delta={
    
    age:24,
    traits:{
        eye:'black'
    }
}
const user2={
    name:'rabeeb',
    age:25,
    traits:{
        hair:'brown'
    }
}
const user2_delta={
    
    age:26,
    traits:{
        eye:'green'
    }
}

const Merge = (props: Props) => {

    const multiSet=[
        ['USER_1',JSON.stringify(user1)],
        ['USER_2',JSON.stringify(user2)]
    ]

    const multiMerge=[
        ['USER_1',JSON.stringify(user1_delta)],
        ['USER_2',JSON.stringify(user2_delta)],
    ]
async function mergedMulti(){
    let currentMultiMerg;
    try{
            await AsyncStorage.multiSet(multiSet);
            await AsyncStorage.multiMerge(multiMerge);

        currentMultiMerg = await  AsyncStorage.multiGet(['USER_1','USER_2']);


    }
    catch(err){
        console.log("Error==>",err)
    }
    console.log("MERGE===>>",currentMultiMerg)
}

useEffect(()=>{
    mergedMulti()
},[])

  return (
    <View>
      <Text>Multi Merge</Text>
    </View>
  )
}

export default Merge

const styles = StyleSheet.create({})