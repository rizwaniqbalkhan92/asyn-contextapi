import { Button, FlatList, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import TodoItem from './TodoItem';
import { loadTodos, saveTodo } from './storage';
import { todo } from 'node:test';

type Props = {

}

const TodoList = (props: Props) => {
  const [todos,setTodos]=useState<string [] > ([]);
  const [newTodo,setNewTodo]=useState<string>('');

  const addTodo=()=>{
      if(newTodo.trim()?.length > 0){
        
        setTodos([...todos,newTodo])
        setNewTodo('')
      
      }

  }
  useEffect(()=>{
   async function fetchTodo(){
      const todoData = await loadTodos();
        setTodos(todoData)
    }
    fetchTodo()
  },[])

  useEffect(()=>{
    saveTodo(todos)
  },[todos])
  const removeFromTodo=(index:number)=>{

    const updatedTodos= todos?.filter((_,i)=>index !== i )
    setTodos(updatedTodos)
  }
  return (
    <View>
      <Text style={styles.mainHeading}>TodoList</Text>
      <View style={styles.btnAndInput}>
        <TextInput value={newTodo} onChangeText={(e)=>setNewTodo(e)}  placeholder='Add Todos ' style={styles.textInput} />
        
     <TouchableOpacity onPress={addTodo} style={styles.btnAdd}>
      <Text style={styles.btnText}>Add</Text>
     </TouchableOpacity>
      </View>

      <FlatList data={todos} renderItem={({item,index})=>(
        <TodoItem  todoText={item} delete={()=>removeFromTodo(index)}  index={index.toString()}  />
      )}   />
    </View>
  )
}

export default TodoList

const styles = StyleSheet.create({
  mainHeading:{
    alignSelf:'center',
    fontSize:26,
    color:'#000'
  },
  btnAdd:{
    height:50,
    width:'20%',
    backgroundColor:'blue',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:5

  },
  btnText:{
    color:'white'
  },
  btnAndInput:{
    padding:10,
    width:'90%',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
  },
  textInput:{
    borderColor:'#ccc',
    borderWidth:1,
    width:'78%',
    borderRadius:5
  }
})