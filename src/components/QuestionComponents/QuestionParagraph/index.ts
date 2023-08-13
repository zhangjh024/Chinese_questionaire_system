import Component from "./component";
import {QuestionParagraphDefaultProps} from "./interface";
export * from './interface'
import PropComponent from "./PropComponent";
export default {
    title:"段落",
    type:"questionParagraph",
    Component,
    //,PropComponent,
    PropComponent,
    defaultProps:QuestionParagraphDefaultProps
}