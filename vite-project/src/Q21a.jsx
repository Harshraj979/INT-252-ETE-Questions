//Build a redux app that manages  two slice of state userInfo(containing name and cart) and cart(containing array of items) use combineReducers() to merge 2 separate reducers handling each slice of state

import {createStore,combineReducers} from "redux";

const initialUserInfo={
    name:"Harsh",
    cart:[]
}

const userInfoReducer=(state=initialUserInfo,action)=>{
    if(action.type==="SET_NAME"){
        return{
            ...state,
            name:action.payload
        }
    }
    return state;
}

const initialCart=[];
const cartReducer=(state=initialCart,action)=>{
    if(action.type==="ADD_ITEM"){
        return [...state,action.payload]
    }
    if(action.type==="REMOVE_ITEM"){
        return state.filter((item)=>item!=action.payload)
    }
    return state;
}

const rootReducer=combineReducers({
    userInfo:userInfoReducer,
    cart:cartReducer
})

const store=createStore(rootReducer);
export default store;

export const setName=(name)=>({
    type:"SET_NAME",
    payload:name
})
export const addItem = (item) => ({
    type: "ADD_ITEM",
    payload: item
});

export const removeItem = (item) => ({
    type: "REMOVE_ITEM",
    payload: item
});