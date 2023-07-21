import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export type UserStateType = {
    // 用户模块信息
    username:string
}
const INIT_STATE:UserStateType = {
    username:""
}

export const userSlice =  createSlice({
    name:'user',
    initialState:INIT_STATE,
    reducers:{
        loginReducer:(state:UserStateType, action:PayloadAction<UserStateType>)=>{
            return action.payload
        },
        logoutReducer:()=>INIT_STATE
    }
})

export const {loginReducer,logoutReducer} = userSlice.actions

export default userSlice.reducer