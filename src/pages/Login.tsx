import {Button, Form, Input, Space, Typography, Checkbox, message} from 'antd';
import {Link, useNavigate} from "react-router-dom";
import {LoginOutlined} from '@ant-design/icons'
import styles from './Register.module.scss'
import {useEffect} from "react";
import {useRequest} from "ahooks";
import {loginUserService} from "../services/user";
import {setToken} from "../utils/user_token";

function Login(){
    const {Title} = Typography
    const nav = useNavigate()
    const [form] = Form.useForm()
    const {run} = useRequest(async (values)=>{
        const {username, password} = values
        const data = await loginUserService(username, password)
        return data
    },
        {
            manual:true,
            onSuccess(data){
                const {token} = data
                setToken(token)
                message.success("登录成功")
                nav('/manage/list')
            }
        })
    const onFinish = (values:any) =>{
        console.log(values)
        run(values)
       const {username, password, remember} = values||{}
        if(remember)
        {
            rememberUser(username,password)
        }else
            deleteUser()
    }
    useEffect(()=>{
        const {username, password} = getUser()
        form.setFieldsValue({username, password})
    },[])
    const rememberUser = (username:string, password:string) =>{
        localStorage.setItem("USERNAME", username)
        localStorage.setItem("PASSWORD", password)
    }
    const deleteUser = () =>{
        localStorage.removeItem("USERNAME")
        localStorage.removeItem("PASSWORD")
    }
    const getUser = () =>{
        return{
            username:localStorage.getItem("USERNAME"),
            password:localStorage.getItem("PASSWORD")
        }
    }
    return (
        <div className={styles.container}>
            <Space style={{marginLeft:"50px", marginBottom:"50px"}}>
                <Title level={2}><LoginOutlined/></Title>
                <Title level={2}>用户登录</Title>
            </Space>
            <Form
                onFinish={onFinish}
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                form={form}
            >
                <Form.Item
                    label="用户名"
                    name="username"
                >
                    <Input/>
                </Form.Item>
                <Form.Item
                    label="密码"
                    name="password"
                >
                    <Input.Password/>
                </Form.Item>
                <Form.Item
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{ offset: 8, span: 16 }}
                >
                    <Checkbox>记住我</Checkbox>
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">提交</Button>
                    <Link to="/register" style={{marginLeft:"25px"}}>去注册</Link>
                </Form.Item>
            </Form>
        </div>
    )
}
export default Login
