export type QustionInfoPropsType = {
    title?:string,
    desc?:string,
    disabled?:boolean,
    onChange?:(newProps:QustionInfoPropsType)=>void
}
export const QuestionInfoDefaultProps = {
    title:"问卷标题",
    desc:"问卷描述内容...."
}