import  axios, {ResDataType} from "./ajax";
type SearchOption = {
    keyword:string
    isStar:boolean,
    isDeleted:boolean,
    page:number,
    pageSize:number

}

export  async function getQuestionService(id:string):Promise<ResDataType>{
    const url = `http://localhost:3001/api/question/${id}`
    const data = (await axios.get(url)) as ResDataType
    return data
}

export async function createQuetionService():Promise<ResDataType>{
    const url = `http://localhost:3001/api/question`
    const data = (await axios.post(url)) as ResDataType
    return data
}

export async function getQuetionListService(opt:Partial<SearchOption>={}):Promise<ResDataType>{

    const url = `http://localhost:3001/api/question`
    // axios中get请求参数的使用方式，相当于url后面拼接
    const data = (await axios.get(url,{params:opt})) as ResDataType
    return data
}

export  async function updateQuestionService(id:string, opt:{[key:string]:any}):Promise<ResDataType>{
    const url = `http://localhost:3001/api/question/${id}`
    const data = (await  axios.patch(url, opt)) as ResDataType
    return data
}

export  async function copyQuestionService(id:string):Promise<ResDataType>{
    const url = `http://localhost:3001/api/question/${id}`
    const data = (await  axios.post(url)) as ResDataType
    return data
}

export  async function deleteQuestionService(ids:string[]):Promise<ResDataType>{
    const url = `http://localhost:3001/api/question`
    const data = (await  axios.delete(url,{data:{ids}})) as ResDataType
    return data
}
