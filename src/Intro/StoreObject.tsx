import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

type Props={

}
interface UserType{
name:string
email:string
auth:boolean
}

const StoreObject = (props: Props) => {
    const [user,setUser]=useState<UserType | null> (null);
    const [loading,setLoading]=useState<boolean>(false);



    const storeUserData=useCallback(async(data:UserType)=>{
        setLoading(true)
            try{
                const stringifyUserData  = JSON.stringify(data);
                await AsyncStorage.setItem('userData',stringifyUserData)
                setUser(data);
                setLoading(false)
            }
            catch(error){
                    console.log("Error===>",error)
                    setLoading(false)
            }
            
    },[])
const fetchUserData=useCallback(async()=>{
            setLoading(true)
       try{
       const user  = await AsyncStorage.getItem('userData') 
       if(user){
        const parseUser:UserType = JSON.parse(user);
        setUser(parseUser)
        setLoading(false)
       }
       }
       catch(error){
        console.log("Error",error);
        setLoading(false)
       }
       finally{
        setLoading(false)
       }
},[])

useEffect(()=>{
fetchUserData()
},[fetchUserData])
  return (
    <View style={styles.mainContainer}>
      {
   !loading  ? (<>
    <Text style={styles.mainHeading}>Store Object</Text>
      <View>

 {
user ? (<>
     <Text>{user?.name}</Text>
      <Text>{user?.email}</Text>
      <Text>{user?.auth ? 'Authenticated' : 'Unauthorize'}</Text>
</>) :(<><Text>User Data Not Found</Text></>)
 }
      </View>
   <Button title='Store User Data' onPress={()=>storeUserData({name:'iqbal',auth:true,email:'riz@gmail.com'})} />

    </>):(<><Text style={styles.loadingText}>Loading.....</Text></>)
      }
          </View>
  )
}

export default StoreObject

const styles = StyleSheet.create({
    mainContainer:{
        height:'50%'
    },
    mainHeading:{
        alignSelf:'center',
        fontSize:30
    },
    loadingText:{
        fontSize:30
    }
})