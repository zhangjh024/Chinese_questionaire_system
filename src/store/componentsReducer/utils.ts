import { ComponentInfoType} from "./index";

export function getNextSelectedId(fe_id:string, componentList:Array<ComponentInfoType>){
    const index = componentList.findIndex((i)=>i.fe_id == fe_id)
    let newSelectedId = '';
    const length = componentList.length;
    if(index < 0 || length <= 1){
        return newSelectedId
    }
    if(index + 1 == length){
        newSelectedId = componentList[index-1].fe_id;
    }else
        newSelectedId = componentList[index + 1].fe_id;

    return newSelectedId
}