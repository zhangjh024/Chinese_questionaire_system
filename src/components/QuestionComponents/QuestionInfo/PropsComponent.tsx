import {QustionInfoPropsType} from './interface'
import {Form, Input} from "antd";
import {useEffect} from "react";
const {TextArea} = Input;
const PropsComponent = (props:QustionInfoPropsType)=>{
    const {title, desc, onChange, disabled} = props
    const [form] = Form.useForm();
    useEffect(()=>{
        form.setFieldsValue({title,desc})
    }, [title,desc])
    const handleValueChange = () =>{
        if(onChange){
            onChange(form.getFieldsValue())
        }
    }
    return (
        <Form
            layout={"vertical"}
            form={form}
            disabled={disabled}
            initialValues={{title, desc}}
            onValuesChange={handleValueChange}
        >
            <Form.Item
                label="标题"
                name={"title"}
                rules={[{required:true,message:"请输入问卷标题"}]}
            >
                <Input/>
            </Form.Item>
            <Form.Item
                label={"描述"}
                name={"desc"}
            >
                <TextArea/>
            </Form.Item>
        </Form>
    )

}

export default PropsComponent