import {Outlet} from "react-router-dom";
import {Layout} from "antd";
import styles from './MainLayout.module.scss'
import Logo from '../components/logo'
import UserInfo from "../components/UserInfo";
const { Header, Footer,  Content } = Layout;
function  MainLayout(){
    return (
        <Layout>
            <Header className={styles.header}>
                <div className={styles.left}><Logo/></div>
                <div className={styles.right}><UserInfo/></div>
            </Header>
            <Layout className={styles.main}>
                <Content>
                    <Outlet/>
                </Content>
            </Layout>
            <Footer className={styles.footer}>MainLayoutFooter</Footer>
        </Layout>
    )
}
export default MainLayout