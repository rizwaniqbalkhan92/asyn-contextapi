import { Alert, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import StoreObject from './src/Intro/StoreObject'
import TodoList from './src/TodoList/TodoList'
import TodoItem from './src/TodoList/TodoItem'
import Merge from './src/Merge/Merge'

type Props = {}

const App = (props: Props) => {
  return (
    <View style={styles.container}>
     {/* <TodoList/> */}
     <Merge/>
     {/* <TodoItem todoText='brunch'  index={'1'}  delete={()=>Alert.alert('hello')  } /> */}
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})