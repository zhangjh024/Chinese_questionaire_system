import QuestionInputConf,{QuestionInputPropsType} from "./QuestionInput";
import QuestionTitleConf,{QuestionTitlePropsType} from "./QuestionTitle";
import {FC} from "react";

export type ComponentPropsType = QuestionTitlePropsType & QuestionInputPropsType

export type ComponentConfType = {
    title:string,
    type:string,
    Component:FC<ComponentPropsType>,
    defaultProps:ComponentPropsType

}
//全部组件配置的列表
const componentConfList:ComponentConfType[] = [
    QuestionInputConf,
    QuestionTitleConf
]
export const componentConfGroup = [
    {
        groupId:"text",
        groupName:"文本显示",
        components:[QuestionTitleConf]
    },
    {
        groupId:"input",
        groupName:"用户输入",
        components:[QuestionInputConf]
    }
]

export function getComponentConfByType(type:string){
    return componentConfList.find(c=>c.type === type)
}