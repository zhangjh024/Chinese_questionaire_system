import Component from "./component";
import {QuestionInputDefaultProps} from "./interface";
import PropComponent from "./PropComponent";
export * from './interface'

export default {
    title:"标题",
    type:"questionInput",
    Component,
    PropComponent,
    defaultProps:QuestionInputDefaultProps
}      // 组件配置属性,用来通信