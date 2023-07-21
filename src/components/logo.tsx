import {Space, Typography} from "antd";
import {FormOutlined} from '@ant-design/icons'
import styles from './logo.module.scss'
import {Link} from "react-router-dom";
import useGetUserInfo from "../hooks/useGetUserInfo";
import {useEffect, useState} from "react";

function Logo(){
    const { Title } = Typography;
    const {username} = useGetUserInfo()

    const [pathname, setPathname] = useState('/')
    useEffect(()=>{
        if(username)
            setPathname('/manage/list')
    }, [pathname])

    return <div className={styles.container}>
            <Link to={pathname}>
                <Space className={styles.space}>
                    <Title className={styles.title}>
                        <FormOutlined/>
                    </Title>
                    <Title className={styles.title}>
                        问卷
                    </Title>
                </Space>
            </Link>
            </div>
}

export default Logo
