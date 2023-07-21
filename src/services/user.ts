import  axios, {ResDataType} from "./ajax";

//获取用户信息
export async function getUserInfoService():Promise<ResDataType>{
    const url = `http://localhost:3001/api/user/info`
    const data = (await axios.get(url)) as ResDataType
    return data
}

export async function registerUserService(username:string,password:string):Promise<ResDataType>{
    const url = `http://localhost:3001/api/user/register`
    const data = {username,password}
    const body = (await axios.post(url,data)) as ResDataType
    return body
}

export async function loginUserService(username:string,password:string):Promise<ResDataType>{
    const url = `http://localhost:3001/api/user/login`
    const data = {username,password}
    const body = (await axios.post(url,data)) as ResDataType
    return body
}
