import { ComponentInfoType} from "./index";

export function getNextSelectedId(fe_id:string, componentList:Array<ComponentInfoType>){
    const VisibleComponentList = componentList.filter((i)=>!i.isHidden)
    const index = VisibleComponentList.findIndex((i)=>i.fe_id == fe_id)
    let newSelectedId = '';
    const length = VisibleComponentList.length;
    if(index < 0 || length <= 1){
        return newSelectedId
    }
    if(index + 1 == length){
        newSelectedId = VisibleComponentList[index-1].fe_id;
    }else
        newSelectedId = VisibleComponentList[index + 1].fe_id;

    return newSelectedId
}