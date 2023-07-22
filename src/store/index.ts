import {configureStore} from "@reduxjs/toolkit";
import userReducer, {UserStateType} from "./userReducer";
import componentsReducer,{ComponentListType} from './componentsReducer'
export type StateType = {
    user:UserStateType,
    components:ComponentListType
}
export default configureStore({
    reducer:{
        // 分模块
        // user模块管理用户信息
        user:userReducer,
        components:componentsReducer,   // 模块管理组件列表
        //模块管理组件内部信息
    }
})