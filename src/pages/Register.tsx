import {Button, Form, Input, Typography, Space, message} from 'antd';
import {Link, useNavigate} from "react-router-dom";
import styles from './Register.module.scss'
import {UserAddOutlined} from '@ant-design/icons'
import {useRequest} from "ahooks";
import {registerUserService} from "../services/user";



function Register(){
    const {Title} = Typography
    const nav = useNavigate()
    const {run} = useRequest(async (values)=>{
        const {username, password} = values
        await registerUserService(username,password)
    },{
        manual:true,
        onSuccess(){
            message.success("注册成功")
            nav('/login')
        }
    })
    const onFinish = (values: any) => {
        console.log('Success:', values);
        run(values)
    };

    return <div className={styles.container}>
        <Space style={{marginLeft:"50px", marginBottom:"50px"}}>
            <Title level={2} ><UserAddOutlined/></Title>
            <Title level={2} >注册新用户</Title>
        </Space>
        <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
    >
        <Form.Item
            label="用户名"
            name="username"
        >
            <Input />
        </Form.Item>

        <Form.Item
            label="密码"
            name="password"
        >
            <Input.Password />
        </Form.Item>

        <Form.Item
            label="确认密码"
            name="confirm"
        >
            <Input.Password />
        </Form.Item>


        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
                提交
            </Button>
            <Link to="/login" style={{marginLeft:"2px"}}>已有账号？去登陆</Link>
        </Form.Item>
    </Form></div>
}
export default Register
