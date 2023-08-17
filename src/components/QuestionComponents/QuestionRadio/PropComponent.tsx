import {QuestionRadioPropsType} from "./interface";
import {Form, Input, Checkbox, Select} from "antd";
import {useEffect} from "react";

const PropComponent = (props:QuestionRadioPropsType) => {

    const {title, disabled,onChange,options=[],isVertical, value} = props;
    const [form] = Form.useForm();
    useEffect(()=>{
        form.setFieldsValue({title,options,isVertical, value})
    }, [title,options,isVertical, value])
    const handleChange = () =>{
        if(onChange){
            //
        }
    }
    return (
        <Form
            layout={"vertical"}
            initialValues={{title,options,isVertical, value}}
            form={form}
            disabled={disabled}
            onValuesChange={handleChange}
        >
            <Form.Item label={"标题"} name={"title"} rules={[{required:true, message:"请输入biaoti"}]}>
                <Input/>
            </Form.Item>
            <Form.Item label={"默认选中"} name={"value"}>
                <Select
                    value={value}
                    options={options.map(({value,text})=>{
                        return {value, label:text||''}
                    })}>
                </Select>
            </Form.Item>
            <Form.Item name={"isVertical"} valuePropName={"checked"}>
                <Checkbox>剧中显示</Checkbox>
            </Form.Item>
        </Form>
    )
}

export default PropComponent