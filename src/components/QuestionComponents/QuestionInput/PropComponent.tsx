import {Form, Input} from 'antd'
import {QuestionInputPropsType} from './interface'
import {useEffect} from "react";
const PropComponent = (props:QuestionInputPropsType) =>{
    const {title,placeholder,onChange}  = props
    const [form] = Form.useForm() // 拿到Form实例
    useEffect(()=>{
        form.setFieldsValue({title, placeholder})
    },[title,placeholder])

    function handleValueChange(){
        if(onChange){
            onChange(form.getFieldsValue())
        }
    }
    return (
        <>
            <Form
                form={form}
                layout="vertical"
                initialValues={{title,placeholder}}
                onValuesChange={handleValueChange}
            >
                <Form.Item label="标题" name="title" rules={[{required:true,message:"请输入标题"}]}>
                    <Input/>
                </Form.Item>
                <Form.Item label="placeholder" name="placeholder">
                    <Input/>
                </Form.Item>
            </Form>
        </>
    )
}

export default PropComponent