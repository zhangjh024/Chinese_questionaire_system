import {Typography} from "antd";
import {QuestionParagraphPropsType, QuestionParagraphDefaultProps} from "./interface";

const {Paragraph} = Typography;
const component = (props:QuestionParagraphPropsType) =>{
    const { text="", isCenter=false} = {...QuestionParagraphDefaultProps, ...props};
    const textList = text.split('\n');
    return <Paragraph style={{textAlign:isCenter?'center':'start', marginBottom:'0'}}>
        {textList.map((t,index)=>{
            // dangerslysetInnerHtml={{__html: str }}
            return <span key={index}>
                {index > 0 && <br/>}
                {t}
            </span>
        })}
    </Paragraph>
}

export default component