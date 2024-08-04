import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

type Props = {
    index:string
    delete:()=> void
    todoText:string
}

const TodoItem = (props: Props) => {
  return (
    <View style={styles.listItemContainer}>
      <Text style={styles.textTodo}>{props.todoText}</Text>
      <Button  title='delete' onPress={props.delete} />
    </View>
  )
}

export default TodoItem

const styles = StyleSheet.create({
    listItemContainer:{
        width:'90%',
        borderColor:'#ccc',
        borderWidth:1,
        alignSelf:'center',
        justifyContent:'space-between',
        alignItems:'center',
        borderRadius:5,
        flexDirection:'row',
        padding:8

    },
    textTodo:{
        fontSize:20,
        color:'balck'
    }

})