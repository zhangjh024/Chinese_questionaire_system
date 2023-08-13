import {Checkbox, Form, Input} from "antd";
import {QuestionParagraphPropsType} from "./interface";
import {useEffect} from "react";
const {TextArea} = Input
// 属性表单
const PropComponent = (props:QuestionParagraphPropsType)=>{
    const {text, isCenter, disabled, onChange} = props;
    const [form] = Form.useForm();

    useEffect(()=>{
        form.setFieldsValue({text,isCenter})
    },[text, isCenter])
    const handleValueChange = ()=>{
        if(onChange){
            onChange(form.getFieldsValue())
        }
    }

    return <Form
        layout={"vertical"}
        initialValues={{text,isCenter}}
        onValuesChange={handleValueChange}
        disabled={disabled}
        form={form}
    >
        <Form.Item label={"段落内容"} name={"text"} rules={[{required:true,message:"请输出段落内容"}]}>
            <TextArea/>
        </Form.Item>
        <Form.Item name="isCenter" valuePropName="checked">
            <Checkbox>居中显示</Checkbox>
        </Form.Item>
    </Form>
}

export default  PropComponent