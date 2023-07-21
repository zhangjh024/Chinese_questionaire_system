import {Button, Typography } from "antd";
import {useNavigate} from "react-router-dom";
import styles from './Home.module.scss'
import {useEffect} from "react";
import '../_mock/index'
import axios from 'axios'
function Home(){
    const {Title, Paragraph} = Typography
    const nav = useNavigate()
    useEffect(()=>{
        // fetch('/api/test').then(res=>res.json()).then(data=>console.log(data))
        axios.post('http://localhost:3001/api/question').then(res=>console.log(res.data))
    },[])

    return <div className={styles.container}>
        <div className={styles.info}>
            <Title>问卷调查｜在线投票</Title>
            <Paragraph>已累计创建问卷1000份</Paragraph>
            <div>
                <Button type='primary' onClick={()=>{nav('manage/list')}}>开始使用</Button>
            </div>
        </div>
    </div>
}
export default Home
