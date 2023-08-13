import {QustionInfoPropsType, QuestionInfoDefaultProps} from './interface'
import {Typography} from "antd";

const {Paragraph, Title} = Typography;
const component = (props: QustionInfoPropsType) => {
    const {title = "", desc = ""} = {...QuestionInfoDefaultProps, ...props};
    const textList = desc.split('\n');
    return (
        <div style={{textAlign:"center"}}>
            <Title style={{fontSize: "24px"}}>{title}</Title>
            <Paragraph>
                {textList.map((t, index) => {
                    return (
                        <span key={index}>
                            {index > 0 && <br/>}
                            {t}
                        </span>
                    )
                })}
            </Paragraph>
        </div>
    )

}

export default component