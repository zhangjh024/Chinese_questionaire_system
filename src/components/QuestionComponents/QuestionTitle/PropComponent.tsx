import {Form,Input,Checkbox,Select} from "antd";
import {QuestionTitlePropsType} from './interface'
import {useEffect} from "react";
const PropComponent = (props:QuestionTitlePropsType) =>{
    const {text,level,isCenter,onChange, disabled} = props
    const [form] = Form.useForm()
    useEffect(()=>{
        form.setFieldsValue({text,level,isCenter})
    },[text,level,isCenter])

    const handleChange = ()=>{
        if(onChange)
            onChange(form.getFieldsValue())
    }
    return(
        <>
            <Form
                layout="vertical"
                initialValues={{text,level,isCenter}}
                form={form}
                onValuesChange={handleChange}
                disabled={disabled}
            >
                <Form.Item label="标题内容" name="text" rules={[{required:true,message:"请输入标题内容"}]}>
                    <Input/>
                </Form.Item>
                <Form.Item label="层级" name="level">
                   <Select options={[
                       {value:1,text:1},
                       {value:2,text:2},
                       {value:3,text:4}
                   ]}></Select>
                </Form.Item>
                <Form.Item name="isCenter" valuePropName="checked">
                    <Checkbox>居中显示</Checkbox>
                </Form.Item>
            </Form>
        </>
    )
}

export default PropComponent