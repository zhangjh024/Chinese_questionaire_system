import {Outlet, useNavigate, useLocation} from "react-router-dom";
import styles from './ManageLayout.module.scss'
import {Button, Space, Divider, message} from "antd"
import {PlusCircleOutlined, BarsOutlined, StarOutlined, DeleteOutlined} from '@ant-design/icons'
import {createQuetionService} from "../services/qustion";
// import {useState} from "react";
import {useRequest} from "ahooks";

function  ManageLayout(){
    const nav = useNavigate()
    const {pathname} = useLocation()
    // const [loading, setLoading] = useState(false)
    // async function handleCreateClick(){
    //
    //     setLoading(true)
    //     const data = await createQuetionService()
    //     const {id} = data||{}
    //     if(id){
    //         nav(`/question/edit/${id}`)
    //         message.success("创建成功")
    //     }
    //     setLoading(false)
    // }
    const {loading, run:handleCreateClick} = useRequest(createQuetionService,
        {
            manual:true,
            onSuccess(result){
                nav(`/question/edit/${result.id}`)
               message.success("创建成功")
            }
        })

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <p>ManageLayout</p>
                <Space direction='vertical'>
                    <Button
                        type='primary'
                        size='large'
                        icon={<PlusCircleOutlined />}
                        onClick={handleCreateClick}
                        disabled={loading}
                    >创建问卷</Button>
                    <Divider style={{borderTop:'transparent'}}></Divider>
                    <Button
                        icon={<BarsOutlined/>}
                        onClick={()=>{nav('/manage/list')}}
                        size='large'
                        type={pathname.startsWith('/manage/list')?'default':'text'}
                    >
                        我的问卷
                    </Button>
                    <Button icon={<StarOutlined/>}
                        size='large'
                        onClick={()=>{nav('/manage/star')}}
                        type={pathname.startsWith('/manage/star')?'default':'text'}
                    >
                        星标问卷
                    </Button>
                    <Button icon={<DeleteOutlined />}
                        size='large'
                        onClick={()=>{nav('/manage/trash')}}
                        type={pathname.startsWith('/manage/trash')?'default':'text'}
                    >
                        回收站
                    </Button>
                </Space>
            </div>
            <div className={styles.right}><Outlet/></div>
        </div>
    )
}
export default ManageLayout