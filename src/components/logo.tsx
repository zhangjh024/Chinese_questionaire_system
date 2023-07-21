import {Space, Typography} from "antd";
import {FormOutlined} from '@ant-design/icons'
import styles from './logo.module.scss'
import {Link} from "react-router-dom";

function Logo(){
    const { Title } = Typography;
    return <div className={styles.container}>
            <Link to='/'>
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
