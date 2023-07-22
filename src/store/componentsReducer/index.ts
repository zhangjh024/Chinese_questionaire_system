import {createSlice,PayloadAction} from "@reduxjs/toolkit";

import {ComponentPropsType} from "../../components/QuestionComponents";

export type ComponentInfoType = { // 组件数据结构
    fe_id:string,
    type:string,
    title:string,
    props:ComponentPropsType
}

export type ComponentListType = {
    componentList:Array<ComponentInfoType>  // 组件列表数据结构
}

const INIT_STATE:ComponentListType = {
    componentList:[]
}

export const componentsSlice = createSlice({
    name:"components",
    initialState:INIT_STATE,
    reducers:{
        //重制所有组件
        resetComponent:(state:ComponentListType, action:PayloadAction<ComponentListType>)=>{
            return action.payload
        }
    }
})

export const {resetComponent} = componentsSlice.actions

export default componentsSlice.reducer