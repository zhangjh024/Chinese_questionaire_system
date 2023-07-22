import {QuestionTitlePropsType, QuestionTitleDefaultProps} from './interface'
import {Typography} from "antd";

const {Title} = Typography
const QuestionTitle = (props:QuestionTitlePropsType) =>{
    const {text="", level=1, isCenter=false } = {...QuestionTitleDefaultProps, ...props}
    const genFontSize = (level:number) =>{
        if(level == 1)
            return "24px"
        if(level == 2)
            return "20px"
        if(level == 3)
            return "16px"
    }
    return (
            <Title
                level={level}
                style={{
                    textAlign:isCenter?'center':'start',
                    marginBottom:'0',
                    marginTop:'0',
                    fontSize:genFontSize(level)
                }}>
                {text}
            </Title>
    )
}

export default QuestionTitle