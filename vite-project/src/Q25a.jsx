//Create a redux app that managesa dynamic form where users can add,edit,and remove form fields. Use redux to manage the form state and esure that the state reflects the dynmaic structure of form

import {configureStore,createSlice} from "@reduxjs/toolkit";
const formSlice=createSlice({
    name:"form",

    initialState:{
        fields:[
            { id: 1, label: "Name", type: "text" },
            { id: 2, label: "Email", type: "email" }
        ]
    },

    reducers:{
        addField:(state,action)=>{
            state.fields.push(action.payload);
        },
        editField:(state,action)=>{
            const field=state.fields.find(
                (f)=>f.id===action.payload.id
            )
            if(field){
                field.label=action.payload.label;
                field.type=action.payload.type;
            }
        },
        removeField:(state,action)=>{
            state.fields=state.fields.filter((f)=>f.id!==action.payload);
        }
    }
})

export const {addField,editField,removeField}=formSlice.actions;

const store=configureStore({
    reducer:{
        form:formSlice.reducer
    }
})

export default store