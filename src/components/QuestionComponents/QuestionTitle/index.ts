import Component from "./component";
import {QuestionTitleDefaultProps} from "./interface";

export * from './interface'

export default {
    title:"标题",
    type:"questionTitle",
    Component,
    defaultProps:QuestionTitleDefaultProps
}       // 配置属性，用来通信