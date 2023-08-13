import {Typography} from "antd";
import {QuestionParagraphPropsType, QuestionParagraphDefaultProps} from "./interface";

const {Paragraph} = Typography;
const component = (props:QuestionParagraphPropsType) =>{
    const { text="", isCenter=false} = {...QuestionParagraphDefaultProps, ...props};
    return <Paragraph style={{textAlign:isCenter?'center':'start', marginBottom:'0'}}>
        {text}
    </Paragraph>
}

export default component