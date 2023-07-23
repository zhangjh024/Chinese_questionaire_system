import {createSlice,PayloadAction} from "@reduxjs/toolkit";
import produce from 'immer'
import {ComponentPropsType} from "../../components/QuestionComponents";


export type ComponentInfoType = { // 组件数据结构
    fe_id:string,
    type:string,
    title:string,
    props:ComponentPropsType
}

export type ComponentListType = {
    selectedId:string,
    componentList:Array<ComponentInfoType>  // 组件列表数据结构
}

const INIT_STATE:ComponentListType = {
    selectedId:"",
    componentList:[]
}

export const componentsSlice = createSlice({
    name:"components",
    initialState:INIT_STATE,
    reducers:{
        //重制所有组件
        resetComponent:(state:ComponentListType, action:PayloadAction<ComponentListType>)=>{
            return action.payload
        },
        changeSelectedId:produce((draft:ComponentListType,action:PayloadAction<string>)=>{
            draft.selectedId = action.payload
        }),
        addComponent:produce((draft:ComponentListType,action:PayloadAction<ComponentInfoType>)=>{
            const {selectedId, componentList} = draft
            const newComponent = action.payload;
            const index = componentList.findIndex((c)=>c.fe_id==selectedId)
            if(index < 0)
            {
                componentList.push(newComponent)
            }else
                componentList.splice(index+1,0,newComponent)
        })
    }
})

export const {resetComponent , changeSelectedId,addComponent} = componentsSlice.actions

export default componentsSlice.reducer