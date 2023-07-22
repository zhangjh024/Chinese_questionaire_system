import {QuestionInputDefaultProps,QuestionInputPropsType} from './interface'
import {Input} from "antd";
import {Typography} from "antd";

const {Paragraph} = Typography
const QuestionInput = (props:QuestionInputPropsType)=>{
    const {title, placeholder} = {...QuestionInputDefaultProps,...props}

    return (
        <>
            <Paragraph strong>
                {title}
            </Paragraph>
            <div>
                <Input placeholder={placeholder}></Input>
            </div>
        </>
    )
}

export default QuestionInput