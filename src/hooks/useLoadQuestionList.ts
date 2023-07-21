import {useRequest} from "ahooks";
import {getQuetionListService} from "../services/qustion";
import {useSearchParams} from "react-router-dom";
type OptionType = {
    isStar:boolean,
    isDeleted:boolean
}
function useLoadQuestionList(opt:Partial<OptionType>){
    const {isStar, isDeleted} = opt
    const [searchParams]  =  useSearchParams()

    const {data, loading, error, refresh} = useRequest(async()=>{
        const keyword = searchParams.get('keyword')||''
        const page = parseInt(searchParams.get('page')||'') || 1
        const pageSize = parseInt(searchParams.get('pageSize')||'') || 10
        const data = await getQuetionListService({keyword,isStar,isDeleted,page,pageSize})
        return data
    },{refreshDeps:[searchParams]})

    return {data, loading,error,refresh}
}

export default useLoadQuestionList