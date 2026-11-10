import {createSlice,configureStore} from "@reduxjs/toolkit"

const todoSlice=createSlice({
    name:"todo",

    initialState:{
        todos:[]
    },

    reducers:{
        addTodo:(state,action)=>{
            state.todos.push(action.payload);
        },

        removeTodo:(state,action)=>{
            state.todos.splice(action.payload,1);
        }
    }
}) 

export const {addTodo,removeTodo} =todoSlice.actions;

const store=configureStore({
    reducer:todoSlice.reducer
})

export default store;