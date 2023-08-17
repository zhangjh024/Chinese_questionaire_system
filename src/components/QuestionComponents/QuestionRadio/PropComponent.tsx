import {QuestionRadioPropsType, OptionType} from "./interface";
import {Form, Input, Checkbox, Select, Button, Space} from "antd";
import {useEffect} from "react";
import { MinusCircleOutlined, PlusOutlined} from '@ant-design/icons'
import {nanoid} from "@reduxjs/toolkit";
const PropComponent = (props:QuestionRadioPropsType) => {

    const {title, disabled,onChange,options=[],isVertical, value} = props;
    const [form] = Form.useForm();
    useEffect(()=>{
        form.setFieldsValue({title,options,isVertical, value})
    }, [title,options,isVertical, value])
    const handleChange = () =>{
        if(onChange){
            const newValues = form.getFieldsValue();
            const {options = [] } = newValues;
            if(options){
                options.filter((opt:OptionType)=>{
                    !(opt.text == null )
                })
            }
            options.forEach((opt:OptionType)=>{
                if(opt.value) return;
                opt.value = nanoid(5);
            })
            onChange(newValues)
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
            <Form.Item label={"选项"}>
                <Form.List name = "options">
                    {(fields,{add, remove})=>(
                        <>
                            {fields.map(({key, name}, index)=>{
                                return <Space key = {key} align={"baseline"}>
                                    <Form.Item
                                        name={[name, 'text']}
                                        rules={[{required:true, message:"请输入内容"},
                                            {
                                                validator:(_,text)=>{
                                                    const {options=[]} = form.getFieldsValue();
                                                    let num = 0;
                                                    options.forEach((opt:OptionType)=>{
                                                        if(opt.text === text)
                                                            num++;
                                                    })
                                                    if(num === 1) return Promise.resolve();
                                                    return Promise.reject(new Error("重复选项"))
                                                }
                                            }
                                        ]}
                                    >
                                        <Input placeholder={"输入选项文字"}/>
                                    </Form.Item>
                                    {index > 1 && <MinusCircleOutlined onClick={()=>{remove(name)}}/>}
                                </Space>
                            })}
                            <Form.Item>
                                <Button type={"link"}
                                        onClick={()=>add({text:"", value:""})}
                                        icon={<PlusOutlined/>}
                                        block
                                >添加选项</Button>
                            </Form.Item>
                        </>
                    )}
                </Form.List>
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
                <Checkbox>垂直显示</Checkbox>
            </Form.Item>
        </Form>
    )
}

export default PropComponent