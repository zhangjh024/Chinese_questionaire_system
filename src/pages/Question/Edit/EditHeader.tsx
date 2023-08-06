import styles from './EditHeader.module.scss'
import {Button} from "antd";
import {LeftOutlined} from '@ant-design/icons'
import {useNavigate} from "react-router-dom";
import {Typography} from 'antd'
import {Space} from "antd";
import EditToolBar from "./EditToolBar";
const EditHeader = () =>{
    const nav = useNavigate()
    const {Title} = Typography
    return (
        <>
            <div className={styles.headerWrapper}>
                <div className={styles.header}>
                    <div className={styles.left}>
                        <Space>
                            <Button
                                type='link'
                                icon={<LeftOutlined/>}
                                onClick={()=>nav(-1)}
                            >返回</Button>
                            <Title>问卷标题</Title>
                        </Space>
                    </div>
                    <div className={styles.main}>
                        <EditToolBar/>
                    </div>
                    <div className={styles.right}>
                        <Space>
                            <Button>保存</Button>
                            <Button type="primary">发布</Button>
                        </Space>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditHeader