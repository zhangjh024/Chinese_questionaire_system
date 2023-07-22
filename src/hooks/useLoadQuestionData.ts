import {useParams} from "react-router-dom";
import {useRequest} from "ahooks";
import {getQuestionService} from "../services/qustion";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import { resetComponent} from '../store/componentsReducer';

function useLoadQuestionData(){
    const {id=""} = useParams()
    const dispatch = useDispatch()
    const {data, loading, error, run} = useRequest(async (id:string)=>{
        if(!id) throw new Error("没有问卷id")
        const data = await getQuestionService(id)
        return data
    },{
        manual:true
    })       //ajax请求

    useEffect(()=>{
        if(!data) return
        const {title="",componentsList=[]} = data
        console.log("componentsList调试",componentsList,title)
        dispatch(resetComponent({ componentList: componentsList }))

    },[data]) // 根据 data 变化设置 redux

    useEffect(()=>{
        run(id)
    },[id])     //根据 id 变化监听 ajax 数据

    return {loading, error}
}

export default useLoadQuestionData