import {createSlice, nanoid, PayloadAction} from "@reduxjs/toolkit";
import produce from 'immer'
import {ComponentPropsType} from "../../components/QuestionComponents";
import {getNextSelectedId} from "./utils";
import {cloneDeep} from "lodash";

export type ComponentInfoType = { // 组件数据结构
    fe_id:string,
    type:string,
    title:string,
    isHidden?:boolean ,
    isLocked?:boolean,
    props:ComponentPropsType
}

export type ComponentListType = {
    selectedId:string,
    componentList:Array<ComponentInfoType>  // 组件列表数据结构，
    copiedComponent:ComponentInfoType | null,
}

const INIT_STATE:ComponentListType = {
    selectedId:"",
    componentList:[],
    copiedComponent:null,
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
            const newComponent = action.payload;
            insertNewComponent(draft, newComponent)
        }),

        // 修改组件属性
        changeComponentProps:produce((draft:ComponentListType,action:PayloadAction<{ fe_id:string,newProps:ComponentPropsType }>)=>{
            const {fe_id,newProps} = action.payload;
            const curComponent = draft.componentList.find((c)=>c.fe_id == fe_id)
            if(curComponent){
                curComponent.props = newProps
            }

        }),

        // 删除选中组件
        removeSelectedComponent:produce((draft:ComponentListType)=>{
            const { componentList=[], selectedId: removedId} = draft;
            // 重新计算 selectedId
            const newSelectedId = getNextSelectedId(removedId, componentList)
            draft.selectedId = newSelectedId;

            const index = componentList.findIndex((i)=>i.fe_id == removedId);
            componentList.splice(index,1)
        }),
        changeComponentHidden:produce(
            (draft:ComponentListType,
             action:PayloadAction<{fe_id:string, isHidden:boolean}>)=>{
                const {componentList=[] } = draft
                const {fe_id, isHidden}  = action.payload

                // 重新计算selectedID
                let newSelectedId = ''
                if(isHidden){
                    //要隐藏
                    newSelectedId = getNextSelectedId(fe_id, componentList)
                }else{
                    // 要显示
                    newSelectedId = fe_id
                }
                draft.selectedId = newSelectedId;

                const component = componentList.find((i)=>i.fe_id == fe_id)
                if(component){
                    component.isHidden = isHidden
                }
        }),
        toggleComponentLock:produce((draft:ComponentListType,action:PayloadAction<{fe_id:string}>)=>{
            const { fe_id } = action.payload;
            const component = draft.componentList.find((i)=>i.fe_id == fe_id)
            if(component){
                component.isLocked = ! component.isLocked
            }
        }),
        // 拷贝选中的组件
        copyComponent:produce((draft:ComponentListType)=>{
            const {selectedId, componentList} = draft
            const selectedComponent = componentList.find(c=>c.fe_id == selectedId)
            if(selectedComponent){
                draft.copiedComponent = cloneDeep(selectedComponent);
            }else
                return
        }),
        pasteComponent:produce((draft:ComponentListType)=>{
            const {copiedComponent} = draft
            if(copiedComponent == null) return;

            // 一定要改fe_id
            copiedComponent.fe_id = nanoid();
            insertNewComponent(draft,copiedComponent);
        }),

        // 改变fe_id,选中上一个或者下一个组件
        selectPrevComponent:produce((draft:ComponentListType)=>{
            const {selectedId, componentList} = draft;
            const selectIndex = componentList.findIndex((i)=>i.fe_id == selectedId)
            if(selectIndex <= 0) return;
            draft.selectedId = componentList[selectIndex - 1].fe_id;
        }),
        selectNextComponent:produce((draft:ComponentListType)=>{
            const {selectedId, componentList} = draft;
            const selectIndex = componentList.findIndex((i)=>i.fe_id == selectedId)
            if(selectIndex < 0) return;
            if(selectIndex+1 == componentList.length) return
            draft.selectedId = componentList[selectIndex + 1].fe_id;
        })

    }
})

export const {
    resetComponent ,
    changeSelectedId,
    addComponent,
    changeComponentProps,
    removeSelectedComponent,
    changeComponentHidden,
    toggleComponentLock,
    copyComponent,
    pasteComponent,
    selectNextComponent,
    selectPrevComponent
} = componentsSlice.actions
export function insertNewComponent(draft:ComponentListType,newComponent:ComponentInfoType){
    const {selectedId, componentList} = draft
    const index = componentList.findIndex((c)=>c.fe_id==selectedId)
    if(index < 0)
    {
        componentList.push(newComponent)
    }else
        componentList.splice(index+1,0,newComponent)
}


export default componentsSlice.reducer