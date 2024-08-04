import AsyncStorage from "@react-native-async-storage/async-storage";


const STORAGE_KEY='myTodoList'
export const saveTodo=async(todos:string[]):Promise<void>=>{

    try{
        const stringifyTodo= JSON.stringify(todos);
        await AsyncStorage.setItem(STORAGE_KEY,stringifyTodo);
    }
    catch(err){
        console.log("Error==>>",err)
    }
}


export const loadTodos=async():Promise<string[]>=>{

    try{
        const todoStringify= await AsyncStorage.getItem(STORAGE_KEY);
        const parseTodo= todoStringify !=null ?   JSON.parse(todoStringify):[];

        return parseTodo;
    }
    catch{
            return []
    }


}