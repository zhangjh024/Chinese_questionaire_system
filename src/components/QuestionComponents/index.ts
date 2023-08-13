import QuestionInputConf,{QuestionInputPropsType} from "./QuestionInput";
import QuestionTitleConf,{QuestionTitlePropsType} from "./QuestionTitle";
import QuestionParagraphConf,{QuestionParagraphPropsType} from './QuestionParagraph'
import {FC} from "react";

export type ComponentPropsType = QuestionTitlePropsType & QuestionInputPropsType & QuestionParagraphPropsType

export type ComponentConfType = {
    title:string,
    type:string,
    Component:FC<ComponentPropsType>,
    PropComponent:FC<ComponentPropsType>,
    defaultProps:ComponentPropsType

}
//全部组件配置的列表
const componentConfList:ComponentConfType[] = [
    QuestionInputConf,
    QuestionTitleConf,
    QuestionParagraphConf
]
export const componentConfGroup = [
    {
        groupId:"text",
        groupName:"文本显示",
        components:[QuestionTitleConf,QuestionParagraphConf]
    },
    {
        groupId:"input",
        groupName:"用户输入",
        components:[QuestionInputConf]
    },

]

export function getComponentConfByType(type:string){
    return componentConfList.find(c=>c.type === type)
}